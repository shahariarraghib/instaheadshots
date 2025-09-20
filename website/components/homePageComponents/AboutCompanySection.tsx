"use client";
import { FadeUpAnimation } from "@/utility/transitionsAnimation";
import { FC } from "react";
import SectionTitle from "../commonComponents/SectionTitle";

interface Props {}

const AboutCompanySection: FC<Props> = (props): React.ReactNode => {
    return (
        <section id="about">
            <FadeUpAnimation>
                <section className="mx-auto max-w-6xl px-4 pt-20">
                    <SectionTitle
                        title={
                            <>
                                About <span className="text-primary">Us</span>
                            </>
                        }
                    />
                    <div className="grid items-center gap-4 md:grid-cols-2 md:gap-10">
                        <div className="order-2 md:order-1">
                            <div>
                                <h1 className="my-3 text-center text-xl  font-semibold md:text-start lg:text-[24px] lg:leading-10">
                                    Unlocking the <span className="text-primary">Data</span> Potential of{" "}
                                    <span className="text-primary">Wastewater</span>
                                </h1>
                                <p className="text-center text-sm font-normal  text-[#3F415A] dark:text-white/80 md:text-start lg:text-lg">
                                    Founded in 2023, Biota Inc. is dedicated to harnessing the untapped data potential
                                    of wastewater to improve public health and protect the environment.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 flex items-center justify-center md:order-2">
                            <div className="relative mt-6 flex w-full justify-center overflow-clip">
                                <img
                                    src="/images/home/blob.svg"
                                    alt=""
                                    className="absolute inset-0 z-10 h-full w-full object-cover sm:scale-x-50 sm:scale-y-75 md:scale-x-75 md:scale-y-90 2xl:scale-100"
                                />
                                <img
                                    src="/images/home/about.png"
                                    alt=""
                                    className="dropShadowPrimary relative z-10 w-[60%] rounded-md opacity-100 sm:w-[30%] md:w-[60%] 2xl:w-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </FadeUpAnimation>
        </section>
    );
};

export default AboutCompanySection;
