import React from "react";

const RegisterPage = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen py-16 px-6 ">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-8 text-[#343131] text-center">
        Register for the Event
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-[#555555] mb-6 text-center max-w-2xl">
        Fill out the form below to secure your spot. We can't wait to see you at the competition!
      </p>

      {/* Embedded Microsoft Form */}
      <div className="w-full flex justify-center">
        <iframe 
          width="1200px" 
          height="1200px" 
          src="https://forms.office.com/r/X9ezauU231?embed=true" 
          frameBorder="0" 
          marginWidth="0" 
          marginHeight="0" 
          className="border border-gray-300 rounded-xl shadow-lg max-w-full"
          allowFullScreen 
          webkitAllowFullScreen 
          mozAllowFullScreen 
          msAllowFullScreen
        >
        </iframe>
      </div>
    </section>
  );
};

export default RegisterPage;
