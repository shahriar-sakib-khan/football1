import { Standing } from '../lib/types';
import { getTeamGradient } from '../lib/utils';

export default function StandingsTable({ standings }: { standings: Standing[] }) {
  const sortedStandings = [...standings].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
    return b.goalsFor - a.goalsFor;
  });

  return (
    <div className="bg-[#303134] rounded-2xl border border-[#3c4043] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-[#3c4043]">
          <thead className="bg-[#303134]">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-normal text-[#9aa0a6] w-8">#</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-normal text-[#9aa0a6]">Club</th>
              <th scope="col" className="px-3 py-3 text-center text-xs font-normal text-[#9aa0a6]">MP</th>
              <th scope="col" className="px-3 py-3 text-center text-xs font-normal text-[#9aa0a6]">W</th>
              <th scope="col" className="px-3 py-3 text-center text-xs font-normal text-[#9aa0a6]">D</th>
              <th scope="col" className="px-3 py-3 text-center text-xs font-normal text-[#9aa0a6]">L</th>
              <th scope="col" className="px-3 py-3 text-center text-xs font-normal text-[#9aa0a6] hidden sm:table-cell">GF</th>
              <th scope="col" className="px-3 py-3 text-center text-xs font-normal text-[#9aa0a6] hidden sm:table-cell">GA</th>
              <th scope="col" className="px-3 py-3 text-center text-xs font-normal text-[#9aa0a6]">GD</th>
              <th scope="col" className="px-4 py-3 text-center text-xs font-normal text-[#9aa0a6]">Pts</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#3c4043]">
            {sortedStandings.map((team, idx) => (
              <tr key={team.team} className="hover:bg-[#3c4043] transition-colors">
                <td className="px-4 py-3 whitespace-nowrap text-sm text-[#9aa0a6]">{idx + 1}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded bg-gradient-to-br ${getTeamGradient(team.team)} flex items-center justify-center text-[10px] font-bold text-white`}>
                      {team.team.replace('Batch ', '')}
                    </div>
                    <span className="font-medium text-[#e8eaed] text-sm">{team.team}</span>
                  </div>
                </td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-[#e8eaed]">{team.played}</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-[#e8eaed]">{team.won}</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-[#e8eaed]">{team.drawn}</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-[#e8eaed]">{team.lost}</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-[#e8eaed] hidden sm:table-cell">{team.goalsFor}</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-[#e8eaed] hidden sm:table-cell">{team.goalsAgainst}</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-[#e8eaed]">
                  {team.goalDifference > 0 ? `+${team.goalDifference}` : team.goalDifference}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-center font-medium text-[#e8eaed]">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
