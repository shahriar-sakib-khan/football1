import { Match, Standing, PlayerStat } from './types';

export const TEAMS = [
  'Batch 10',
  'Batch 11',
  'Batch 12',
  'Batch 13',
];

export const MATCHES: Match[] = [
  {
    id: '1',
    date: '9 July 2026',
    time: '5:00 PM',
    homeTeam: 'Batch 11',
    awayTeam: 'Batch 12',
    homeScore: 1,
    awayScore: 3,
    status: 'FULL_TIME',
    homeGoals: [{ playerName: 'Antu Das', count: 1 }],
    awayGoals: [{ playerName: 'Shijan Pias', count: 2 }, { playerName: 'Sakib Imtiaz', count: 1 }],
    motm: 'Shijan Pias',
  },
  {
    id: '2',
    date: '9 July 2026',
    time: '6:00 PM',
    homeTeam: 'Batch 12',
    awayTeam: 'Batch 10',
    homeScore: 2,
    awayScore: 1,
    status: 'FULL_TIME',
    homeGoals: [{ playerName: 'Fahim Gazi', count: 1 }, { playerName: 'Shahriar Sakib', count: 1 }],
    awayGoals: [{ playerName: 'Iftikhar Tanvir', count: 1 }],
    motm: 'Fahim Gazi',
  },
  {
    id: '3',
    date: '13 July 2026',
    time: '3:20 PM',
    homeTeam: 'Batch 11',
    awayTeam: 'Batch 13',
    status: 'SCHEDULED',
  },
  {
    id: '4',
    date: '13 July 2026',
    time: '4:10 PM',
    homeTeam: 'Batch 10',
    awayTeam: 'Batch 11',
    status: 'SCHEDULED',
  },
  {
    id: '5',
    date: '13 July 2026',
    time: '5:00 PM',
    homeTeam: 'Batch 12',
    awayTeam: 'Batch 13',
    status: 'SCHEDULED',
  },
  {
    id: '6',
    date: '13 July 2026',
    time: '5:50 PM',
    homeTeam: 'Batch 13',
    awayTeam: 'Batch 10',
    status: 'SCHEDULED',
  },
  {
    id: '7',
    date: 'TBD',
    time: 'TBD',
    homeTeam: 'TBD',
    awayTeam: 'TBD',
    status: 'SCHEDULED',
  },
];

export const STANDINGS: Standing[] = [
  { team: 'Batch 12', played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 5, goalsAgainst: 2, goalDifference: 3, points: 6 },
  { team: 'Batch 10', played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 2, goalDifference: -1, points: 0 },
  { team: 'Batch 11', played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 3, goalDifference: -2, points: 0 },
  { team: 'Batch 13', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
];

export const PLAYER_STATS: PlayerStat[] = [
  { name: 'Shijan Pias', team: 'Batch 12', goals: 2 },
  { name: 'Sakib Imtiaz', team: 'Batch 12', goals: 1 },
  { name: 'Antu Das', team: 'Batch 11', goals: 1 },
  { name: 'Fahim Gazi', team: 'Batch 12', goals: 1 },
  { name: 'Shahriar Sakib', team: 'Batch 12', goals: 1 },
  { name: 'Iftikhar Tanvir', team: 'Batch 10', goals: 1 },
];
