/** Combine conditional class names without a CSS utility framework. */
export function cn(...values) {
  return values.flat().filter(Boolean).join(" ");
}
