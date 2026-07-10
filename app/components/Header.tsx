export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white rounded-lg p-2 font-bold text-xl">CSE</div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 leading-tight">Football Tournament</h1>
            <p className="text-sm text-gray-500">Gopalganj Science and Technology University</p>
          </div>
        </div>
      </div>
    </header>
  );
}
