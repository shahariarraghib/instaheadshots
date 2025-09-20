"use client";
import { faqData } from "@/content/faqData";
import React, { useState } from "react";

// --- Types ---
interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionIconProps {
    isOpen: boolean;
}

interface AccordionItemProps {
    item: AccordionItem;
    isOpen: boolean;
    onClick: () => void;
}

const accordionData: AccordionItem[] = [
    {
        question: "What is React?",
        answer: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies."
    },
    {
        question: "What is Tailwind CSS?",
        answer: "Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."
    },
    {
        question: "How do they work together?",
        answer: "React components can be styled using Tailwind classes directly in the JSX, which allows for rapid development and easy maintenance of a consistent design system."
    },
    {
        question: "Is this accordion accessible?",
        answer: "Yes, basic accessibility is included. The question is a button for proper semantics and keyboard navigation. For more advanced use cases, you could add more ARIA attributes."
    }
];

const AccordionIcon: React.FC<AccordionIconProps> = ({ isOpen }) => (
    <svg
        className={`h-6 w-6 text-zinc-500 transition-transform duration-300 dark:text-zinc-400 ${
            isOpen ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-zinc-200 last:border-b-0 dark:border-zinc-700">
            {/* Header part of the accordion item (Question and Icon) */}
            <button
                className="flex w-full items-center justify-between px-0 py-4 text-left transition-colors duration-200 focus-visible:ring "
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className="text-lg font-medium text-zinc-900 dark:text-zinc-100">{item.question}</span>
                <AccordionIcon isOpen={isOpen} />
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-screen" : "max-h-0"
                }`}
            >
                <div className="py-5 pt-0 text-zinc-600 dark:text-zinc-300">
                    <p>{item.answer}</p>
                </div>
            </div>
        </div>
    );
};

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleItemClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex items-center justify-center  py-6 dark:bg-zinc-950 ">
            <div className="">
                {faqData.map((item, index) => (
                    <AccordionItem
                        key={index}
                        item={item}
                        isOpen={openIndex === index}
                        onClick={() => handleItemClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Faq;
