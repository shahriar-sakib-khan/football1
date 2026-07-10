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
    date: 'Mon, 12 Aug',
    time: '4:00 PM',
    homeTeam: 'Batch 10',
    awayTeam: 'Batch 11',
    homeScore: 2,
    awayScore: 1,
    status: 'FULL_TIME',
    homeGoals: [{ playerName: 'John Doe', minute: 23 }, { playerName: 'John Doe', minute: 75 }],
    awayGoals: [{ playerName: 'Alice Smith', minute: 45 }],
    manOfTheMatch: 'John Doe',
  },
  {
    id: '2',
    date: 'Tue, 13 Aug',
    time: '4:00 PM',
    homeTeam: 'Batch 12',
    awayTeam: 'Batch 13',
    homeScore: 0,
    awayScore: 0,
    status: 'FULL_TIME',
    manOfTheMatch: 'Bob Brown',
  },
  {
    id: '3',
    date: 'Wed, 14 Aug',
    time: '4:00 PM',
    homeTeam: 'Batch 10',
    awayTeam: 'Batch 12',
    status: 'SCHEDULED',
  },
];

export const STANDINGS: Standing[] = [
  { team: 'Batch 10', played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 2, goalsAgainst: 1, goalDifference: 1, points: 3 },
  { team: 'Batch 12', played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 1 },
  { team: 'Batch 13', played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 1 },
  { team: 'Batch 11', played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 2, goalDifference: -1, points: 0 },
];

export const PLAYER_STATS: PlayerStat[] = [
  { name: 'John Doe', team: 'Batch 10', goals: 2, assists: 0 },
  { name: 'Alice Smith', team: 'Batch 11', goals: 1, assists: 0 },
  { name: 'Charlie', team: 'Batch 10', goals: 0, assists: 2 },
];
