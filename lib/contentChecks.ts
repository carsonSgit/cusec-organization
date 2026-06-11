type SpeakerLike = {
  name: string;
};

export function normalizeSpeakerName(name: string) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

type ArchiveSpeakerIntegrityInput = {
  scrapedArchiveSpeakersData: Record<number, SpeakerLike[]>;
  historicSpeakersData: Record<number, string[]>;
  curatedSpeakerNames: Iterable<string>;
  archiveSpeakerNameAliases: Map<string, string>;
};

export function assertArchiveSpeakerIntegrity({
  scrapedArchiveSpeakersData,
  historicSpeakersData,
  curatedSpeakerNames,
  archiveSpeakerNameAliases,
}: ArchiveSpeakerIntegrityInput) {
  const violations: string[] = [];
  const rawScrapedNames = new Set<string>();
  const rawHistoricNames = new Set<string>();
  const scrapedOrCuratedCanonicalNames = new Set<string>();

  for (const [year, speakers] of Object.entries(scrapedArchiveSpeakersData)) {
    const seenNames = new Map<string, string>();

    for (const speaker of speakers) {
      rawScrapedNames.add(speaker.name);
      scrapedOrCuratedCanonicalNames.add(normalizeSpeakerName(speaker.name));
      collectDuplicateNameViolation(
        violations,
        seenNames,
        normalizeSpeakerName(speaker.name),
        speaker.name,
        `archiveSpeakerDetailsData ${year}`,
      );
    }
  }

  for (const [year, names] of Object.entries(historicSpeakersData)) {
    const seenNames = new Map<string, string>();

    for (const name of names) {
      rawHistoricNames.add(name);
      collectDuplicateNameViolation(
        violations,
        seenNames,
        normalizeSpeakerName(name),
        name,
        `historicSpeakersData ${year}`,
      );
    }
  }

  for (const name of curatedSpeakerNames) {
    scrapedOrCuratedCanonicalNames.add(normalizeSpeakerName(name));
  }

  for (const [alias, target] of archiveSpeakerNameAliases) {
    if (!rawScrapedNames.has(alias) && !rawHistoricNames.has(alias)) {
      violations.push(`archiveSpeakerNameAliases: dead alias key "${alias}"`);
    }

    const normalizedAlias = normalizeSpeakerName(alias);
    const normalizedTarget = normalizeSpeakerName(target);

    if (!scrapedOrCuratedCanonicalNames.has(normalizedTarget)) {
      violations.push(
        `archiveSpeakerNameAliases: alias "${alias}" targets missing speaker "${target}"`,
      );
    }

    if (normalizedAlias === normalizedTarget) {
      violations.push(`archiveSpeakerNameAliases: pointless alias "${alias}" -> "${target}"`);
    }

    if (archiveSpeakerNameAliases.has(target)) {
      violations.push(`archiveSpeakerNameAliases: chained alias "${alias}" -> "${target}"`);
    }
  }

  if (violations.length > 0) {
    throw new Error(`Archive speaker integrity errors:\n${violations.join("\n")}`);
  }
}

function collectDuplicateNameViolation(
  violations: string[],
  seenNames: Map<string, string>,
  normalizedName: string,
  name: string,
  source: string,
) {
  if (seenNames.has(normalizedName)) {
    violations.push(`${source}: duplicate speaker "${name}"`);
    return;
  }

  seenNames.set(normalizedName, name);
}

export function warnUnmatchedArchiveSponsors(
  archiveSponsorNames: Record<number, string[]>,
  knownNames: Set<string>,
) {
  const unmatchedNames = new Set<string>();

  for (const sponsorNames of Object.values(archiveSponsorNames)) {
    for (const sponsorName of sponsorNames) {
      if (!knownNames.has(sponsorName)) {
        unmatchedNames.add(sponsorName);
      }
    }
  }

  return [...unmatchedNames].sort((a, b) => a.localeCompare(b));
}
