export function getTeamColor(team: string) {
  if (team.includes('10')) return 'bg-purple-600';
  if (team.includes('11')) return 'bg-blue-600';
  if (team.includes('12')) return 'bg-emerald-600';
  if (team.includes('13')) return 'bg-orange-600';
  return 'bg-gray-600';
}

export function getTeamGradient(team: string) {
  if (team.includes('10')) return 'from-purple-600 to-purple-800';
  if (team.includes('11')) return 'from-blue-600 to-blue-800';
  if (team.includes('12')) return 'from-emerald-600 to-emerald-800';
  if (team.includes('13')) return 'from-orange-600 to-orange-800';
  return 'from-gray-600 to-gray-800';
}

export function getTeamTextColor(team: string) {
  if (team.includes('10')) return 'text-purple-400';
  if (team.includes('11')) return 'text-blue-400';
  if (team.includes('12')) return 'text-emerald-400';
  if (team.includes('13')) return 'text-orange-400';
  return 'text-gray-400';
}

export function renderFootballs(count?: number) {
  if (!count) return '';
  return Array(count).fill('⚽').join('');
}
