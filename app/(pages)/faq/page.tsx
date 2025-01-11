import React, { useState } from "react";
import Navbar from "../../components/Navbar"
import FaqBox from "../../components/FaqBox";

const Faq:React.FC = () => {
    return(
        <main className="flex min-h-screen flex-col bg-gray-100 text-gray-800 max-w-" >
        {/* Navbar */}
        <Navbar />
        <section className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-black-600 mb-4">
                Frequently Asked Questions (FAQs)
            </h1>
            <div id = "accordion" className="w-[70%] mx-auto">
                <FaqBox
                    question = "Can my teammates be from other schools?"
                    answer= "Absolutely!"
                />
                <FaqBox
                    question = "Can my teammates be from other schools?"
                    answer= "Absolutely!"
                />
                <FaqBox
                    question = "Can my teammates be from other schools?"
                    answer= "Absolutely!"
                />
                <FaqBox
                    question = "Can my teammates be from other schools?"
                    answer= "Absolutely!"
                />
                <FaqBox
                    question = "Can my teammates be from other schools?"
                    answer= "Absolutely!"
                />
                <FaqBox
                    question = "Can my teammates be from other schools?"
                    answer= "Absolutely!"
                />
                <FaqBox
                    question = "Can my teammates be from other schools?"
                    answer= "Absolutely!"
                />
                <FaqBox
                    question = "Can my teammates be from other schools?"
                    answer= "Absolutely!"
                />
            </div>
        </section>
        </main>
    );
};

export default Faq;