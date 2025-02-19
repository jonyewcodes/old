"use client";

export default function SampleQuestionsPage() {
  return (
    <main className="flex min-h-screen flex-col text-gray-800">
      {/* Gradient Header - Fully Spread, Left-Aligned (Same as FAQ) */}
      <div className="bg-gradient-to-b from-[#f3f8fc] to-[#fafcff] h-[120px] flex items-center px-6 lg:px-12 w-full">
        <h1 className="max-w-[1550px] text-6xl font-medium text-left font-serif">Sample Questions</h1>
      </div>

      {/* Content Container */}
      <div className="px-6 lg:px-12 ml-auto mr-auto max-w-[1550px] pb-32">
        {/* Description Section */}
        <p className="text-base text-gray-700 mt-10 mb-6">
          We've compiled some problems for you which we think best represent
          <br />those you'll be seeing on the contest day.
        </p>
        <p className="text-base text-gray-700 mt-2 mb-14">
          We hope you find them helpful!
        </p>

        {/* Table Container */}
        <div className="w-full border-2 border-[#D5E6F5] rounded-xl bg-white shadow-md overflow-hidden mb-32">
          <table className="w-full border-collapse">
            {/* Table Header */}
            <thead>
              <tr className="bg-[#E8F4F8] text-left text-gray-800 border-b border-[#D5E6F5]">
                <th className="py-3 px-6 border-r border-[#D5E6F5] font-semibold">Sample</th>
                <th className="py-3 px-6 border-r border-[#D5E6F5] font-semibold">Difficulty</th>
                <th className="py-3 px-6 font-semibold">Download</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="text-gray-700">
              {/* Row 1 - Economic Crisis on Arrakis */}
              <tr className="border-b border-[#D5E6F5]">
                <td className="py-3 px-6 border-r border-[#D5E6F5]">Economic Crisis on Arrakis</td>
                <td className="py-3 px-6 border-r border-[#D5E6F5] font-medium text-[#3D9796]">Easy</td>
                <td className="py-3 px-6">
                  <a
                    href="https://drive.google.com/file/d/1FlMD5ZZ6KlNwrxzEght5rgBpR2WhH8PN/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-[135px] items-center text-secondary font-semibold border-2 border-[#D5E6F5] rounded-xl px-3 py-2 hover:bg-[#eaf2fb] transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                      <path d="M7 11l5 5l5 -5" />
                      <path d="M12 4l0 12" />
                    </svg>
                    Download
                  </a>
                </td>
              </tr>

              {/* Row 2 - Competition Sign-Ups */}
              <tr className="border-b border-[#D5E6F5]">
                <td className="py-3 px-6 border-r border-[#D5E6F5]">Competition Sign-Ups</td>
                <td className="py-3 px-6 border-r border-[#D5E6F5] font-medium text-[#FFAE00]">Medium</td>
                <td className="py-3 px-6">
                  <a
                    href="https://drive.google.com/file/d/1Hz9QmDKc_W0HmpxKWzWJBOMor7yDyIGE/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-[135px] items-center text-secondary font-semibold border-2 border-[#D5E6F5] rounded-xl px-3 py-2 hover:bg-[#eaf2fb] transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                      <path d="M7 11l5 5l5 -5" />
                      <path d="M12 4l0 12" />
                    </svg>
                    Download
                  </a>
                </td>
              </tr>

              {/* Row 3 - The AI Dilemma: Growth vs Risk */}
              <tr>
                <td className="py-3 px-6 border-r border-[#D5E6F5]">The AI Dilemma: Growth vs Risk</td>
                <td className="py-3 px-6 border-r border-[#D5E6F5] font-medium text-[#FF004F]">Hard</td>
                <td className="py-3 px-6">
                  <a
                    href="https://drive.google.com/file/d/132-pfUdmQSYnAhOySHH39MSS-P66aQZQ/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-[135px] items-center text-secondary font-semibold border-2 border-[#D5E6F5] rounded-xl px-3 py-2 hover:bg-[#eaf2fb] transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                      <path d="M7 11l5 5l5 -5" />
                      <path d="M12 4l0 12" />
                    </svg>
                    Download
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}