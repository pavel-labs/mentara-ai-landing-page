// Rasterizes public/favicon.svg into the PNG icons stores/OSes need (iOS apple-touch-icon
// and the web manifest don't accept SVG reliably). Deterministic, runs on `prebuild` —
// no hand-authored binaries committed by a human, regenerated from the single SVG source.
import { Resvg } from '@resvg/resvg-js';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');
const svg = readFileSync(join(publicDir, 'favicon.svg'), 'utf8');

const targets = [
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'icon-192.png', size: 192 },
  { file: 'icon-512.png', size: 512 },
];

mkdirSync(publicDir, { recursive: true });

for (const { file, size } of targets) {
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: size } })
    .render()
    .asPng();
  writeFileSync(join(publicDir, file), png);
  console.log(`icons: wrote ${file} (${size}px)`);
}
