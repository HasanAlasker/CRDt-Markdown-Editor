"use client";
import "easymde/dist/easymde.min.css";
import { useEffect, useRef, useState } from "react";
import Button from "@/app/components/Button";
import Link from "next/link";
import dynamic from "next/dynamic";
import * as Y from "yjs";
import { useParams } from "next/navigation";
import { IndexeddbPersistence } from "y-indexeddb";
import { WebsocketProvider } from "y-websocket";
import { applyDiff } from "@/app/functions/typeDif";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

export default function page() {
  const yDocRef = useRef<Y.Doc | null>(null);
  const yTextRef = useRef<Y.Text | null>(null);
  const isLocalChange = useRef(false);

  const [text, setText] = useState("");
  const params = useParams();
  const roomId = params.id as string;

  useEffect(() => {
    const ydoc = new Y.Doc();
    const ytext = ydoc.getText("markdown-text");

    yDocRef.current = ydoc;
    yTextRef.current = ytext;

    const presistence = new IndexeddbPersistence(roomId, ydoc);
    presistence.on("synced", () => {
      setText(ytext.toString());
    });

    const wsProvider = new WebsocketProvider(
      "ws://localhost:1234",
      roomId,
      ydoc,
    );

    ytext.observe(() => {
      // if i made the change, don't re render (prevents infinite loop)
      if (isLocalChange.current) return;

      setText(ytext.toString());
    });

    return () => {
      presistence.destroy();
      wsProvider.destroy();
      ydoc.destroy();
    };
  }, []);

  const handleTyping = (newValue: string) => {
    isLocalChange.current = true;
    setText(newValue);

    const ytext = yTextRef.current;
    if (!ytext) return;

    yDocRef.current?.transact(() => {
      applyDiff(ytext, newValue);
    });

    isLocalChange.current = false;
  };

  const copyRoomURL = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Room URL copied to clipboard!");
  };

  return (
    <section>
      <div className="flex space-x-3 justify-between">
        <Button
          title="Copy URL"
          icon="link"
          style="sec"
          onclick={copyRoomURL}
        />
        <Link href={"/"}>
          <Button title="Leave Room" icon="log-out" style="red" />
        </Link>
      </div>
      <SimpleMDE value={text} onChange={handleTyping} />

      {/* <div className="block md:flex space-x-5">
        <div className="prose flex flex-1 max-w-full bg-card rounded-md border border-outline p-5 ">
          <Markdown remarkPlugins={[remarkBreaks]}>{text}</Markdown>
        </div>
      </div> */}
    </section>
  );
}
