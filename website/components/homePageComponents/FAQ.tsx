"use client";
import { FadeUpAnimation } from "@/utility/transitionsAnimation";
import React, { useState } from "react";
import SectionTitle from "../commonComponents/SectionTitle";
import { FaMinus, FaPlus } from "react-icons/fa";
import { faqData } from "@/content/faqData";
import Faq from "@/app/uiComponents/faq";

const FAQ = () => {
    return (
        <section className="mx-auto max-w-5xl gap-10  sm:py-16">
            <SectionTitle
                mainTitle="FREQUENTLY ASKED QUESTIONS"
                title={
                    <>
                        <span>Your questions,</span>
                        <span className="bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end bg-clip-text text-transparent">
                            answered
                        </span>
                    </>
                }
                subTitle="Got more questions? Feel free to email us at help@instaheadshots.com."
                left
            />

            <Faq />
        </section>
    );
};

export default FAQ;
