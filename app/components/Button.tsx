"use client";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

interface Props {
  title: string;
  onclick?: () => void;
  style?: "pri" | "sec" | "mid" | "red";
  icon?: IconName;
  type?: "submit" | "button";
}

const MAP = {
  pri: { className: "bg-mainText text-black" },
  sec: { className: "bg-card text-secText" },
  mid: { className: "bg-background text-white" },
  red: { className: "bg-red text-mainText border-red" },
};

export default function Button({ title, onclick, style, type, icon }: Props) {
  const { className } = MAP[style || "pri"];
  return (
    <button
      className={`flex space-x-2 max-w-fit justify-center items-center font-medium rounded-md border border-outline py-2 px-3 ${className}`}
      type={type || "button"}
      onClick={onclick}
    >
      <p>{title}</p>
      {icon && <DynamicIcon className="size-4 sm:size-5" name={icon} />}
    </button>
  );
}
