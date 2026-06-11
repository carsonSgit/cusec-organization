import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const libDir = path.join(rootDir, "lib");
const messagesDir = path.join(rootDir, "messages");
const publicDir = path.join(rootDir, "public");
const errors = [];

validatePublicAssets();
validateMessages();

if (errors.length > 0) {
  console.error(`Content validation errors:\n${errors.join("\n")}`);
  process.exit(1);
}

function validatePublicAssets() {
  const absoluteAssetPattern = /["'](\/(?:archive-speakers|archives|maps|images)\/[^"']+)["']/g;
  const relativeArchivePattern = /["']((?:archives)\/[^"']+\.(?:pdf|jpg|png|zip))["']/g;

  for (const fileName of readdirSync(libDir).filter((name) => name.endsWith(".ts"))) {
    const source = readFileSync(path.join(libDir, fileName), "utf8");
    const assetPaths = new Set();

    collectMatches(source, absoluteAssetPattern, assetPaths);
    collectMatches(source, relativeArchivePattern, assetPaths, (assetPath) => `/${assetPath}`);

    for (const assetPath of assetPaths) {
      const publicPath = toPublicPath(assetPath);

      if (!existsSync(publicPath)) {
        errors.push(`${fileName}: missing public asset "${assetPath}"`);
      }
    }
  }
}

function collectMatches(source, pattern, matches, transform = (value) => value) {
  for (const match of source.matchAll(pattern)) {
    matches.add(transform(match[1]));
  }
}

function toPublicPath(assetPath) {
  const decodedPath = decodeURIComponent(assetPath.replace(/^\//, ""));
  return path.join(publicDir, ...decodedPath.split("/"));
}

function validateMessages() {
  const catalogs = new Map(
    readdirSync(messagesDir)
      .filter((name) => name.endsWith(".json"))
      .map((fileName) => [
        path.basename(fileName, ".json"),
        JSON.parse(readFileSync(path.join(messagesDir, fileName), "utf8")),
      ]),
  );
  const englishLeaves = flattenLeaves(catalogs.get("en") ?? {});

  for (const [locale, catalog] of catalogs) {
    if (locale === "en") {
      continue;
    }

    const localeLeaves = flattenLeaves(catalog);
    const missingKeys = [...englishLeaves.keys()].filter((key) => !localeLeaves.has(key));

    console.log(`${locale}: ${missingKeys.length} missing English keys`);

    for (const key of localeLeaves.keys()) {
      if (!englishLeaves.has(key)) {
        errors.push(`messages/${locale}.json: orphan key "${key}"`);
      }
    }

    for (const [key, value] of localeLeaves) {
      if (!englishLeaves.has(key)) {
        continue;
      }

      const englishPlaceholders = getPlaceholders(englishLeaves.get(key));
      const localePlaceholders = getPlaceholders(value);

      if (!sameSet(englishPlaceholders, localePlaceholders)) {
        errors.push(
          `messages/${locale}.json: placeholder mismatch at "${key}" (en: ${formatSet(
            englishPlaceholders,
          )}; ${locale}: ${formatSet(localePlaceholders)})`,
        );
      }
    }
  }
}

function flattenLeaves(value, prefix = "", leaves = new Map()) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    for (const [key, childValue] of Object.entries(value)) {
      flattenLeaves(childValue, prefix ? `${prefix}.${key}` : key, leaves);
    }

    return leaves;
  }

  leaves.set(prefix, String(value));
  return leaves;
}

function getPlaceholders(value) {
  return new Set([...value.matchAll(/\{(\w+)\}/g)].map((match) => match[1]));
}

function sameSet(left, right) {
  return left.size === right.size && [...left].every((value) => right.has(value));
}

function formatSet(values) {
  return values.size === 0 ? "none" : [...values].sort().join(", ");
}
