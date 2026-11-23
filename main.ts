// Entry for make.fun's post-x-promote-make-your-own-bounty-01 (Node 22, standard
// library only). The entry is the X post itself: a quote of make.fun's
// make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646),
// with a photo of its own attached, make.fun / @makefunai and the play code in
// its text. All this program does is hand the post's address to the grader: it
// copies POST.json from the repository root into the output directory, where
// the gate reads it and scores the post's replies + reposts + quotes from X.
// Nothing printed on success.
//
// Local run (as the grader runs it, with the two dirs stood in):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Read first so a malformed POST.json fails loudly instead of copying garbage
// the gate would refuse anyway.
const post = JSON.parse(readFileSync(join(botDir, 'POST.json'), 'utf8')) as unknown;
if (typeof post !== 'object' || post === null || typeof (post as { url?: unknown }).url !== 'string') {
  throw new Error('POST.json must hold an object with a string "url"');
}

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, 'POST.json'), join(outDir, 'POST.json'));
