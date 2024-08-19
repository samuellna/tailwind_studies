export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
      <div className="space-y-1 text-sm/5">
        <span className="text-violet-700 font-medium">Used space</span>
        <p className="text-violet-500">Your team has used 80% of your available space. Need more?</p>
      </div>
      <div className="bg-violet-100 h-2 rounded-lg">
        <div className="bg-violet-600 h-2 rounded-lg w-4/5"></div>
      </div>
      <div className="space-x-3 text-sm/5">
        <button type="button" className="text-violet-500 font-medium">Dismiss</button>
        <button type="button" className="text-violet-700 font-semibold">Upgrade plan</button>
      </div>
    </div>
  );
}