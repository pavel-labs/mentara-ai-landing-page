import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export const ICON_VERSION = createHash('sha256')
  .update(readFileSync(resolve(process.cwd(), 'public', 'favicon.svg')))
  .digest('hex')
  .slice(0, 12);
