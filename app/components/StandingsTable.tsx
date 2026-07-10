import { Standing } from '../lib/types';

export default function StandingsTable({ standings }: { standings: Standing[] }) {
  // Sort by points (desc), then goal difference (desc), then goals for (desc)
  const sortedStandings = [...standings].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
    return b.goalsFor - a.goalsFor;
  });

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-8">#</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Club</th>
              <th scope="col" className="px-3 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">MP</th>
              <th scope="col" className="px-3 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">W</th>
              <th scope="col" className="px-3 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">D</th>
              <th scope="col" className="px-3 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">L</th>
              <th scope="col" className="px-3 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">GF</th>
              <th scope="col" className="px-3 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">GA</th>
              <th scope="col" className="px-3 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">GD</th>
              <th scope="col" className="px-4 py-3 text-center text-xs font-bold text-gray-900 uppercase tracking-wider">Pts</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {sortedStandings.map((team, idx) => (
              <tr key={team.team} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{idx + 1}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-gray-900 flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-600 border border-gray-200">
                    {team.team.substring(0, 2).toUpperCase()}
                  </div>
                  {team.team}
                </td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-600">{team.played}</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-600">{team.won}</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-600">{team.drawn}</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-600">{team.lost}</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-500 hidden sm:table-cell">{team.goalsFor}</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-500 hidden sm:table-cell">{team.goalsAgainst}</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center font-medium text-gray-600">
                  {team.goalDifference > 0 ? `+${team.goalDifference}` : team.goalDifference}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-center font-bold text-gray-900">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
