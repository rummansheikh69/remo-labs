import React from "react";
import Layout from "../components/layout/Layout";

function Terms() {
  return (
    <Layout>
      <div className="flex min-h-screen items-center justify-center pb-14 pt-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="p-8 bg-main rounded-lg">
            <h1 class="text-xl font-bold mb-8">Terms of Service</h1>
            <div class="space-y-6 text-gray-700">
              <section>
                <h2 class="text-lg font-semibold mb-3">Acceptance of Terms</h2>
                <p class="text-sm">
                  By accessing and using Remo Labs’ services, you acknowledge
                  and agree to comply with these Terms of Service.
                </p>
              </section>
              <section>
                <h2 class="text-lg font-semibold mb-3">Use License</h2>
                <p class="text-sm">
                  Our content is provided under the MIT License. You are
                  permitted to view and fork our repositories in accordance with
                  the terms of the license.
                </p>
              </section>
              <section>
                <h2 class="text-lg font-semibold mb-3">Restrictions</h2>
                <p class="text-sm">You agree not to:</p>
                <ul class="list-disc ml-6 mt-2 text-sm">
                  <li>Use our services for illegal activities</li>
                  <li>Attempt unauthorized access to our systems</li>
                  <li>
                    Disrupt or interfere with the functioning of our services
                  </li>
                </ul>
              </section>
              <section>
                <h2 class="text-lg font-semibold mb-3">Disclaimer</h2>
                <p class="text-sm">
                  Our services are provided "as is" and without any warranties,
                  whether express or implied.
                </p>
              </section>
              <section>
                <h2 class="text-lg font-semibold mb-3">
                  Modifications To Terms
                </h2>
                <p class="text-sm">
                  We reserve the right to update or modify these terms at any
                  time. Last updated:{" "}
                  {new Date(
                    Date.now() - 3 * 24 * 60 * 60 * 1000
                  ).toLocaleDateString()}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Terms;
