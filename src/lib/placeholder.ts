export function isPlaceholder(value: string | undefined | null): boolean {
  if (!value) return true;
  return value.trim().startsWith("[");
}
