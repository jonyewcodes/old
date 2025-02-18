"use client";

import React, { useState, useEffect } from "react";

const homePage = () => {
  // Event details
  const eventDate = "Sat 19th July 2025";
  const eventTime = "9 am - 1 pm SGT";
  const eventTimestamp = new Date("July 19, 2025 09:00:00").getTime(); // Competition date

  // Title and description JSX elements
  const title = (
    <>
      Competitive Online <br />
      Economics
      <br />
      Contest
    </>
  );

  const description = (
    <>
      A team-based competition for problem-solving in economics. <br />
      Battle your fellow students for the crown!
    </>
  );

  const rulesLink = "/rules";

  // Countdown state initialization
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  /**
   * Calculates the remaining time until the event.
   * Returns an object with days, hours, minutes, and seconds (all padded to two digits).
   */
  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = eventTimestamp - now;

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      ),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      ),
      minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
        2,
        "0"
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  }

  // Update countdown timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // List of team members for the Organising Team section
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
      name: "Zhao YuXuan",
      roles: ["Academics Consultant", "Problem Setter"],
      link: "#",
    },
    {
      name: "Jonas Lim",
      roles: ["Problem Setter"],
      link: "https://www.linkedin.com/in/jonas-lim-489a05330",
    },
    {
      name: "Fan YiXiang",
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
      name: "Raeanne Zou",
      roles: ["UI/UX Designer"],
      link: "https://www.linkedin.com/in/raeanne-zou/",
    },
    {
      name: "Dylan Saga",
      roles: ["Data Analyst"],
      link: "https://www.linkedin.com/in/dylan-saga-551430273",
    },
  ];

  return (
    <>
      {/* Event Details Section */}
      <section className="relative flex flex-col lg:flex-row items-start justify-start bg-gradient-to-b from-[#DEE7FB] to-[#F8F9FC] py-24 px-8 lg:px-32 gap-8 overflow-hidden">
        {/* Floating Images */}
        <img
          src="/graphics/bank.png"
          alt="Floating Bank"
          className="absolute top-0 left-0 w-[300px] opacity-30 rotate-[25deg]"
        />
        <img
          src="/graphics/graph.png"
          alt="Floating Graph"
          className="absolute top-1/3 left-1/4 w-[320px] opacity-30 -rotate-[40deg]"
        />
        <img
          src="/graphics/piggy.png"
          alt="Floating Piggy Bank"
          className="absolute top-0 right-20 w-[350px] opacity-30 rotate-[15deg]"
        />
        <img
          src="/graphics/pot.png"
          alt="Floating Pot"
          className="absolute bottom-10 right-1/3 w-[330px] opacity-30 -rotate-[-30deg]"
        />

        {/* Main Event Content */}
        <div className="flex-1 max-w-[1650px] mx-auto px-8 lg:px-20 relative z-10">
          <div className="mb-12">
            <span className="bg-white text-[#343131] px-6 py-5 rounded-lg shadow-[10px_10px_20px_0px_rgba(0,0,0,0.2),10px_0px_35px_0px_rgba(0,0,0,0.1)] text-2xl">
              {eventDate}, {eventTime}
            </span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-medium text-[#0081EA] mb-6 font-serif whitespace-break-spaces">
            {title}
          </h1>
          <p className="text-black font-small mb-6 leading-relaxed text-base">
            {description}
          </p>
          <a
            href={rulesLink}
            className="text-accent font-bold underline hover:text-[#0092E8] transition text-lg"
          >
            Competition Rules
          </a>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <section className="flex flex-col items-center justify-center py-12 px-10 relative">
        <h2 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#4CA9DF] to-[#1DBF9F]">
          Let’s roll
        </h2>

        {/* Countdown Box */}
        <div className="bg-[#f4f4f4] w-full max-w-3xl p-10 rounded-xl shadow-lg text-center relative mt-5">
          {/* Timer Labels & Digits */}
          <div className="flex items-center justify-center gap-6">
            {["Days", "Hours", "Minutes", "Seconds"]
              .map((label, index) => (
                <div key={label} className="flex flex-col items-center">
                  <span className="text-xs font-medium text-[#3F3B3A] uppercase tracking-widest mb-2 flex items-center justify-center">
                    {label}
                  </span>
                  <span className="text-6xl font-bold text-[#3F3B3A] flex items-center">
                    {Object.values(timeLeft)[index]}
                  </span>
                </div>
              ))
              .reduce<JSX.Element[]>((acc, elem, idx, arr) => {
                if (idx < arr.length - 1) {
                  return [
                    ...acc,
                    elem,
                    <span
                      key={`colon-${idx}`}
                      className="text-5xl font-light mx-2 flex items-center"
                    >
                      :
                    </span>,
                  ];
                }
                return [...acc, elem];
              }, [])}
          </div>

          {/* Countdown Footer */}
          <p className="text-[#43291F] text-lg mt-4">
            Till the Challenge Starts
          </p>
          <p className="text-lg font-semibold text-[#43291F]">19th July 2025</p>
        </div>
      </section>
      {/* Numbered Section with Alternating Layout */}
      <section className="py-24 px-10 lg:px-36 w-full">
        <div className="flex flex-col gap-24">
          {/* Item 1 */}
          <div className="relative flex items-center w-full">
            {/* Background for Item 1 (UP) */}
            <div className="absolute left-0 top-0 bottom-0 w-[250vw] -ml-[50vw] h-[420px] skew-y-2 bg-[#DEE7FB]/30"></div>
            <span className="text-[18rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D1C6F3] to-[#E9BCAC] relative z-10">
              1
            </span>
            <div className="relative z-10 -ml-12 pl-6 max-w-3xl">
              <h3 className="text-3xl font-bold text-[#343131] mt-10">
                No Boundaries, No Limits
              </h3>
              <p className="text-black mt-6 text-2xl">
                An online contest, accessible from anywhere. Log on from <br />{" "}
                the comfort of your home and put your wits to the test!
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative flex items-center justify-end w-full">
            {/* No background for Item 2 */}
            <div className="relative z-10 -mr-8 pr-6 text-right max-w-3xl">
              <h3 className="text-3xl font-bold text-[#343131] mt-14">
                Calling all Pre-U Students!
              </h3>
              <p className="text-black mt-6 text-2xl">
                Studying in a JC/MI, local polytechnic, ITE, or <br /> secondary
                school? You are eligible to participate!
              </p>
            </div>
            <span className="text-[18rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFAE00] to-[#F9E866] relative z-10">
              2
            </span>
          </div>

          {/* Item 3 */}
          <div className="relative flex items-center w-full">
            {/* Background for Item 3 (DOWN) */}
            <div className="absolute left-0 top-0 bottom-0 w-[250vw] -ml-[50vw] h-[420px] -skew-y-2 bg-[#DEE7FB]/30"></div>
            <span className="text-[18rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A0F1EA] to-[#EAD6EE] relative z-10">
              3
            </span>
            <div className="relative z-10 -ml-12 pl-6 max-w-3xl">
              <h3 className="text-3xl font-bold text-[#343131] mt-14">
                Build Your Dream Team
              </h3>
              <p className="text-black mt-6 text-2xl">
                From classmates to friends in other schools, assemble <br /> the
                team of your choice to win it all!
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="relative flex items-center justify-end w-full">
            {/* No background for Item 4 */}
            <div className="relative z-10 -mr-8 pr-6 text-right max-w-3xl">
              <h3 className="text-3xl font-bold text-[#343131] mt-36">
                From Numbers to Narrative
              </h3>
              <p className="text-black mt-6 mb-6 text-2xl">
                Every question will challenge your wit, <br /> knowledge, and
                problem-solving skills in novel <br /> and unexpected ways.
              </p>
              <a
                href="/sample-questions"
                className="text-[#0092E8] font-semibold underline text-2xl"
              >
                Try some sample problems!
              </a>
            </div>
            <span className="text-[18rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFC145] to-[#EC368D] relative z-10">
              4
            </span>
          </div>

          {/* Item 5 */}
          <div className="relative flex items-center w-full">
            {/* Background for Item 5 (UP) */}
            <div className="absolute left-0 top-0 bottom-0 w-[250vw] -ml-[50vw] h-[420px] skew-y-2 bg-[#DEE7FB]/30"></div>
            <span className="text-[18rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F1FEC6] to-[#107F5C] relative z-10">
              5
            </span>
            <div className="relative z-10 -ml-12 pl-6 max-w-3xl">
              <h3 className="text-3xl font-bold text-[#343131] mt-22">
                Got Any Questions?
              </h3>
              <p className="text-black mt-6 mb-6 text-2xl">
                Check out our{" "}
                <a
                  href="/faq"
                  className="text-[#0092E8] font-semibold underline text-2xl"
                >
                  Frequently Asked Questions
                </a>
                !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="flex items-center justify-center py-16 px-12">
        <div
          className="bg-[#f4f4f4] w-full max-w-3xl p-12 rounded-xl"
          style={{
            boxShadow:
              "-8px -8px 16px rgba(255,255,255,0.3), 8px 8px 16px rgba(0,0,0,0.3)",
          }}
        >
          {/* Heading */}
          <h2 className="text-center text-3xl font-bold mb-8">
            Do{" "}
            <span className="bg-gradient-to-r from-[#4CA9DF] to-[#1DBF9F] bg-clip-text text-transparent">
              you
            </span>{" "}
            have what it takes?
          </h2>

          {/* Description */}
          <p className="text-center text-black text-lg mb-12">
            Register now and be part of an exciting journey where you get to put
            your economics knowledge to the test, work with others, and have fun
            while doing it!
          </p>

          {/* Register Button */}
          <div className="flex justify-center">
            <button className="px-10 py-4 bg-[#4CA9DF] text-white text-xl font-semibold rounded-lg shadow-[6px_5px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.1)] hover:bg-primary transition-all">
              Pre-Register Now!
            </button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full h-[800px] bg-[#DEE7FB]"></section>

      {/* Information Section with One Large Centered Box and Two Side Boxes */}
      <section className="w-full py-16 px-8 lg:px-20">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-6">
          {/* Large Centered Box */}
          <div className="border-2 border-[#DEE7FB] rounded-tl-2xl rounded-br-2xl p-14 w-full flex flex-col items-center text-center bg-white">
            <h3 className="text-3xl font-bold text-[#343131]">
              Join our Community
            </h3>
            <p className="text-[#43291F] mt-6 max-w-lg">
              Ask questions, make friends, and form teams. Good vibes only!
            </p>

            {/* Discord Button with Link */}
            <a
              href="https://discord.gg/SEk9HrXk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 px-5 py-2 bg-[#5865F2] text-white text-lg font-semibold rounded-lg hover:bg-[#3A91C9] transition flex items-center space-x-2"
            >
              {/* Discord Animated Logo (GIF) */}
              <img
                src="https://cdn3.emoji.gg/emojis/5542-discord-clyde-gif.gif"
                alt="Discord"
                className="w-6 h-6"
              />
              {/* Button Text */}
              <span>Join the SEL Discord Server!</span>
            </a>
          </div>

          {/* Two Smaller Boxes (Equal Width Combined) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* Small Box 1 - FAQ */}
            <div className="bg-[#DEE7FB] rounded-tl-2xl rounded-br-2xl p-14 flex flex-col items-start">
              <div className="max-w-sm">
                <h3 className="text-3xl font-bold text-[#343131]">FAQ</h3>
                <p className="text-[#43291F] mt-4">
                  Got a question on your mind? <br />
                  We may have already answered it!
                </p>
                {/* Button linking to FAQ page */}
                <a
                  href="/faq"
                  className="mt-6 inline-block px-6 py-3 bg-[#4CA9DF] text-white text-base font-semibold rounded-lg hover:bg-[#3A91C9] transition"
                >
                  Read our FAQ →
                </a>
              </div>
            </div>

            {/* Small Box 2 - Sample Questions */}
            <div className="bg-[#DEE7FB] rounded-tl-2xl rounded-br-2xl p-14 flex flex-col items-start">
              <div className="max-w-sm">
                <h3 className="text-3xl font-bold text-[#343131]">
                  Sample Questions
                </h3>
                <p className="text-[#43291F] mt-4">
                  Learn more about the format and <br />
                  structure of our questions!
                </p>
                {/* Button linking to Sample Questions page */}
                <a
                  href="/sample-questions"
                  className="mt-6 inline-block px-6 py-3 bg-[#4CA9DF] text-white text-base font-semibold rounded-lg hover:bg-[#3A91C9] transition"
                >
                  View Past Questions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-12 px-12 text-center">
        {/* Section Heading */}
        <h2 className="text-[#AEAEC066] text-5xl font-bold mb-4">Meet the</h2>
        <h1 className="text-black text-5xl lg:text-5xl font-bold mb-14">
          2025 Organising{" "}
          <span className="bg-gradient-to-r from-[#4CA9DF] to-[#1DBF9F] bg-clip-text text-transparent">
            Team
          </span>
        </h1>

        {/* Team Members Grid */}
        <div className="flex flex-wrap justify-center gap-y-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 text-center px-6 transition-transform duration-300 hover:scale-105"
            >
              <a
                href={member.link}
                className="text-[#3E8E96] text-3xl font-semibold no-underline hover:no-underline transition-transform duration-300"
              >
                {member.name}
              </a>
              <div className="mt-3 transition-transform duration-300">
                {member.roles.map((role, roleIndex) => (
                  <p key={roleIndex} className="text-gray-600 text-lg">
                    {role}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default homePage;
