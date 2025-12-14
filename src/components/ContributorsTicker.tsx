import { useEffect, useRef } from "react";

const contributors = [
  "OpenAI", "Meta AI", "Google DeepMind", "Anthropic", "Hugging Face", 
  "Stanford NLP", "Allen AI", "Microsoft Research", "FAIR", "EleutherAI"
];

const ContributorsTicker = () => {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    let animationId: number;
    let position = 0;

    const animate = () => {
      position -= 0.5;
      if (position <= -ticker.scrollWidth / 2) {
        position = 0;
      }
      ticker.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const duplicatedContributors = [...contributors, ...contributors];

  return (
    <div className="absolute top-0 left-0 right-0 overflow-hidden py-2 border-b border-border/20">
      <div ref={tickerRef} className="flex whitespace-nowrap">
        {duplicatedContributors.map((name, i) => (
          <span
            key={i}
            className="font-mono text-xs text-muted-foreground/50 mx-6"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ContributorsTicker;
