import { Heading } from '../types';

export const isHeading = (value?: string): value is Heading =>
  value !== undefined && /^h[1-6]$/.test(value);
