import StandingsTable from '../components/StandingsTable';
import { STANDINGS } from '../lib/data';

export default function StandingsPage() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-bold text-gray-900 dark:text-[#e8eaed] mb-2 px-1">Points Table</h2>
      <StandingsTable standings={STANDINGS} />
    </div>
  );
}
