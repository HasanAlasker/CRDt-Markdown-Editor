import React from "react";
import Button from "./Button";
import Link from "next/link";

export default function RoomBox({ id }: { id: string }) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="truncate">{id}</h2>
      <Link href={`/room/${id}`}>
        <Button title="Join" style="sec" />
      </Link>
    </div>
  );
}
