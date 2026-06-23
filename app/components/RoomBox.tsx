import Link from "next/link";
import Button from "./Button";

export default function RoomBox({ id }: { id: string }) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="truncate">{id}</h2>
      <Link href={`/room/${id}`}>
        <Button title="Join" style="mid" />
      </Link>
    </div>
  );
}
