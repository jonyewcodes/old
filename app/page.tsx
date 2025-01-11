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

  return (
    <main className="flex min-h-screen flex-col bg-gray-100 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-8 py-12 lg:py-24">
        {/* Left Section: Text */}
        <div className="lg:w-1/2 text-left ml-20">
          <h1 className="text-3xl lg:text-4xl font-bold text-green-600 mb-4">
            What is SG Economics League?
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            The <span className="font-bold text-black">SG Economics League (SEL)</span> is a team-based competition that challenges your problem-solving skills in economics.
          </p>
          <ul className="text-gray-700 list-disc pl-6 space-y-2">
            <li>3 hours long, online contest</li>
            <li>3-5 members per team</li>
            <li>Open to all pre-U students in Singapore</li>
          </ul>
        </div>

        {/* Event Title */}
        <h1 className="text-2xl lg:text-5xl font-bold text-primary mb-6">
          {title}
        </h1>

        {/* Event Description */}
        <p className="text-black font-medium mb-6 leading-relaxed text-lg">
          {description}
        </p>

        {/* Call to Action Competition Rules Link */}
        <a
          href={rulesLink}
          className="text-accent font-bold underline hover:text-secondary transition text-lg"
        >
          Competition Rules
        </a>
      </div>

      {/* Event Illustration */}
      <div className="flex-1 hidden lg:block">
        <img
          src="/your-image-path.png"
          alt=""
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}