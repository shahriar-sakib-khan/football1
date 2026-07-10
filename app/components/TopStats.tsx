import { PlayerStat } from '../lib/types';
import { getTeamGradient } from '../lib/utils';

export default function TopStats({ stats }: { stats: PlayerStat[] }) {
  const sortedStats = [...stats]
    .filter(s => s.goals > 0)
    .sort((a, b) => b.goals - a.goals);

  return (
    <div className="bg-white dark:bg-[#303134] rounded-2xl border border-gray-200 dark:border-[#3c4043] overflow-hidden mb-6 shadow-sm">
      <div className="px-4 py-3 border-b border-gray-100 dark:border-[#3c4043]">
        <h3 className="font-semibold text-gray-900 dark:text-[#e8eaed]">Stat Leaders</h3>
      </div>
      
      <div className="px-4 py-2 border-b border-gray-100 dark:border-[#3c4043] flex justify-between text-xs text-gray-500 dark:text-[#9aa0a6]">
        <span>Player</span>
        <span>Goals</span>
      </div>

      <div className="flex flex-col divide-y divide-gray-100 dark:divide-[#3c4043]">
        {sortedStats.map((player, idx) => (
          <div key={`${player.name}-${player.team}`} className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 dark:hover:bg-[#3c4043] transition-colors">
            <div className="flex items-center gap-4">
              <span className="text-gray-400 dark:text-[#9aa0a6] text-sm w-4">{idx + 1}</span>
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-medium text-gray-900 dark:text-[#e8eaed] text-sm">{player.name}</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className={`w-2.5 h-2.5 rounded-sm bg-gradient-to-br ${getTeamGradient(player.team)} shadow-inner`} />
                    <div className="text-xs text-gray-500 dark:text-[#9aa0a6]">{player.team}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-8">
              <div className="font-bold text-lg text-gray-900 dark:text-gray-200">{player.goals}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
