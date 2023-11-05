import { useEffect, useState } from "react";

function processLine(line: string) {
  let [timeStr, text] = line.trim().split("]");
  timeStr = timeStr.replaceAll("[", "");
  let [minStr, secStr] = timeStr.split(":");
  let time = parseInt(minStr) * 60 + parseFloat(secStr);
  return { start: time, text: text.trim() };
}

export default function Lyrics({
  player,
  lines,
  lrcOffset,
}: {
  player: any;
  lines: string[];
  lrcOffset: number;
}) {
  const [time, setTime] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const handleTimeChange = () => {
      //@ts-ignore
      setTime(window.player.currentTime);
    };
    //@ts-ignore
    if (window.player !== undefined)
      //@ts-ignore
      window.player.addEventListener("timeupdate", handleTimeChange);
    return () => {
      //@ts-ignore
      window.player.removeEventListener("timeupdate", handleTimeChange);
    };
  }, []);

  useEffect(() => {
    console.log(lineIndex);
    const { start, text } = processLine(lines[lineIndex]);
    if (start < time) setLineIndex(lineIndex + 1);
  }, [time]);

  return (
    <div>{lineIndex < 1 ? "" : processLine(lines[lineIndex - 1]).text}</div>
  );
}
