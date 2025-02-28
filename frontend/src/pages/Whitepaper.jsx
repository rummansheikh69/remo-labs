import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";

const paragraphs = [
  "Something seen while sleeping.",
  "That's our motto and it's something we truly believe in whenever we develop a product.",
  "At Remo Labs, we believe that innovation begins where imagination takes flight. This is reflected in everything we do as we develop groundbreaking products.",
  "The realms of AI and blockchain have already made incredible strides, yet the horizon is vast with unexplored opportunities. This aligns perfectly with our motto and our decision to focus on these transformative technologies.",
  "AI agents are now capable of unlocking unparalleled potential, both on-chain and off-chain. Not only can they comprehend context and engage with real people, but they can also act autonomously to drive progress. The possibilities truly are infinite.",
  "By harnessing Solana's high throughput, low fees, and its vibrant ecosystem, we can decentralize products and agents to instill greater trust and security, all while maintaining scalability and affordability for real-world application.",
  "At Remo Labs, we're committed to empowering developers. Our products are designed with a seamless developer experience in mind, enabling us to push the boundaries of AI and blockchain innovation.",
  "We want you to soar beyond limits and uncover what’s waiting to be discovered.",
  "Because at Remo Labs, where you go is only the beginning.",
];

function Typewriter({ text, onComplete }) {
  const [displayText, setDisplayText] = useState("");
  const speed = 500 / text.length;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => text.slice(0, i + 1));
      i++;
      if (i > text.length) {
        clearInterval(interval);
        setTimeout(onComplete, 5);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.p
      className="text-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {displayText}
    </motion.p>
  );
}

function Whitepaper() {
  const [visibleIndex, setVisibleIndex] = useState(0);

  return (
    <Layout>
      <div className="flex min-h-screen items-center justify-center pb-14 pt-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="p-8 bg-main/50 backdrop-blur-sm rounded-lg">
            <h1 className="text-xl font-bold mb-8">Whitepaper</h1>
            <div className="space-y-4 max-w-3xl">
              {paragraphs.map((para, index) => (
                <React.Fragment key={index}>
                  {index <= visibleIndex && (
                    <Typewriter
                      text={para}
                      onComplete={() => {
                        if (index === visibleIndex) setVisibleIndex(index + 1);
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Whitepaper;
