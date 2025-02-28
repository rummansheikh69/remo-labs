import React, { useEffect, useRef } from "react";
import Layout from "../components/layout/Layout";
import { motion, useAnimation } from "framer-motion";

function Roadmap() {
  const roadmapItems = [
    {
      quarter: "Q1 2025",
      title: "Pre-Launch Setup",
      description:
        "Verify community presence on X & Telegram and publish our website",
      status: "Completed",
      color: "#89adca",
      direction: "left",
    },
    {
      quarter: "Q1 2025",
      title: "Token Launch & Airdrop",
      description:
        "Deploy the token on pump.fun & conduct an initial airdrop for early supporters",
      status: "In Progress",
      color: "#D0DCFF",
      direction: "right",
    },
    {
      quarter: "Q1 2025",
      title: "Community Growth",
      description:
        "Launch viral marketing campaigns and influencer partnerships to build our community",
      status: "Planned",
      color: "#758692",
      direction: "left",
    },
    {
      quarter: "Q1 2025",
      title: "CMC & CoinGecko Listings",
      description:
        "Outlines the strategic milestones for listing our token on CoinMarketCap (CMC) and CoinGecko",
      status: "Planned",
      color: "#758692",
      direction: "right",
    },
  ];

  const itemVariants = {
    hiddenLeft: { x: -100, opacity: 0, scale: 0.8 },
    hiddenRight: { x: 100, opacity: 0, scale: 0.8 },
    visible: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const roadmapBoxControls = useAnimation();
  const roadmapBoxRef = useRef(null);

  useEffect(() => {
    roadmapBoxControls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    });
  }, [roadmapBoxControls]);

  return (
    <Layout>
      <div className="flex min-h-screen items-center justify-center pb-14 pt-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* roadmap box */}
          <motion.div
            ref={roadmapBoxRef}
            className="bg-white/30 backdrop-blur-sm rounded-lg p-8"
            initial={{ opacity: 0.7, scale: 0.95 }}
            animate={roadmapBoxControls}
          >
            <h1 className="text-xl font-bold mb-2">Roadmap</h1>
            <p className="text-sm font-medium text-gray-600 mb-8">
              This roadmap shows our current plans, but we're just getting
              started. All completed features are actively maintained and
              updated.
            </p>
            <div className="relative mx-auto">
              <div className="flex flex-col items-center gap-4 mb-12">
                <div className="flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#89adca] border border-[#89adca]/20"></div>
                    <span className="text-xs text-gray-600">Completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#D0DCFF] border border-[#89adca]/20"></div>
                    <span className="text-xs text-gray-600">In Progress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#758692] border border-[#89adca]/20"></div>
                    <span className="text-xs text-gray-600">Planned</span>
                  </div>
                </div>
              </div>
              <div className="absolute left-4 md:left-1/2 top-12 bottom-0 w-[2px] bg-[#23598B]"></div>
              <div className="space-y-16">
                {roadmapItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex justify-start ${
                      item.direction === "right"
                        ? "md:justify-end"
                        : "md:justify-start"
                    } items-center`}
                    initial={
                      item.direction === "left" ? "hiddenLeft" : "hiddenRight"
                    }
                    animate="visible"
                    variants={itemVariants}
                  >
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2">
                      <div
                        className="w-4 h-4 rounded-full border-4 border-white shadow-sm"
                        style={{ backgroundColor: item.color }}
                      ></div>
                    </div>
                    <div
                      className={`w-full md:w-[calc(50%-3rem)] ${
                        item.direction === "right"
                          ? "pl-12 md:pl-12"
                          : "pl-12 md:pr-12 md:pl-0"
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-600">
                            {item.quarter}
                          </span>
                        </div>
                        <h3 className="text-base font-semibold">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}

export default Roadmap;
