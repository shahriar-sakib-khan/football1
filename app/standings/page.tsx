import StandingsTable from '../components/StandingsTable';
import { STANDINGS } from '../lib/data';

export default function StandingsPage() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Points Table</h2>
      <StandingsTable standings={STANDINGS} />
    </div>
  );
}
