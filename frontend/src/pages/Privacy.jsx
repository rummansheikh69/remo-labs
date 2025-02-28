import React from "react";
import Layout from "../components/layout/Layout";

function Privacy() {
  return (
    <Layout>
      <div className="flex min-h-screen items-center justify-center pb-14 pt-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="p-8 bg-main rounded-lg">
            <h1 class="text-xl font-bold mb-8">Privacy Policy</h1>
            <div class="space-y-6 text-gray-700">
              <section>
                <h2 class="text-lg font-semibold mb-3">
                  Information We Collect
                </h2>
                <p class="text-sm">
                  We collect only the essential information needed to operate
                  our services. This may include: Usage data and analytics and
                  technical details such as browser type and device information.
                </p>
              </section>
              <section>
                <h2 class="text-lg font-semibold mb-3">
                  How We Use Information
                </h2>
                <p class="text-sm">
                  The information we collect is used to: Enhance our services
                  and improve user experience, analyze usage trends, optimize
                  platform performance and ensure the security of our platform.
                </p>
              </section>
              <section>
                <h2 class="text-lg font-semibold mb-3">Data Protection</h2>
                <p class="text-sm">
                  We apply appropriate technical and organizational measures to
                  safeguard your data.
                </p>
              </section>
              <section>
                <h2 class="text-lg font-semibold mb-3">Contact</h2>
                <p class="text-sm">
                  If you have any questions or concerns regarding your privacy,
                  please reach out to us at{" "}
                  <a
                    href="mailto:contact@remolabs.io"
                    className=" text-blue-700"
                  >
                    contact@remolabs.io
                  </a>
                </p>
              </section>
              <section>
                <h2 class="text-lg font-semibold mb-3">Updates</h2>
                <p class="text-sm">
                  This privacy policy may be revised from time to time. Last
                  updated:{" "}
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

export default Privacy;
