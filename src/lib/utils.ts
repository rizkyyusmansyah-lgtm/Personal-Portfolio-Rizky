import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes with clsx and tailwind-merge.
 * Handles conditional classes and deduplication.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format date string for display.
 * @example formatDate('2024-06') => 'Jun 2024'
 */
export function formatDate(dateStr: string): string {
  if (dateStr === 'Present') return 'Present';
  try {
    const date = new Date(dateStr + '-01');
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

/**
 * Calculate duration between two dates.
 * @example getDuration('2024-01', '2024-06') => '6 mos'
 */
export function getDuration(start: string, end: string): string {
  if (end === 'Present') {
    end = new Date().toISOString().substring(0, 7);
  }
  const startDate = new Date(start + '-01');
  const endDate = new Date(end + '-01');
  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());
  if (months < 12) return `${months} mo${months !== 1 ? 's' : ''}`;
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  if (remainingMonths === 0) return `${years} yr${years !== 1 ? 's' : ''}`;
  return `${years} yr${years !== 1 ? 's' : ''} ${remainingMonths} mo${remainingMonths !== 1 ? 's' : ''}`;
}

/**
 * Smooth scroll to a section by ID.
 */
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Truncate text to a given length.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '...';
}

/**
 * Check if a string is a valid placeholder (starts with '[' and ends with ']').
 */
export function isPlaceholder(value: string): boolean {
  return value.startsWith('[') && value.endsWith(']');
}

/**
 * Get current year for footer copyright.
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}

/**
 * Create a mailto link.
 */
export function createMailtoLink(email: string, subject = '', body = ''): string {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const query = params.toString();
  return `mailto:${email}${query ? `?${query}` : ''}`;
}
