"use client";

import { useState, useEffect, useCallback } from "react";

const WORDS = ["parking", "bus lane", "ULEZ", "congestion", "PCN"];

export default function RotatingWord({ className = "" }: { className?: string }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState(WORDS[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentWord = WORDS[wordIndex];

  const tick = useCallback(() => {
    if (isPaused) return;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      } else {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % WORDS.length);
      }
    }
  }, [displayText, isDeleting, isPaused, currentWord]);

  useEffect(() => {
    const speed = isDeleting ? 60 : 110;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <span className={className}>
      {displayText}
      <span className="ml-0.5 animate-pulse font-light text-teal-500" aria-hidden="true">
        |
      </span>
    </span>
  );
}
