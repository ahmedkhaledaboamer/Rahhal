import type { TripTab } from '../types/booking';

export type NavKey =
'home' |
'about' |
'services' |
'trips' |
'visas' |
'testimonials' |
'location' |
'inquiry' |
'contact';

/** Header link order (section ids match the nav keys). */
export const navItems: NavKey[] = [
'home',
'about',
'services',
'trips',
'visas',
'testimonials',
'location',
'inquiry',
'contact'];


export const tripMenuItems: TripTab[] = ['domestic', 'international', 'umrah'];

export const footerQuickLinks: NavKey[] = ['home', 'about', 'trips', 'visas', 'testimonials', 'contact'];