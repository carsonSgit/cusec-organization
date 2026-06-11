# CLAUDE.md

## Commands

| Purpose | Command | Expected result |
| --- | --- | --- |
| Lint | `pnpm lint` | Biome lint exits 0 |
| Format | `pnpm format` | Biome formats files |
| Content validation | `pnpm validate` | Content checks exit 0 |
| Typecheck | `pnpm typecheck` | TypeScript exits 0 |
| Build | `pnpm build` | Next.js build exits 0 |

Run `pnpm typecheck` and `pnpm build` before claiming any change works. There
are no tests.

## Architecture invariants

- All content is hand-maintained TypeScript data in `lib/`. There is no backend
  or CMS.
- Keep fail-loud data wiring. Curation and cross-references validate at module
  load: `pickByKey` throws, content assertions crash the build, and bad data must
  not be silently filtered.
- Speaker identity is matched by name string across `lib/historicSpeakersData.ts`,
  `lib/archiveSpeakerDetailsData.ts`, and `lib/speakersData.ts`. Aliases live in
  `lib/archiveSpeakers.ts`; spelling consistency is the main hazard when
  touching speaker data.
- `assets/` images are bundler-imported, so typos fail the build. `public/`
  images are referenced by string, so typos become silent 404s; double-check
  paths or run `pnpm validate`.
- `messages/en.json` is the i18n source of truth. Other locales fall back through
  deep-merge in `i18n/request.ts`.
- Follow `messages/README.md` for ICU placeholders, rich-text tags, and avoiding
  stub translations.
- Client-side message namespaces must be registered in `clientNamespaces` in
  `app/[locale]/layout.tsx`.

## Conventions

- Use pnpm. The repo enforces it through `scripts/ensure-pnpm.mjs`,
  `packageManager`, and `devEngines`.
- Biome formats code with 2-space indentation and 100-character lines.
- Use conventional-ish commit messages such as `feat:`, `fix:`, `docs:`, and
  `chore:`.
- Use branch names like `feat/...`, `fix/...`, `docs/...`, or `chore/...`.
- Pre-commit hooks run Biome check on staged files with `stage_fixed: true` and
  run the full `pnpm typecheck`.
- CI runs `pnpm biome check .`, `pnpm typecheck`, `pnpm validate`, and
  `pnpm build`.

## Pointers

- `CONTEXT.md` defines domain terms. Use those terms exactly.
- `messages/README.md` documents translation conventions.
- `plans/` contains pending improvement plans.
