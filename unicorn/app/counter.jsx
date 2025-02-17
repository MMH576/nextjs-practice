"use client";
import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleCount = async (increment) => {
    setIsLoading(true);
    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    setCount(increment ? count + 1 : count - 1);
    setIsLoading(false);
  };

  return (
    <div className="p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl">
      <h2 className="text-2xl font-semibold text-white mb-8">{props.title}</h2>
      <div className="flex items-center justify-between gap-8">
        <button
          onClick={() => handleCount(false)}
          disabled={isLoading}
          className="w-20 h-20 flex items-center justify-center bg-rose-500/10 text-rose-300 rounded-2xl hover:bg-rose-500/20 hover:scale-105 transition-all duration-200 text-3xl font-bold border border-rose-500/20 disabled:opacity-50"
        >
          -
        </button>
        <span className="font-geist-mono text-5xl font-bold text-white bg-white/5 py-6 px-10 rounded-2xl min-w-[160px] text-center">
          {isLoading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            count
          )}
        </span>
        <button
          onClick={() => handleCount(true)}
          disabled={isLoading}
          className="w-20 h-20 flex items-center justify-center bg-violet-500/10 text-violet-300 rounded-2xl hover:bg-violet-500/20 hover:scale-105 transition-all duration-200 text-3xl font-bold border border-violet-500/20 disabled:opacity-50"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
