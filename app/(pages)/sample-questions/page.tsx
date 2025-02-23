"use client";

export default function SampleQuestionsPage() {
  const sampleQuestions = [
    {
      title: "Economic Crisis on Arrakis",
      difficulty: "Easy",
      difficultyColor: "bg-[#D4F5E2] text-[#2E7D32]",
      description:
        "Solve economic instability on a desert planet using optimal resource management.",
      link: "https://drive.google.com/file/d/1FlMD5ZZ6KlNwrxzEght5rgBpR2WhH8PN/view?usp=drive_link",
    },
    {
      title: "Competition Sign-Ups",
      difficulty: "Medium",
      difficultyColor: "bg-[#FFF3C4] text-[#FF9800]",
      description:
        "Efficiently manage multiple sign-ups for an event using data structures.",
      link: "https://drive.google.com/file/d/1Hz9QmDKc_W0HmpxKWzWJBOMor7yDyIGE/view?usp=drive_link",
    },
    {
      title: "The AI Dilemma: Growth vs Risk",
      difficulty: "Hard",
      difficultyColor: "bg-[#FFEBEE] text-[#D32F2F]",
      description:
        "Balance AI development while mitigating risks in a futuristic society.",
      link: "https://drive.google.com/file/d/132-pfUdmQSYnAhOySHH39MSS-P66aQZQ/view?usp=drive_link",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col text-gray-800">
      {/* Top Gradient Header */}
      <div className="bg-gradient-to-b from-[#f3f8fc] to-[#fafcff] h-[80px] sm:h-[100px] md:h-[120px] flex items-center justify-center">
        <div className="max-w-[1400px] w-full px-6 lg:px-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-left font-roboto-slab">
            Sample Questions
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex items-center justify-center py-16">
        <div className="max-w-[1400px] w-full px-6 lg:px-12">
          {/* Intro Text */}
          <div className="max-w-[600px] mb-12">
            <p className="mb-4">
              We've put together these questions to help you get familiar with what you'll see on contest day, covering a range of difficulty levels.
            </p>
            <p>
            We hope you find them helpful!
            </p>
          </div>

          {/* Sample Questions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleQuestions.map((question, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#96D0C8] rounded-xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition"
              >
                {/* Title */}
                <h2 className="text-xl font-semibold">{question.title}</h2>

                {/* Difficulty Badge */}
                <span
                  className={`inline-block w-fit px-3 py-1 text-sm font-medium rounded-full ${question.difficultyColor}`}
                >
                  {question.difficulty}
                </span>

                {/* Description */}
                <p className="text-gray-600">{question.description}</p>

                {/* Download Button with "zoom in" hover */}
                <a
                  href={question.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center w-full
                    text-secondary font-semibold
                    border-2 border-[#96D0C8]
                    rounded-xl px-4 py-2
                    hover:bg-[#eaf2fb]
                    shadow-lg
                    transition-transform duration-200 ease-in-out
                    hover:scale-105
                  "
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
