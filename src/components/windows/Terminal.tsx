import { useState, useEffect, useRef } from "react";

interface TerminalProps {
  active: boolean;
}

const Terminal = ({ active }: TerminalProps) => {
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const prompt = "kyle@portfolio:~$";

  useEffect(() => {
    // Focus the input area when the terminal mounts
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [history]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      // Process the command
      setHistory((prev) => [...prev, `${prompt} ${input}`]);
      handleCommand(input);

      // Clear input
      setInput("");
    } else if (e.key === "Backspace") {
      setInput((prev) => prev.slice(0, -1));
    } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
      // Regular character input
      setInput((prev) => prev + e.key);
    }
  };

  const handleCommand = (cmd: string) => {
    switch (cmd.trim()) {
      case "clear":
        setHistory([]);
        break;
      case "help":
        setHistory((prev) => [
          ...prev,
          "Available commands: help, about, projects",
        ]);
        break;
      case "about":
        setHistory((prev) => [...prev, "Hi, I'm Kyle — a frontend developer."]);
        break;
      default:
        setHistory((prev) => [...prev, `Unknown command: ${cmd}`]);
    }
  };

  return (
    <div
      className="h-full overflow-y-auto bg-black px-2 py-1 text-sm"
      onClick={() => inputRef.current?.focus()}
      ref={containerRef}
    >
      {history.map((line, i) => (
        <div key={i} className={active ? "" : "opacity-50"}>
          {line}
        </div>
      ))}

      {/* Prompt + input */}
      <div
        ref={inputRef}
        tabIndex={0}
        className={
          "whitespace-pre outline-none " + (active ? "" : "opacity-50")
        }
        onKeyDown={handleKeyDown}
      >
        {`${prompt} ${input}`}
        {active ? <span className={"animate-blink"}>▮</span> : <span>▯</span>}
      </div>
    </div>
  );
};

export default Terminal;
