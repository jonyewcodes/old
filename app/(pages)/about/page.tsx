import React from "react";
import Image from "next/image"; // if you need images
import Link from "next/link";   // if you need Next.js routing

export const metadata = {
  title: "About | SEL",
};

// Team members array
const teamMembers = [
  {
    name: "Ho Jon Yew",
    roles: ["Chief Organiser"],
    link: "https://www.linkedin.com/in/jon-yew-ho/",
  },
  {
    name: "Tevel Sho",
    roles: ["Deputy Chief Organiser", "Lead Developer"],
    link: "https://www.linkedin.com/in/tevelsho",
  },
  {
    name: "Lucas Lee",
    roles: ["Head of Operations"],
    link: "https://www.linkedin.com/in/lucas-lee-zy ",
  },
  {
    name: "Li Zonglun",
    roles: ["Head of Academics", "Problem Setter"],
    link: "https://www.linkedin.com/in/zonglun-li-80970a276",
  },
  {
    name: "Zhao Yuxuan",
    roles: ["Academics Consultant", "Problem Setter"],
    link: "#",
  },
  {
    name: "Jonas Lim",
    roles: ["Problem Setter"],
    link: "https://www.linkedin.com/in/jonas-lim-489a05330",
  },
  {
    name: "Fan Yixiang",
    roles: ["Problem Setter"],
    link: "https://www.linkedin.com/in/yixiang-fan-38700a352",
  },
  {
    name: "Theodore Chou",
    roles: ["Problem Setter"],
    link: "https://www.linkedin.com/in/theodore-chou-sales-marketing-entrepreneurship-economics",
  },
  {
    name: "Jeffrey Lee",
    roles: ["Lead Developer"],
    link: "https://www.linkedin.com/in/jeffrey-lee-8a9461236",
  },
  {
    name: "Chua Zhong Ding",
    roles: ["Full Stack Developer", "Penetration Tester"],
    link: "https://www.linkedin.com/in/chua-zhong-ding-94412728b",
  },
  {
    name: "Chew Jin Hao",
    roles: ["Full Stack Developer"],
    link: "http://www.linkedin.com/in/chew-jin-hao-274850196",
  },
  {
    name: "Dylan Saga",
    roles: ["Data Analyst"],
    link: "https://www.linkedin.com/in/dylan-saga-551430273",
  },
  {
    name: "Raeanne Zou",
    roles: ["Graphic Illustrator"],
    link: "https://www.linkedin.com/in/raeanne-zou/",
  },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center w-full">
      {/* Main Content Container */}
      <section className="max-w-[1400px] w-full px-6 sm:px-12 py-16">
        {/* ========== FIRST HEADING: “What is SEL?” ========== */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-primary mb-8">
          What is SEL?
        </h2>

        {/* Row of 3 “info” items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Item #1 */}
          <div className="bg-white border-2 border-primary rounded-xl p-6 flex flex-col gap-4 shadow-md hover:shadow-lg transition">
            {/* Icon in a circle */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4CA9DF]/10">
              {/* Placeholder icon */}
              <svg
                className="text-[#4CA9DF]"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12h18M12 3v18" />
              </svg>
            </div>
            {/* Title */}
            <h3 className="text-xl font-semibold text-[#343131]">
              Online and accessible, at your fingertips
            </h3>
            {/* Description */}
            <p className="text-[#43291F]">
              SEL is fully online, so you can join from anywhere in the world.
              All you need is an internet connection and a desire to tackle
              exciting economics problems!
            </p>
          </div>

          {/* Item #2 */}
          <div className="bg-white border-2 border-primary rounded-xl p-6 flex flex-col gap-4 shadow-md hover:shadow-lg transition">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4CA9DF]/10">
              <svg
                className="text-[#4CA9DF]"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12l2 2l4 -4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#343131]">
              Teamwork makes the dream work
            </h3>
            <p className="text-[#43291F]">
              Participate in teams of up to 5, combining your strengths and
              interests. Explore economics together, brainstorm solutions, and
              grow your knowledge as a unit.
            </p>
          </div>

          {/* Item #3 */}
          <div className="bg-white border-2 border-primary rounded-xl p-6 flex flex-col gap-4 shadow-md hover:shadow-lg transition">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4CA9DF]/10">
              <svg
                className="text-[#4CA9DF]"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3h18v18H3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#343131]">
              Open-book, the sky’s your limit
            </h3>
            <p className="text-[#43291F]">
              SEL is open-book, letting you consult references, papers, or even
              software. Explore advanced topics and push your limits without the
              fear of closed-book restrictions.
            </p>
          </div>
        </div>

        {/* ========== SECOND HEADING: “Tips and Resources” ========== */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-primary mt-12 mb-8">
          Tips and Resources
        </h2>

        {/* Row of 2 “info” items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Item #1 */}
          <div className="bg-white border-2 border-primary rounded-xl p-6 flex flex-col gap-4 shadow-md hover:shadow-lg transition">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4CA9DF]/10">
              <svg
                className="text-[#4CA9DF]"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#343131]">Questions</h3>
            <p className="text-[#43291F]">
              Practice with a variety of sample questions—MCQ, short-answer, or
              full problem sets. Get comfortable with the question styles to
              maximize your performance.
            </p>
            <Link
              href="/sample-questions"
              className="text-[#0092E8] font-semibold underline text-base"
            >
              Example &amp; past-year questions
            </Link>
          </div>

          {/* Item #2 */}
          <div className="bg-white border-2 border-primary rounded-xl p-6 flex flex-col gap-4 shadow-md hover:shadow-lg transition">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4CA9DF]/10">
              <svg
                className="text-[#4CA9DF]"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19h16" />
                <path d="M4 9h16" />
                <path d="M12 9v10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#343131]">Scope</h3>
            <p className="text-[#43291F]">
              SEL covers a broad scope, from fundamental micro &amp; macro
              theories to advanced topics. Check out the official guidelines for
              more on the scope of questions.
            </p>
            <Link href="/faq" className="text-[#0092E8] font-semibold underline text-base">
              Official scope
            </Link>
          </div>
        </div>
      </section>

      {/* ========== MEET THE TEAM SECTION (no boxes) ========== */}
      <section className="max-w-[1400px] w-full px-6 sm:px-12 py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-primary mb-8">
          Meet the Team
        </h2>

        {/* Two bubble icons at the top (optional) */}
        <div className="flex justify-center mb-8">
          <div className="mr-4">
            <Image
              src="/team-bubble-left.png" // change path if needed
              alt="Team Bubble Left"
              width={60}
              height={60}
            />
          </div>
          <div>
            <Image
              src="/team-bubble-right.png" // change path if needed
              alt="Team Bubble Right"
              width={60}
              height={60}
            />
          </div>
        </div>

        {/* Short paragraph */}
        <p className="text-center text-[#43291F] max-w-3xl mx-auto mb-8">
          Some of are working, some are studying, and some have been serving the
          nation since graduating from Junior College. [to replace about SEL Team]!
        </p>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-primary mb-8">
          Organising Committee of SEL 2025
        </h3>

        <div className="border-b border-[#cdcac8] mb-8 w-full max-w-[1400px] mx-auto" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {teamMembers.map((member) => (
        <a
          key={member.name}
          href={member.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            block
            text-center
            transform
            transition-transform
            duration-200
            hover:scale-105
          "
        >
          <p className="font-semibold text-[#343131]">{member.name}</p>
          {member.roles.map((role) => (
            <p key={role} className="text-[#43291F]">
              {role}
            </p>
          ))}
        </a>
      ))}
    </div>


        <div className="border-b border-[#cdcac8] mt-8 w-full max-w-[1400px] mx-auto" />
      </section>

      {/* Paragraph with underlined links */}
      <p className="text-center text-[#343131] max-w-3xl mx-auto mb-8">
        SEL was originally inspired by (but is not directly associated with) the{" "}
        <a
          href="https://singaporephysicsleague.com"
          className="underline text-[#0092E8] font-normal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Singapore Physics League (SPhL)
        </a>
        ,{" "}
        <a
          href="https://singaporechemistryleague.com"
          className="underline text-[#0092E8] font-normal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Singapore Chemistry League (SChL)
        </a>
        , and{" "}
        <a
          href="https://singaporebiologyleague.com"
          className="underline text-[#0092E8] font-normal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Singapore Biology League (SBL)
        </a>
        .<br />
        If you enjoy SEL, you would probably enjoy the other leagues too, so do check
        them out!
      </p>
    </main>
  );
}
