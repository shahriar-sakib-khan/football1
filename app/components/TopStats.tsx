import { PlayerStat } from '../lib/types';

export default function TopStats({ stats, type }: { stats: PlayerStat[], type: 'goals' | 'assists' }) {
  const sortedStats = [...stats]
    .filter(s => s[type] > 0)
    .sort((a, b) => b[type] - a[type])
    .slice(0, 5);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-6">
      <div className="px-4 py-3 border-b border-gray-100 bg-gray-50 text-sm font-bold text-gray-800 uppercase tracking-wider">
        Top {type === 'goals' ? 'Scorers' : 'Assists'}
      </div>
      <div className="divide-y divide-gray-100">
        {sortedStats.length === 0 ? (
          <div className="p-4 text-center text-sm text-gray-500">No stats available yet.</div>
        ) : (
          sortedStats.map((player, idx) => (
            <div key={idx} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="text-gray-400 font-medium w-4 text-center">{idx + 1}</div>
                <div>
                  <div className="font-semibold text-gray-900">{player.name}</div>
                  <div className="text-xs text-gray-500">{player.team}</div>
                </div>
              </div>
              <div className="font-bold text-lg text-blue-600">{player[type]}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
