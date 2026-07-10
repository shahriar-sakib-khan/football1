import { PlayerStat } from '../lib/types';
import { getTeamGradient } from '../lib/utils';

export default function TopStats({ stats }: { stats: PlayerStat[] }) {
  const sortedStats = [...stats]
    .filter(s => s.goals > 0)
    .sort((a, b) => b.goals - a.goals);

  return (
    <div className="bg-[#303134] rounded-2xl border border-[#3c4043] overflow-hidden mb-6">
      <div className="px-4 py-4 border-b border-[#3c4043] flex items-center gap-2">
        <span className="text-lg text-[#e8eaed] font-medium">Stat Leaders</span>
      </div>
      <div className="divide-y divide-[#3c4043]">
        <div className="px-4 py-2 flex justify-between text-xs text-[#9aa0a6]">
          <span>Player</span>
          <span>Goals</span>
        </div>
        {sortedStats.length === 0 ? (
          <div className="p-6 text-center text-sm text-[#9aa0a6]">No stats available yet</div>
        ) : (
          sortedStats.map((player, idx) => (
            <div key={idx} className="px-4 py-3 flex items-center justify-between hover:bg-[#3c4043] transition-colors">
              <div className="flex items-center gap-4">
                <div className="text-sm text-[#9aa0a6] w-4 text-center">
                  {idx + 1}
                </div>
                <div>
                  <div className="font-medium text-[#e8eaed] text-sm">{player.name}</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className={`w-2.5 h-2.5 rounded-sm bg-gradient-to-br ${getTeamGradient(player.team)}`} />
                    <div className="text-xs text-[#9aa0a6]">{player.team}</div>
                  </div>
                </div>
              </div>
              <div className="font-medium text-[#e8eaed] text-sm">
                {player.goals}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
