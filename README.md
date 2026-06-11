# CUSEC website

This is the website for CUSEC, the Canadian University Software Engineering
Conference. It includes the landing page and archives of past conference
editions, localized in English, French, Spanish, Chinese, and Punjabi.

## Quick start

Requirements:

- Node.js >= 20
- pnpm >= 10.33.0

This repo enforces pnpm through `scripts/ensure-pnpm.mjs`, `packageManager`, and
`devEngines`.

```sh
pnpm install
pnpm dev
```

The only environment variable is optional:

- `NEXT_PUBLIC_SITE_URL` defaults to `https://cusec.net`.

## Verification

| Purpose | Command | Expected result |
| --- | --- | --- |
| Lint | `pnpm lint` | Biome lint exits 0 |
| Format | `pnpm format` | Biome formats files |
| Content validation | `pnpm validate` | Content checks exit 0 |
| Typecheck | `pnpm typecheck` | TypeScript exits 0 |
| Build | `pnpm build` | Next.js build exits 0 |

Pre-commit hooks in `lefthook.yml` run Biome check on staged files and the full
typecheck. CI runs `pnpm biome check .`, `pnpm typecheck`, `pnpm validate`, and
`pnpm build` on pull requests and pushes to `main`.

## Project layout

- `app/` - Next.js App Router pages and layouts. Locale routes live under
  `app/[locale]/`; English is unprefixed.
- `components/` - shared UI components.
- `lib/` - hand-maintained content data and content helpers. The site has no CMS
  or backend content store.
- `messages/` - next-intl JSON message files.
- `assets/` - bundled images imported by TypeScript; missing paths fail the build.
- `public/` - files served as-is; string image paths can 404 if mistyped.
- `i18n/` - locale routing and request-time message loading.

Current localized routes are `/`, `/archives`, `/archives/[year]`,
`/historic-sponsors`, `/participant-schools`, and `/past-speakers`.

## How to add content

### Add a new archive year

1. Add the conference entry to `lib/archiveData.ts`.
2. Add the logo at `assets/cusec-logos/<year>.png`.
3. Add year details in `lib/archiveYearsData.ts`: `theme`, `summary`, `team`,
   `talks`, and `highlights`.
4. Add sponsor names in `lib/archiveSponsorsData.ts`.
5. Add the speaker roster in `lib/historicSpeakersData.ts`.

`lib/archiveData.ts` drives the archive index and per-year static params, so a
missing year there will not get an archive page.

### Add an archive speaker

1. Add the speaker name to the relevant roster in `lib/historicSpeakersData.ts`.
2. Optionally add scraped details in `lib/archiveSpeakerDetailsData.ts`.
3. Put optional archive speaker photos under `public/archive-speakers/<year>/`
   and reference them by string path from the details data.

Speaker names are merged by canonicalized name in `lib/archiveSpeakers.ts`.
Spelling must match across `lib/historicSpeakersData.ts`,
`lib/archiveSpeakerDetailsData.ts`, and `lib/speakersData.ts`, unless the variant
is intentionally handled by the alias map in `lib/archiveSpeakers.ts`.

### Add a curated or featured speaker

1. Add the speaker in `lib/speakersData.ts`.
2. Add the photo under `assets/speaker-photos/` and import it from the data file.
3. Add the speaker bio in `messages/en.json` under `Speakers.bios.<key>`.

Featured speaker lists use `pickByKey` from `lib/pick.ts`, which throws if a
speaker key does not exist.

### Add a sponsor or school

- Sponsors live in `lib/sponsorsData.ts`; historical sponsor lists live in
  `lib/archiveSponsorsData.ts`.
- Schools live in `lib/schoolsData.ts`; summary chart data lives in
  `lib/participantSchoolsSummaryData.ts`.
- Add logo assets in the same location and style used by the existing data file.

Sponsor names in `lib/archiveSponsorsData.ts` that match `lib/sponsorsData.ts`
or a school get logos. Other names render as text.

## Translations

`messages/en.json` is the source of truth. Other locale files deep-merge over
English at runtime, so omitted keys fall back to English; follow
`messages/README.md` for translation conventions.

## Domain vocabulary

Use the terms in `CONTEXT.md` exactly when adding content or UI copy.
