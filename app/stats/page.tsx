import TopStats from '../components/TopStats';
import { PLAYER_STATS } from '../lib/data';

export default function StatsPage() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Player Statistics</h2>
      <TopStats stats={PLAYER_STATS} type="goals" />
      <TopStats stats={PLAYER_STATS} type="assists" />
    </div>
  );
}
