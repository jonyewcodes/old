"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

// Keep `sectionIds` outside the component to prevent unnecessary re-renders
const sectionIds = [
    "rules",
    "registration",
    "competition-platform",
    "question-types",
    "points-and-scoring"
];

interface SubHeadingProps {
    children: string;
    className?: string;
}
function SubHeading({ children, className }: SubHeadingProps) {
    return <h2 className={`${className} text-xl text-[#3D9796] font-bold`}>{children}</h2>;
}
function SubHeading2({ children, className }: SubHeadingProps) {
    return <h3 className={`${className} text-lg font-bold`}>{children}</h3>;
}

// Ordered List Component
function OrderedList({ items }: { items: (string | (string | string[])[])[] }) {
    const renderList = (items: (string | (string | string[])[])[], level: number = 0) => {
        const isTopLevel = level === 0;
        return (
            <ol className={isTopLevel ? "list-decimal ml-4" : "list-[lower-alpha] ml-8"}>
                {items.map((item, index) => {
                    if (Array.isArray(item)) {
                        const [nonListItem, subList] = item;
                        return (
                            <li key={index}>
                                <span className={isTopLevel ? "font-bold" : ""}>{typeof nonListItem === "string" && nonListItem}</span>
                                {Array.isArray(subList) && renderList(subList, level + 1)}
                            </li>
                        );
                    } else {
                        return <li key={index}><span className={isTopLevel ? "font-bold" : ""}>{item}</span></li>;
                    }
                })}
            </ol>
        );
    };
    return renderList(items);
}

// Unordered List Component
function UnorderedList({ items }: { items: (string | (string | string[])[])[] }) {
    const renderList = (items: (string | (string | string[])[])[]) => {
        return (
            <ul className="list-disc ml-4">
                {items.map((item, index) => {
                    if (Array.isArray(item)) {
                        return (
                            <li key={index} className="ml-4">
                                {typeof item[0] === "string" && item[0]}
                                {Array.isArray(item.slice(1)) && renderList(item.slice(1))}
                            </li>
                        );
                    } else {
                        return <li key={index} className="ml-4">{item}</li>;
                    }
                })}
            </ul>
        );
    };
    return renderList(items);
}

// Sections
function BreifRules() {
    return (
        <section id="rules">
            <SubHeading className="mb-6">Brief Rules</SubHeading>
            <SubHeading2>What is Singapore Economics League?</SubHeading2>
            <UnorderedList items={["SEL is a 3-hour long, team online problem solving competition."]} />
        </section>
    );
}

function Registration() {
    return (
        <section className="mt-12" id="registration">
            <SubHeading className="mb-6">Registration</SubHeading>
            <UnorderedList items={[
                "Participants must register in the competition in order to participate.",
                "Registration is open at sgeconsleague.org, during the period 1st May to 30th June 2025"
            ]} />
        </section>
    );
}

function CompetitionPlatform() {
    return (
        <section className="mt-12" id="competition-platform">
            <SubHeading className="mb-6">Competition Platform</SubHeading>
            <UnorderedList items={[
                "Teams participate in SEL via the online competition platform",
                "The link to the competition platform will be accessible via the SEL website."
            ]} />
        </section>
    );
}

function QuestionTypes() {
    return (
        <section className="mt-12" id="question-types">
            <SubHeading className="mb-6">Question Types</SubHeading>
            <OrderedList items={[
                ["MCQ", ["Participants choose 1 answer out of 4"]],
                ["Integer", ["Participants enter an Integer from -99999 to 99999"]]
            ]} />
        </section>
    );
}

function SideBar({ selected }: { selected?: string }) {
    const selectedStyle = "text-accent font-bold lg:ml-4";
    return (
        <div className="text-center lg:text-left items-center lg:items-start bg-transparent px-2 w-full lg:w-96 lg:pr-8 py-4 lg:py-8 flex flex-row lg:flex-col gap-4 sticky top-0 lg:top-6 border-b-2 lg:border-b-0 border-[#D0D0D0]">
            {sectionIds.map((id) => (
                <Link href={`#${id}`} key={id}>
                    <p className={selected === id ? selectedStyle : ""}>{id.replace("-", " ")}</p>
                </Link>
            ))}
        </div>
    );
}


function PointsAndScoring() {
    return (
        <section className="mt-12" id="points-and-scoring">
            <SubHeading className="mb-6">Points and Scoring</SubHeading>
            <UnorderedList items={[
                "Each question (and question-part) has a certain number of points.",
                "If a question-part is a Multiple Choice Question, a single incorrect answer will lead to all the points for that question being deducted."
            ]} />
        </section>
    );
}

export default function RulesPage() {
    const [selected, setSelected] = useState("rules");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSelected(entry.target.id);
                    }
                });
            },
            { threshold: 0, rootMargin: "0px 0px -100% 0px", root: null }
        );

        // Observe Sections
        sectionIds.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => {
            sectionIds.forEach((id) => {
                const element = document.getElementById(id);
                if (element) observer.unobserve(element);
            });
        };
    }, [sectionIds]); // ✅ Fix: Adding sectionIds to dependency array

    return (
        <div className="px-2 lg:px-32 py-12">
            <h1 className="px-8 lg:px-0 text-5xl font-bold">Rules</h1>
            <div className="my-4 lg:my-16 flex items-start flex-col lg:flex-row">
                <SideBar selected={selected} />
                <div className="px-12 py-8 lg:border-l-2 lg:border-t-0 border-[#D0D0D0]">
                    <BreifRules />
                    <Registration />
                    <CompetitionPlatform />
                    <QuestionTypes />
                    <PointsAndScoring />
                </div>
            </div>
        </div>
    );
}