import { Match } from '../lib/types';
import { getTeamGradient } from '../lib/utils';

const FootballIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <circle cx="12" cy="12" r="10" fill="white" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7L16 10V15L12 18L8 15V10L12 7Z" fill="currentColor" />
    <path d="M12 7V2M16 10L20.5 8M16 15L20.5 17M12 18V22M8 15L3.5 17M8 10L3.5 8" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const renderFootballs = (count: number) => {
  return Array(count).fill(0).map((_, i) => <FootballIcon key={i} />);
};

export default function MatchCard({ match }: { match: Match }) {
  const isFullTime = match.status === 'FULL_TIME';
  const getBatchNumber = (teamName: string) => teamName.replace('Batch ', '');

  return (
    <div className="bg-[#303134] rounded-2xl border border-[#3c4043] overflow-hidden mb-4 hover:scale-[1.01] hover:border-[#5f6368] transition-all shadow-md">
      {/* Top Header */}
      <div className="px-4 py-3 flex justify-between items-center text-xs text-[#9aa0a6] border-b border-[#3c4043]">
        <span>{match.time !== 'TBD' ? match.time : 'Time TBD'}</span>
        <span className="font-medium">
          {match.status === 'FULL_TIME' ? 'FT' : match.status === 'LIVE' ? <span className="text-red-400">LIVE</span> : match.status}
        </span>
      </div>
      
      {/* Match Content */}
      <div className="px-4 pb-4 pt-4 flex items-center justify-between">
        
        {/* Home Team */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getTeamGradient(match.homeTeam)} flex items-center justify-center text-lg font-bold text-white border border-[#5f6368] shadow-inner`}>
            {getBatchNumber(match.homeTeam)}
          </div>
          <span className="font-medium text-[#e8eaed] text-sm sm:text-base">{match.homeTeam}</span>
        </div>

        {/* Center Score or Time */}
        <div className="flex flex-col items-center justify-center flex-1 shrink-0 px-2">
          {isFullTime ? (
            <div className="flex items-center gap-4 text-3xl font-medium text-[#e8eaed]">
              <span>{match.homeScore}</span>
              <span className="text-[#9aa0a6] text-xl">-</span>
              <span>{match.awayScore}</span>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-sm text-[#e8eaed] opacity-0">-</div>
            </div>
          )}
        </div>
        
        {/* Away Team */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getTeamGradient(match.awayTeam)} flex items-center justify-center text-lg font-bold text-white border border-[#5f6368] shadow-inner`}>
            {getBatchNumber(match.awayTeam)}
          </div>
          <span className="font-medium text-[#e8eaed] text-sm sm:text-base">{match.awayTeam}</span>
        </div>
      </div>
      
      {/* Goal Scorers */}
      {isFullTime && (match.homeGoals?.length || match.awayGoals?.length) && (
        <div className="px-4 pb-3 pt-1 text-sm text-[#9aa0a6] flex justify-between">
          <div className="flex-1 flex flex-col gap-1.5 items-start">
            {match.homeGoals?.map((goal, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[#e8eaed]">
                <span className="text-sm">{goal.playerName}</span>
                <div className="flex gap-0.5 text-[#202124]">{renderFootballs(goal.count)}</div>
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-1.5 items-end">
            {match.awayGoals?.map((goal, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[#e8eaed]">
                <span className="text-sm">{goal.playerName}</span>
                <div className="flex gap-0.5 text-[#202124]">{renderFootballs(goal.count)}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MOTM */}
      {match.motm && (
        <div className="px-4 pb-3 pt-1 flex justify-center text-xs font-medium text-amber-500">
          <span className="flex items-center gap-1.5 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            MOTM: {match.motm}
          </span>
        </div>
      )}
    </div>
  );
}
