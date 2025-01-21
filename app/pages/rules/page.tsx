"use client"
import Link from "next/link";
import { useState, useEffect } from "react"
const sectionIds = ["rules", "registration", "competition-platform", "question-types", "points-and-scoring"]

interface SubHeadingProps{
    children: string;
    className?: string;
}
function SubHeading({children, className}: SubHeadingProps){
    return <h2 className={`${className} text-xl text-[#3D9796] font-bold`}>{children}</h2>
}

function SubHeading2({children, className}: SubHeadingProps){
    return <h3 className={`${className} text-lg font-bold`}>{children}</h3>
}

function OrderedList({ items }: { items: (string | (string | string[])[])[] }) {
    const renderList = (items: (string | (string | string[])[])[], level: number = 0) => {
        const isTopLevel = level === 0;

        return (
            <ol className={isTopLevel ? "list-decimal ml-4" : "list-[lower-alpha] ml-8"}>
                {items.map((item, index) => {
                    if (Array.isArray(item)) {
                        // Handle embedded lists
                        const [nonListItem, subList] = item;
                        return (
                            <li key={index}>
                                <span className={isTopLevel?"font-bold":""}>{typeof nonListItem === "string" && nonListItem}</span>
                                {Array.isArray(subList) && renderList(subList, level + 1)}
                            </li>
                        );
                    } else {
                        // Render normal string items
                        return <li key={index}><span className={isTopLevel?"font-bold":""}>{item}</span></li>;
                    }
                })}
            </ol>
        );
    };

    return renderList(items);
}


function UnorderedList({ items }: { items: (string | (string | string[])[])[] }) {
    // Takes in an array of string or string arrays. String arrays are rendered as a sublist, with each layer of nesting representing a new level of the list.
    const renderList = (items: (string | (string | string[])[])[]) => {
        return (
            <ul className="list-disc ml-4">
                {items.map((item, index) => {
                    if (Array.isArray(item)) {
                        // If the item is an array, recursively call renderList
                        return (
                            <li key={index} className="ml-4">
                                {typeof item[0] === "string" && item[0]}
                                {Array.isArray(item.slice(1)) && renderList(item.slice(1))}
                            </li>
                        );
                    } else {
                        // Otherwise, render the string as a list item
                        return <li key={index} className="ml-4">{item}</li>;
                    }
                })}
            </ul>
        );
    };

    return renderList(items);
}

function BreifRules(){
    const whatIsSEL = ["SEL is a 3-hour long, team online problem solving competition."]
    const teamRules = ["Teams comprise of 3 to 5 members"]
    const whoCanParticipate = ["SEL is open to all students in pre-university education, ie Junior Colleges, Secondary Schools, Polytechnics, ITE, international high schools or equivalent"]
    const whatIsAllowed = ["All internet resources such as textbooks, and any computer programs such graphing software and IDEs are allowed. Generative AI tools such as ChatGPT are discouraged from use, but also allowed. ",
                            "Communication with individuals outside the team related to the problems is strictly prohibited."]
    const competitionFormat = ["Teams are awarded points for successfully answering problems. Correct answers unlock new, harder problems. Wrong answers and skipping problems lead to less points. The teams with the most points win!"]
    return (
        <section id = "rules">
            <SubHeading className="mb-6">Brief Rules</SubHeading>
            <SubHeading2>What is Singapore Economics League?</SubHeading2>
            <UnorderedList items={whatIsSEL}/>
            <br/>
            <SubHeading2>Team Rules</SubHeading2>
            <UnorderedList items={teamRules}/>
            <br/>
            <SubHeading2>Who can participate?</SubHeading2>
            <UnorderedList items={whoCanParticipate}/>
            <br/>
            <SubHeading2>What is allowed?</SubHeading2>
            <UnorderedList items={whatIsAllowed}/>
            <br/>
            <SubHeading2>Competition Format</SubHeading2>
            <UnorderedList items={competitionFormat}/>
        </section>
    )
}

function Registration(){
    const content = [
        "Participants must register in the competition in order to participate. ",
        "Registration is open at sgeconsleague.org, during the period 1st May to 30th June 2025",
        "Teams consist of 3 to 5 members",
        [
            "All team members must be pre-university students: ie high school/equivalent or below. ",
            "Eligible: students at JCs/MI, Secondary Schools, Polytechnics, international high schools, and other equivalents"
        ],
        "Each contestant can only be a member of one team",
        "Team names cannot be offensive. The SEL Organisers reserve the right to alter the name or disqualify any team whos team name is deemed to be offensive. ",
        "By participating, teams agree to follow the rules of Singapore Economics League, and the participant Code of Conduct"
    ]
    return (
        <section className="mt-12" id="registration">
            <SubHeading className="mb-6">Registration</SubHeading>
            <UnorderedList items={content}/>
        </section>
    )
}


function CompetitionPlatform(){
    const content = [
        "Teams participate in SEL via the online competition platform",
        "The link to the competition platform will be accessible via the SEL website, as well as by email",
        "Log-in details for individual teams will be sent to them by email a few days before the contest date. ",
        "The competition platform will feature a live leaderboard that ranks the points of teams in real time. During the final 30 minutes of the contest, the live leaderboard will be hidden. "
    ]
    return (
        <section className="mt-12" id="competition-platform">
            <SubHeading className="mb-6">Competition Platform</SubHeading>
            <UnorderedList items={content}/>
        </section>
    )
}

function QuestionTypes(){
    const content = [
        ["MCQ",
            ["Participants choose 1 answer out of 4",
            "Default format is A/B/C/D. This should show up visually as buttons with hover states."]],
        ["MCQ Multi-Select*",
            ["Participants choose N answers out of M options, where N  M",
            "Default format is A/B/C/D/…/M",
            "No partial marks are awarded for partially correct answers. "
        ]],
        ["Integer",
            ["Participants enter an Integer from -99999 to 99999"]
        ],
        ["Integer Set: a group of N integers that are individual inputs",
            ["No partial marks are awarded for partially correct answers. "]
        ],
        ["Float",[
            "Participants enter numeric values with decimals from -99999.99999 to 99999.99999. Submitted answers with a degree of accuracy greater than that specified by the question will also be accepted. "
        ]],
        ["Sort*",
            ["A/B/C/D/E/…/N (Sort N different values)",
            "Visually, they must be able to drag the buttons around in a list from 1 to N.",
            "Custom Options: Input into excel as custom data. "]
        ],
        [
            "True False Set*",
            ["Participants give answers to N True/False questions."]
        ],
        [
            "String",
            ["Allow strings of up to 30 characters in length",
            "Consider multiple cases. Account for accidental formatting problems eg white spaces",
            "An exact match is needed. Additional characters or white spaces will render the answer incorrect"
            ]
        ],
        ["String Set",
            ["Participants input a set of N strings, individually."]
        ],
        ["Table",
            ["Participants key in the contents of an N by M table. Questions can require answers as either String Tables or Integer Tables."]
        ]
    ]

    return (
        <section className="mt-12" id = "question-types">
            <SubHeading className="mb-6">Question Types</SubHeading>
            <OrderedList items={content}/>
        </section>
    )
}

function SideBar({selected} : {selected?: string}){
    const selectedStyle = "text-accent font-bold lg:ml-4"
    return (
        <div className="text-center lg:text-left items-center lg:items-start
        bg-white px-2 w-full 
        text-sm
        md:text-lg
        lg:w-96 lg:pr-8 py-4 lg:py-8 flex flex-row lg:flex-col 
        justify-evenly
        overflow-hidden
        gap-4 sticky top-0 lg:top-6 border-b-2 lg:border-b-0 border-[#D0D0D0]">
            <Link href="#rules"><p className={selected=="rules"?selectedStyle:""}>Brief Rules</p></Link>
            <Link href="#registration"><p className={selected=="registration"?selectedStyle:""}>Registration</p></Link>
            <Link href="#competition-platform"><p className={selected=="competition-platform"?selectedStyle:""}>Platform</p></Link>
            <Link href="#question-types"><p className={selected=="question-types"?selectedStyle:""}>Question Types</p></Link>
            <Link href="#points-and-scoring"><p className={selected=="points-and-scoring"?selectedStyle:""}>Scoring</p></Link>
        </div>
    )
}

function PointsAndScoring(){
    const content = [
        "Each question (and question-part) has a certain number of points",
        "If a question-part is a Multiple Choice Question, a single incorrect answer will lead to all the points for that question being deducted and the answer will be revealed. ",
        "If a question-part has a integer or string answer, an incorrect answer will lead to a reduction in points according to the following table:"
    ]
    return (
        <section className="mt-12" id="points-and-scoring">
            <SubHeading className="mb-6">Points and Scoring</SubHeading>
            <b>Main Problems</b>
            <UnorderedList items={content}/>
        </section>
    )
}
export default function RulesPage() {
    const [selected, setSelected] = useState("rules")
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSelected(entry.target.id)
                        console.log(entry.target.id)
                    }
                })
            },
            
            { threshold: 0,
                rootMargin: "0px 0px -100% 0px",
                root:null
             }
        )
        sectionIds.forEach((id) => {
            const section = document.getElementById(id)
            if (section) {
                observer.observe(section)
            }
        })

        return () => {
            sectionIds.forEach((id) => {
                const element = document.getElementById(id);
                if (element) observer.unobserve(element);
            });
        };

    },[])
    return (
        <div className="px-2 lg:px-32 py-12">
            <h1 className="px-8 lg:px-0 text-5xl font-bold">Rules</h1>
            <div className="my-4 lg:my-16 flex items-start flex-col lg:flex-row">
                <SideBar selected={selected}/>
                <div className="px-12 py-8 lg:border-l-2 lg:border-t-0 border-[#D0D0D0]">
                    <BreifRules/>
                    <Registration/>
                    <CompetitionPlatform/>
                    <QuestionTypes/>
                    <PointsAndScoring/>
                </div>
            </div>
        </div>
    )
}