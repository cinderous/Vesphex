export interface NetworkNode {
  id: string;
  label: string;
  x: number;
  y: number;
  primary?: boolean;
}

export interface NetworkLink {
  from: string;
  to: string;
  ring?: boolean;
}

export const network = {
  index: '04',
  kicker: 'Topology',
  heading: 'THE NETWORK',
  copy: 'One system rarely exists alone.',
  nodes: [
    { id: 'vesphex', label: 'VESPHEx', x: 480, y: 270, primary: true },
    { id: 'games', label: 'GAMES', x: 720, y: 128 },
    { id: 'software', label: 'SOFTWARE', x: 790, y: 292 },
    { id: 'domains', label: 'DOMAINS', x: 700, y: 440 },
    { id: 'communities', label: 'COMMUNITIES', x: 480, y: 500 },
    { id: 'automation', label: 'AUTOMATION', x: 260, y: 440 },
    { id: 'art', label: 'ART', x: 170, y: 292 },
    { id: 'research', label: 'RESEARCH', x: 240, y: 128 },
  ] satisfies NetworkNode[],
  links: [
    { from: 'vesphex', to: 'games' },
    { from: 'vesphex', to: 'software' },
    { from: 'vesphex', to: 'domains' },
    { from: 'vesphex', to: 'communities' },
    { from: 'vesphex', to: 'automation' },
    { from: 'vesphex', to: 'art' },
    { from: 'vesphex', to: 'research' },
    { from: 'games', to: 'software', ring: true },
    { from: 'software', to: 'domains', ring: true },
    { from: 'domains', to: 'communities', ring: true },
    { from: 'communities', to: 'automation', ring: true },
    { from: 'automation', to: 'art', ring: true },
    { from: 'art', to: 'research', ring: true },
    { from: 'research', to: 'games', ring: true },
  ] satisfies NetworkLink[],
} as const;
