import LiveBadge from "../components/LiveBadge";
import StatusBadge from "../components/StatusBadge";

export default function TopBar() {
  return (
    <div className="flex justify-between py-5">
      <LiveBadge liveNum={20} />
      <StatusBadge connected={true} />
    </div>
  );
}
