"use client";
import { useRouter } from "next/navigation";
import Button from "./components/Button";
import RoomBox from "./components/RoomBox";

export default function Home() {
  const router = useRouter();

  const createRoom = () => {
    const uuid = crypto.randomUUID();
    router.push(`/room/${uuid}`);
  };

  return (
    <div className="flex flex-col space-y-15">
      <Button
        title="Create Room"
        icon="plus"
        style="pri"
        onclick={createRoom}
      />

      <section className="border border-outline px-4 py-6 rounded-md bg-card">
        <h1>Available rooms</h1>
        <div className="flex flex-col space-y-2 ">
          {/* map through available rooms */}
          <RoomBox id="vszc_233fafd" />
          <RoomBox id="afdcvz_00043" />
          <RoomBox id="adfczvcvz_43" />
        </div>
      </section>
    </div>
  );
}
