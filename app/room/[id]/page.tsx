"use client";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { useState } from "react";
import Button from "@/app/components/Button";
import Link from "next/link";

export default function page() {
  const [value, setValue] = useState("");

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <section>
      <div className="flex space-x-3 justify-between">
        <Button title="Copy URL" icon="link" style="sec" />
        <Link href={"/"}>
          <Button title="Leave Room" icon="log-out" style="red" />
        </Link>
      </div>
      <SimpleMDE value={value} onChange={handleChange} />
      {/* <div className="block md:flex space-x-5">
        <div className="prose flex flex-1 max-w-full bg-card rounded-md border border-outline p-5 ">
          <Markdown remarkPlugins={[remarkBreaks]}>{value}</Markdown>
        </div>
      </div> */}
    </section>
  );
}
