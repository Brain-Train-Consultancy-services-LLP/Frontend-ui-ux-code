/*"use client";

import { useEffect, useMemo, useState } from "react";
import Editor from "@monaco-editor/react";



type Difficulty = "medium" | "hard";

type Question = {
  id: string;
  title: string;
  description: string;
  constraints: string[];
  examples: string[];
  difficulty: Difficulty;
  tags: string[];
};

type Answer = {
  code: string;
  approach: string;
  language: string;
  locked: boolean;
};



const QUESTION_POOL: Question[] = [
  {
    id: "q1",
    title: "Array Rotation Check",
    description:
      "Given an array, determine if it is a rotation of a sorted array.",
    constraints: ["1 ≤ N ≤ 10^5"],
    examples: ["Input: [3,4,5,1,2]", "Output: true"],
    difficulty: "medium",
    tags: ["array", "logic"],
  },
  {
    id: "q2",
    title: "First Non-Repeating Character",
    description:
      "Given a string, find the first non-repeating character.",
    constraints: ["1 ≤ length ≤ 10^5"],
    examples: ["Input: 'aabbcdd'", "Output: 'c'"],
    difficulty: "medium",
    tags: ["string", "hashmap"],
  },
  {
    id: "q3",
    title: "LRU Cache Design",
    description:
      "Design and implement an LRU Cache with O(1) get and put operations.",
    constraints: ["1 ≤ capacity ≤ 10^5"],
    examples: ["put(1,1), put(2,2), get(1) → 1"],
    difficulty: "hard",
    tags: ["design", "hashmap", "dll"],
  },
];



const LANGUAGE_TEMPLATES: Record<string, string> = {
  javascript: `function solve(input) {\n  // write your logic here\n}`,
  python: `def solve(input):\n    pass`,
  java: `class Solution {\n  public static void main(String[] args) {\n    \n  }\n}`,
  cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() {\n  \n}`,
};



function seededShuffle<T>(array: T[], seed: number) {
  const result = [...array];
  let m = result.length;
  while (m) {
    const i = Math.floor(Math.abs(Math.sin(seed++)) * m--);
    [result[m], result[i]] = [result[i], result[m]];
  }
  return result;
}


export default function CodingTestPage() {
  const userSeed = 987654; // later → hash(userId)

  const QUESTIONS = useMemo(
    () => seededShuffle(QUESTION_POOL, userSeed).slice(0, 2),
    []
  );

  const [currentQ, setCurrentQ] = useState(0);
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(LANGUAGE_TEMPLATES.javascript);
  const [approach, setApproach] = useState("");
  const [timeLeft, setTimeLeft] = useState(30 * 60);
   const [fullscreen, setFullscreen] = useState(false);
  const [tabSwitchCount, setTabSwitchCount] = useState(0);


  const q = QUESTIONS[currentQ];



  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) handleNext();
  }, [timeLeft]);



  useEffect(() => {
    function handleBlur() {
      setTabSwitchCount(c => c + 1);
    }

    window.addEventListener("blur", handleBlur);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) handleBlur();
    });

    return () => {
      window.removeEventListener("blur", handleBlur);
    };
  }, []);



  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/api/test/autosave", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionId: q.id,
          code,
          approach,
          language,
        }),
      });
    }, 15000);

    return () => clearInterval(interval);
  }, [code, approach, language, q.id]);

 

  function handleNext() {
    if (!code.trim()) return alert("Code is required");

    if (currentQ === 0) {
      setCurrentQ(1);
      setCode(LANGUAGE_TEMPLATES[language]);
      setApproach("");
      setTimeLeft(30 * 60);
    } else {
      if (!approach.trim()) return alert("Approach is mandatory");

      fetch("/api/test/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers: QUESTIONS.map(q => ({
            questionId: q.id,
            code,
            approach,
            language,
          })),
          tabSwitchCount,
        }),
      });

      alert("Test submitted successfully");
    }
  }

  

  return (
    <div className="h-screen flex flex-col bg-gray-50">
  
      <div className="flex justify-between items-center px-6 py-3 border-b bg-white">
        <div>
          <h1 className="font-semibold text-lg">Coding Assessment</h1>
          <p className="text-xs text-gray-500">
            Difficulty: {q.difficulty.toUpperCase()} • Tags: {q.tags.join(", ")}
          </p>
        </div>
        <span className="text-red-600 font-medium">
          {Math.floor(timeLeft / 60)}:
          {(timeLeft % 60).toString().padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1">
       
        <div className="w-2/5 p-6 border-r bg-white overflow-y-auto">
          <h2 className="text-xl font-semibold mb-3">{q.title}</h2>
          <p className="text-gray-700 mb-4">{q.description}</p>

          <h3 className="font-medium">Constraints</h3>
          <ul className="list-disc ml-6 mb-4">
            {q.constraints.map(c => <li key={c}>{c}</li>)}
          </ul>

          <h3 className="font-medium">Examples</h3>
          {q.examples.map(e => (
            <pre key={e} className="bg-gray-100 p-2 rounded mb-2 text-sm">
              {e}
            </pre>
          ))}
        </div>

        
        <div className="w-3/5 flex flex-col p-6">
          <div className="flex justify-between mb-2">
            <span className="font-medium">Code Editor</span>
            <select
              className="border rounded px-2 py-1"
              value={language}
              onChange={e => {
                setLanguage(e.target.value);
                setCode(LANGUAGE_TEMPLATES[e.target.value]);
              }}
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
            </select>
          </div>

          <div className="flex-1 border rounded-lg overflow-hidden">
            <Editor
              height="100%"
              language={language}
              theme="vs-dark"
              value={code}
              onChange={(v) => setCode(v || "")}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                automaticLayout: true,
              }}
            />
          </div>

          <textarea
            className="mt-4 border rounded-lg p-4"
            placeholder="Explain approach, time complexity, edge cases..."
            value={approach}
            onChange={e => setApproach(e.target.value)}
          />

          <div className="flex justify-between items-center mt-4">
            <span className="text-xs text-gray-500">
              Tab switches detected: {tabSwitchCount}
            </span>
            <button
              onClick={handleNext}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg"
            >
              {currentQ === 0 ? "Next Question" : "Submit Test"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}*/

"use client";

import { useEffect, useMemo, useState } from "react";
import Editor from "@monaco-editor/react";

/* ================= TYPES ================= */

type Difficulty = "medium" | "hard";

type Question = {
  id: string;
  title: string;
  description: string;
  constraints: string[];
  examples: string[];
  difficulty: Difficulty;
  tags: string[];
};

type Answer = {
  code: string;
  approach: string;
  language: string;
  locked: boolean;
};

/* ================= QUESTION POOL ================= */

const QUESTION_POOL: Question[] = [
  {
    id: "q1",
    title: "Array Rotation Check",
    description: "Determine if an array is a rotation of a sorted array.",
    constraints: ["1 ≤ N ≤ 10^5"],
    examples: ["Input: [3,4,5,1,2]", "Output: true"],
    difficulty: "medium",
    tags: ["array"],
  },
  {
    id: "q2",
    title: "LRU Cache Design",
    description: "Design an LRU cache with O(1) operations.",
    constraints: ["1 ≤ capacity ≤ 10^5"],
    examples: ["put(1,1), get(1) → 1"],
    difficulty: "hard",
    tags: ["design", "hashmap"],
  },
];

/* ================= LANGUAGE TEMPLATES ================= */

const LANGUAGE_TEMPLATES: Record<string, string> = {
  javascript: `function solve(input) {\n  \n}`,
  python: `def solve(input):\n    pass`,
  java: `class Solution {\n  public static void main(String[] args) {\n    \n  }\n}`,
  cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() {\n  \n}`,
};

/* ================= UTIL ================= */

function seededShuffle<T>(array: T[], seed: number) {
  const result = [...array];
  let m = result.length;
  while (m) {
    const i = Math.floor(Math.abs(Math.sin(seed++)) * m--);
    [result[m], result[i]] = [result[i], result[m]];
  }
  return result;
}

/* ================= PAGE ================= */

export default function CodingTestPage() {
  const userSeed = 987654;

  const QUESTIONS = useMemo(
    () => seededShuffle(QUESTION_POOL, userSeed).slice(0, 2),
    []
  );

  const [currentQ, setCurrentQ] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [fullscreen, setFullscreen] = useState(false);
  const [tabSwitchCount, setTabSwitchCount] = useState(0);

  const [answers, setAnswers] = useState<Record<string, Answer>>(() => {
    const initial: Record<string, Answer> = {};
    QUESTIONS.forEach(q => {
      initial[q.id] = {
        code: LANGUAGE_TEMPLATES.javascript,
        approach: "",
        language: "javascript",
        locked: false,
      };
    });
    return initial;
  });

  const q = QUESTIONS[currentQ];
  const answer = answers[q.id];

  /* ================= TIMER ================= */

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(v => v - 1), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) handleNext();
  }, [timeLeft]);

  /* ================= TAB SWITCH ================= */

  useEffect(() => {
    const handleBlur = () => setTabSwitchCount(c => c + 1);

    window.addEventListener("blur", handleBlur);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) handleBlur();
    });

    return () => window.removeEventListener("blur", handleBlur);
  }, []);

  /* ================= COPY-PASTE BLOCK ================= */

  useEffect(() => {
    const block = (e: Event) => e.preventDefault();

    document.addEventListener("copy", block);
    document.addEventListener("paste", block);
    document.addEventListener("cut", block);
    document.addEventListener("contextmenu", block);

    return () => {
      document.removeEventListener("copy", block);
      document.removeEventListener("paste", block);
      document.removeEventListener("cut", block);
      document.removeEventListener("contextmenu", block);
    };
  }, []);

  /* ================= HANDLERS ================= */

  function updateAnswer(partial: Partial<Answer>) {
    setAnswers(prev => ({
      ...prev,
      [q.id]: { ...prev[q.id], ...partial },
    }));
  }

  function handleNext() {
    if (!answer.code.trim()) {
      alert("Code is required");
      return;
    }

    setAnswers(prev => ({
      ...prev,
      [q.id]: { ...prev[q.id], locked: true },
    }));

    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(c => c + 1);
      setTimeLeft(30 * 60);
    } else {
      if (!answer.approach.trim()) {
        alert("Approach explanation required");
        return;
      }
      console.log("FINAL SUBMISSION", answers, tabSwitchCount);
      alert("Test submitted");
    }
  }

  /* ================= UI ================= */

  return (
    <div className={`h-screen flex flex-col ${fullscreen ? "fixed inset-0 z-50 bg-black" : ""}`}>
      {/* Header */}
      <div className="flex justify-between px-6 py-3 border-b bg-white">
        <div>
          <h1 className="font-semibold">Coding Assessment</h1>
          <p className="text-xs text-gray-500">
            {q.difficulty.toUpperCase()} • {q.tags.join(", ")}
          </p>
        </div>
        <div className="text-red-600 font-medium">
          {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
        </div>
      </div>

      <div className="flex flex-1">
        {/* Question */}
        <div className="w-2/5 p-6 border-r overflow-y-auto bg-white">
          <h2 className="text-xl font-semibold mb-3">{q.title}</h2>
          <p className="mb-4">{q.description}</p>

          <h3 className="font-medium">Constraints</h3>
          <ul className="list-disc ml-6 mb-4">
            {q.constraints.map(c => <li key={c}>{c}</li>)}
          </ul>

          <h3 className="font-medium">Examples</h3>
          {q.examples.map(e => (
            <pre key={e} className="bg-gray-100 p-2 rounded mb-2 text-sm">
              {e}
            </pre>
          ))}
        </div>

        {/* Editor */}
        <div className="w-3/5 flex flex-col p-6">
          <div className="flex justify-between mb-2">
            <select
              disabled={answer.locked}
              value={answer.language}
              onChange={e =>
                updateAnswer({
                  language: e.target.value,
                  code: LANGUAGE_TEMPLATES[e.target.value],
                })
              }
              className="border px-2 py-1 rounded"
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
            </select>

            <button
              onClick={() => setFullscreen(f => !f)}
              className="text-sm underline"
            >
              {fullscreen ? "Exit Fullscreen" : "Fullscreen"}
            </button>
          </div>

          <div className="flex-1 border rounded overflow-hidden">
            <Editor
              height="100%"
              language={answer.language}
              theme="vs-dark"
              value={answer.code}
              onChange={v => updateAnswer({ code: v || "" })}
              options={{
                readOnly: answer.locked,
                minimap: { enabled: false },
                fontSize: 14,
                automaticLayout: true,
              }}
            />
          </div>

          <textarea
            disabled={answer.locked}
            className="mt-4 border rounded p-4"
            placeholder="Explain your approach"
            value={answer.approach}
            onChange={e => updateAnswer({ approach: e.target.value })}
          />

          <div className="flex justify-between mt-4">
            <span className="text-xs text-gray-500">
              Tab switches: {tabSwitchCount}
            </span>
            <button
              onClick={handleNext}
              className="bg-indigo-600 text-white px-6 py-2 rounded"
            >
              {currentQ === QUESTIONS.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
