export const site = {
  name: 'VESPHEx',
  legalName: 'Vesphex',
  domain: 'vesphex.tech',
  url: 'https://vesphex.tech',
  locale: 'en_US',
  title: 'VESPHEx — Developer · Gamer · Systems Architect',
  description:
    'VESPHEx is an independent technical identity building at the intersection of software, games, intelligence, and networks.',
  identity: ['Developer', 'Gamer', 'Systems Architect'] as const,
  tagline:
    'I build systems where software, games, intelligence, and networks intersect.',
  ogImage: '/og.png',
  updatedAt: '2026-09-12',
  system: {
    name: 'VESPHEx SYSTEM',
    status: 'ONLINE',
    node: 'VESPHEx.TECH',
    mode: 'BUILDING',
  },
  /**
   * Social destinations. Leave `href` empty until a real address exists.
   * Empty values render as pending signals — they never become invented URLs.
   */
  social: {
    x: {
      label: 'X / Twitter',
      href: '',
    },
    github: {
      label: 'GitHub',
      href: '',
    },
    discord: {
      label: 'Discord',
      href: '',
    },
    twitch: {
      label: 'Twitch',
      href: '',
    },
    email: {
      label: 'Email',
      href: '',
    },
  },
} as const;

export type SocialChannel = (typeof site.social)[keyof typeof site.social];

export function isLiveHref(href: string): boolean {
  return href.trim().length > 0;
}

export function absoluteUrl(path = '/'): string {
  if (path === '/' || path === '') {
    return `${site.url}/`;
  }
  return `${site.url}${path.startsWith('/') ? path : `/${path}`}`;
}
