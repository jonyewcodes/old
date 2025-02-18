import React, { useState } from "react";
import FaqBox from "../../components/FaqBox";

const Faq: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100 text-gray-800 max-w-">
      <div className="px-4 lg:px-16 py-10 flex flex-col items-center text-center">
        <section className="text-center">
          <h1 className="px-8 lg:px-0 text-5xl font-bold text-center mb-6">
            Frequently Asked Questions (FAQs)
          </h1>
          <div id="accordion" className="w-[100%] mx-auto">
            <FaqBox
              question="Can my team be composed of members from different schools?"
              answer="Absolutely, as long as each teammate meets the eligibility criteria!"
            />
            <FaqBox
              question="Change I change the name and details of my team after registration?"
              answer="The information submitted during registration is final!"
            />
            <FaqBox
              question="Should I participate even if I have not studied H2 or Olympiad level economics"
              answer="Yes! All pre-U students, regardless of their subjects, can participate. SEL has questions of a wide range of difficulties, so you can challenge yourself regardless of your economics proficiency. !"
            />
            <FaqBox
              question="May I use the internet during this competition?"
              answer="Yes! Online resources such as textbooks, research papers, graphing calculators and computing software can all be used to aid in solving questions.!"
            />
            <FaqBox
              question="How do we obtain new problems to solve during the contest?"
              answer="After completing or skipping an existing question, your team can choose a new questions from a pool of subsequent questions. You can attempt a maximum of 4 main problems at any one time."
            />
            <FaqBox
              question="What is the difficulty of SEL questions?"
              answer="SEL questions range in difficulty from those similar to the ones you have encountered in school, to questions set at the undergraduate and olympiad level."
            />
            <FaqBox
              question="What happens if I submit a wrong answer?"
              answer="you can reattempt a question-part as many times as you need, but the points awarded for a correct answer will diminish. Certain questions such as MCQs have a limit of 3 attempts."
            />
            <FaqBox
              question="May I skip questions?"
              answer="Yes, but this can incur a penalty of 2 points. Your team will receive a free skip that allows you to skip a question without penalty every 30 minutes."
            />
            <FaqBox
              question="How do I obtain bonus points?"
              answer="From 10 am, the Economania section will be unlocked, featuring 5 categories of 3 questions each in ascending difficulty. If your team completes some or all categories of Economania before 11 am, the points obtained from those categories will be doubled."
            />
            <FaqBox
              question="Where can I send my enquiries about SEL?"
              answer="Please email contact@sgeconsleague.org, and we will tend to any further questions you may have!"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Faq;
