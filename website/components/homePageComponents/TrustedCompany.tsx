"use client";
import { brandsData } from "@/content/brandData";
import { Brand } from "@/types/brand";
import { FadeUpAnimation } from "@/utility/transitionsAnimation";
import React from "react";
import Marquee from "react-fast-marquee";
import SectionTitle from "../commonComponents/SectionTitle";

const TrustedCompany: React.FC = () => {
    return (
        <FadeUpAnimation>
            <div className="mx-auto mt-10 max-w-[1112px] md:my-20 ">
                <SectionTitle
                    title={
                        <>
                            Our <span className="text-primary"> Partners</span>
                        </>
                    }
                    subTitle={
                        <>
                            Partner with us{" "}
                            <a href="#contact" className="font-bold text-primary underline underline-offset-4">
                                here
                            </a>
                        </>
                    }
                />

                <div className="mt-12 w-full">
                    <Marquee autoFill={true} speed={70} pauseOnHover={true}>
                        {brandsData.map((item: Brand, index: number) => (
                            <a
                                target="__blank"
                                href={item.href}
                                key={index}
                                className="mx-7 flex items-center justify-center"
                            >
                                <img src={item.image} alt={item.name} className="max-w-[100px]" />
                            </a>
                        ))}
                    </Marquee>
                </div>
            </div>
        </FadeUpAnimation>
    );
};

export default TrustedCompany;
