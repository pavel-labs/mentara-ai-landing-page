# Project Guidelines

## Project-specific constraints

- This is a static Astro marketing site deployed from `dist/` behind nginx. Keep changes
  compatible with prerendering; do not introduce runtime server assumptions without changing
  the deployment architecture.
- Product copy must describe only capabilities available today. Do not invent customers,
  usage figures, testimonials, logos, or product commitments. See `README.md` for content
  and publishing details.
- Keep all user-facing copy localized. Add dictionary keys consistently across every locale
  in `src/i18n/`, preserve the shared types, and update locale registration and route coverage
  when adding a language.
- Treat the shared marketing contract and generated files as authoritative boundaries:
  validate CMS snapshots against the contract, and do not hand-edit generated files such as
  `src/marketing/types.generated.ts`, `src/marketing/contract.generated.json`, or ignored
  snapshots.
- Preserve SEO and accessibility behavior in `src/layouts/BaseLayout.astro` and shared
  components, including canonical/hreflang metadata, keyboard navigation, and reduced-motion
  support.
- Keep cache policy aligned with `nginx.landing.conf`: content-hashed `/_astro/` assets may
  be immutable; stable public URLs and prerendered HTML must remain refreshable.

## Validation

- Run `npm test` for unit and contract tests.
- Run `npm run check` for Astro and TypeScript diagnostics.
- Run `npm run build` for production-output changes. The npm lifecycle scripts also refresh
  managed marketing content and generate icons; inspect their output and do not conceal
  failures.
- For visual changes, follow the viewport and interaction checks in `README.md`.

## Documentation

Update the relevant section of `README.md` when changing documented commands, architecture,
localization, deployment, or content publishing behavior. Prefer extending existing docs to
duplicating them here.
