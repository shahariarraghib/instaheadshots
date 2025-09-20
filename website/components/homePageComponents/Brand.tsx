"use client";
import { brandsData } from "@/content/brandData";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Brand = () => {
    const [visibleData, setVisibleData] = useState([]);
    const [fade, setFade] = useState(true);

    // Random 10 data
    const getRandomData = () => {
        const shuffled = [...brandsData].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 10);
    };

    useEffect(() => {
        setVisibleData(getRandomData());

        const interval = setInterval(() => {
            setFade(false); // fade-out শুরু
            setTimeout(() => {
                setVisibleData(getRandomData());
                setFade(true); // fade-in শুরু
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, [brandsData]);
    return (
        <section className="mx-auto flex max-w-6xl flex-col items-start gap-10 px-4 py-10 text-start sm:items-center sm:py-16 sm:text-center">
            <h2 className="tracking-6xl text-4xl font-[450] text-primary antialiased sm:text-6xl">
                <span className="bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end bg-clip-text text-transparent">
                    20 million
                </span>{" "}
                professional headshots <br /> created for the best teams in the world
            </h2>
            <div className="grid w-full auto-rows-fr grid-cols-2 gap-4 py-5 sm:grid-cols-5">
                {visibleData.map((item, index) => (
                    <div key={index} className="flex w-full">
                        <div
                            className={`relative flex h-16 w-full items-center justify-center rounded-xl bg-slate-50 transition-opacity duration-500 ${
                                fade ? "opacity-85" : "opacity-10"
                            }`}
                        >
                            <Image
                                src={item.image}
                                alt={`brand-${index}`}
                                width={120}
                                height={50}
                                className="h-10 w-32 object-contain"
                                unoptimized={true}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <h3 className="tracking-2xl text-left text-3xl font-medium -tracking-[0.021em] text-primary antialiased sm:mx-auto sm:text-center sm:text-[2.5rem] sm:leading-[1.1] sm:-tracking-[0.022em]">
                    Join 200,000 happy professionals
                </h3>

                <div className="flex w-fit py-8 sm:mx-auto sm:items-center">
                    <Image
                        src="/images/brands/google.svg"
                        alt="google.svg"
                        width={0}
                        height={0}
                        className="h-[32px] w-[32px] object-contain"
                        unoptimized={true}
                    />

                    <p className="px-2 align-middle text-2xl font-bold text-primary">4.9</p>

                    <Image
                        src="/images/brands/star-1.webp"
                        alt="star-1"
                        width={0}
                        height={0}
                        className="h-[20px] w-[20px] object-contain"
                        unoptimized={true}
                    />
                    <Image
                        src="/images/brands/star-1.webp"
                        alt="star-1"
                        width={0}
                        height={0}
                        className="h-[20px] w-[20px] object-contain"
                        unoptimized={true}
                    />
                    <Image
                        src="/images/brands/star-1.webp"
                        alt="star-1"
                        width={0}
                        height={0}
                        className="h-[20px] w-[20px] object-contain"
                        unoptimized={true}
                    />
                    <Image
                        src="/images/brands/star-1.webp"
                        alt="star-1"
                        width={0}
                        height={0}
                        className="h-[20px] w-[20px] object-contain"
                        unoptimized={true}
                    />
                    <Image
                        src="/images/brands/star-1.webp"
                        alt="star-1"
                        width={0}
                        height={0}
                        className="h-[20px] w-[20px] object-contain"
                        unoptimized={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default Brand;
