import React from "react";
import FaqBox from "../../components/FaqBox";

export const metadata = {
  title: "FAQ | Singapore Economics League",
};

export default function Faq() {
  return (
    <>
      <section className="w-full text-baseText">
        <div className="flex justify-center pt-8 pb-6">
          <div className="text-baseText text-center text-6xl font-bold px-8 py-4 rounded-xl w-full max-w-md mx-auto slab">
            FAQs
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto mt-16 px-4 md:px-0">
          <div className="space-y-6 text-lg">
            <FaqBox
              question="Can my team be composed of members from different schools?"
              answer="Absolutely, as long as each teammate meets the eligibility criteria!"
            />
            <FaqBox
              question="Can I change the name and details of my team after registration?"
              answer="Changes to registration information may be made prior to the registation closing date. Teams that wish to do so may contact the organisers via email at contact@sgeconsleague.org. Note that if there are multiple form submissions by the same team, only the most recent form submission will be considered for registration."
            />
            <FaqBox
              question="Should I participate even if I have not studied H2 or Olympiad level economics?"
              answer="Yes! All Pre-U students, regardless of their subjects, can participate in the school category. SEL has questions of a wide range of difficulties, so you can challenge yourself regardless of your economics proficiency."
            />
            <FaqBox
              question="Should I participate in the School Category or Open Category?"
              answer="SEL collaborates with local JCs and schools by sharing the performance of their students who have registered under the School Category. Thus, only participants of the school category will have their prizes and awards recorded in their CCA certificates and transcripts."
            />
            <FaqBox
              question="May I participate even if I am not studying in Singapore?"
              answer="Yes, you may. The same restrictions on the School and Open Category will apply: only students who are all studying in Pre-University education may participate in the school category. International participants in the School category also stand to recieve certificates and awards. International participants should note that the organisers of SEL may not always liason with non-local schools to verify and endorse competition results."
            />
            <FaqBox
              question="May I use the internet during this competition?"
              answer="Yes! Most online resources such as textbooks, research papers, graphing calculators, and computing software can all be used to aid in solving questions. The one exception is that any usage of AI tools such as Chatbots is strictly prohibited."
            />
            <FaqBox
              question="How do we obtain new problems to solve during the contest?"
              answer="After completing or skipping an existing question, your team can choose new questions from a pool of subsequent questions. Your team can attempt a maximum of 4 main problems at any one time."
            />
            <FaqBox
              question="How hard are SEL questions?"
              answer="SEL questions range in difficulty from those similar to the ones you have encountered in school, to questions set at the undergraduate and olympiad level."
            />
            <FaqBox
              question="What happens if I submit a wrong answer?"
              answer="You can reattempt a question-part as many times as you need, but the points awarded for a correct answer will decrease after incorrect attempts. Certain questions such as MCQs have a limit of 3 attempts."
            />
            <FaqBox
              question="May I skip questions?"
              answer="Yes, but 3 points will be deducted from your team's overall score per skip. Your team will receive a free skip that allows you to skip a question without penalty every 30 minutes."
            />
            <FaqBox
              question="How do I obtain bonus points?"
              answer="From 10 am, the Economania section will be unlocked, featuring 5 categories of 3 questions each in ascending difficulty. If your team completes some or all categories of Economania before 11 am, the points which your team obtained from those categories will be doubled."
            />
          </div>
        </div>
      </section>
      <section className="w-full py-8">
        <div className="max-w-screen-lg mx-auto text-left px-4 md:px-0">
          <h3 className="text-3xl sm:text-4xl font-bold text-black slab mb-4 mt-4">
            Still have questions?
          </h3>
          <p className="text-lg text-gray-700">
            Drop us an email at{" "}
            <a
              href="mailto:contact@sgeconsleague.org"
              className="text-primary underline font-semibold"
            >
              contact@sgeconsleague.org
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
