import TopStats from '../components/TopStats';
import { PLAYER_STATS } from '../lib/data';

export default function StatsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="mb-2 px-2">
        <h2 className="text-xl font-medium text-[#e8eaed]">Statistics</h2>
      </div>
      <TopStats stats={PLAYER_STATS} />
    </div>
  );
}
