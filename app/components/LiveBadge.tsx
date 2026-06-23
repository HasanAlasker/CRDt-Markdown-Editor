export default function LiveBadge({ liveNum }: { liveNum: number }) {
  return (
    <div className="hidden sm:flex space-x-2 label items-center">
      <div className={`flex rounded-full bg-green w-3 aspect-square`} />
      <div>Live now:</div>
      <div>{liveNum}</div>
    </div>
  );
}
