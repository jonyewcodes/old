import React from "react";

const EventDetails = () => {
  const eventDate = "Sat 19th July 2025";
  const eventTime = "9 am - 1 pm SGT";
  const title = "A Competitive Online Economics Contest";
  const description = (
    <>
      SG Econs League is a team-based competition for problem-solving in
      economics. <br />
      Battle your fellow students for the crown!
    </>
  );
  const rulesLink = "/rules";

  const teamMembers = [
    { name: "Ho Jon Yew", roles: ["Chief Organiser"], link: "#" },
    { name: "Tevel Sho", roles: ["Deputy Chief Organiser", "Lead Developer"], link: "https://www.linkedin.com/in/tevelsho" },
    { name: "Lucas Lee", roles: ["Head of Operations"], link: "#" },
    { name: "Li Zonglun", roles: ["Head of Academics", "Problem Setter"], link: "#" },
    { name: "Zhao YuXuan", roles: ["Academics Consultant", "Problem Setter"], link: "#" },
    { name: "Jonas Lim", roles: ["Problem Setter"], link: "#" },
    { name: "Fan YiXiang", roles: ["Problem Setter"], link: "#" },
    { name: "Theodore Chou", roles: ["Problem Setter"], link: "#" },
    { name: "Jeffrey Lee", roles: ["Lead Developer"], link: "#" },
    { name: "Chua Zhong Ding", roles: ["Full Stack Developer", "Penetration Tester"], link: "#" },
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
            <span className="bg-white text-gray-700 px-4 py-4 rounded-lg shadow-[0_0_15px_5px_rgba(255,255,255,0.8),0_12px_16px_rgba(0,0,0,0.1)] font-extralight text-2xl">
              {eventDate}, {eventTime}
            </span>
          </div>
          <h1 className="text-2xl lg:text-5xl font-bold text-primary mb-6">
            {title}
          </h1>
          <p className="text-black font-medium mb-6 leading-relaxed text-lg">
            {description}
          </p>
          <a
            href={rulesLink}
            className="text-accent font-bold underline hover:text-secondary transition text-lg"
          >
            Competition Rules
          </a>
        </div>
        <div className="flex-1 hidden lg:block">
          <img
            src="/your-image-path.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* New Call-to-Action Box */}
      <section className="flex items-center justify-center py-12 px-10">
        <div className="bg-[#f8f8f8] w-full max-w-3xl p-10 rounded-xl shadow-[6px_8px_6px_rgba(0,0,0,0.2),0_8px_20px_rgba(0,0,0,0.08)]">
          {/* Heading */}
          <h2 className="text-center text-2xl font-bold mb-6">
            Do <span className="text-secondary">you</span> have what it takes?
          </h2>

          {/* Description */}
          <p className="text-center text-gray-600 text-base mb-10">
            Register now and be part of an exciting journey where you get to put
            your economics knowledge to the test, work with others, and have fun
            while doing it!
          </p>

          {/* Button */}
          <div className="flex justify-center">
            <button className="px-8 py-3 bg-secondary text-white text-lg font-semibold rounded-lg shadow-[6px_8px_10px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_15px_rgba(0,0,0,0.2)] hover:bg-primary transition-all">
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
        <h1 className="text-black text-3xl lg:text-4xl font-bold mb-10">
          2025 Organising <span className="text-blue-500">Team</span>
        </h1>

        {/* Team Members */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center group transition-transform duration-300 hover:scale-105"
            >
              <a
                href={member.link}
                className="text-[#3E8E96] text-2xl font-semibold group-hover:underline"
              >
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
