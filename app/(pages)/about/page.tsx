import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About | SEL",
};

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
    roles: ["Head of Operations", "Head of Outreach"],
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
      <section className="max-w-screen-xl w-full px-6 sm:px-12 py-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-8 slab">
          What is SEL?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border-4 border-primary rounded-xl p-6 flex flex-col gap-4 shadow-md hover:shadow-lg transition">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-[#4CA9DF]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#4CA9DF]"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 15h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h6" />
                <path d="M13 4m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
                <path d="M7 19l3 0" />
                <path d="M17 8l0 .01" />
                <path d="M17 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M9 15l0 4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-baseText slab">
              Online and accessible, at your fingertips
            </h3>
            <p className="text-baseText text-lg">
              SEL is fully online, so you can join from anywhere in the world.
              All you need is an internet connection and a desire to tackle
              exciting economics problems!
            </p>
          </div>
          <div className="bg-white border-4 border-primary rounded-xl p-6 flex flex-col gap-4 shadow-md hover:shadow-lg transition">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-[#4CA9DF]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#4CA9DF]"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
                <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M17 10h2a2 2 0 0 1 2 2v1" />
                <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-baseText slab">
              Teamwork makes the dream work
            </h3>
            <p className="text-baseText text-lg">
              Participate in teams of up to 5, combining your strengths and
              interests. Explore economics together, brainstorm solutions, and
              grow your knowledge as a unit.
            </p>
          </div>
          <div className="bg-white border-4 border-primary rounded-xl p-6 flex flex-col gap-4 shadow-md hover:shadow-lg transition">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-[#4CA9DF]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#4CA9DF]"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6l0 13" />
                <path d="M12 6l0 13" />
                <path d="M21 6l0 13" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-baseText slab">
              Open-book, the sky’s your limit
            </h3>
            <p className="text-baseText text-lg">
              SEL is open-book, letting you consult references, papers, or even
              software. Explore advanced topics and push your limits without the
              fear of closed-book restrictions.
            </p>
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mt-12 mb-8 slab">
          Tips and Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border-4 border-primary rounded-xl p-6 flex flex-col gap-4 shadow-md hover:shadow-lg transition">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-[#4CA9DF]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#4CA9DF]"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 8a3.5 3.5 0 0 1 3.5 -3h1a3.5 3.5 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                <path d="M12 19l0 .01" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-baseText slab">Questions</h3>
            <p className="text-baseText text-lg">
              Practice with a variety of sample questions—MCQ, short-answer, or
              full problem sets. Get comfortable with the question styles to
              maximize your performance.
            </p>
            <Link
              href="/"
              className="text-secondary font-semibold underline text-base"
            >
              Example &amp; past-year questions
            </Link>
          </div>
          <div className="bg-white border-4 border-primary rounded-xl p-6 flex flex-col gap-4 shadow-md hover:shadow-lg transition">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-[#4CA9DF]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#4CA9DF]"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path d="M12 1a1 1 0 0 1 1 1v1.055a9.004 9.004 0 0 1 7.946 7.945h1.054a1 1 0 0 1 0 2h-1.055a9.004 9.004 0 0 1 -7.944 7.945l-.001 1.055a1 1 0 0 1 -2 0v-1.055a9.004 9.004 0 0 1 -7.945 -7.944l-1.055 -.001a1 1 0 0 1 0 -2h1.055a9.004 9.004 0 0 1 7.945 -7.945v-1.055a1 1 0 0 1 1 -1m0 4a7 7 0 1 0 0 14a7 7 0 0 0 0 -14m0 3a4 4 0 1 1 -4 4l.005 -.2a4 4 0 0 1 3.995 -3.8" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-baseText slab">Scope</h3>
            <p className="text-baseText text-lg">
              SEL covers a broad scope, from fundamental micro &amp; macro
              theories to advanced topics. Check out the official guidelines for
              more on the scope of questions.
            </p>
            <Link
              href="/syllabus"
              className="text-secondary font-semibold underline text-base"
            >
              Official scope
            </Link>
          </div>
        </div>
      </section>
      <section className="max-w-[1400px] w-full px-6 sm:px-12 py-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-8 slab">
          Meet the Team
        </h2>
        <div className="flex justify-center mb-8">
          <div className="mr-4">
            <Image
              src="/graphics/team.png"
              alt="Team Bubble Left"
              width={640}
              height={640}
            />
          </div>
        </div>
        <p className="text-center text-baseText mb-8 text-lg">
          Our team includes final-year polytechnic students, JC graduates, and
          national servicemen—united by a shared passion for economics. We hope
          that SEL will be a welcoming and accessible experience for everyone,
          inviting you to explore higher-level economic concepts while having
          fun along the way!
        </p>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-primary mb-8 slab">
          Organising Committee of SEL{" "}
          <span className="bg-gradient-to-r from-[#7f9fd8] to-[#5073b1] bg-clip-text text-transparent font-extrabold">
            2025
          </span>
        </h3>
        <div className="border-b border-divider mb-8 w-full max-w-[1400px] mx-auto" />
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
              <p className="font-semibold text-baseText text-lg">
                {member.name}
              </p>
              {member.roles.map((role) => (
                <p key={role} className="text-baseText">
                  {role}
                </p>
              ))}
            </a>
          ))}
        </div>
        <div className="border-b border-divider mt-8 w-full max-w-[1400px] mx-auto" />
      </section>
      <p className="text-center text-baseText max-w-3xl mx-auto text-lg">
        SEL was originally inspired by (but is not directly associated with) the{" "}
        <a
          href="https://singaporephysicsleague.com"
          className="underline text-secondary font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Singapore Physics League (SPhL)
        </a>
        ,{" "}
        <a
          href="https://singaporechemistryleague.com"
          className="underline text-secondary font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Singapore Chemistry League (SChL)
        </a>
        , and{" "}
        <a
          href="https://singaporebiologyleague.com"
          className="underline text-secondary font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Singapore Biology League (SBL)
        </a>
        .<br />
        If you enjoy SEL, you would probably enjoy the other leagues too, so do
        check them out!
      </p>
    </main>
  );
}