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
    <section className="flex flex-col lg:flex-row items-start justify-start bg-glassBlue py-24 px-8 lg:px-32 gap-8">
      {/* Left Section: Event Information */}
      <div className="flex-1 max-w-2xl">
        {/* Event Date and Time */}
        <div className="mb-12">
          <span className="bg-white text-gray-700 px-4 py-4 rounded-lg shadow-[0_0_15px_5px_rgba(255,255,255,0.8),0_12px_16px_rgba(0,0,0,0.1)] font-extralight text-2xl">
            {eventDate}, {eventTime}
          </span>
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
};

export default EventDetails;
