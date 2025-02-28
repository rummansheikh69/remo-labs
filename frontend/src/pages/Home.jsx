import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";

const paragraphs = [
  [
    { text: "レモ", className: "text-3xl font-medium break-all" },
    { text: "remo", className: "text-2xl font-medium break-all" },
    { text: "[r-eh-moh] · noun", className: "text-lg text-gray-700 break-all" },
    { text: "", className: "w-full border-t border-gray-400 my-4 origin-left" },
    {
      text: "1. dream, vision, illusion.",
      className: "text-lg text-gray-600 break-all",
    },
  ],
  [
    { text: "リモラボ", className: "text-3xl font-medium break-all" },
    { text: "remo labs", className: "text-2xl font-medium break-all" },
    {
      text: "[reh-moh-labz] · proper noun",
      className: "text-lg text-gray-700 break-all",
    },
    { text: "", className: "w-full border-t border-gray-400 my-4 origin-left" },
    {
      text: "1. Something seen while sleeping.",
      className: "text-lg text-gray-600 break-all",
    },

    {
      text: "2. [Contract Address]",
      className: "text-lg text-text break-all",
      link: "https://dexscreener.com/solana/",
    },
  ],
];

function Typewriter({ items, onComplete, erase = false, speed = 50 }) {
  const [displayedItems, setDisplayedItems] = useState([]);
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    if (!erasing) {
      // Typing Effect
      if (index < items.length) {
        if (charIndex < items[index].text.length) {
          const timeout = setTimeout(() => setCharIndex(charIndex + 1), speed);
          return () => clearTimeout(timeout);
        } else {
          const timeout = setTimeout(() => {
            setIndex(index + 1);
            setCharIndex(0);
          }, speed);
          return () => clearTimeout(timeout);
        }
      } else if (erase) {
        setTimeout(() => setErasing(true), 1000);
      } else {
        onComplete && onComplete();
      }
    } else {
      // Smooth Erasing Effect
      if (index >= 0) {
        if (charIndex > 0) {
          const timeout = setTimeout(() => setCharIndex(charIndex - 1), speed);
          return () => clearTimeout(timeout);
        } else {
          const timeout = setTimeout(() => {
            setIndex(index - 1);
            if (index > 0) {
              setCharIndex(items[index - 1].text.length);
            }
          }, speed);
          return () => clearTimeout(timeout);
        }
      } else {
        onComplete && onComplete();
      }
    }
  }, [index, charIndex, erasing]);

  return (
    <div className="space-y-2 max-w-full">
      {items.slice(0, index + 1).map((item, i) => (
        <div key={i} className={item.className}>
          {item.link ? (
            <a
              className=" text-blue-500"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.text.slice(0, i === index ? charIndex : item.text.length)}
            </a>
          ) : (
            item.text.slice(0, i === index ? charIndex : item.text.length)
          )}
        </div>
      ))}
    </div>
  );
}

const Home = () => {
  const [stage, setStage] = useState(0);

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center bg-main/40 backdrop-blur-sm rounded-lg p-4 pr-20 max-w-full">
          <div className="p-4 flex items-center justify-start w-full">
            {stage === 0 && (
              <Typewriter
                items={paragraphs[0]}
                onComplete={() => setStage(2)}
                speed={20}
                erase={true} // Smoothly erases the first paragraph
              />
            )}
            {stage === 2 && <Typewriter items={paragraphs[1]} speed={10} />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
