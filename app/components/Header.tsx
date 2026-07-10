export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#202124] border-b border-[#3c4043]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white rounded p-1.5 font-bold text-lg leading-none">
            CSE
          </div>
          <div>
            <h1 className="text-lg font-medium text-gray-200">
              Football Tournament
            </h1>
            <p className="text-[11px] text-gray-400">Gopalganj Science & Technology University</p>
          </div>
        </div>
      </div>
    </header>
  );
}
