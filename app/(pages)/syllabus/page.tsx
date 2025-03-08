import React from "react";

export const metadata = {
  title: "Syllabus | Singapore Economics League",
};

export default function SyllabusPage() {
  return (
    <div className="w-full text-baseText">
      <div className="flex justify-center pt-8 pb-6">
        <div className="text-baseText text-center text-6xl font-bold px-8 py-4 rounded-xl w-full max-w-7xl mx-6 slab">
          Syllabus
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto mt-16">
      <h2 className="text-2xl font-semibold mb-2 text-primary slab">Content</h2>
        <p className="mb-4">
          The content tested in SEL can be classified according to 5 broad
          topics, namely:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-1 ml-4">
          <li>Microeconomics</li>
          <li>Game Theory and Behavioural Economics</li>
          <li>Firm Theory</li>
          <li>Macroeconomics</li>
          <li>Financial Economics</li>
        </ul>
        <p className="mb-4">
          The setting of the questions is guided by the{" "}
          <a
            href="https://ieo-official.org/prepare#syllabus"
            className="underline text-secondary font-bold font-medium"
            target="_blank"
            rel="noreferrer"
          >
            syllabus
          </a>{" "}
          established by the <b>International Economics Olympiad (IEO)</b>. Do note
          that the exact breadth and depth of content in SEL can vary. For
          instance, while many easy questions are within the A level / IB
          syllabus, some harder questions can sometimes delve into topics
          covered at the university level.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-primary slab">Mathematical Methods</h2>
        <p className="mb-4">
          Some of the economics questions set in SEL will be highly rigorous and
          analytical in their approach. Therefore, we encourage teams to
          familiarise themselves with a quantitative treatment of economics
          concepts, such as equations for supply and demand, constructing and
          solving models, etc.
        </p>
        <p className="mb-4">
          Most of the mathematical skills required to solve SEL questions are
          within the A level / IB math syllabi. Particularly important
          mathematical topics for SEL include:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-1 ml-4">
          <li>Differentiation and Integration</li>
          <li>Functions and Graphs</li>
          <li>Sequences and Series</li>
          <li>Geometry</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2 text-primary slab">How To Prepare</h2>
        <p className="mb-4">
          While SEL questions range in difficulty, a majority of our problems
          are solvable via the application of concepts taught at the JC level.
          The SEL Academics Team thus recommends the following learning
          resources for preparation:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-1 ml-4">
          <li>A Level and IB lecture notes on Economics</li>
          <li>
            <a
              href="https://www.core-econ.org/"
              className="underline text-secondary font-bold font-medium"
              target="_blank"
              rel="noreferrer"
            >
              Core Econ
            </a>
            , the recommended online textbook for students competing in the IEO
          </li>
          <li>
            <a
              href="https://ieo-official.org/prepare#syllabus"
              className="underline text-secondary font-bold font-medium"
              target="_blank"
              rel="noreferrer"
            >
              Past year papers
            </a>{" "}
            of the IEO
          </li>
          <li>
            Undergraduate textbooks, such as Principles of Economics by
            N. Gregory Mankiw
          </li>
        </ul>
        <p className="font-semibold">Good luck!</p>
      </div>
    </div>
  );
}