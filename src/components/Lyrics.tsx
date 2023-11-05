import { useEffect, useState } from "react";
import "./lola.css";

function FourLetterWord({ word }: { word: string }) {
  const safe = word.replace(/[^a-zA-Z]/g, "").padEnd(4, " ");
  return (
    <div className="word">
      <span className="letter-box">
        <span class="letter">{safe.charAt(0)}</span>
      </span>
      <span className="letter-box">
        <span class="letter">{safe.charAt(1)}</span>
      </span>
      <span className="letter-box">
        <span class="letter">{safe.charAt(2)}</span>
      </span>
      <span className="letter-box">
        <span class="letter">{safe.charAt(3)}</span>
      </span>
    </div>
  );
}

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
    <div>
      <FourLetterWord
        word={lineIndex < 1 ? "" : processLine(lines[lineIndex - 1]).text}
      />
    </div>
  );
}
