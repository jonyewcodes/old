"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Timeline from "./components/Timeline";
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
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const sampleQuestions = [
    {
      title: "Economic Crisis on Arrakis",
      difficulty: "Easy",
      difficultyColor: "bg-[#D4F5E2] text-[#2E7D32]",
      description: "We learn macroeconomics to analyse our world. Do these macroeconomic forces still apply in the world of DUNE?",
      link: "/sample-questions/easy.pdf",
    },
    {
      title: "Competition Sign-Ups",
      difficulty: "Medium",
      difficultyColor: "bg-[#FFF3C4] text-[#FF9800]",
      description: "Do you have entrepreneurial spirit? Its not just firms — high school students can be profit hungry too.",
      link: "/sample-questions/moderate.pdf",
    },
    {
      title: "The AI Dilemma: Growth vs Risk",
      difficulty: "Hard",
      difficultyColor: "bg-[#FFEBEE] text-[#D32F2F]",
      description: "AI poses both existential risk and untapped opportunity? How can humanity balance these factors?",
      link: "/sample-questions/hard.pdf",
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

  return (
    <>
      <div
        className={`
          bg-[#C22224] text-white
          overflow-hidden
          transition-all duration-500 ease-in-out
          ${showAnnouncement ? "opacity-100 max-h-28 py-4" : "opacity-0 max-h-0 py-0"}
        `}
      >
        <div className="max-w-100% mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-speakerphone"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 8a3 3 0 0 1 0 6" />
              <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
              <path d="M12 8h0l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
            </svg>
            <p className="text-base sm:text-lg">
              We are actively expanding our team and looking for passionate individuals. If you’re interested in any role(s), please{" "}
              <a
                href="https://tally.so/r/3yd5qd"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                <b>apply here</b>
              </a>
              !
            </p>
          </div>
          <button
            onClick={() => setShowAnnouncement(false)}
            className="hover:scale-110 transition-transform"
            aria-label="Close announcement"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <section
        className="
          relative
          backdrop-blur-lg
          border border-white/20
          py-16 px-4
          sm:py-20 sm:px-6
          lg:py-24 lg:px-32
          text-background
          overflow-hidden
          animate-bg-switch
        "
      >
        <div className="absolute inset-0 z-0 opacity-30">
          {/* <CandleChart /> */ }
        </div>
        <div className="relative z-10 w-full max-w-screen-xl mx-auto flex flex-col items-start">
          <div
            className="
              inline-block
              bg-background
              text-secondary
              rounded-md
              px-4 py-3
              shadow-sm
              whitespace-nowrap
              mb-4
            "
          >
            <p className="font-semibold text-lg leading-tight text-left">
              Sat · 26 July 2025 · 09:00 AM — 01:00 PM SGT
            </p>
          </div>
          <h1
            className="
              text-[5rem]
              sm:text-[6rem]
              lg:text-[7rem]
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
      <style>
        {`
          @keyframes bgSwitch {
            0%, 48% {
              background-color: rgba(48,101,191,255);
            }
            52%, 100% {
              background-color: rgba(46,96,181,255);
            }
          }

          .animate-bg-switch {
            animation: bgSwitch 120s ease-in-out infinite;
          }
        `}
      </style>

      {hasMounted && (
        <section className="flex flex-col items-center justify-center py-12 px-10 relative">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#7f9fd8] to-[#5073b1]">
            Let’s Roll
          </h2>
          <div className="mt-10 flex items-center justify-center gap-3 sm:gap-6">
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
                        items-center
                        justify-center
                        h-32
                        text-6xl
                        sm:text-7xl
                        font-light
                        mx-1
                        sm:mx-2
                        text-baseText
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
          <p className="text-baseText text-2xl mt-8">Till Registration Ends</p>
          <p className="text-2xl font-semibold text-baseText">— 4 July 2025 —</p>
        </section>
      )}

      <section
        className="
          py-16 
          px-4       /* narrower default padding on mobile */
          sm:py-20 
          sm:px-8 
          lg:py-24 
          lg:px-12   /* consistent with the rest of the layout */
          w-full 
          max-w-screen-xl 
          mx-auto
        "
      >
        <div className="flex flex-col gap-24">
          <div className="flex items-center justify-start">
            <div className="border-4 border-primary rounded-xl px-8 py-6 inline-flex items-center gap-6">
              <span className="text-[16rem] font-bold text-transparent leading-none bg-clip-text bg-gradient-to-r from-[#C0ADFB] to-[#0790FF]">
                1
              </span>
              <div>
                <h3 className="text-3xl font-bold text-baseText">No Boundaries, No Limits</h3>
                <p className="text-baseText mt-4 text-xl">
                  An online contest, accessible from anywhere. Log on from <br />
                  the comfort of your home and put your wits to the test!
                </p>
              </div>
            </div>
            <Image
              src="/emoticons/Excited.png"
              alt="Box 1 illustration"
              width={384}
              height={384}
              className="w-96 h-auto ml-32"
            />
          </div>
          <div className="flex items-center justify-end">
            <Image
              src="/emoticons/ThumbsUp.png"
              alt="Box 2 illustration"
              width={320}
              height={320}
              className="w-80 h-auto mr-32"
            />
            <div className="border-4 border-primary rounded-xl px-8 py-6 inline-flex items-center gap-6">
              <div className="text-right">
                <h3 className="text-3xl font-bold text-baseText">Calling all Pre-U Students!</h3>
                <p className="text-baseText mt-4 text-xl">
                  Studying in a JC/MI, local polytechnic, ITE, or <br />
                  secondary school? You are eligible to participate!
                </p>
              </div>
              <span className="text-[16rem] font-bold text-transparent leading-none bg-clip-text bg-gradient-to-r from-[#5FA1FE] to-[#3539FF]">
                2
              </span>
            </div>
          </div>
          <div className="flex items-center justify-start">
            <div className="border-4 border-primary rounded-xl px-8 py-6 inline-flex items-center gap-6">
              <span className="text-[16rem] font-bold text-transparent leading-none bg-clip-text bg-gradient-to-r from-[#AAD8F9] to-[#4E8EE2]">
                3
              </span>
              <div>
                <h3 className="text-3xl font-bold text-baseText">Build Your Dream Team</h3>
                <p className="text-baseText mt-4 text-xl">
                  From classmates to friends in other schools, assemble <br />
                  the team of your choice to win it all!
                </p>
                <a
                  href="https://tally.so/r/3NRLlG"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    border-4 border-primary 
                    mt-6 
                    inline-block 
                    px-8 
                    py-2 
                    bg-[#ffffff] 
                    text-secondary 
                    text-xl 
                    font-medium 
                    rounded-lg 
                    hover:bg-[#eaf2fb] 
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
              src="/emoticons/Excited.png"
              alt="Box 3 illustration"
              width={384}
              height={384}
              className="w-96 h-auto ml-24"
            />
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
              height="700px"
              title="SG Econs League: Registration"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}

      <section className="relative w-full flex items-center justify-center">
        <div className=" w-full relative z-10 max-w-screen-xl w-full px-6 lg:px-12">
          <h2 className="text-6xl font-bold slab text-baseText text-center mb-6">
            Important{" "}
            <span className="bg-gradient-to-r from-[#7f9fd8] to-[#5073b1] bg-clip-text text-transparent">
              Dates
            </span>
          </h2>
          <div className="border-b border-divider mb-8 w-full max-w-screen-xl mx-auto" />
          <div className="flex justify-center">
            <div className="w-full">
              <Timeline />
            </div>
          </div>
          <div className="border-b border-divider mt-8 w-full max-w-screen-xl mx-auto mb-32" />
        </div>
      </section>

      <section className="flex items-center justify-center">
        <div className="max-w-screen-xl w-full px-6 lg:px-12">
          <h1 className="text-black text-6xl font-bold mb-6 text-center slab">
            Sample{" "}
            <span className="bg-gradient-to-r from-[#7f9fd8] to-[#5073b1] bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <div className="border-b border-divider mb-8 w-full max-w-screen-xl mx-auto" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleQuestions.map((question, index) => (
              <div
                key={index}
                className="bg-white border-4 border-primary rounded-xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-semibold">{question.title}</h3>
                <span
                  className={`inline-block w-fit px-3 py-1 text-base font-medium rounded-full ${question.difficultyColor}`}
                >
                  {question.difficulty}
                </span>
                <p className="text-baseText text-lg">{question.description}</p>
                <a
                  href={question.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center w-full
                    text-secondary font-semibold text-xl
                    border-4 border-secondary
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
          <div className="border-b border-divider mt-8 w-full max-w-screen-xl mx-auto mb-32" />
        </div>
      </section>

      <section className="flex items-center justify-center">
        <div className="max-w-screen-xl w-full px-6 lg:px-12">
          <h1 className="text-baseText text-6xl lg:text-6xl font-bold mb-6 text-center slab">
            Useful{" "}
            <span className="bg-gradient-to-r from-[#7f9fd8] to-[#5073b1] bg-clip-text text-transparent">
              Resources
            </span>
          </h1>
          <div className="border-b border-divider mb-8 w-full max-w-screen-xl mx-auto" />
          <div className="flex flex-col gap-6">
            <div
              className="
                relative
                border-4 border-primary
                rounded-tl-3xl rounded-tr-3xl
                p-14 w-full
                flex flex-col items-center
                text-center bg-white text-lg
              "
            >
              <Image
                src="/emoticons/Laughing.png"
                alt="Community Left"
                width={256}
                height={256}
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
                src="/emoticons/Laughing.png"
                alt="Community Right"
                width={256}
                height={256}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 text-lg">
              <div
                className="
                  relative
                  border-4 border-primary
                  rounded-3xl
                  bg-white
                  p-14
                  flex flex-col
                  items-start
                "
              >
                <div className="max-w-sm">
                  <h3 className="font-medium slab text-4xl text-baseText">FAQ</h3>
                  <p className="text-baseText mt-4">
                    Have a burning question?
                    <br />
                    We might&apos;ve answered it already!
                  </p>
                  <a
                    href="/faq"
                    className="
                      border-4 border-secondary
                      mt-6 inline-block
                      px-6 py-2.5
                      bg-background
                      text-secondary
                      text-lg font-medium
                      rounded-lg
                      hover:bg-[#eaf2fb]
                      transition-transform
                      duration-200
                      ease-in-out
                      hover:scale-105
                    "
                  >
                    Read Our FAQ 🡒
                  </a>
                </div>
                <Image
                  src="/emoticons/Cool.png"
                  alt="FAQ Illustration"
                  width={200}
                  height={200}
                  className="
                    hidden
                    md:block
                    absolute
                    right-4
                    top-1/2
                    transform
                    -translate-y-1/2
                    h-auto
                    mr-4
                  "
                />
              </div>
              <div
                className="
                  relative
                  border-4 border-primary
                  rounded-3xl
                  bg-white
                  p-14
                  flex flex-col
                  items-start
                "
              >
                <div className="max-w-sm">
                  <h3 className="text-4xl font-medium slab text-baseText">
                    Syllabus
                  </h3>
                  <p className="text-baseText mt-4">
                    Curious how SEL drives the contest?
                    <br />
                    SEL follows the IEO syllabus!
                  </p>
                  <a
                    href="/syllabus"
                    className="
                      border-4 border-secondary
                      mt-6 inline-block
                      px-6 py-2.5
                      bg-background
                      text-secondary
                      text-lg font-medium
                      rounded-lg
                      hover:bg-[#eaf2fb]
                      transition-transform
                      duration-200
                      ease-in-out
                      hover:scale-105
                    "
                  >
                    View the Syllabus 🡒
                  </a>
                </div>
                <Image
                  src="/emoticons/Cool.png"
                  alt="Syllabus Illustration"
                  width={200}
                  height={200}
                  className="
                    hidden
                    md:block
                    absolute
                    right-4
                    top-1/2
                    transform
                    -translate-y-1/2
                    h-auto
                    ml-4
                  "
                />
              </div>
            </div>
            <div className="border-b border-divider mt-8 w-full max-w-screen-xl mx-auto" />
          </div>
        </div>
      </section>
    </>
  );
}
