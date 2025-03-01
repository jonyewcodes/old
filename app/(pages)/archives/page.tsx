/* https://tabler.io/icons */
import React from "react";

export const metadata = {
  title: "Archives | SEL",
};

export default function Archives() {
  const archiveInfo = [
    {
      title: "2025",
      category: "Did you know?",
      content: "The unemployment rate for men is 8.4%. For married men, it's 4.9%.",
      link: "--",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col text-gray-800">
      <div className="flex justify-center pt-8 pb-6">
        <div className="text-baseText text-center text-6xl font-bold px-8 py-4 rounded-xl w-full max-w-7xl mx-6 slab">
          Archives
        </div>
      </div>
      <div className="flex items-center justify-center py-16">
        <div className="max-w-7xl w-full px-6 lg:px-12">
          <div className="text-center text-lg mb-12">
            <p className="mb-4">
              Want to know who took the crown every year at SEL? <br />
              View the results here now!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {archiveInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white border-4 border-primary rounded-xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition"
              >
                <h2 className="text-2xl font-semibold">{info.title}</h2>
                <span className="inline-block w-fit text-lg font-medium text-gray-400 italic">
                  {info.category}
                </span>
                <p className="text-gray-600 text-lg">{info.content}</p>
                <button
                  disabled
                  className="flex items-center justify-center w-full text-gray-400 font-semibold border-2 border-gray-300 rounded-xl px-4 py-2 cursor-not-allowed text-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-speakerphone mr-2"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 8a3 3 0 0 1 0 6" />
                    <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
                    <path d="M12 8h0l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
                  </svg>
                  View 2025&apos;s Results Here!
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
