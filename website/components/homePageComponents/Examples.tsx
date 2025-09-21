import { examplesData } from "@/content/examplesData";
import Image from "next/image";
import React from "react";
import SectionTitle from "../commonComponents/SectionTitle";

const Examples = () => {
    const duplicatedData = [...examplesData, ...examplesData];
    return (
        <section className="mx-auto mt-4 max-w-5xl gap-10 p-4 sm:py-16 lg:mt-28 lg:px-0 lg:py-0">
            <SectionTitle
                mainTitle="EXAMPLES"
                title={
                    <>
                        <span>Not made in a studio. </span>
                        <span className="bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end bg-clip-text text-transparent">
                            10 times better,
                        </span>
                    </>
                }
                subTitle="Don't just take our word for it. Our AI headshot generator turns everyday photos into stunning
                    professional headshots, that reflect your confidence & credibility."
                left
            />

            <div className="relative mx-auto h-[900px] w-full max-w-5xl overflow-hidden bg-white py-8">
                <div className="scroll-up animate-scroll-up columns-2 gap-4 sm:columns-3 md:columns-4">
                    {duplicatedData.map((item, index) => (
                        <div key={index} className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-md">
                            <Image
                                src={item.image}
                                alt={`Gallery ${index}`}
                                width={600}
                                height={400}
                                className="h-auto w-full object-cover"
                                unoptimized
                            />
                        </div>
                    ))}
                </div>
                <div className="absolute left-0 top-0 h-28 w-full bg-gradient-to-b from-white to-transparent"></div>
                <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-white to-transparent"></div>
            </div>
        </section>
    );
};

export default Examples;
