import StandingsTable from '../components/StandingsTable';
import { STANDINGS } from '../lib/data';

export default function StandingsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="mb-2 px-2">
        <h2 className="text-xl font-medium text-[#e8eaed]">Points Table</h2>
      </div>
      <StandingsTable standings={STANDINGS} />
    </div>
  );
}
