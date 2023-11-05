import { useEffect, useState } from "react";
import "./lola.css";

function FourLetterWord({ word }: { word: string }) {
  const safe = word.replace(/[^a-zA-Z]/g, "").padEnd(4, ".");
  let classNameStr = "letter-box";
  if (safe === "PLAY") classNameStr = "action";
  if (safe !== "PLAY" && safe !== "REDO" && safe !== "WAIT") {
    //@ts-ignore
    document.title = safe.toUpperCase();
  } else {
    //@ts-ignore
    document.title = "Lola";
  }
  return (
    <div className="word">
      <span className={classNameStr}>
        <span
          className={"letter"}
          style={{ opacity: safe.charAt(0) == "." ? 0 : 1 }}
        >
          {safe.charAt(0)}
        </span>
      </span>
      <span className={classNameStr}>
        <span
          className={"letter"}
          style={{ opacity: safe.charAt(1) == "." ? 0 : 1 }}
        >
          {safe.charAt(1)}
        </span>
      </span>
      <span className={classNameStr}>
        <span
          className={"letter"}
          style={{ opacity: safe.charAt(2) == "." ? 0 : 1 }}
        >
          {safe.charAt(2)}
        </span>
      </span>
      <span className={classNameStr}>
        <span
          className={"letter"}
          style={{ opacity: safe.charAt(3) == "." ? 0 : 1 }}
        >
          {safe.charAt(3)}
        </span>
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

  const [word, setWord] = useState("PLAY");

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
    if (time > 86) {
      //@ts-ignore
      window.player.pause();
      setWord("REDO");
      return;
    }
    if (lines[lineIndex] === undefined) return;
    const { start, text } = processLine(lines[lineIndex]);
    if (lines[lineIndex - 1] !== undefined)
      setWord(processLine(lines[lineIndex - 1]).text);
    if (start < time) setLineIndex(lineIndex + 1);
  }, [time]);

  return (
    <div
      onClick={
        word == "PLAY"
          ? () => {
              setWord("WAIT");
              //@ts-ignore
              window.player.play();
            }
          : word == "REDO"
          ? () => {
              //@ts-ignore
              window.player.currentTime = 0;
              setWord("PLAY");
              setTime(0);
              setLineIndex(0);
            }
          : () => {}
      }
      style={{
        cursor: lineIndex < 1 || word == "REDO" ? "pointer" : "unset",
        pointerEvents: lineIndex < 1 || word == "REDO" ? "auto" : "none",
      }}
    >
      <FourLetterWord word={word} />
    </div>
  );
}
