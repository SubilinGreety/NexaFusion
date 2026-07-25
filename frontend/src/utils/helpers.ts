/**
 * Converts a title string into a URL-safe slug.
 * e.g. "Hello World!" → "hello-world"
 */
export function toSlug(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Truncates text to a maximum length and appends an ellipsis.
 */
export function truncate(text: string, maxLength: number = 150): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Formats a date string into a human-readable format.
 * e.g. "2026-07-14T10:00:00Z" → "July 14, 2026"
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Capitalizes the first letter of a string.
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Parses comma-separated technologies string into an array.
 */
export function parseTechList(technologies?: string): string[] {
  if (!technologies) return [];
  return technologies.split(',').map(t => t.trim()).filter(Boolean);
}
