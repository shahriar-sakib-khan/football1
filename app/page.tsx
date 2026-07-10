import MatchCard from './components/MatchCard';
import { MATCHES } from './lib/data';

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Matches</h2>
      {MATCHES.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
}
