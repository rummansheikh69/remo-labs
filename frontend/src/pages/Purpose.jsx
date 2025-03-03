import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

function Purpose() {
  return (
    <Layout>
      <div className="flex min-h-screen items-start justify-center pt-12 pb-14">
        <div className=" max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className=" w-full lg:w-64">
              <div className=" bg-main flex items-center gap-7 rounded-lg py-3 px-6 lg:py-6">
                <div className=" hidden lg:block relative z-50">
                  <h2 class="text-lg font-semibold text-gray-800 mb-4">
                    Documentation
                  </h2>
                  <div class="space-y-4 ml-4">
                    <div>
                      <Link
                        class="text-gray-700 hover:text-sora-accent text-sm  duration-200 block py-2"
                        to="/docs"
                      >
                        overview
                      </Link>
                    </div>
                    <div>
                      <span class="text-sm text-gray-700 block py-2">remo</span>
                      <div class="ml-2 border-l border-zinc-600 my-1">
                        <div>
                          <Link
                            class="text-blue-700 text-xs pl-4 hover:text-blue-400 duration-200 block py-2 border-l border-t-zinc-600"
                            to="/docs/remo/purpose"
                          >
                            purpose
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className=" h-40"></div>
                  </div>
                </div>

                <div className="drawer-content block lg:hidden">
                  {/* Page content here */}
                  <label htmlFor="my-drawer-6" className="drawer-button">
                    <IoMenuSharp className=" w-6 h-6" />
                  </label>
                </div>

                <div className=" flex items-center gap-3 lg:hidden">
                  <p className="font-medium leading-none">Documentation</p>
                  <FaLongArrowAltRight className=" w-4 h-4 mt-1" />
                  <p className="font-medium leading-none text-text">remo</p>
                  <FaLongArrowAltRight className=" w-4 h-4 mt-1" />
                  <p className="font-medium leading-none text-blue-700">
                    purpose
                  </p>
                </div>

                <div className="drawer drawer-start">
                  <input
                    id="my-drawer-6"
                    type="checkbox"
                    className="drawer-toggle"
                  />

                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer-6"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>
                    <ul className="menu bg-main text-base-content min-h-full w-52 p-4 pt-20">
                      {/* Sidebar content here */}
                      <div className=" block lg:hidden relative">
                        <h2 class="text-lg font-semibold text-gray-800 mb-4">
                          Documentation
                        </h2>
                        <div class="space-y-4 ml-4">
                          <div>
                            <Link
                              class="text-text hover:text-sora-accent text-sm  duration-200 block py-2"
                              to="/docs"
                            >
                              overview
                            </Link>
                          </div>
                          <div>
                            <span class="text-sm text-gray-700 block py-2">
                              remo
                            </span>
                            <div class="ml-2 border-l border-zinc-600 my-1">
                              <div>
                                <Link
                                  class=" text-blue-700 text-xs pl-4 hover:text-blue-400 duration-200 block py-2 border-l border-t-zinc-600"
                                  to="/docs/remo/purpose"
                                >
                                  purpose
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className=" h-40"></div>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className=" rounded-lg p-8 max-w-3xl bg-main">
                <div className="flex items-center justify-center min-h-full">
                  <div class="space-y-8">
                    <div class="space-y-2">
                      <h1 class="text-xl font-bold text-gray-900">Purpose</h1>
                      <p class="text-sm text-gray-700"></p>
                    </div>
                    <div class="space-y-8">
                      <p>
                        At Remo Labs, we're dedicated to making AI accessible
                        and practical for everyone, from independent developers
                        to large enterprises. Our mission is to streamline AI
                        development by offering powerful tools and frameworks
                        that anyone can use to create, launch, and scale
                        intelligent systems in real-world applications. We
                        believe that innovation shouldn't be hidden behind
                        complexity, so we focus on building solutions that are
                        intuitive, flexible, and customizable to meet a wide
                        variety of needs.
                      </p>
                      <p>
                        Our approach bridges the gap between advanced AI
                        research and everyday use cases. Whether it's pioneering
                        research or a business tool designed to improve
                        efficiency, we provide the resources and support needed
                        to transform ideas into impactful solutions. Our goal is
                        to empower developers and organizations to push the
                        boundaries of AI, without being hindered by technical
                        obstacles.
                      </p>

                      <section class="space-y-4">
                        <div class="space-y-2">
                          <h2 class="text-lg font-semibold text-gray-800">
                            Why Solana?
                          </h2>
                        </div>
                        <div class="space-y-4 text-sm text-gray-700">
                          <p>
                            Beyond AI, we're excited to integrate blockchain
                            technology—specifically Solana—into our systems.
                            Solana’s vibrant AI community and its robust
                            ecosystem make it the ideal platform for our vision.
                            By leveraging Solana’s low-cost infrastructure and
                            decentralized nature, we're creating solutions that
                            are accessible to all.
                          </p>
                          <p>
                            The thriving AI and developer community on Solana
                            ensures that our technology will benefit those
                            already pushing the boundaries in this space. This
                            integration allows us to build solutions that are
                            not only innovative but also community-driven and
                            future-proof.
                          </p>
                          <p>
                            At Remo Labs, we're creating a bridge between AI and
                            crypto, developing tools that are cutting-edge,
                            practical, scalable, and ready to shape a smarter,
                            more connected future for everyone.
                          </p>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Purpose;
