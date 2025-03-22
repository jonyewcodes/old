"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Animation from "./components/AnimatedBackground";
import CountDown from "./components/CountDown";

function calculateTimeLeft() {
  const now = new Date().getTime();
  const eventTimestamp = new Date("July 4, 2025 09:00:00").getTime();
  const difference = eventTimestamp - now;
  if (difference <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }
  return {
    days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
    hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
    minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
    seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
  };
}

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isModalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const sampleQuestions = [
    {
      title: "Economic Crisis on Arrakis",
      difficulty: "Easy",
      difficultyColor: "bg-[#D4F5E2] text-[#2E7D32]",
      description:
        "We learn macroeconomics to analyse our world. Do these macroeconomic forces still apply in the world of DUNE?",
      link: "/sample-questions/[Sample]-Easy.pdf",
    },
    {
      title: "Competition Sign-Ups",
      difficulty: "Medium",
      difficultyColor: "bg-[#FFF3C4] text-[#FF9800]",
      description:
        "Do you have entrepreneurial spirit? Its not just firms — high school students can be profit hungry too.",
      link: "/sample-questions/[Sample]-Moderate.pdf",
    },
    {
      title: "The AI Dilemma",
      difficulty: "Hard",
      difficultyColor: "bg-[#FFEBEE] text-[#D32F2F]",
      description:
        "AI poses both existential risk and untapped opportunity. How can humanity balance these factors?",
      link: "/sample-questions/[Sample]-Hard.pdf",
    },
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setModalOpen(false), 300);
  };

  const teamMembers = [
    {
      name: "Ho Jon Yew",
      roles: ["Chief Organiser"],
      link: "https://www.linkedin.com/in/jon-yew-ho/",
      image: "/team-pics/jonyew-ho.png",
    },
    {
      name: "Tevel Sho",
      roles: ["Deputy Chief Organiser", "Lead Developer"],
      link: "https://www.linkedin.com/in/tevelsho",
      image: "/team-pics/tevel-sho.png",
    },
    {
      name: "Lucas Lee",
      roles: ["Head of Operations", "Head of Outreach"],
      link: "https://www.linkedin.com/in/lucas-lee-zy ",
      image: "/team-pics/lucas-lee.png",
    },
    {
      name: "Li Zonglun",
      roles: ["Head of Academics", "Problem Setter"],
      link: "https://www.linkedin.com/in/zonglun-li-80970a276",
      image: "/team-pics/li-zonglun.png",
    },
    {
      name: "Zhao Yuxuan",
      roles: ["Academics Consultant", "Problem Setter"],
      link: "https://www.linkedin.com/in/yuxuan-zhao-a44789338",
      image: "/team-pics/zhao-yuxuan.png",
    },
    {
      name: "Jonas Lim",
      roles: ["Problem Setter"],
      link: "https://www.linkedin.com/in/jonas-lim-489a05330",
      image: "/team-pics/jonas-lim.png",
    },
    {
      name: "Fan Yixiang",
      roles: ["Problem Setter"],
      link: "https://www.linkedin.com/in/yixiang-fan-38700a352",
      image: "/team-pics/fan-yixiang.png",
    },
    {
      name: "Theodore Chou",
      roles: ["Problem Setter"],
      link: "https://www.linkedin.com/in/theodore-chou-sales-marketing-entrepreneurship-economics",
      image: "/team-pics/theodore-chou.png",
    },
    {
      name: "Jeffrey Lee",
      roles: ["Lead Developer"],
      link: "https://www.linkedin.com/in/jeffrey-lee-8a9461236",
      image: "/team-pics/jeffrey-lee.png",
    },
    {
      name: "Chua Zhong Ding",
      roles: ["Full Stack Developer", "Penetration Tester"],
      link: "https://www.linkedin.com/in/chua-zhong-ding-94412728b",
      image: "/team-pics/chua-zhong-ding.png",
    },
    {
      name: "Chew Jin Hao",
      roles: ["Full Stack Developer"],
      link: "http://www.linkedin.com/in/chew-jin-hao-274850196",
      image: "/team-pics/default.png",
    },
    {
      name: "Dylan Saga",
      roles: ["Data Analyst"],
      link: "https://www.linkedin.com/in/dylan-saga-551430273",
      image: "/team-pics/dylan-saga.png",
    },
    {
      name: "Raeanne Zou",
      roles: ["Graphic Illustrator"],
      link: "https://www.linkedin.com/in/raeanne-zou/",
      image: "/team-pics/default.png",
    },
  ];
  return (
    <>
      <section
        className="
          relative
          py-8
          px-4
          sm:py-16 sm:px-6
          lg:py-24 lg:px-32
          text-background
          overflow-hidden
        "
      >
        <div className="absolute inset-0 z-0 bg-backdrop">
          <Animation />
        </div>
        <div className="relative z-10 w-full max-w-screen-lg mx-auto flex flex-col items-start">
          <div
            className="
              inline-block
              bg-background
              text-secondary
              rounded-md
              px-4 py-3
              shadow-sm
              mb-4
            "
          >
           <p className="font-semibold text-base sm:text-lg leading-tight text-left">
            Sat · 26 July 2025 · 09:00 AM — 01:00 PM SGT
          </p>
          </div>
          <h1
            className="
              text-[3rem]
              sm:text-[4rem]
              lg:text-[5rem]
              font-medium
              text-left
              mb-4
              mt-4
              slab
              leading-tight
            "
          >
            Singapore <br />
            Economics League
          </h1>
          <p className="max-w-3xl text-xl text-left text-background">
            A team based competition for problem solving in economics.
            <br />
            Battle your fellow students for the crown!
          </p>
        </div>
      </section>

      {hasMounted && (
        <section className="flex items-center justify-center mb-32 px-4 sm:px-0">
          <div className="max-w-screen-lg w-full">
            <h2 className="text-center text-6xl sm:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#7f9fd8] to-[#5073b1] mt-24">
              Let’s Roll
            </h2>
            <div className="border-2 border-primary bg-white rounded-xl p-8 sm:p-10 text-center">
              <div className="flex sm:flex-row items-center justify-center gap-0 sm:gap-6">
                {["Days", "Hours", "Minutes", "Seconds"]
                  .map((label, index) => {
                    const value = Object.values(timeLeft)[index] as string;
                    return <CountDown key={label} label={label} value={value} />;
                  })
                  .reduce<JSX.Element[]>((acc, elem, idx, arr) => {
                    if (idx < arr.length - 1) {
                      return [
                        ...acc,
                        elem,
                        <span
                          key={`colon-${idx}`}
                          className="
                            flex
                            flex-col
                            items-center
                            justify-center
                            font-light
                            mx-1
                            sm:mx-2
                            text-baseText
                            leading-none
                            text-5xl sm:text-6xl
                          "
                        >
                          :
                        </span>,
                      ];
                    }
                    return [...acc, elem];
                  }, [])}
              </div>
              <p className="text-baseText text-xl sm:text-2xl mt-6 sm:mt-8">
                Till Registration Ends
              </p>
              <p className="text-xl sm:text-2xl font-medium text-baseText">
                — 4 July 2025 —
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="w-full py-8 sm:py-16 lg:py-24">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-0 flex flex-col gap-12 sm:gap-24">
          <div className="flex flex-col sm:flex-row items-center justify-start">
            <div className="border-2 border-primary bg-white shadow-lg rounded-xl px-6 py-4 sm:px-8 sm:py-6 block sm:hidden">
              <Image
                src="/graphics/problemSolving.png"
                alt="Box 1 illustration"
                width={300}
                height={300}
                className="mx-auto mb-4"
              />
              <div className="flex flex-row items-start gap-4">
                <span className="text-[8rem] font-bold text-transparent leading-none bg-clip-text bg-gradient-to-r from-[#C0ADFB] to-[#0790FF]">
                  1
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-baseText slab">
                    No Boundaries, No Limits
                  </h3>
                  <p className="text-baseText mt-2 text-lg">
                    An online contest, accessible from anywhere. Log on from
                    the comfort of your home and put your wits to the test!
                  </p>
                </div>
              </div>
            </div>
            <div className="border-2 border-primary bg-white shadow-lg rounded-xl px-6 py-4 sm:px-8 sm:py-6 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 hidden sm:flex">
              <span className="text-[8rem] sm:text-[12rem] lg:text-[16rem] font-bold text-transparent leading-none bg-clip-text bg-gradient-to-r from-[#C0ADFB] to-[#0790FF]">
                1
              </span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-baseText slab">
                  No Boundaries, No Limits
                </h3>
                <p className="text-baseText mt-2 sm:mt-4 text-lg sm:text-xl">
                  An online contest, accessible from anywhere. Log on from
                  the comfort of your home and put your wits to the test!
                </p>
              </div>
            </div>
            <Image
              src="/graphics/problemSolving.png"
              alt="Box 1 illustration"
              width={300}
              height={300}
              className="hidden sm:block w-full sm:w-96 h-auto mt-6 sm:mt-0 sm:ml-16"
            />
          </div>
          <div>
            <div className="block sm:hidden border-2 border-primary bg-white shadow-lg rounded-xl px-6 py-4 sm:px-8 sm:py-6">
              <Image
                src="/graphics/backpack.png"
                alt="Box 2 illustration"
                width={300}
                height={300}
                className="mx-auto mb-4"
              />
              <div className="flex items-start gap-4">
                <span className="text-[8rem] font-bold text-transparent leading-none bg-clip-text bg-gradient-to-r from-[#5FA1FE] to-[#3539FF]">
                  2
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-baseText slab">Calling all Pre-U Students!</h3>
                  <p className="text-baseText mt-2 text-lg">
                    Studying in a JC/MI, local polytechnic, ITE, or
                    <br />
                    secondary school? You are eligible to participate!
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex flex-col sm:flex-row items-center justify-end">
              <Image
                src="/graphics/backpack.png"
                alt="Box 2 illustration"
                width={300}
                height={300}
                className="w-full sm:w-96 h-auto mt-6 sm:mt-0 sm:mr-16"
              />
              <div className="border-2 border-primary bg-white shadow-lg rounded-xl px-6 py-4 sm:px-8 sm:py-6 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6 sm:mt-0">
                <div className="text-center sm:text-right">
                  <h3 className="text-2xl sm:text-3xl font-bold text-baseText slab">
                    Calling all Pre-U Students!
                  </h3>
                  <p className="text-baseText mt-2 sm:mt-4 text-lg sm:text-xl">
                    Studying in a JC/MI, local polytechnic, ITE, or
                    <br />
                    secondary school? You are eligible to participate!
                  </p>
                </div>
                <span className="text-[8rem] sm:text-[12rem] lg:text-[16rem] font-bold text-transparent leading-none bg-clip-text bg-gradient-to-r from-[#5FA1FE] to-[#3539FF]">
                  2
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="block sm:hidden border-2 border-primary bg-white shadow-lg rounded-xl px-6 py-4 sm:px-8 sm:py-6">
              <Image
                src="/graphics/teamUp.png"
                alt="Box 3 illustration"
                width={300}
                height={300}
                className="mx-auto mb-4"
              />
              <div className="flex items-start gap-4">
                <span className="text-[8rem] font-bold text-transparent leading-none bg-clip-text bg-gradient-to-r from-[#AAD8F9] to-[#4E8EE2]">
                  3
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-baseText slab">Build Your Dream Team</h3>
                  <p className="text-baseText mt-2 text-lg">
                    From classmates to friends in other schools, assemble
                    <br />
                    the team of your choice to win it all!
                  </p>
                  <a
                    href="https://tally.so/r/3NRLlG"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      mt-4 sm:mt-6
                      inline-block
                      px-6 sm:px-8
                      py-2
                      bg-[#ffffff]
                      text-secondary
                      text-lg
                      font-medium
                      border-2
                      rounded-xl
                      border-b-4
                      border-secondary
                      transition-all
                      duration-200
                      hover:scale-105
                      transition-transform
                      duration-200
                      ease-in-out
                      hover:scale-105
                    "
                  >
                    Register Now!
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex flex-col sm:flex-row items-center justify-start">
              <div className="border-2 border-primary bg-white shadow-lg rounded-xl px-6 py-4 sm:px-8 sm:py-6 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <span className="text-[8rem] sm:text-[12rem] lg:text-[16rem] font-bold text-transparent leading-none bg-clip-text bg-gradient-to-r from-[#AAD8F9] to-[#4E8EE2]">
                  3
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-baseText slab">Build Your Dream Team</h3>
                  <p className="text-baseText mt-2 sm:mt-4 text-lg sm:text-xl">
                    From classmates to friends in other schools, assemble
                    <br />
                    the team of your choice to win it all!
                  </p>
                  <a
                    href="https://tally.so/r/3NRLlG"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      mt-4 sm:mt-6
                      inline-block
                      px-6 sm:px-8
                      py-2
                      bg-[#ffffff]
                      text-secondary
                      text-lg
                      font-medium
                      border-2
                      rounded-xl
                      border-b-4
                      border-secondary
                      transition-all
                      duration-200
                      hover:scale-105
                      transition-transform
                      duration-200
                      ease-in-out
                      hover:scale-105
                    "
                  >
                    Register Now!
                  </a>
                </div>
              </div>
              <Image
                src="/graphics/teamUp.png"
                alt="Box 3 illustration"
                width={300}
                height={300}
                className="w-full sm:w-96 h-auto mt-6 sm:mt-0 sm:ml-16"
              />
            </div>
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-x text-baseText hover:text-gray-900 transition"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
            <iframe
              data-tally-src="https://tally.so/r/3NRLlG?transparentBackground=1"
              width="100%"
              height="500px"
              title="SG Econs League: Registration"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}

      <section className="w-full bg-[#fbfafb] py-16">
        <div className="max-w-screen-lg mx-auto px-4 md:px-0">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4 slab">
                Sample <span className="bg-gradient-to-r from-[#7f9fd8] to-[#5073b1] bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-gray-700 text-lg">
                Wonder what types of questions SEL tests?
                <br /> Check out these curated examples!
              </p>
              <button className="px-6 py-3 bg-white text-secondary font-semibold border-2 rounded-xl border-b-4 border-secondary transition-all duration-200 hover:scale-105 transition-transform ease-in-out hover:scale-105 mt-6">
                View the Syllabus
              </button>
              <Image
                src="/graphics/studying.png"
                alt="Syllabus Illustration"
                width={480}
                height={480}
                className="hidden md:block mt-6 h-auto"
              />
            </div>
            <div className="md:w-1/2 flex flex-col gap-6">
              {sampleQuestions.map((question, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-primary shadow-lg rounded-xl p-6"
                >
                  <h3 className="text-2xl font-bold mb-2 text-baseText slab">
                    {question.title}
                  </h3>
                  <span
                    className={`inline-block px-3 py-1 text-base font-medium rounded-full ${question.difficultyColor}`}
                  >
                    {question.difficulty}
                  </span>
                  <p className="text-baseText text-lg mt-3">
                    {question.description}
                  </p>
                  <a
                    href={question.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center w-full text-secondary font-semibold text-xl rounded-xl px-4 py-2 border-2 rounded-xl border-b-4 border-secondary transition-all duration-200 hover:scale-105 transition-transform ease-in-out hover:scale-105"
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
                      className="mr-2 text-secondary"
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
      </section>

      <section className="flex items-center justify-center mt-24 px-4 md:px-0">
        <div className="max-w-screen-lg w-full">
          <div className="flex flex-col gap-6">
            <div
              className="
                relative
                border-2 border-secondary
                rounded-3xl
                p-14 w-full
                flex flex-col items-center
                text-center bg-white text-lg
              "
            >
              <Image
                src="/graphics/flowerPot.png"
                alt="Community Mobile"
                width={200}
                height={200}
                className="md:hidden mx-auto mb-4"
              />
              <Image
                src="/graphics/flowerPot.png"
                alt="Community Left"
                width={200}
                height={200}
                className="
                  hidden
                  md:block
                  absolute
                  left-6
                  top-1/2
                  transform
                  -translate-y-1/2
                  h-auto
                  ml-4
                "
              />
              <Image
                src="/graphics/piggyBank.png"
                alt="Community Right"
                width={200}
                height={200}
                className="
                  hidden
                  md:block
                  absolute
                  right-6
                  top-1/2
                  transform
                  -translate-y-1/2
                  h-auto
                  mr-4
                "
              />
              <h3 className="text-4xl font-medium slab text-baseText mt-6">
                Join our Community
              </h3>
              <p className="text-baseText mt-6 max-w-lg">
                Ask questions, make friends, and form teams. Good vibes only!
              </p>
              <a
                href="https://discord.gg/FMn74arxZd"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-9
                  px-5
                  py-2
                  bg-discordBlue
                  text-white
                  text-lg
                  font-semibold
                  rounded-lg
                  transition-transform
                  duration-200
                  ease-in-out
                  hover:scale-105
                  flex
                  items-center
                  space-x-2
                "
              >
                <Image
                  src="https://cdn3.emoji.gg/emojis/5542-discord-clyde-gif.gif"
                  alt="Discord"
                  width={24}
                  height={24}
                />
                <span>Join the SEL Discord Server!</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16">
        <div className="max-w-screen-lg mx-auto px-4 md:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black slab mb-4">
            Organising Team{" "}
            <span className="bg-gradient-to-r from-[#7f9fd8] to-[#5073b1] bg-clip-text text-transparent">
              2025
            </span>
          </h2>
          <p className="text-center text-gray-700 text-base mb-16">
            Massive shout out to our team for taking time out of their day to make this competition possible!
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {teamMembers.map((member) => (
              <a
                key={member.name}
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center transition-transform duration-200 hover:scale-105"
              >
                <div className="relative w-28 h-28 rounded-full bg-white border-4 border-gray-100 shadow-lg overflow-hidden">
                  <Image
                    src={member.image || "/team-pics/default.png"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 font-semibold text-primary text-lg">
                  {member.name}
                </p>
                {member.roles.map((role) => (
                  <p key={role} className="text-gray-600 text-sm">
                    {role}
                  </p>
                ))}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
