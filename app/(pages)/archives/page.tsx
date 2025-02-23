import React from "react";
/* https://tabler.io/icons */

const Archives = () => {
  const archiveInfo = [
    {
      title: "2025",
      category: "Did you know?",
      content:
        "The unemployment rate for men is 8.4%. For married men, it's 4.9%.",
      link: "--",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col text-gray-800">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-[#f3f8fc] to-[#fafcff] h-[80px] sm:h-[100px] md:h-[100px] flex items-center justify-center">
        <div className="max-w-[1400px] w-full px-6 lg:px-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-left font-roboto-slab">
            Archives
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex items-center justify-center py-16">
        <div className="max-w-[1400px] w-full px-6 lg:px-12">
          {/* Intro Text */}
          <div className="max-w-[600px] mb-12">
            <p className="mb-4">
              Want to know who took the crown every year at SEL? <br />View the results here now!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {archiveInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#96D0C8] rounded-xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold">{info.title}</h2>
                <span className="inline-block w-fit text-sm font-medium text-gray-400 italic">
                  {info.category}
                </span>
                <p className="text-gray-600">{info.content}</p>
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full text-secondary font-semibold border-2 border-[#96D0C8] rounded-xl px-4 py-2 hover:bg-[#eaf2fb] shadow-lg transition-transform duration-200 ease-in-out hover:scale-105"
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
                  View 2025's Results Here!
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Archives;