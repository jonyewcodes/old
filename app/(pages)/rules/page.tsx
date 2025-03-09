"use client";
import React, { useEffect, useState } from "react";

const sectionIds = [
  "Brief Rules",
  "Registration",
  "Competition Platform",
  "Contest Format and Scoring",
  "Awards and Rankings",
  "Conduct of the Contest",
  "Participants' Code of Conduct",
  "Terms and Conditions",
];

interface SubHeadingProps {
  children: string;
  className?: string;
}
function SubHeading({ children, className }: SubHeadingProps) {
  return (
    <h2 className={`${className} text-xl text-primary font-bold`}>
      {children}
    </h2>
  );
}
function SubHeading2({ children, className }: SubHeadingProps) {
  return <h3 className={`${className} text-lg font-bold`}>{children}</h3>;
}

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
                {typeof item[0] === 'string' && renderStringWithBold(item[0])}
                {Array.isArray(item.slice(1)) && renderList(item.slice(1))}
              </li>
            );
          } else {
            return (
              <li key={index} className="ml-4">
                {renderStringWithBold(item)}
              </li>
            );
          }
        })}
      </ul>
    );
  };

  const renderStringWithBold = (str: string) => {
    const parts = str.split(/(<b>.*?<\/b>)/g);

    return parts.map((part, index) => {
      if (part.match(/<b>.*<\/b>/)) {
        return (
          <b key={index} dangerouslySetInnerHTML={{ __html: part }} />
        );
      } else {
        return part; 
      }
    });
  };

  return renderList(items);
}

function BriefRules() {
  return (
    <section id="Brief Rules">
      <SubHeading className="slab">Brief Rules</SubHeading>
      <p className="mt-4">
        <span className="font-semibold">What is it:</span> SEL is a{" "}
        <b>4-hour long</b>, team online problem solving competition.
      </p>
      <p className="mt-4">
        <span className="font-semibold">Team rules:</span> Teams comprise of{" "}
        <b>3 to 5 members</b>.
      </p>
      <p className="mt-4">
        <span className="font-semibold">Who can participate:</span> The school
        category is open exclusively to students in
        <b>pre-university education</b>, i.e. Junior Colleges, Secondary
        Schools, Polytechnics, ITE, international high schools or equivalent.
        There are no restrictions on who can participate in the open category.
      </p>
      <p className="mt-4">
        <span className="font-semibold">What is allowed:</span> All internet
        resources such as textbooks, and any computer programs (e.g. graphing
        software, IDEs) are allowed. Communication with individuals outside the
        team related to the problems is <b>strictly prohibited</b>. The usage of{" "}
        <b>any</b> Generative AI tools such as ChatGPT is also{" "}
        <b>strictly prohibited</b>.
      </p>
      <p className="mt-4">
        <span className="font-semibold">Competition format:</span> Teams are
        awarded points for successfully answering problems. Correct answers
        unlock new, harder problems. Wrong answers and skipping problems lead to
        fewer points. The teams with the most points win!
      </p>
    </section>
  );
}

function Registration() {
  return (
    <section className="mt-12" id="Registration">
      <SubHeading className="slab mb-4">Registration</SubHeading>
      <UnorderedList
        items={[
          "Participants must register in the competition in order to participate.",
          "Registration is open at sgeconsleague.org from <b>1 May</b> to <b>4 July 2025</b>.",
          "Each team must comprise <b>3 to 5 members</b>.",
          "For the school category, all team members must be pre-university students: i.e. studying in high school/equivalent or below (JCs/MI, Secondary Schools, Polytechnics, international high schools, etc.).",
          "Each contestant must be a member of only <b>one team</b>.",
          "Team names <b>cannot be offensive</b>. The SEL Organisers reserve the right to alter the name or disqualify any team whose name is deemed offensive.",
          "By participating in SEL, all participants agree to follow the rules of Singapore Economics League, as well as the Participant Code of Conduct.",
        ]}
      />
    </section>
  );
}

function CompetitionPlatform() {
  return (
    <section className="mt-12" id="Competition Platform">
      <SubHeading className="slab mb-4">Competition Platform</SubHeading>
      <UnorderedList
        items={[
          "Teams participate through SEL's own online competition platform",
          "The link to the competition platform will be accessible via the SEL website.",
          "Log-in details for individual teams will be sent to them via <b>email</b> a few days before the contest date.",
          "The competition platform will feature a <b>live leaderboard</b> that ranks the points of teams in real time. During the final <b>30 minutes</b> of the contest, the live leaderboard will be hidden, for added suspense.",
        ]}
      />
    </section>
  );
}

function ContestFormatAndScoring() {
  return (
    <section id="Contest Format and Scoring" className="mt-12">
      <SubHeading className="slab">Contest Format and Scoring</SubHeading>
      <p className="mt-4">
        The contest includes a variety of question formats to test your
        versatility. Below is an overview of the different question formats you
        may encounter.
      </p>

      <SubHeading2 className="mt-10">Question Types</SubHeading2>
      <p className="mt-4">
        The contest includes a variety of question formats to test your
        versatility. Below is an overview of the most common formats.
      </p>

      <div className="mt-6 space-y-6">
        <div className="border-l-4 border-primary pl-4 py-2">
          <h4 className="font-semibold text-baseText">
            1. Multiple Choice (MCQ)
          </h4>
          <p className="text-lg text-baseText mt-1">
            Choose <b>1</b> answer out of <b>4</b> options (A, B, C, D).
          </p>
        </div>

        <div className="border-l-4 border-primary pl-4 py-2">
          <h4 className="font-semibold text-baseText">2. MCQ Multi-select</h4>
          <ul className="list-disc ml-6 text-lg mt-1 space-y-1 text-baseText">
            <li>Choose N answers out of M options, where N ≤ M.</li>
            <li>No marks are awarded for partially correct answers.</li>
          </ul>
        </div>

        <div className="border-l-4 border-primary pl-4 py-2">
          <h4 className="font-semibold text-baseText">3. Integer</h4>
          <p className="text-lg text-baseText mt-1">
            Enter an integer from <b>-99999</b> to <b>99999</b>.
          </p>
        </div>

        <div className="border-l-4 border-primary pl-4 py-2">
          <h4 className="font-semibold text-baseText">4. Integer Set</h4>
          <p className="text-lg text-baseText mt-1">
            Individually input a set of N integers.
          </p>
        </div>

        <div className="border-l-4 border-primary pl-4 py-2">
          <h4 className="font-semibold text-baseText">5. Float</h4>
          <ul className="list-disc ml-6 text-lg mt-1 space-y-1 text-baseText">
            <li>
              Enter numeric values (with decimals) from <b>-99999.99999</b> to{" "}
              <b>99999.99999</b>.
            </li>
            <li>
              Answers with extra decimal precision are accepted if they remain
              within the specified tolerance.
            </li>
          </ul>
        </div>

        <div className="border-l-4 border-primary pl-4 py-2">
          <h4 className="font-semibold text-baseText">6. Sort</h4>
          <p className="text-lg text-baseText mt-1">
            Sort N different values into the correct sequence.
          </p>
        </div>

        <div className="border-l-4 border-primary pl-4 py-2">
          <h4 className="font-semibold text-baseText">7. True/False Set</h4>
          <p className="text-lg text-baseText mt-1">
            Give your answer to N True/False questions.
          </p>
        </div>

        <div className="border-l-4 border-primary pl-4 py-2">
          <h4 className="font-semibold text-baseText">8. String</h4>
          <ul className="list-disc ml-6 text-lg mt-1 space-y-1 text-baseText">
            <li>Input a string of up to 30 characters in length.</li>
            <li>
              An exact match is required. Extra characters or spaces result in
              an incorrect answer.
            </li>
          </ul>
        </div>

        <div className="border-l-4 border-primary pl-4 py-2">
          <h4 className="font-semibold text-baseText">9. String Set</h4>
          <p className="text-lg text-baseText mt-1">
            Input a set of N strings. Each must be exactly correct.
          </p>
        </div>

        <div className="border-l-4 border-primary pl-4 py-2">
          <h4 className="font-semibold text-baseText">10. Table</h4>
          <ul className="list-disc ml-6 text-lg mt-1 space-y-1 text-baseText">
            <li>Key in the contents of an N×M table.</li>
            <li>Answers can require either string or integer table entries.</li>
          </ul>
        </div>
      </div>

      <SubHeading2 className="mt-12">
        Submission Attempts and Scoring
      </SubHeading2>
      <ul className="list-disc ml-6 mt-2 space-y-2 text-baseText">
        <li>
          Each MCQ, MCQ Multi-select, Sort, and True/False Set question-part
          allows <b>3 attempts</b>.
        </li>
        <li>
          After <b>3 incorrect attempts</b>, that question-part is disabled and
          scores <b>0</b>.
        </li>
        <li>No partial credit is given; an exact match is always required.</li>
      </ul>

      <SubHeading2 className="mt-12">Main Problems Scoring</SubHeading2>
      <p className="mt-4">
        The following lookup table illustrates SEL&apos;s scoring scheme:
      </p>

      <div className="mt-6 border-2 border-primary rounded-xl overflow-hidden w-full">
        <table
          className="w-full text-center border-separate"
          style={{ borderSpacing: 0 }}
        >
          <colgroup>
            <col className="w-[140px]" />
            <col className="w-[90px]" />
            <col className="w-[90px]" />
            <col className="w-[90px]" />
            <col className="w-[90px]" />
            <col className="w-[90px]" />
            <col className="w-[90px]" />
          </colgroup>

          <thead className="bg-secondary text-white">
            <tr>
              <th
                rowSpan={2}
                className="px-3 py-2 border border-primary font-medium whitespace-normal break-words"
              >
                Full number of points
              </th>
              <th
                colSpan={6}
                className="px-3 py-2 border border-primary font-medium whitespace-normal break-words"
              >
                Number of incorrect answers
              </th>
            </tr>
            <tr>
              <th className="px-3 py-2 border border-primary font-medium">0</th>
              <th className="px-3 py-2 border border-primary font-medium">1</th>
              <th className="px-3 py-2 border border-primary font-medium">2</th>
              <th className="px-3 py-2 border border-primary font-medium">3</th>
              <th className="px-3 py-2 border border-primary font-medium">4</th>
              <th className="px-3 py-2 border border-primary font-medium">
                5+
              </th>
            </tr>
          </thead>

          <tbody className="bg-white text-baseText">
            <tr>
              <td className="px-3 py-2 border border-primary font-semibold">
                2
              </td>
              <td className="px-3 py-2 border border-primary">2</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-primary font-semibold">
                3
              </td>
              <td className="px-3 py-2 border border-primary">3</td>
              <td className="px-3 py-2 border border-primary">2</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-primary font-semibold">
                4
              </td>
              <td className="px-3 py-2 border border-primary">4</td>
              <td className="px-3 py-2 border border-primary">3</td>
              <td className="px-3 py-2 border border-primary">2</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-primary font-semibold">
                5
              </td>
              <td className="px-3 py-2 border border-primary">5</td>
              <td className="px-3 py-2 border border-primary">3</td>
              <td className="px-3 py-2 border border-primary">2</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-primary font-semibold">
                6
              </td>
              <td className="px-3 py-2 border border-primary">6</td>
              <td className="px-3 py-2 border border-primary">4</td>
              <td className="px-3 py-2 border border-primary">3</td>
              <td className="px-3 py-2 border border-primary">2</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-primary font-semibold">
                7
              </td>
              <td className="px-3 py-2 border border-primary">7</td>
              <td className="px-3 py-2 border border-primary">4</td>
              <td className="px-3 py-2 border border-primary">3</td>
              <td className="px-3 py-2 border border-primary">2</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-primary font-semibold">
                8
              </td>
              <td className="px-3 py-2 border border-primary">8</td>
              <td className="px-3 py-2 border border-primary">5</td>
              <td className="px-3 py-2 border border-primary">3</td>
              <td className="px-3 py-2 border border-primary">2</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-primary font-semibold">
                9
              </td>
              <td className="px-3 py-2 border border-primary">9</td>
              <td className="px-3 py-2 border border-primary">5</td>
              <td className="px-3 py-2 border border-primary">4</td>
              <td className="px-3 py-2 border border-primary">3</td>
              <td className="px-3 py-2 border border-primary">2</td>
              <td className="px-3 py-2 border border-primary">1</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-primary font-semibold">
                10
              </td>
              <td className="px-3 py-2 border border-primary">10</td>
              <td className="px-3 py-2 border border-primary">6</td>
              <td className="px-3 py-2 border border-primary">4</td>
              <td className="px-3 py-2 border border-primary">3</td>
              <td className="px-3 py-2 border border-primary">2</td>
              <td className="px-3 py-2 border border-primary">1</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul className="list-disc ml-6 mt-4 space-y-2 text-baseText">
        <li>
          Every <b>30 minutes</b>, teams receive a <b>free skip</b> to discard a
          problem without penalty.
        </li>
        <li>
          If no free skips are available, skipping a question incurs a{" "}
          <b>3 point</b> penalty.
        </li>
      </ul>

      <SubHeading2 className="mt-12">Ecomania</SubHeading2>
      <p className="mt-4">
        At <b>10:00 AM</b>, the Ecomania section unlocks, offering 15 new
        problems across <b>5 categories</b> (Microeconomics, Firms, Game Theory,
        Macroeconomics, and Financial Economics). Each category has 3 problems
        in ascending difficulty:
      </p>
      <div className="mt-6 border-2 border-primary rounded-xl overflow-hidden">
        <table
          className="w-full text-left border-separate"
          style={{ borderSpacing: 0 }}
        >
          <thead className="bg-secondary text-white">
            <tr>
              <th className="px-4 py-3 border border-primary font-medium">
                Microeconomics
              </th>
              <th className="px-4 py-3 border border-primary font-medium">
                Firm Theory
              </th>
              <th className="px-4 py-3 border border-primary font-medium">
                Game Theory
              </th>
              <th className="px-4 py-3 border border-primary font-medium">
                Macroeconomics
              </th>
              <th className="px-4 py-3 border border-primary font-medium">
                Finance
              </th>
            </tr>
          </thead>
          <tbody className="bg-white text-baseText">
            <tr>
              <td className="px-4 py-3 border border-primary">Micro Q1</td>
              <td className="px-4 py-3 border border-primary">Firms Q1</td>
              <td className="px-4 py-3 border border-primary">
                Game Theory Q1
              </td>
              <td className="px-4 py-3 border border-primary">Macro Q1</td>
              <td className="px-4 py-3 border border-primary">Finance Q1</td>
            </tr>
            {[2, 3].map((q) => (
              <tr key={q}>
                <td className="px-4 py-3 border border-primary">
                  Micro Q{q}{" "}
                  <span className="text-[#FF004F] font-semibold">(Locked)</span>
                </td>
                <td className="px-4 py-3 border border-primary">
                  Firms Q{q}{" "}
                  <span className="text-[#FF004F] font-semibold">(Locked)</span>
                </td>
                <td className="px-4 py-3 border border-primary">
                  Game Theory Q{q}{" "}
                  <span className="text-[#FF004F] font-semibold">(Locked)</span>
                </td>
                <td className="px-4 py-3 border border-primary">
                  Macro Q{q}{" "}
                  <span className="text-[#FF004F] font-semibold">(Locked)</span>
                </td>
                <td className="px-4 py-3 border border-primary">
                  Finance Q{q}{" "}
                  <span className="text-[#FF004F] font-semibold">(Locked)</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="list-disc ml-6 mt-4 space-y-2 text-baseText">
        <li>
          Unlock each subsequent problem by completing the earlier ones in that
          category.
        </li>
        <li>
          From <b>10:00 AM to 11:00 AM</b>, completing an entire category
          doubles its points as a <b>bonus</b>.
        </li>
        <li>
          After <b>11:00 AM</b>, participants can still access Economania
          questions, however bonus points shall no longer be awarded.
        </li>
        <li>Ecomania problems cannot be skipped.</li>
      </ul>
    </section>
  );
}

function AwardsAndRankings() {
  return (
    <section className="mt-12" id="Awards and Rankings">
      <SubHeading className="slab">Awards and Rankings</SubHeading>
      <p className="mt-4">
        The school category and open category have separate leaderboards and
        rankings.
      </p>
      <p className="mt-4">
        The awards are determined according to the cutoffs below, where <b>n</b>{" "}
        is the total number of teams, and <b>⌈x⌉</b> represents the ceiling
        function. Teams are ranked by the cumulative point total. A rank of{" "}
        <b>r</b> indicates that exactly <b>r - 1</b> teams scored strictly more
        points.
      </p>
      <p className="mt-4">
        The <b>top 5%</b> of teams will receive the <b>Gold</b> award, the{" "}
        <b>top 15%</b> will receive the <b>Silver</b> award, and the{" "}
        <b>top 30%</b> of teams will receive the <b>Bronze</b> award.
      </p>
      <div className="mt-6 border-2 border-primary rounded-xl overflow-hidden">
        <table
          className="w-full text-left border-separate"
          style={{ borderSpacing: 0 }}
        >
          <thead className="bg-secondary text-white">
            <tr>
              <th className="px-4 py-3 border border-primary font-medium">
                Award
              </th>
              <th className="px-4 py-3 border border-primary font-medium">
                Rank Range
              </th>
              <th className="px-4 py-3 border border-primary font-medium">
                % Cutoff
              </th>
            </tr>
          </thead>
          <tbody className="bg-white text-baseText">
            <tr>
              <td className="px-4 py-3 border border-primary text-[#D4AF37] font-medium">
                Gold
              </td>
              <td className="px-4 py-3 border border-primary">
                rank ≤ ⌈0.05 × n⌉
              </td>
              <td className="px-4 py-3 border border-primary">Top 5%</td>
            </tr>
            <tr>
              <td className="px-4 py-3 border border-primary text-[#C0C0C0] font-medium">
                Silver
              </td>
              <td className="px-4 py-3 border border-primary">
                ⌈0.05 × n⌉+1 to ⌈0.15 × n⌉
              </td>
              <td className="px-4 py-3 border border-primary">Top 15%</td>
            </tr>
            <tr>
              <td className="px-4 py-3 border border-primary text-[#CD7F32] font-medium">
                Bronze
              </td>
              <td className="px-4 py-3 border border-primary">
                ⌈0.15 × n⌉+1 to ⌈0.30 × n⌉
              </td>
              <td className="px-4 py-3 border border-primary">Top 30%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul className="list-disc ml-6 mt-4 space-y-2 text-baseText">
        <li>
          Teams will be ranked according to the cumulative point total obtained
          during the contest.
        </li>
        <li>
          A rank of <b>r</b> denotes that <b>r - 1</b> teams scored strictly
          more than that team.
        </li>
      </ul>
    </section>
  );
}

function ConductOfTheContest() {
  return (
    <section className="mt-12" id="Conduct of the Contest">
      <SubHeading className="slab">Conduct of the Contest</SubHeading>
      <p className="mt-4">
        Participants may sign into the official <b>SEL Platform</b> at{" "}
        <b>08:40</b> on the day of the contest. The contest will begin promptly
        at <b>09:00</b> and end at <b>13:00</b>.
      </p>
      <p className="mt-4">
        The <b>Main Problems</b> are accessible throughout the contest may each
        contain multiple question parts. Main problems have a wide spectrum of
        difficulties, and later problems will tend to be harder. Each team may
        work on up to <b>four</b> problems at once. Upon completing a problem,
        the team may select a new problem to attempt from a pool of other
        questions.
      </p>
      <p className="mt-4">
        From <b>10:00</b> to <b>11:00</b>, <b>Ecoonomania</b> problems will be
        available for teams to attempt independently and concurrently with the
        Main Problems. Economania problems can range from Easy, Medium, or Hard
        levels, and may contain special variants of question types (e.g., unique
        multi-step MCQs). Regular Points and Bonus Points earned from Economania
        problems will be <b>added to the team’s overall score</b>.
      </p>
      <p className="mt-4">
        In the event of technical difficulties, disruptions, or questions about
        the platform, participants should raise a <b>Support Ticket</b> on the{" "}
        <a
          href="https://discord.gg/FMn74arxZd"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-secondary font-bold hover:text-secondary"
        >
          official SEL Discord Server
        </a>{" "}
        or email us at{" "}
        <a
          href="mailto:contact@sgeconsleague.org"
          className="underline text-secondary font-bold hover:text-secondary"
        >
          contact@sgeconsleague.org
        </a>
        . The SEL organisers shall not reply to any requests for clarifications,
        expansions, or translations of specialized economic terms or diagrams.
      </p>
    </section>
  );
}

function ParticipantsCodeofConduct() {
  return (
    <section className="mt-12" id="Participants' Code of Conduct">
      <SubHeading className="slab">Participants&apos; Code of Conduct</SubHeading>
      <p className="mt-4">
        All competitors in this event are required to follow the directives
        listed here, ensuring a fair and respectful atmosphere for everyone
        involved.
      </p>

      <SubHeading2 className="mt-6">
        Approved Collaboration and Reference Materials
      </SubHeading2>
      <p className="mt-4">
        Team members may work collaboratively throughout the competition,
        drawing upon a wide range of permissible resources, which include:
      </p>
      <UnorderedList
        items={[
          "Allowed calculators and other computational devices",
          "Software applications (e.g., spreadsheet tools, graphing apps, programming languages)",
          "Internet-based research, including search engines and websites",
          "Hardcopy or digital reading materials such as books, articles, or academic papers",
        ]}
      />
      <p className="mt-6">
        These examples are neither exhaustive nor do they represent an
        endorsement of specific items. Every participant must ensure that all
        materials are used responsibly and in line with the rules outlined in
        this document.
      </p>

      <SubHeading2 className="mt-10">
        Confidential Discussions and Restricted Communications
      </SubHeading2>
      <p className="mt-4">
        Entrants are prohibited from sharing details of the competition tasks
        with anyone beyond their own group. Each team is responsible for
        protecting its strategies, solutions, and data from external access by:
      </p>
      <UnorderedList
        items={[
          "Keeping discussions limited to secure, private channels rather than open forums",
          "Preventing non-team individuals from overhearing or intercepting communications",
          "Avoiding any information exchange with or assistance to other teams",
        ]}
      />

      <SubHeading2 className="mt-10">Ban on AI-Based Assistance</SubHeading2>
      <p className="mt-4">
        Competitors are strictly forbidden from using any AI-driven applications
        that can produce detailed solutions or answers. This prohibition
        includes, but is not restricted to, chatbots or advanced AI systems
        capable of generating contextually coherent text.
      </p>

      <SubHeading2 className="mt-10">
        Upholding Fairness and Respect
      </SubHeading2>
      <p className="mt-4">
        Participants must maintain the competition’s credibility by refraining
        from conduct that could undermine the event or harm others. Prohibited
        actions include, but are not confined to:
      </p>
      <UnorderedList
        items={[
          "Spreading defamatory statements, engaging in harassment, or promoting hostility",
          "Performing acts that intentionally or inadvertently disrupt the normal flow of the competition",
          "Communications that disparage the event, its organizers, or fellow participants",
        ]}
      />

      <SubHeading2 className="mt-10">
        Compliance with Legal Standards and Platform Guidelines
      </SubHeading2>
      <p className="mt-4">
        All contestants must adhere to Singaporean law and use the provided
        digital platforms responsibly. Activities outlawed under relevant
        statutes include:
      </p>
      <UnorderedList
        items={[
          "Illegitimate access to or manipulation of electronic data",
          "Initiating or contributing to denial-of-service disruptions",
          "Unauthorized interception or misuse of online services",
        ]}
      />

      <SubHeading2 className="mt-10">Consequences and Oversight</SubHeading2>
      <p className="mt-4 mb-6">
        The organizers enforce a strict stance against any violations of this
        Code of Conduct. Depending on the severity, offenses may result in
        immediate disqualification or other disciplinary actions. In especially
        grave instances, the matter may be referred to the relevant educational
        institution for additional measures.
      </p>
    </section>
  );
}


function TermsAndConditions() {
  return (
    <section className="mt-12" id="Terms and Conditions">
      <SubHeading className="slab">Terms and Conditions</SubHeading>
      <p className="mt-4">
        These Terms and Conditions govern your use of this website and
        participation in the Singapore Economics League.
      </p>

      <SubHeading2 className="mt-6">Views and Opinions Disclaimer</SubHeading2>
      <p className="mt-4">
        Any opinions expressed on this website reflect the personal views of the
        Singapore Economics League (SEL) Organizing Team. These views do not
        necessarily represent or reflect the positions of any individuals,
        institutions, or organizations with which the SEL Organizing Team may be
        affiliated, unless expressly stated. No intention exists to target,
        discredit, or defame any group—be it religious, racial, corporate,
        governmental, or otherwise. Any resemblance to real persons, living or
        deceased, or to actual events, entities, or organizations is
        unintentional and purely coincidental.
      </p>

      <SubHeading2 className="mt-10">Warranty Disclaimer</SubHeading2>
      <p className="mt-4">
        All information and material provided on this website are intended
        solely for general informational use. The SEL Organizing Team makes no
        claim or promise, explicit or implied, regarding the accuracy,
        availability, suitability, or completeness of the content—this includes
        (but is not limited to) implied warranties of merchantability or
        non-infringement. To the fullest extent permitted under applicable law,
        the SEL Organizing Team disclaims liability for any errors, omissions,
        or inconsistencies in the content, and for any direct or indirect
        damages, losses, or injuries arising from its use.
      </p>
      <p className="mt-4">
        This site does not offer professional, medical, or investment advice.
        Participants remain responsible for seeking qualified, expert guidance
        where appropriate. By using this website, you acknowledge that any
        reliance on the resources or links provided here is at your own risk.
      </p>

      <SubHeading2 className="mt-10">Fair Use</SubHeading2>
      <p className="mt-4">
        While the SEL Organizing Team strives to avoid unauthorized usage of
        copyrighted material, some elements on this website may include
        copyrighted works not explicitly cleared by the copyright holder.
        Information is made available for purposes of critique, education, and
        scholarship. In good faith, the SEL Organizing Team believes such use
        constitutes “fair use” under Section 190 of the Copyright Act 2021 in
        the Republic of Singapore.
      </p>

      <SubHeading2 className="mt-10">Data Protection and Privacy</SubHeading2>
      <p className="mt-4">
        The SEL Organizing Team values your privacy and strives to comply with
        Singapore’s Personal Data Protection Act 2012 (PDPA). Any personal data
        collected through this website or as part of the competition
        registration process is used only for the administration and operation
        of the Singapore Economics League, unless otherwise indicated or
        required by law. Your data will not be sold or voluntarily shared with
        third parties for marketing or other unrelated activities.
      </p>

      <SubHeading2 className="mt-10">Other Relevant Disclaimers</SubHeading2>
      <p className="mt-4">
        By using this website and participating in the Singapore Economics
        League, you agree not to:
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>
          Violate any Singapore laws pertaining to defamation, sedition,
          harassment, or other prohibited acts, whether in written, digital, or
          spoken communications
        </li>
        <li>
          Engage in activities that could compromise the security or integrity
          of this website or the competition’s digital platforms
        </li>
        <li>
          Misrepresent any material facts or misuse logos, branding, or other
          intellectual property belonging to the SEL Organizing Team or its
          partners
        </li>
      </ul>

      <SubHeading2 className="mt-10">Governing Law and Venue</SubHeading2>
      <p className="mt-4 mb-6">
        These Terms and Conditions shall be governed by and interpreted in
        accordance with the laws of the Republic of Singapore. Any disputes or
        claims arising from the use of this website or participation in the
        Singapore Economics League shall fall under the exclusive jurisdiction
        of the Singapore courts.
      </p>
    </section>
  );
}

function SideBar({ selected }: { selected?: string }) {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 20;
  
      el.scrollIntoView({ behavior: "smooth", block: "start" });  
      setTimeout(() => {
        window.scrollBy({ top: -offset, behavior: "smooth" }); 
      }, 100);
    }
  };
   

  return (
    <aside className="hidden lg:block top-24 self-start h-fit w-120">
      <div className="flex flex-col gap-2 border-b-2 lg:border-b-0 border-[#D0D0D0] px-2 py-4 lg:py-8">
        {sectionIds.map((id) => {
          const isActive = selected === id;
          return (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className={`block w-full text-left px-3 py-2 rounded transition-colors
                ${
                  isActive
                    ? "bg-secondary rounded-xl border-2 border-[#272a30] text-white font-semibold"
                    : "hover:underline text-baseText"
                }
              `}
            >
              {id}
            </button>
          );
        })}
      </div>
    </aside>
  );
}

function MobileContents() {
  const [showBar, setShowBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      if (currentY > lastScrollY) {
        setShowBar(false);
      } else {
        setShowBar(true);
      }
      setLastScrollY(currentY);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`
        lg:hidden w-full px-6 sm:px-12 mt-4
        transition-transform duration-300
        ${showBar ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="bg-white border-2 border-primary rounded shadow overflow-hidden">
        <div className="p-4 flex items-center justify-between">
          <span className="font-bold text-lg">Contents</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl font-bold"
          >
            {isOpen ? (
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-compact-up"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 13l8 -3l8 3" />
              </svg>
            ) : (
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-compact-down"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 11l8 3l8 -3" />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col space-y-2 p-4">
            {sectionIds.map((id) => (
              <li key={id}>
                <button
                  onClick={() => handleScrollTo(id)}
                  className="text-primary font-semibold text-left w-full slab"
                >
                  {id}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function RulesPage() {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let topRatio = 0;
        let topId = "";
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > topRatio) {
            topRatio = entry.intersectionRatio;
            topId = entry.target.id;
          }
        });
        if (topId) {
          setSelected(topId);
        }
      },
      {
        threshold: 0.2,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        html,
        body {
          height: 100vh;
          overflow-x: hidden;
        }
      `}</style>

      <div className="flex justify-center pt-8 pb-6">
        <div className="text-baseText text-center text-6xl font-bold px-8 py-4 rounded-xl w-full max-w-screen-lg mx-auto slab">
          Rules
        </div>
      </div>
      <MobileContents />
      <div className="flex justify-center mb-10">
        <div className="max-w-screen-lg w-full  flex flex-col lg:flex-row">
          <div className="hidden lg:block lg:w-96 lg:pr-4">
            <div className="sticky top-6 h-[calc(100vh-160px)] overflow-y-auto overflow-x-hidden mt-10">
              <SideBar selected={selected} />
            </div>
          </div>

          <div id="main-content" className="w-full lg:pl-16 mt-16">
            <BriefRules />
            <Registration />
            <CompetitionPlatform />
            <ContestFormatAndScoring />
            <AwardsAndRankings />
            <ConductOfTheContest />
            <ParticipantsCodeofConduct />
            <TermsAndConditions />
          </div>
        </div>
      </div>
    </>
  );
}
