// Path data for every icon, drawn on a 24px grid.
export const iconPaths: Record<string, string> = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  chev: '<path d="m6 9 6 6 6-6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
  activity: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
  book: '<path d="M3 5a2 2 0 0 1 2-2h6v16H5a2 2 0 0 0-2 2zM21 5a2 2 0 0 0-2-2h-6v16h6a2 2 0 0 1 2 2z"/>',
  pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  box: '<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
  landmark: '<path d="M3 21h18M5 21V10M9 21V10M15 21V10M19 21V10M2 10l10-7 10 7z"/>',
  coins: '<circle cx="9" cy="9" r="6"/><path d="M15 9.5a6 6 0 1 1-5.5 5.5"/>',
  rocket:
    '<path d="M5 15c-1.500 1.300-2 5-2 5s3.700-.5 5-2M12 15l-3-3a22 22 0 0 1 2-4 12 12 0 0 1 11-5c0 3-1 8-5 11a22 22 0 0 1-4 2z"/><path d="M9 12H4s.5-3 2-4c1.600-1 5 0 5 0M12 15v5s3-.5 4-2c1-1.600 0-5 0-5"/>',
  chart: '<path d="M3 3v18h18M8 17v-5M13 17V8M18 17v-9"/>',
  trend: '<path d="m3 17 6-6 4 4 8-8M15 7h6v6"/>',
  bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.500c.8.8 1 1.500 1 2.500h6c0-1 .2-1.700 1-2.500A6 6 0 0 0 12 3z"/>',
  users:
    '<circle cx="9" cy="8" r="3.500"/><path d="M2 20c0-3.500 3-6 7-6s7 2.500 7 6M16 4.500a3.500 3.500 0 0 1 0 7M18 14.500c2.500.7 4 2.700 4 5.500"/>',
  cap: '<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c0 1.500 3 3 6 3s6-1.500 6-3v-5M22 9v6"/>',
  briefcase:
    '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
  heart:
    '<path d="M12 20s-8-5-8-11a4.500 4.500 0 0 1 8-2.500A4.500 4.500 0 0 1 20 9c0 6-8 11-8 11z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  pin: '<path d="M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="9" r="2.500"/>',
  check: '<path d="m5 12 5 5 9-10"/>',
  globe:
    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.500 8 8 9 4.500-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  flask:
    '<path d="M9 3h6M10 3v6L4 19a1.500 1.500 0 0 0 1.300 2h13.400A1.500 1.500 0 0 0 20 19l-6-10V3"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  target:
    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  file: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h6"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  play: '<circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4z"/>',
  building:
    '<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M10 21v-4h4v4"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  phone:
    '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  send: '<path d="m21 3-9 18-2-8-8-2z"/><path d="M21 3 10 13"/>',
  msg: '<path d="M4 5h16v11H9l-5 4z"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.700 0l3-3a4 4 0 0 0-5.700-5.700l-1 1M14 10a4 4 0 0 0-5.700 0l-3 3a4 4 0 0 0 5.700 5.700l1-1"/>',
  sprout: '<path d="M12 21v-9M12 12C12 8 9 6 5 6c0 4 3 6 7 6zM12 14c0-3 2-5 6-5 0 3-2 5-6 5z"/>',
  route:
    '<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h8a3 3 0 0 0 0-6H8a3 3 0 0 1 0-6h8"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="m8.500 14-1.500 7 5-3 5 3-1.500-7"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
};
