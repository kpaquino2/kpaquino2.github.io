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
    const aboutText = [
      "Hi, I'm Kyle Aquino.",
      "\u00A0",
      "I'm a developer who enjoys creating practical and well-structured solutions. While my current work focuses on frontend development, I'm comfortable working across the stack, from building APIs to handling deployments. My freelance experience taught me how to manage projects end to end.",
      "\u00A0",
      "I care about simplicity, clarity, and maintainable code. I also enjoy systems thinking, solving problems, and continuously learning new tools and approaches that make my work more effective.",
      "\u00A0",
      "Tech I often use: React, Next.js, TypeScript, Node.js, PostgreSQL, and Tailwind.",
      "\u00A0",
      "When I'm not coding, I'm usually reading, exploring new frameworks or thinking about better ways to design and organize systems.",
      "\u00A0",
      "Run 'projects' to see what I've worked on, or 'help' to view all commands.",
    ];
    console.log(aboutText);
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
        setHistory((prev) => [...prev, ...aboutText]);
        break;
      default:
        setHistory((prev) => [...prev, `Unknown command: ${cmd}`]);
    }
  };

  return (
    <div
      className="h-full overflow-y-auto bg-white px-2 py-1 text-sm dark:bg-black"
      onClick={() => inputRef.current?.focus()}
      ref={containerRef}
    >
      {history.map((line, i) => (
        <div
          key={i}
          className={"leading-[1.2] " + (active ? "" : "opacity-50")}
        >
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
