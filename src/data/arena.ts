export const arena = {
  index: '03',
  kicker: 'Discipline',
  heading: 'THE ARENA',
  copy: 'Games are systems. I study the systems.',
  disciplines: [
    {
      id: 'competitive',
      label: 'Competitive games',
      note: 'Live theaters of pressure, timing, and incomplete information.',
    },
    {
      id: 'telemetry',
      label: 'Rank / statistics',
      note: 'Figures appear when they are earned. Slots remain empty until then.',
    },
    {
      id: 'strategy',
      label: 'Strategy',
      note: 'Drafts, timings, economy, and the quality of decisions under constraint.',
    },
    {
      id: 'coaching',
      label: 'Coaching',
      note: 'Translation of system knowledge into readable, repeatable practice.',
    },
    {
      id: 'vod',
      label: 'VOD analysis',
      note: 'Reconstruction of what happened, and what the system allowed to happen.',
    },
    {
      id: 'builds',
      label: 'Builds',
      note: 'Configurations treated as hypotheses, not costumes.',
    },
    {
      id: 'experiments',
      label: 'Experiments',
      note: 'Controlled changes. Observed outcomes. No mythology around the method.',
    },
  ],
  featured: {
    name: 'Deadlock',
    designation: 'PRIMARY THEATER',
    status: 'ACTIVE',
    summary:
      'A competitive game treated as an intelligence problem: drafts, timings, economy, and decision quality.',
    telemetry: [
      { label: 'RANK', value: '—', hint: 'AWAITING DATA' },
      { label: 'RECORD', value: '—', hint: 'AWAITING DATA' },
      { label: 'FOCUS', value: 'SYSTEMS', hint: 'LIVE' },
    ],
    modules: ['Strategy', 'Coaching', 'VOD analysis', 'Builds', 'Experiments'],
  },
  watchlist: [
    {
      name: 'Unassigned theater',
      status: 'RESERVED',
      note: 'Additional competitive titles will be logged here when they become active studies.',
    },
  ],
} as const;
