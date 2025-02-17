"use client";

import React, { useState, useEffect } from "react";

const EventDetails = () => {
  const eventDate = "Sat 19th July 2025";
  const eventTime = "9 am - 1 pm SGT";
  const eventTimestamp = new Date("July 19, 2025 09:00:00").getTime(); // Competition date
  const title = "Competitive Online Economics Contest";
  const description = (
    <>
      A team based competition for problem solving in economics.
      <br />
      Battle your fellow students for the crown!
    </>
  );
  const rulesLink = "/rules";

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const teamMembers = [
    { name: "Ho Jon Yew", roles: ["Chief Organiser"], link: "#" },
    { name: "Tevel Sho", roles: ["Deputy Chief Organiser", "Lead Developer"], link: "https://www.linkedin.com/in/tevelsho" },
    { name: "Lucas Lee", roles: ["Head of Operations"], link: "https://www.linkedin.com/in/lucas-lee-zy " },
    { name: "Li Zonglun", roles: ["Head of Academics", "Problem Setter"], link: "https://www.linkedin.com/in/zonglun-li-80970a276" },
    { name: "Zhao YuXuan", roles: ["Academics Consultant", "Problem Setter"], link: "#" },
    { name: "Jonas Lim", roles: ["Problem Setter"], link: "https://www.linkedin.com/in/jonas-lim-489a05330" },
    { name: "Fan YiXiang", roles: ["Problem Setter"], link: "#" },
    { name: "Theodore Chou", roles: ["Problem Setter"], link: "https://www.linkedin.com/in/theodore-chou-sales-marketing-entrepreneurship-economics" },
    { name: "Jeffrey Lee", roles: ["Lead Developer"], link: "https://www.linkedin.com/in/jeffrey-lee-8a9461236" },
    { name: "Chua Zhong Ding", roles: ["Full Stack Developer", "Penetration Tester"], link: "https://www.linkedin.com/in/chua-zhong-ding-94412728b" },
    { name: "Chew Jin Hao", roles: ["Full Stack Developer"], link: "#" },
    { name: "Ethan Chew", roles: ["Full Stack Developer"], link: "#" },
    { name: "Raeanne Zou", roles: ["UI/UX Designer"], link: "#" },
    { name: "Dylan Saga", roles: ["Data Analyst"], link: "#" },
  ];

  return (
    <>
      {/* Existing Event Details Section */}
      <section className="flex flex-col lg:flex-row items-start justify-start bg-glassBlue py-24 px-8 lg:px-32 gap-8">
        <div className="flex-1 max-w-2xl">
          <div className="mb-12">
            <span
              className="bg-white text-[#343131] px-6 py-5 rounded-lg 
            shadow-[10px_10px_20px_0px_rgba(0,0,0,0.2),10px_0px_35px_0px_rgba(0,0,0,0.1)] text-2xl"
            >
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
        <div className="flex-1 hidden lg:block">
          <img src="/your-image-path.png" alt="" className="w-full h-auto" />
        </div>
      </section>

      {/* Countdown Timer Section */}
      <section className="flex flex-col items-center justify-center py-12 px-10 relative">
        <h2 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#E0E0E0] to-[#F1F3F5]">
          Let’s roll
        </h2>

        {/* Countdown Box (Styled Like Call-to-Action) */}
        <div className="bg-[#f4f4f4] w-full max-w-3xl p-10 rounded-xl shadow-[6px_8px_6px_rgba(0,0,0,0.2),0_8px_20px_rgba(0,0,0,0.08)] text-center relative">
          {/* Timer Labels */}
          <div className="flex justify-center gap-10 text-xs font-medium text-[#3F3B3A] uppercase mb-3 tracking-widest">
            <span>Days</span>
            <span>Hours</span>
            <span>Minutes</span>
            <span>Seconds</span>
          </div>
          {/* Countdown Digits */}
          <div className="flex justify-center items-center text-6xl font-bold text-[#3F3B3A]">
            <span>{timeLeft.days}</span>
            <span className="mx-2 text-4xl font-light">:</span>
            <span>{timeLeft.hours}</span>
            <span className="mx-2 text-4xl font-light">:</span>
            <span>{timeLeft.minutes}</span>
            <span className="mx-2 text-4xl font-light">:</span>
            <span>{timeLeft.seconds}</span>
          </div>
          {/* Countdown Footer */}
          <p className="text-[#43291F] text-lg mt-4">Till the Challenge Starts</p>
          <p className="text-lg font-semibold text-[#43291F]">12th July 2025</p>
        </div>
      </section>

      {/* Numbered Section with Alternating Layout */}
      <section className="py-16 px-8 lg:px-32 max-w-screen-lg mx-auto">
        <div className="flex flex-col">
          {/* Item 1 - Left */}
          <div className="flex items-center">
            <span className="text-[15rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D1C6F3] to-[#E9BCAC]">
              1
            </span>
            <div className="relative z-10 -ml-24 pl-7">
              <h3 className="text-3xl font-bold text-[#343131] mt-8">No Boundaries, No Limits</h3>
              <p className="text-black mt-4">
                An online contest, accessible from anywhere. Log on from <br /> the comfort of your home and put your wits to the test!
              </p>
            </div>
          </div>

          {/* Item 2 - Right */}
          <div className="flex items-center justify-end">
            <div className="relative z-10 -mr-14 pl-7 text-right">
              <h3 className="text-xl font-bold">
                <span className="text-3xl font-bold text-[#343131] mt-12 block">
                  Calling all Pre-U Students!
                </span>
              </h3>
              <p className="text-black mt-4">
                Studying in a JC/MI, local polytechnic, ITE, or <br /> secondary school? You are eligible to participate!
              </p>
            </div>
            <span className="text-[15rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFAE00] to-[#F9E866]">
              2
            </span>
          </div>

          {/* Item 3 - Left */}
          <div className="flex items-center">
            <span className="text-[15rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A0F1EA] to-[#EAD6EE]">
              3
            </span>
            <div className="relative z-10 -ml-24 pl-7">
              <h3 className="text-3xl font-bold text-[#343131] mt-12">
                Build Your Dream Team
              </h3>
              <p className="text-black mt-4">
                From classmates to friends in other schools, assemble <br /> the team of your choice to win it all!
              </p>
            </div>
          </div>

          {/* Item 4 - Right */}
          <div className="flex items-center justify-end">
            <div className="relative z-10 -mr-14 pl-7 text-right">
              <h3 className="text-3xl font-bold text-[#343131] mt-32 block">
                From Numbers to Narrative
              </h3>
              <p className="text-black mt-4 mb-4">
                Every question will challenge your wit, <br /> knowledge, and problem solving skills in novel <br /> and unexpected ways.
              </p>
              <a href="#" className="text-[#0092E8] font-semibold underline">
                Try some sample problems!
              </a>
            </div>
            <span className="text-[15rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFC145] to-[#EC368D]">
              4
            </span>
          </div>

          {/* Item 5 - Left */}
          <div className="flex items-center gap-10">
            <span className="text-[15rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F1FEC6] to-[#107F5C]">
              5
            </span>
            <div className="relative z-10 -ml-32 pl-7">
              <h3 className="text-3xl font-bold text-[#343131] mt-20">
                Got Any Questions?
              </h3>
              <p className="text-black mt-4 mb-4">
                Check out our{" "}
                <a href="#" className="text-[#0092E8] font-semibold underline">
                  Frequently Asked Questions
                </a>
                !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Call-to-Action Box */}
<section className="flex items-center justify-center py-12 px-10">
  <div
    className="
      bg-[#f4f4f4]
      w-full
      max-w-3xl
      p-10
      rounded-xl
    "
    style={{
      boxShadow:
        "-8px -8px 16px rgba(255,255,255,0.3), 8px 8px 16px rgba(0,0,0,0.3)",
    }}
  >
    {/* Heading */}
    <h2 className="text-center text-2xl font-bold mb-6">
      Do{" "}
      <span className="bg-gradient-to-r from-[#4CA9DF] to-[#1DBF9F] bg-clip-text text-transparent">
        you
      </span>{" "}
      have what it takes?
    </h2>

    {/* Description */}
    <p className="text-center text-black text-base mb-10">
      Register now and be part of an exciting journey where you get to put
      your economics knowledge to the test, work with others, and have fun
      while doing it!
    </p>

    {/* Button */}
    <div className="flex justify-center">
      <button
        className="
          px-8 py-3
          bg-[#4CA9DF] text-white text-lg font-semibold
          rounded-lg
          shadow-[6px_5px_10px_rgba(0,0,0,0.3)]
          hover:shadow-[0_6px_15px_rgba(0,0,0,0.1)]
          hover:bg-primary
          transition-all
        "
      >
        Sign Up
      </button>
    </div>
  </div>
</section>



      {/* 2025 Organising Team Section */}
      <section className="py-20 px-8 lg:px-32 text-center">
        {/* Heading */}
        <h2 className="text-[#AEAEC066] text-3xl font-bold mb-2">
          Meet the
        </h2>
        <h1 className="text-black text-5xl lg:text-4xl font-bold mb-10">
          2025 Organising{" "}
          <span className="bg-gradient-to-r from-[#4CA9DF] to-[#1DBF9F] bg-clip-text text-transparent">
            Team
          </span>
        </h1>

        {/* Team Members */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group transition-transform duration-300 hover:scale-105">
              <a href={member.link} className="text-[#3E8E96] text-2xl font-semibold group-hover:underline">
                {member.name}
              </a>
              <div className="transition-transform duration-300">
                {member.roles.map((role, roleIndex) => (
                  <p key={roleIndex} className="text-gray-600 text-base">
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

export default EventDetails;
