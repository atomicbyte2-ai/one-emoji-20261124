// One Emoji, One Smile — make.fun entry
// Writes exactly one emoji, and nothing else, to the kit-specified output.
//
// The pick: 🫶 (heart hands, U+1FAF6).
// A stranger glancing at a phone screen reads it at once: two hands shaping a
// heart, a small human gesture of warmth offered freely. It is kind without
// being intimate, gently playful without irony, and it feels chosen — the
// sender picked a gesture, not the first smiley on the keyboard. No words,
// no caption, no explanation: the emoji alone.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const EMOJI = '🫶';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const ENTRY_PATH = join(OUTPUT_DIR, 'entry.txt');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(ENTRY_PATH, EMOJI, 'utf8');

// Read it back: the gate wants UTF-8 text of 1 to 8 characters, so fail loudly
// here rather than shipping a wrong file.
const written = readFileSync(ENTRY_PATH, 'utf8');
if (written !== EMOJI || [...written].length !== 1) {
  throw new Error(`entry.txt mismatch: expected exactly ${EMOJI}`);
}
