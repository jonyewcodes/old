"use client";

import React, { useState, useEffect} from "react";
import Image from "next/image";
import Timeline from "./components/Timeline";
import CountDown from "./components/CountDown";
import dynamic from "next/dynamic";

const CandleChart = dynamic(() => import("./components/CandleChart"), { ssr: false });

const HomePage = () => {
  const eventTimestamp = new Date("July 4, 2025 09:00:00").getTime();

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setModalOpen(false), 300);
  };

  const [hasMounted, setHasMounted] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const sampleQuestions = [
    {
      title: "Economic Crisis on Arrakis",
      difficulty: "Easy",
      difficultyColor: "bg-[#D4F5E2] text-[#2E7D32]",
      description: "Solve economic instability on a desert planet using optimal resource management.",
      link: "/sample-questions/easy.pdf",
    },
    {
      title: "Competition Sign-Ups",
      difficulty: "Medium",
      difficultyColor: "bg-[#FFF3C4] text-[#FF9800]",
      description: "Efficiently manage multiple sign-ups for an event using data structures.",
      link: "/sample-questions/medium.pdf",
    },
    {
      title: "The AI Dilemma: Growth vs Risk",
      difficulty: "Hard",
      difficultyColor: "bg-[#FFEBEE] text-[#D32F2F]",
      description: "Balance AI development while mitigating risks in a futuristic society.",
      link: "/sample-questions/hard.pdf",
    },
  ];

  const [showAnnouncement, setShowAnnouncement] = useState(true);
  
  return (
    <>
      {/* ===== Announcement Bar ===== */}
      <div
        className={`
          bg-[#C22224] text-white
          overflow-hidden
          transition-all duration-500 ease-in-out
          ${showAnnouncement ? "opacity-100 max-h-28 py-4" : "opacity-0 max-h-0 py-0"}
        `}
      >
        <div className="max-w-100% mx-auto px-4 flex items-center justify-between">
          {/* Left side: Megaphone icon + text in a row */}
          <div className="flex items-center gap-2">
          {/* Megaphone Icon */}
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
          <p className="text-sm sm:text-base">
            We are actively expanding our team and looking for passionate individuals. If you’re interested in any role, please{" "}
            <a href="https://your-form-link.com" className="underline">
              apply here
            </a>!
          </p>
        </div>


          {/* Right side: Close (X) icon */}
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
      {/* Event Details Section */}
      <section
      className="
        relative
        bg-primary/85
        py-16 px-4
        sm:py-20 sm:px-6
        lg:py-24 lg:px-32
        text-white
        overflow-hidden
      "
    >
      {/* Background CandleChart */}
      <div className="absolute inset-0 z-0 opacity-30">
        <CandleChart />
      </div>

      {/* Main content container */}
      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* 1) Big heading, centered */}
        <h1
          className="
            text-[4rem]
            sm:text-[5rem]
            lg:text-[6rem]
            font-medium
            text-center
            mb-4
            mt-4
            slab
            leading-tight
          "
        >
          Singapore <br />
          Economics League
        </h1>

        {/* Two side-by-side boxes, same width as the heading */}
        <div className="w-full max-w-4xl mx-auto flex flex-col sm:flex-row items-stretch justify-center gap-6 mb-8">
          {/* Left Box */}
          <div
            className="
              basis-1/2
              bg-secondary/85
              text-white
              border-2 border-[#272a30]
              rounded-xl
              px-4 py-3
              shadow-sm
              flex
              items-center
              justify-center
            "
          >
            <p className="font-semibold text-base leading-tight whitespace-normal text-center text-sm">
              Fri · 4 July 2025 · 11:59 PM SGT (Registration Closes)
            </p>
          </div>

          {/* Right Box */}
          <div
            className="
              basis-1/2
              bg-secondary/85
              text-white
              border-2 border-[#272a30]
              rounded-xl
              px-4 py-3
              shadow-sm
              flex
              items-center
              justify-center
            "
          >
            <p className="font-semibold text-base leading-tight whitespace-normal text-center text-sm">
              Sat · 26 July 2025 · 09:00 AM — 01:00 PM SGT (Competition)
            </p>
          </div>
        </div>

        {/* Centered paragraph below */}
        <p className="max-w-3xl text-center text-white">
          A team based competition for problem solving in economics. Battle your fellow
          students for the crown!
        </p>
      </div>

    </section>

      {/* Countdown Timer Section */}
      {hasMounted && (
        <section className="flex flex-col items-center justify-center py-12 px-10 relative">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#7f9fd8] to-[#5073b1]">
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


      
      <section className="py-16 px-6 sm:py-20 sm:px-8 lg:py-24 lg:px-36 w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-24">
          
          {/* 1 - Number Left, Text Right */}
          <div className="flex justify-start">
            <div className="border-2 border-primary rounded-xl px-8 py-6 inline-flex items-center gap-6">
              {/* Large gradient “1” (smaller) */}
              <span className="text-[16rem] font-bold text-transparent leading-none bg-clip-text bg-gradient-to-r from-[#C9DAF3] to-[#7F9FD8]">
                1
              </span>

              {/* Text Block (heading smaller, paragraph smaller) */}
              <div>
                <h3 className="text-2xl font-bold text-[#343131]">
                  No Boundaries, No Limits
                </h3>
                <p className="text-black mt-4 text-xl">
                  An online contest, accessible from anywhere. Log on from <br />
                  the comfort of your home and put your wits to the test!
                </p>
              </div>
            </div>
          </div>

          {/* 2 - Text Left, Number Right */}
          <div className="flex justify-end">
            <div className="border-2 border-primary  rounded-xl px-8 py-6 inline-flex items-center gap-6">
              {/* Text Block (right-aligned) */}
              <div className="text-right">
                <h3 className="text-2xl font-bold text-[#343131]">
                  Calling all Pre-U Students!
                </h3>
                <p className="text-black mt-4 text-xl">
                  Studying in a JC/MI, local polytechnic, ITE, or <br />
                  secondary school? You are eligible to participate!
                </p>
              </div>

              {/* Large gradient “2” (smaller) */}
              <span className="text-[16rem] font-bold text-transparent leading-none bg-clip-text bg-gradient-to-r from-[#7F9FD8] to-[#5073b1]">
                2
              </span>
            </div>
          </div>

          {/* 3 - Number Left, Text Right */}
          <div className="flex justify-start">
            <div className="border-2 border-primary rounded-xl px-8 py-6 inline-flex items-center gap-6">
              {/* Large gradient “3” (smaller) */}
              <span className="text-[16rem] font-bold text-transparent leading-none bg-clip-text bg-gradient-to-r from-[#5073b1] to-[#32447E]">
                3
              </span>

              {/* Text Block */}
              <div>
                <h3 className="text-2xl font-bold text-[#343131]">
                  Build Your Dream Team
                </h3>
                <p className="text-black mt-4 text-xl">
                  From classmates to friends in other schools, assemble <br />
                  the team of your choice to win it all!
                </p>
              </div>
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

      {/* Sample Questions Section */}
      <section className="flex items-center justify-center">
        <div className="max-w-[1400px] w-full px-6 lg:px-12 ">
          {/* Heading & Intro Text */}
          <h1 className="text-black text-5xl lg:text-5xl font-bold mb-6 text-center">
          Sample{" "}
          <span className="bg-gradient-to-r from-[#7f9fd8] to-[#5073b1] bg-clip-text text-transparent">
            Questions
          </span>
        </h1>
        <div className="border-b border-[#cdcac8] mb-8 w-full max-w-[1400px] mx-auto" />
          {/* The same grid styling from your snippet */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleQuestions.map((question, index) => (
              <div
                key={index}
                className="bg-white border-2 border-primary rounded-xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold">{question.title}</h3>
                <span
                  className={`inline-block w-fit px-3 py-1 text-sm font-medium rounded-full ${question.difficultyColor}`}
                >
                  {question.difficulty}
                </span>
                <p className="text-gray-600">{question.description}</p>
                <a
                  href={question.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center w-full
                    text-secondary font-semibold
                    border-2 border-secondary
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
                    className="mr-2"
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
          <div className="border-b border-[#cdcac8] mt-8 w-full max-w-[1400px] mx-auto" />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative my-16 w-full">
        <div className="py-28 w-full relative z-10">
          <h2 className="text-5xl font-bold slab text-[#343131] text-center mb-6">
            Important{" "}
            <span className="bg-gradient-to-r from-[#7f9fd8] to-[#5073b1] bg-clip-text text-transparent">
            Dates
            </span>
          </h2>
          <div className="border-b border-[#cdcac8] mb-8 w-full max-w-[1400px] mx-auto" />
          <div className="flex justify-center">
            <div className="w-full max-w-6xl px-10">
              <Timeline />
            </div>
          </div>
          <div className="border-b border-[#cdcac8] mt-8 w-full max-w-[1400px] mx-auto" />
        </div>
      </section>


      {/* Resource Section */}
      <section className="w-full py-16 px-8 lg:px-20">
                  {/* Heading & Intro Text */}
                  <h1 className="text-black text-5xl lg:text-5xl font-bold mb-6 text-center">
          Useful{" "}
          <span className="bg-gradient-to-r from-[#7f9fd8] to-[#5073b1] bg-clip-text text-transparent">
            Resources
          </span>
        </h1>
        <div className="border-b border-[#cdcac8] mb-8 w-full max-w-[1400px] mx-auto" />
      <div className="max-w-screen-xl mx-auto flex flex-col gap-6">

        {/* "Join our Community" Box */}
        <div className="border-2 border-primary rounded-tl-3xl rounded-tr-3xl p-14 w-full flex flex-col items-center text-center bg-white">
          <h3 className="text-3xl font-medium slab text-[#343131] mt-6">
            Join our Community
          </h3>
          <p className="text-[#43291F] mt-6 max-w-lg">
            Ask questions, make friends, and form teams. Good vibes only!
          </p>

          {/* Discord Button */}
          <a
            href="https://discord.gg/SEk9HrXk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 px-5 py-2 bg-[#5865F2] text-white text-base font-semibold rounded-lg
              transition-transform duration-200 ease-in-out hover:scale-105
              flex items-center space-x-2"
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

        {/* FAQ & Sample Questions Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="border-2 border-primary rounded-3xl bg-white p-14 flex flex-col items-start">
            <div className="max-w-sm">
              <h3 className="font-medium slab text-3xl text-[#343131]">About Us</h3>
              <p className="text-[#43291F] mt-4">
                Got a question on your mind? <br />
                We may have already answered it!
              </p>
              <a
                href="/faq"
                className="border-2 border-primary mt-6 inline-block px-6 py-2.5 bg-[#ffffff] text-[#4CA9DF] text-base font-medium rounded-lg
                  hover:bg-[#eaf2fb] transition-transform duration-200 ease-in-out hover:scale-105"
              >
                Get to Know Us 🡒
              </a>
            </div>
          </div>

          <div className="border-2 border-primary rounded-3xl bg-white p-14 flex flex-col items-start">
            <div className="max-w-sm">
              <h3 className="text-3xl font-medium slab text-[#343131]">
                Archives
              </h3>
              <p className="text-[#43291F] mt-4">
                Learn more about the format and <br />
                structure of our questions!
              </p>
              <a
                href="/sample-questions"
                className="border-2 border-primary mt-6 inline-block px-6 py-2.5 bg-[#ffffff] text-[#4CA9DF] text-base font-medium rounded-lg
                  hover:bg-[#eaf2fb] transition-transform duration-200 ease-in-out hover:scale-105"
              >
                View Past Winners 🡒
              </a>
            </div>
          </div>
        </div>
        <div className="border-b border-[#cdcac8] mt-8 w-full max-w-[1400px] mx-auto" />
      </div>
    </section>
    </>
  );
};

export default HomePage;
