import addFormats from 'ajv-formats';
import Ajv2020 from 'ajv/dist/2020.js';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import contract from '../src/marketing/contract.generated.json' with { type: 'json' };

export const validateSnapshot = new Ajv2020({ allErrors: true, strict: false });
addFormats(validateSnapshot);
const check = validateSnapshot.compile(contract);
export const fetchMarketing = async (baseUrl, request = fetch) => {
  if (!baseUrl) return { schemaVersion: 1, landing: [], articles: [], pricing: null };
  const url = new URL('marketing/export', `${baseUrl.replace(/\/$/, '')}/`);
  if (
    url.protocol !== 'https:' &&
    !(url.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(url.hostname))
  )
    throw new Error('PUBLIC_API_URL must be HTTPS (or localhost for development).');
  const response = await request(url, {
    signal: AbortSignal.timeout(10_000),
    headers: { 'Cache-Control': 'no-cache' },
  });
  if (!response.ok)
    throw new Error(
      `Marketing content refresh failed (${response.status}). The current website will remain live.`,
    );
  const text = await response.text();
  if (text.length > 10_000_000) throw new Error('Marketing export exceeds 10 MB.');
  const value = JSON.parse(text);
  if (!check(value))
    throw new Error('Published marketing content does not match the shared contract.');
  return value;
};
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const snapshot = await fetchMarketing(process.env.PUBLIC_API_URL || '');
  const target = new URL('../src/marketing/snapshot.generated.json', import.meta.url);
  await mkdir(new URL('../src/marketing/', import.meta.url), { recursive: true });
  await writeFile(target, `${JSON.stringify(snapshot)}\n`);
  console.log(
    `Marketing snapshot: ${snapshot.landing.length} pages, ${snapshot.articles.length} articles.`,
  );
}
