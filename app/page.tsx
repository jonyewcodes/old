"use client";

import React, { useState, useEffect} from "react";
import Timeline from "./components/Timeline";
import CountDown from "./components/CountDown";
import dynamic from "next/dynamic";

const CandleChart = dynamic(() => import("./components/CandleChart"), { ssr: false });

const HomePage = () => {
  const eventDate = "Sat · 26 July 2025 ·";
  const eventTime = "9 AM — 1 PM SGT";
  const eventTimestamp = new Date("July 4, 2025 09:00:00").getTime();

  const title = (
    <>
      Singapore <br />
      Economics
      <br />
      League
    </>
  );

  const description = (
    <>
      A team-based competition for problem-solving in economics. <br />
      Battle your fellow students for the crown!
    </>
  );

  const rulesLink = "/rules";

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isModalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

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

  const openModal = () => {
    setModalOpen(true);
    setTimeout(() => setShowModal(true), 50);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setModalOpen(false), 300);
  };

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      {/* Event Details Section */}
      <section className="relative flex flex-col lg:flex-row items-start justify-start
          bg-gradient-to-b from-[#e8f1f9] to-[#f5fbff]
          pt-10 sm:pt-16 px-4 sm:px-6 lg:py-30 lg:px-32 gap-8
          lg:overflow-hidden overflow-visible">
        <div className="absolute inset-0 z-0 opacity-30">
          <CandleChart />
        </div>

        <div className="flex-1 max-w-[1450px] mx-auto px-8 lg:px-20 relative z-10">
          <div className="mb-12">
            <span className="border-2 border-[#3D9796] rounded-xl bg-white text-[#343131] px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base md:px-6 md:py-4 md:text-lg leading-tight block sm:inline text-center">
              {eventDate} <span className="block sm:inline"> {eventTime}</span>
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-medium text-primary mb-6 slab whitespace-break-spaces">
            {title}
          </h1>
          <p className="text-black font-small mb-6 leading-relaxed text-base">
            {description}
          </p>
          <a
            href={rulesLink}
            className="text-secondary font-bold underline hover:text-[#3D9796] transition text-lg"
          >
            Competition Rules
          </a>
        </div>
      </section>

      {/* Countdown Timer Section */}
      {hasMounted && (
        <section className="flex flex-col items-center justify-center py-12 px-10 relative">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#4CA9DF] to-[#1DBF9F]">
            Let’s Roll
          </h2>

          {/* FlipCard usage */}
          <div className="mt-10 flex items-center justify-center gap-3 sm:gap-6">
            {["Days", "Hours", "Minutes", "Seconds"]
              .map((label, index) => {
                const value = Object.values(timeLeft)[index] as string;
                return <CountDown key={label} label={label} value={value} />;
              })
              // Insert colons in between
              .reduce<JSX.Element[]>((acc, elem, idx, arr) => {
                if (idx < arr.length - 1) {
                  return [
                    ...acc,
                    elem,
                    <span
                      key={`colon-${idx}`}
                      className="
                        flex 
                        items-center 
                        justify-center 
                        h-32 
                        text-4xl 
                        sm:text-6xl 
                        font-light 
                        mx-1 
                        sm:mx-2 
                        text-[#43291F]
                        leading-none
                      "
                    >
                      :
                    </span>,
                  ];
                }
                return [...acc, elem];
              }, [])}
          </div>

          <p className="text-[#43291F] text-lg mt-8">Till Registration Ends</p>
          <p className="text-lg font-semibold text-[#43291F]">— 4 July 2025 —</p>
        </section>
      )}


      
      {/* Information Layout */}
      <section className="py-16 px-6 sm:py-20 sm:px-8 lg:py-24 lg:px-36 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-24">
          <div className="relative flex items-center w-full">
            <div className="absolute left-0 top-0 bottom-0 w-[250vw] -ml-[50vw] h-[420px] skew-y-2 bg-[#e1ecf8]/50"></div>
            <span className="text-[18rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D1C6F3] to-[#E9BCAC] relative z-10">
              1
            </span>
            <div className="relative z-10 -ml-8 pl-6 max-w-3xl ml-1">
              <h3 className="text-3xl font-bold text-[#343131] mt-10">
                No Boundaries, No Limits
              </h3>
              <p className="text-black mt-6 text-2xl">
                An online contest, accessible from anywhere. Log on from <br />{" "}
                the comfort of your home and put your wits to the test!
              </p>
            </div>
          </div>

          <div className="relative flex items-center justify-end w-full">
            <div className="relative z-10 -mr-8 pr-6 text-right max-w-3xl mr-1">
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

          <div className="relative flex items-center w-full translate-x-7">
            <div className="absolute left-0 top-0 bottom-0 w-[250vw] -ml-[50vw] h-[420px] -skew-y-2 bg-[#e1ecf8]/50"></div>
            <span className="text-[18rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A0F1EA] to-[#EAD6EE] relative z-10 -ml-16">
              3
            </span>
            <div className="relative z-10 pl-6 max-w-3xl ml-1">
              <h3 className="text-3xl font-bold text-[#343131] mt-14">
                Build Your Dream Team
              </h3>
              <p className="text-black mt-6 text-2xl">
                From classmates to friends in other schools, assemble <br /> the
                team of your choice to win it all!
              </p>
            </div>
          </div>

          <div className="relative flex items-center justify-end w-full">
            <div className="relative z-10 -mr-8 pr-6 text-right max-w-3xl mr-1">
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

          <div className="relative flex items-center w-full translate-x-7">
            <div className="absolute left-0 top-0 bottom-0 w-[250vw] -ml-[50vw] h-[420px] -skew-y-2 bg-[#e1ecf8]/50"></div>
            <span className="text-[18rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F1FEC6] to-[#107F5C] relative z-10 -ml-16">
              5
            </span>
            <div className="relative z-10 pl-6 max-w-3xl ml-1">
              <h3 className="text-3xl font-bold text-[#343131] mt-14">
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

      {/* Register Section */}
      <section className="flex items-center justify-center py-16 px-12 relative">
        <div className="bg-white border-2 border-[#3D9796] rounded-tl-3xl rounded-tr-3xl w-full max-w-3xl p-12 relative">
          <h2 className="font-medium slab text-center text-3xl font-bold mb-8">
            Do{" "}
            <span className="bg-gradient-to-r from-[#4CA9DF] to-[#1DBF9F] bg-clip-text text-transparent">
              you
            </span>{" "}
            have what it takes?
          </h2>
          <p className="text-center text-black text-lg mb-12">
            Register now and be part of an exciting journey where you get to put
            your economics knowledge to the test, work with others, and have fun
            while doing it!
          </p>
          <div className="flex justify-center">
            <a
              href="https://tally.so/r/3NRLlG"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-10 py-3 bg-[#3D979F] text-white text-lg font-semibold rounded-lg shadow-lg
                transition-transform duration-200 ease-in-out
                hover:scale-105 hover:bg-[#3A8B91]
              "
            >
              Register Now!
            </a>
          </div>
        </div>
      </section>


      {isModalOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
            showModal ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`relative bg-white rounded-lg shadow-lg w-[90%] max-w-2xl transition-transform duration-300 ${
              showModal ? "scale-100" : "scale-95"
            }`}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition"
              onClick={closeModal}
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-x text-gray-600 hover:text-gray-900 transition"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
            <iframe
              data-tally-src="https://tally.so/r/3NRLlG?transparentBackground=1"
              width="100%"
              height="700px"
              title="SG Econs League: Registration"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}

      {/* Timeline Section */}
      <section className="relative my-16 w-full">
        <div className="bg-[#e1ecf8]/50 py-28 w-full relative z-10">
          <h2 className="text-5xl font-bold slab text-[#343131] text-center mb-12">
            Important{" "}
            <span className="bg-gradient-to-r from-[#4CA9DF] to-[#1DBF9F] bg-clip-text text-transparent">
            Dates
            </span>
          </h2>
          <div className="flex justify-center">
            <div className="w-full max-w-6xl px-10">
              <Timeline />
            </div>
          </div>
        </div>
      </section>

      {/* Resource Section */}
      <section className="w-full py-16 px-8 lg:px-20">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-6">
          <div className="border-2 border-[#3D9796] rounded-tl-2xl rounded-br-2xl p-14 w-full flex flex-col items-center text-center bg-white">
            <h3 className="text-3xl font-medium slab text-[#343131] mt-6">
              Join our Community
            </h3>
            <p className="text-[#43291F] mt-6 max-w-lg">
              Ask questions, make friends, and form teams. Good vibes only!
            </p>
            <a
              href="https://discord.gg/SEk9HrXk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 px-5 py-2 bg-[#5865F2] text-white text-base font-semibold rounded-lg
                transition-transform duration-200 ease-in-out hover:scale-105
                flex items-center space-x-2"
            >
              <img
                src="https://cdn3.emoji.gg/emojis/5542-discord-clyde-gif.gif"
                alt="Discord"
                className="w-6 h-6"
              />
              <span>Join the SEL Discord Server!</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#5a96d9]/50 rounded-tl-3xl rounded-br-3xl p-14 flex flex-col items-start">
              <div className="max-w-sm">
                <h3 className="font-medium slab text-3xl text-[#343131]">
                  FAQ
                </h3>
                <p className="text-[#43291F] mt-4">
                  Got a question on your mind? <br />
                  We may have already answered it!
                </p>
                <a
                  href="/faq"
                  className="border-2 border-[#3D9796] mt-6 inline-block px-6 py-2.5 bg-[#ffffff] text-[#4CA9DF] text-base font-medium rounded-lg
                    hover:bg-[#eaf2fb] transition-transform duration-200 ease-in-out hover:scale-105"
                >
                  Read our FAQ 🡒
                </a>
              </div>
            </div>
            <div className="bg-[#5a96d9]/50 rounded-tl-3xl rounded-br-3xl p-14 flex flex-col items-start">
              <div className="max-w-sm">
                <h3 className="text-3xl font-medium slab text-[#343131]">
                  Sample Questions
                </h3>
                <p className="text-[#43291F] mt-4">
                  Learn more about the format and <br />
                  structure of our questions!
                </p>
                <a
                  href="/sample-questions"
                  className="border-2 border-[#3D9796] mt-6 inline-block px-6 py-2.5 bg-[#ffffff] text-[#4CA9DF] text-base font-medium rounded-lg
                    hover:bg-[#eaf2fb] transition-transform duration-200 ease-in-out hover:scale-105"
                >
                  View Past Questions 🡒
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organising Section */}
      <section className="py-12 px-8 lg:px-20 text-center">
        <h2 className="text-[#AEAEC066] text-5xl font-bold mb-4">Meet the</h2>
        <h1 className="text-black text-5xl lg:text-5xl font-bold mb-14">
          2025 Organising{" "}
          <span className="bg-gradient-to-r from-[#4CA9DF] to-[#1DBF9F] bg-clip-text text-transparent">
            Team
          </span>
        </h1>

        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-14">
            {teamMembers
              .slice(0, Math.floor(teamMembers.length / 5) * 5)
              .map((member, index) => (
                <div
                  key={index}
                  className="w-full text-center transition-transform duration-300 hover:scale-105 px-4"
                >
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3E8E96] text-2xl font-semibold no-underline hover:no-underline transition-transform duration-300 whitespace-nowrap"
                  >
                    {member.name}
                  </a>
                  {/* Reduced vertical spacing */}
                  <div className="mt-1 flex flex-col items-center space-y-0.5">
                    {member.roles.map((role, roleIndex) => (
                      <p key={roleIndex} className="text-gray-600 text-lg whitespace-nowrap">
                        {role}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          {teamMembers.length % 5 === 3 && (
            <div className="flex justify-center mt-6">
              <div className="grid grid-cols-3 gap-x-10">
                {teamMembers
                  .slice(Math.floor(teamMembers.length / 5) * 5)
                  .map((member, index) => (
                    <div
                      key={index}
                      className="w-full text-center transition-transform duration-300 hover:scale-105 px-4"
                    >
                      <a
                        href={member.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3E8E96] text-2xl font-semibold no-underline hover:no-underline transition-transform duration-300 whitespace-nowrap"
                      >
                        {member.name}
                      </a>
                      <div className="mt-1 flex flex-col items-center space-y-0.5">
                        {member.roles.map((role, roleIndex) => (
                          <p key={roleIndex} className="text-gray-600 text-lg whitespace-nowrap">
                            {role}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

    </>
  );
};

export default HomePage;
