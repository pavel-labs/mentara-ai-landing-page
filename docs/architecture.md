# Frontend architecture

The site is a static Astro application. Keep URLs and locale variants in `src/pages`; route
files should remain thin and pass route data into a reusable feature view.

## Source boundaries

- `src/features/<area>` owns page-level views and behavior for a product area: landing, blog,
  enterprise, legal, resources, compare, and analytics.
- `src/components/shared` contains UI used by more than one feature, such as navigation,
  footer, locale switching, and small visual primitives. Keep feature-specific markup in its
  feature instead of promoting it to shared prematurely.
- `src/layouts` owns document structure, metadata, global styles, and shared layout concerns.
- `src/i18n` owns locale dictionaries, locale types, and URL helpers.
- `src/content` owns authored content collections and their queries.
- `src/marketing` owns the generated marketing API contract, static snapshot, and content
  adapters used by landing pages and the CMS preview.

Prefer one-way dependencies: route files compose feature views; feature views may use shared
components, layouts, content, and domain helpers. Shared components must not import a feature
view. Keep feature logic in testable TypeScript modules and keep Astro components focused on
rendering and wiring their behavior.

## Routes and component boundaries

Localized route files intentionally reuse the same feature view with a locale prop. Do not
duplicate page markup for each locale. When a feature view grows to cover distinct sections
with their own data or behavior, extract those sections into feature-local Astro components;
keep truly reusable visual primitives in `src/components/shared`.

Client-side code should be loaded only where needed. Use bundled Astro scripts for application
logic, dynamic imports for optional or consent-gated features, and inline scripts only where
early execution is required. Preserve progressive enhancement, accessibility, and the site's
browser support target when extracting scripts.

## Styles

Use BEM for project-owned classes: `block`, `block__element`, and `block--modifier`. Pair a
modifier with its block in markup. Shared design primitives are standalone blocks; page- or
component-specific elements stay namespaced to their block. Keep feature styles in the Astro
component that owns the markup so extraction also moves the styles and responsive rules.
Reserve `src/styles/global.css` for design tokens, resets, and cross-feature primitives;
`src/styles/reading.css` owns long-form reading styles.
