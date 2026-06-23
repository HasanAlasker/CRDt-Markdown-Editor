// the map is overkill but i wanted to do it
const StatusMap = {
  1: { label: "Online", className: "bg-green" },
  0: { label: "Offline", className: "bg-red" },
};

export default function StatusBadge({ connected }: { connected: boolean }) {
  const { label, className } = StatusMap[connected ? 1 : 0];
  return (
    <div className="flex items-center space-x-3 label">
      <div className={`flex rounded-full w-3 aspect-square ${className}`} />
      <div>{label}</div>
    </div>
  );
}
