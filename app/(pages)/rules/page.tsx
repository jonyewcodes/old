"use client";

import { useState, useEffect } from "react";

// Keep `sectionIds` outside the component to prevent unnecessary re-renders
const sectionIds = [
  "Rules",
  "Registration",
  "Competition Platform",
  "Question Types",
  "Points and Scoring",
  "Awards and Rankings",
];

interface SubHeadingProps {
  children: string;
  className?: string;
}
function SubHeading({ children, className }: SubHeadingProps) {
  return (
    <h2 className={`${className} text-xl text-[#3D9796] font-bold`}>
      {children}
    </h2>
  );
}
function SubHeading2({ children, className }: SubHeadingProps) {
  return <h3 className={`${className} text-lg font-bold`}>{children}</h3>;
}

// Ordered List Component
function OrderedList({ items }: { items: (string | (string | string[])[])[] }) {
  const renderList = (
    items: (string | (string | string[])[])[],
    level: number = 0
  ) => {
    const isTopLevel = level === 0;
    return (
      <ol
        className={isTopLevel ? "list-decimal ml-4" : "list-[lower-alpha] ml-8"}
      >
        {items.map((item, index) => {
          if (Array.isArray(item)) {
            const [nonListItem, subList] = item;
            return (
              <li key={index}>
                <span className={isTopLevel ? "font-bold" : ""}>
                  {typeof nonListItem === "string" && nonListItem}
                </span>
                {Array.isArray(subList) && renderList(subList, level + 1)}
              </li>
            );
          } else {
            return (
              <li key={index}>
                <span className={isTopLevel ? "font-bold" : ""}>{item}</span>
              </li>
            );
          }
        })}
      </ol>
    );
  };
  return renderList(items);
}

// Unordered List Component
function UnorderedList({
  items,
}: {
  items: (string | (string | string[])[])[];
}) {
  const renderList = (items: (string | (string | string[])[])[]) => {
    return (
      <ul className="list-disc ml-4">
        {items.map((item, index) => {
          if (Array.isArray(item)) {
            return (
              <li key={index} className="ml-4">
                {typeof item[0] === "string" && item[0]}
                {Array.isArray(item.slice(1)) && renderList(item.slice(1))}
              </li>
            );
          } else {
            return (
              <li key={index} className="ml-4">
                {item}
              </li>
            );
          }
        })}
      </ul>
    );
  };
  return renderList(items);
}

// Sections
function BreifRules() {
  return (
    <section id="Rules">
      <SubHeading className="mb-6">Brief Rules</SubHeading>
      <SubHeading2>What is Singapore Economics League?</SubHeading2>
      <UnorderedList
        items={[
          "SEL is a 3-hour long, team online problem solving competition.",
        ]}
      />
      <SubHeading2>Team rules:</SubHeading2>
      <UnorderedList items={["Teams comprise of 3 to 5 members"]} />
      <SubHeading2>Who can participate?</SubHeading2>
      <UnorderedList
        items={[
          "SEL is open to all students in pre-university education, ie Junior Colleges, Secondary Schools, Polytechnics, ITE, international high schools or equivalent",
        ]}
      />
      <SubHeading2>What is allowed?</SubHeading2>
      <UnorderedList
        items={[
          "All internet resources such as textbooks, and any computer programs such graphing software and IDEs are allowed. Generative AI tools such as ChatGPT are discouraged from use, but also allowed.",
          "Communication with individuals outside the team related to the problems is strictly prohibited.",
        ]}
      />
      <SubHeading2>Competition format</SubHeading2>
      <UnorderedList
        items={[
          "Teams are awarded points for successfully answering problems. Correct answers unlock new, harder problems. Wrong answers and skipping problems lead to less points. The teams with the most points win!",
        ]}
      />
    </section>
  );
}

function Registration() {
  return (
    <section className="mt-12" id="Registration">
      <SubHeading className="mb-6">Registration</SubHeading>
      <UnorderedList
        items={[
          "Participants must register in the competition in order to participate.",
          "Registration is open at sgeconsleague.org, during the period 1st May to 30th June 2025",
          "Teams consist of 3 to 5 members",
          "All team members must be pre-university students: ie studying in high school/equivalent or below. (Students at JCs/MI, Secondary Schools, Polytechnics, international high schools, and other equivalent institutions.)",
          "Each contestant is a member of only one team",
          "Team names cannot be offensive. The SEL Organisers reserve the right to alter the name or disqualify any team whose team name is deemed to be offensive.",
          "By participating, teams agree to follow the rules of Singapore Economics League, and the participant Code of Conduct",
        ]}
      />
    </section>
  );
}

function CompetitionPlatform() {
  return (
    <section className="mt-12" id="Competition Platform">
      <SubHeading className="mb-6">Competition Platform</SubHeading>
      <UnorderedList
        items={[
          "Teams participate in SEL via the online competition platform",
          "The link to the competition platform will be accessible via the SEL website.",
          "Log-in details for individual teams will be sent to them by email a few days before the contest date.",
          "The competition platform will feature a live leaderboard that ranks the points of teams in real time. During the final 30 minutes of the contest, the live leaderboard will be hidden, for added suspense.",
        ]}
      />
    </section>
  );
}

function QuestionTypes() {
  return (
    <section className="mt-12" id="Question Types">
      <SubHeading className="mb-6">Question Types</SubHeading>
      <OrderedList
        items={[
          ["MCQ", ["Choose 1 answer out of 4 options, A/B/C/D."]],
          [
            "MCQ Multi-select",
            [
              "Choose N answers out of M options, where N ≤ M.",
              "No marks are awarded for partially correct answers.",
            ],
          ],
          ["Integer", ["Enter an Integer from -99999 to 99999."]],
          ["Integer Set", ["Individually input a set of N integers."]],
          [
            "Float",
            [
              "Enter numeric values with decimals from -99999.99999 to 99999.99999.",
              "Submitted answers with a degree of accuracy greater than that specified by the question will also be accepted.",
            ],
          ],
          ["Sort", ["Sort N different values into the correct sequence."]],
          ["True False Set", ["Give your answer to N True/False questions."]],
          [
            "String",
            [
              "Input a string of up to 30 characters in length.",
              "An exact match is needed. Additional characters or white spaces will render the answer incorrect.",
            ],
          ],
          ["String Set", ["Input a set of N strings."]],
          [
            "Table",
            [
              "Key in the contents of an N by M table.",
              "Questions can require answers as either String Tables or Integer Tables.",
            ],
          ],
        ]}
      />
      <br></br>
      <UnorderedList
        items={[
          "Each MCQ, MCQ Multi-select, Sort, and True False Set question-part will be limited to 3 attempts per team. Following 3 incorrect attempts, the question-part will be disabled and 0 points will be awarded for that part.",
          "Note that no marks are awarded for questions with partially correct answers. An exact match is always needed to gain credit.",
        ]}
      />
    </section>
  );
}

function SideBar({ selected }: { selected?: string }) {
  const selectedStyle = "text-secondary font-bold lg:ml-4";

  const handleScroll = (id: string) => {
    const mainContent = document.getElementById("main-content");
    const section = document.getElementById(id);

    if (mainContent && section) {
      mainContent.scrollTo({
        top: section.offsetTop - mainContent.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="hidden lg:flex text-center lg:text-left items-center lg:items-start bg-transparent px-2 w-full lg:w-96 lg:pr-8 py-4 lg:py-8 flex-col gap-4 sticky top-0 lg:top-6 border-b-2 lg:border-b-0 border-[#D0D0D0]">
      {sectionIds.map((id) => (
        <button
          key={id}
          onClick={() => handleScroll(id)}
          className={`text-left w-full ${selected === id ? selectedStyle : ""}`}
        >
          {id.replace(/-/g, " ")}
        </button>
      ))}
    </div>
  );
}

function PointsAndScoring() {
  return (
    <section className="mt-12" id="Points and Scoring">
      <SubHeading className="mb-6">Points and Scoring</SubHeading>
      <SubHeading2>Main Problems</SubHeading2>
      <UnorderedList
        items={[
          "Each question (and question-part) has a certain number of points.",
          "If a question-part is a Multiple Choice Question, a single incorrect answer will lead to all the points for that question being deducted.",
        ]}
      />
      <div className="overflow-x-auto">
        <table className="w-full mt-6 border-collapse border border-gray-300 text-center">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">
                No incorrect answers (total points)
              </th>
              <th className="border border-gray-300 px-4 py-2">
                1 incorrect answer
              </th>
              <th className="border border-gray-300 px-4 py-2">
                2 incorrect answers
              </th>
              <th className="border border-gray-300 px-4 py-2">
                3 incorrect answers
              </th>
              <th className="border border-gray-300 px-4 py-2">
                4+ incorrect answers
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(9)].map((_, i) => (
              <tr key={i} className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{i + 2}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {Math.max(i - 1, 1)}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {Math.max(i - 2, 1)}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {Math.max(i - 3, 1)}
                </td>
                <td className="border border-gray-300 px-4 py-2">1</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <UnorderedList
        items={[
          "Every 30 minutes, teams receive a free skip, allowing them to skip questions without penalty.",
          "If a team has no free skips, skipping a question will incur a penalty of 3 points.",
        ]}
      />
      <SubHeading2>Ecomania</SubHeading2>
      <UnorderedList
        items={[
          "At 10.00 am, the additional section Economania is opened, with a table of 15 new problems to be attempted. There are 5 categories with 3 problems each, namely Microeconomics, Firms, Game Theory, Macroeconomics, and Financial Economics:",
        ]}
      />
      <div className="overflow-x-auto">
        <table className="w-full mt-6 border-collapse border border-gray-300 text-center">
          <tbody>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 text-center">
                Micro Q1
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                Firms Q1
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                Game theory Q1
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                Macro Q1
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                Finance Q1
              </td>
            </tr>
            {[2, 3].map((q) => (
              <tr key={q} className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Micro Q{q} (Locked)
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Firms Q{q} (Locked)
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Game theory Q{q} (Locked)
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Macro Q{q} (Locked)
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Finance Q{q} (Locked)
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <UnorderedList
        items={[
          "Later problems in each category can be unlocked by completing the earlier problem(s).",
          "From 10.00 am to 11.00 am: successfully answering one category of problems will grant teams a point bonus, where the points they obtained from that category are doubled.",
          "After 11.00 am, teams can still access the Economania Problems, however the point bonus will no longer apply.",
          "Economania problems cannot be skipped.",
        ]}
      />
    </section>
  );
}

function AwardsAndRankings() {
  return (
    <section className="mt-12" id="Awards and Rankings">
      <SubHeading className="mb-6">Awards and Rankings</SubHeading>
      <UnorderedList
        items={[
          "Teams will be ranked according to the cumulative point total obtained during the contest.",
          "A rank of n denotes that n - 1 teams scored strictly more than that team",
          "The top 5% of teams will receive the Gold award. The top 15% of teams will receive the Silver awards. The top 30% of teams will receive the Bronze Award.",
        ]}
      />
    </section>
  );
}

export default function RulesPage() {
  const [selected, setSelected] = useState("rules");

  useEffect(() => {
    const mainContent = document.getElementById("main-content");

    if (!mainContent) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelected(entry.target.id);
          }
        });
      },
      {
        root: mainContent, // Observe within main-content only
        threshold: 0.3, // Trigger when 30% of a section is visible
      }
    );

    // Observe each section
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      {/* Gradient Header */}
      <div className="bg-gradient-to-b from-[#f3f8fc] to-[#fafcff] h-[80px] sm:h-[100px] md:h-[120px] flex items-center justify-center">
        <div className="max-w-[1400px] w-full px-6 sm:px-12 lg:px-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-left font-serif">
            Rules
          </h1>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex items-center justify-center mb-10 mt-16">
        <div className="max-w-[1400px] w-full px-6 sm:px-12 lg:px-12 flex items-start flex-col lg:flex-row h-screen">
          {/* Sidebar Navigation */}
          <div className="hidden lg:block lg:w-64 lg:pr-4">
            <SideBar selected={selected} />
          </div>

          {/* Scrollable Main Content */}
          <div
            id="main-content"
            className="w-full lg:border-l-2 lg:border-[#D0D0D0] lg:pl-8 lg:h-[calc(100vh-160px)] lg:overflow-y-auto"
          >
            <BreifRules />
            <Registration />
            <CompetitionPlatform />
            <QuestionTypes />
            <PointsAndScoring />
            <AwardsAndRankings />
          </div>
        </div>
      </div>
    </>
  );
}
