import Link from "next/link";
import Button from "./components/Button";
import RoomBox from "./components/RoomBox";

export default function Home() {
  return (
    <div className="flex flex-col space-y-15">
      {/* generate a unique id and navigate to it */}
      {/* add the new room to the list */}
      <Link href={"/room"}>
        <Button title="Create Room" icon="plus" style="pri" />
      </Link>

      <section className="border border-outline px-4 py-6 rounded-md">
        <h1>Available rooms</h1>
        <div className="flex flex-col space-y-2">
          {/* map through available rooms */}
          <RoomBox id="vszc_233fafd" />
          <RoomBox id="afdcvz_00043" />
          <RoomBox id="adfczvcvz_43" />
        </div>
      </section>
    </div>
  );
}
