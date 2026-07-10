import { Match } from '../lib/types';

export default function MatchCard({ match }: { match: Match }) {
  const isFullTime = match.status === 'FULL_TIME';
  
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-4 shadow-sm">
      <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <span className="text-sm text-gray-500 font-medium">{match.date}</span>
        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
          match.status === 'LIVE' ? 'bg-red-100 text-red-700' :
          match.status === 'SCHEDULED' ? 'bg-gray-100 text-gray-600' :
          'bg-gray-100 text-gray-600'
        }`}>
          {match.status === 'FULL_TIME' ? 'FT' : match.status}
        </span>
      </div>
      
      <div className="p-4 sm:px-6 flex flex-col gap-4">
        {/* Teams and Scores */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 border border-gray-200">
                {match.homeTeam.substring(0, 2).toUpperCase()}
              </div>
              <span className="font-semibold text-gray-900 text-lg">{match.homeTeam}</span>
            </div>
            <span className={`text-xl font-bold ${isFullTime ? 'text-gray-900' : 'text-gray-400'}`}>
              {isFullTime ? match.homeScore : '-'}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 border border-gray-200">
                {match.awayTeam.substring(0, 2).toUpperCase()}
              </div>
              <span className="font-semibold text-gray-900 text-lg">{match.awayTeam}</span>
            </div>
            <span className={`text-xl font-bold ${isFullTime ? 'text-gray-900' : 'text-gray-400'}`}>
              {isFullTime ? match.awayScore : '-'}
            </span>
          </div>
        </div>

        {/* Time for Scheduled Matches */}
        {!isFullTime && match.status === 'SCHEDULED' && (
          <div className="pt-2 mt-2 border-t border-gray-100 text-sm text-gray-500 text-center">
            Kick-off at {match.time}
          </div>
        )}

        {/* Goal Scorers and MOTM */}
        {isFullTime && ((match.homeGoals && match.homeGoals.length > 0) || (match.awayGoals && match.awayGoals.length > 0) || match.manOfTheMatch) && (
          <div className="pt-3 mt-1 border-t border-gray-100 text-sm">
            <div className="flex justify-between text-gray-500 mb-3 text-xs">
              <div>
                {match.homeGoals?.map((goal, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
                    {goal.playerName} {goal.minute && `${goal.minute}'`}
                  </div>
                ))}
              </div>
              <div className="text-right">
                {match.awayGoals?.map((goal, idx) => (
                  <div key={idx} className="flex items-center gap-1 justify-end">
                    {goal.playerName} {goal.minute && `${goal.minute}'`}
                    <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
                  </div>
                ))}
              </div>
            </div>
            
            {match.manOfTheMatch && (
              <div className="flex items-center gap-1 text-gray-700 bg-yellow-50 px-2 py-1.5 rounded text-xs font-medium inline-flex border border-yellow-100">
                <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                MOTM: {match.manOfTheMatch}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
