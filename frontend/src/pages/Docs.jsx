import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";

function Docs() {
  return (
    <Layout>
      <div className="flex min-h-screen items-start justify-center pt-12 pb-14">
        <div className=" max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* sidebar  */}
            <div className=" w-full lg:w-64">
              <div className=" bg-main rounded-lg flex items-center gap-7 py-3 px-6 lg:py-6">
                <div className=" hidden lg:block relative z-50">
                  <h2 class="text-lg font-semibold text-gray-800 mb-4">
                    Documentation
                  </h2>
                  <div class="space-y-4 ml-4">
                    <div>
                      <Link
                        class="text-blue-700 hover:text-sora-accent text-sm  duration-200 block py-2"
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
                            class="text-text text-xs pl-4 hover:text-blue-400 duration-200 block py-2 border-l border-t-zinc-600"
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
                  <label htmlFor="my-drawer-5" className="drawer-button">
                    <IoMenuSharp className=" w-6 h-6" />
                  </label>
                </div>

                <div className=" flex items-center gap-3 lg:hidden">
                  <p className="font-medium leading-none">Documentation</p>
                  <FaLongArrowAltRight className=" w-4 h-4 mt-1" />
                  <p className="font-medium leading-none text-blue-700">
                    Overview
                  </p>
                </div>

                <div className="drawer drawer-start">
                  <input
                    id="my-drawer-5"
                    type="checkbox"
                    className="drawer-toggle"
                  />

                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer-5"
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
                              class="text-blue-700 hover:text-sora-accent text-sm  duration-200 block py-2"
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
                                  class="text-text text-xs pl-4 hover:text-blue-400 duration-200 block py-2 border-l border-t-zinc-600"
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
            {/* sidebar end */}

            <div className="flex-1">
              <div className=" rounded-lg p-8 max-w-3xl bg-main">
                <div className="flex items-center justify-center min-h-full">
                  <div class="space-y-8">
                    <div class="space-y-2">
                      <h1 class="text-xl font-bold text-gray-900">Overview</h1>
                      <p class="text-sm text-gray-700"></p>
                    </div>
                    <div class="space-y-8">
                      <p>
                        Hi, we're Remo Labs, an organization dedicated to
                        harnessing the potential of AI within the Solana
                        ecosystem. We're developing innovative products that use
                        AI to open up new possibilities and experiences for both
                        developers and users.
                      </p>

                      <section class="space-y-4">
                        <div class="space-y-2">
                          <h2 class="text-lg font-semibold text-gray-800">
                            Open Source
                          </h2>
                        </div>
                        <div class="space-y-4 text-sm text-gray-700">
                          <p>
                            As outlined in our whitepaper, we are firm believers
                            in decentralization, which is why we're committed to
                            open-sourcing all of our projects, not just the
                            products. Our philosophy is to build everything
                            in-house without relying on third parties.
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

export default Docs;
