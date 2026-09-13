export const territory = {
  index: '05',
  kicker: 'Holdings',
  heading: 'DIGITAL TERRITORY',
  copy: 'Names are addresses. Addresses become territory.',
  properties: [
    {
      name: 'vesphex.tech',
      classification: 'ORIGIN NODE',
      status: 'ACTIVE',
      note: 'The public address of the Vesphex system.',
    },
  ],
  practices: [
    {
      id: 'acquisitions',
      label: 'Domain acquisitions',
      note: 'Selecting names that can carry weight over time.',
    },
    {
      id: 'brokerage',
      label: 'Brokerage',
      note: 'Moving digital property between operators with care.',
    },
    {
      id: 'portfolios',
      label: 'Domain portfolios',
      note: 'Collections treated as infrastructure, not inventory theater.',
    },
    {
      id: 'network-dev',
      label: 'Network development',
      note: 'Connecting addresses into something that behaves like a system.',
    },
    {
      id: 'properties',
      label: 'Digital properties',
      note: 'Sites, nodes, and surfaces that occupy the names they are given.',
    },
  ],
  queue: {
    label: 'Acquisition queue',
    status: 'UNLISTED',
    note: 'Further holdings will be published when they are ready to be named.',
  },
} as const;
