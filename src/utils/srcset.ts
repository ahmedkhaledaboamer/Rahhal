import imageWidths from '../data/imageWidths.json';

const widths = imageWidths as Record<string, number>;

/**
 * Every photo in /public ships as `name.webp` (full), `name-640.webp` and, when wider than 1000px, `name-960.webp`.
 * Returns a srcSet so phones and small cards download a smaller file.
 */
export function responsiveSrcSet(src: string): string | undefined {
  const full = widths[src];
  if (!full) return undefined;
  const at = (w: number) => src.replace(/\.webp$/, `-${w}.webp`);
  // Wide photos also have a 960px middle size (phones at 2x/3x density need ~800–1100px).
  return full > 1000 ? `${at(640)} 640w, ${at(960)} 960w, ${src} ${full}w` : `${at(640)} 640w, ${src} ${full}w`;
}
