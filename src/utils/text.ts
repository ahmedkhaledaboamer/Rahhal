/** Convert Arabic-Indic / Persian digits to Western digits (0-9). */
export function toWesternDigits(value: string): string {
  return value.
  replace(/[\u0660-\u0669]/g, (d) => String(d.charCodeAt(0) - 0x0660)).
  replace(/[\u06F0-\u06F9]/g, (d) => String(d.charCodeAt(0) - 0x06f0));
}

export function isPlaceholder(part: string): boolean {
  return part.startsWith('[') && part.endsWith(']');
}

export function splitPlaceholders(text: string): string[] {
  return text.split(/(\[[^\]]*\])/g).filter(Boolean);
}