"use client";

export default function SampleQuestionsPage() {
  return (
    <div className="px-4 lg:px-16 py-10 flex flex-col items-center text-center">
      <h1 className="px-8 lg:px-0 text-5xl font-bold text-center mb-6">
        Sample Questions
      </h1>

      <div className="mt-1 max-w-5xl p-4 bg-white rounded-lg shadow-md w-full mb-4 text-left relative">
        <span className="absolute right-3 text-green-600 font-bold text-lg">
          EASY
        </span>
        <h2 className="text-xl font-bold mb-2 w-4/5 truncate ">
          Economic Crisis on Arrakis
        </h2>
        <p className="text-gray-600 mb-4">
          Examines the economic consequences of political upheaval and market
          restructuring, analysing the effects of decentralised production and
          supply chain disruptions on trade and labour allocation.
        </p>
        <a
          href="https://drive.google.com/file/d/1FlMD5ZZ6KlNwrxzEght5rgBpR2WhH8PN/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 rounded-lg font-bold hover:opacity-80 "
        >
          View Sample Question
        </a>
      </div>

      <div className="max-w-5xl mb-7 p-4 bg-white rounded-lg shadow-md w-full mb-4 text-left relative">
        <span className="absolute right-3 text-yellow-600 font-bold text-lg">
          MEDIUM
        </span>
        <h2 className="text-xl font-bold mb-2 w-4/5 truncate ">
          Competition Sign-Ups
        </h2>
        <p className="text-gray-600 mb-4">
          Analyses the impact of network externalities on competition
          participation and pricing strategy, examining how an organiser can
          maximise revenue by considering price elasticity and peer influence.
        </p>
        <a
          href="https://drive.google.com/file/d/1Hz9QmDKc_W0HmpxKWzWJBOMor7yDyIGE/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 rounded-lg font-bold hover:opacity-80 "
        >
          View Sample Question
        </a>
      </div>

      <div className="max-w-5xl mb-7 p-4 bg-white rounded-lg shadow-md w-full text-left relative">
        <span className="absolute right-3 text-red-600 font-bold text-lg">
          HARD
        </span>
        <h2 className="text-xl font-bold mb-2 w-4/5 truncate ">
          The AI Dilemma: Growth versus Existential Risk
        </h2>
        <p className="text-gray-600 mb-4">
          Explores the trade-off between economic growth and existential risks
          posed by Artificial Intelligence, as discussed in a research paper by
          Stanford professor Dr. Charles Jones.
        </p>
        <a
          href="https://drive.google.com/file/d/132-pfUdmQSYnAhOySHH39MSS-P66aQZQ/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 rounded-lg font-bold hover:opacity-80 "
        >
          View Sample Question
        </a>
      </div>
    </div>
  );
}
