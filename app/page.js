"use client";
import { useState } from "react";
import Header from "./_components/Header/page";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode && "dark"} h-full`}>
      <div className="bg-slate-100 dark:bg-slate-900 h-full">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
}
