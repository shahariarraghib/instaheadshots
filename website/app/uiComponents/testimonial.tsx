"use client";
import { testimonialData } from "@/content/testimonialData";
import React from "react";

function Testimonial() {
    // Fallback for any images not explicitly mapped or if array runs out
    const anonymousFallbackImage = "https://placehold.co/48x48/6B7280/FFFFFF?text=AA";

    return (
        <div className="flex flex-col items-center px-4 py-0 font-sans sm:px-6 lg:px-8 relative">
            <div className="w-full max-w-5xl columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3 xl:columns-3">
                {testimonialData.slice(0, 11).map((testimonial, index) => {
                    // Randomly decide whether to show text card or image card
                    const showImageOnly = Math.random() > 0.5 && testimonial.image;

                    return (
                        <div
                            key={index}
                            className="-pb-96 break-inside-avoid rounded-xl border border-gray-200  bg-white shadow-md dark:border-gray-800 dark:bg-black"
                        >
                            {showImageOnly ? (
                                // Image Card
                                <div className=" relative  ">
                                    {" "}
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="h-[450px] w-full  rounded-xl object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.onerror = null;
                                            target.src = anonymousFallbackImage;
                                        }}
                                    />
                                    <div className="absolute inset-x-0 bottom-0 z-20 font-semibold text-white ">
                                        <div className="flex items-center justify-start px-4 py-2">
                                            <p>{testimonial.text.split(".")[0] + "."}</p>
                                        </div>
                                        <div className="flex items-end justify-end px-4 pb-2">
                                            <p>
                                                <span>-</span> {testimonial.name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                // Text Card
                                <>
                                    <div className="p-6">
                                        {" "}
                                        <div className="mb-2 flex items-center gap-1 ">
                                            {(() => {
                                                const starValue = Number(testimonial.star) || 0;
                                                const fullStars = Math.floor(starValue);
                                                const hasHalf = starValue % 1 >= 0.5;
                                                return (
                                                    <>
                                                        {[...Array(fullStars)].map((_, i) => (
                                                            <svg
                                                                key={i}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="lucide lucide-star h-5 w-5 fill-yellow-400 text-yellow-400"
                                                            >
                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                            </svg>
                                                        ))}
                                                        {hasHalf && (
                                                            <svg
                                                                key={"half"}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="lucide lucide-star h-5 w-5 text-yellow-400"
                                                            >
                                                                <defs>
                                                                    <linearGradient
                                                                        id="halfStar"
                                                                        x1="0"
                                                                        y1="0"
                                                                        x2="1"
                                                                        y2="0"
                                                                    >
                                                                        <stop offset="50%" stopColor="#facc15" />
                                                                        <stop offset="50%" stopColor="white" />
                                                                    </linearGradient>
                                                                </defs>
                                                                <polygon
                                                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                                                    fill="url(#halfStar)"
                                                                />
                                                            </svg>
                                                        )}
                                                    </>
                                                );
                                            })()}
                                        </div>
                                        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200">
                                            {testimonial.text}
                                        </p>
                                        <div className="mt-4 flex items-center">
                                            {testimonial.image && (
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="mr-4 h-12 w-12 rounded-full object-cover"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.onerror = null;
                                                        target.src = anonymousFallbackImage;
                                                    }}
                                                />
                                            )}
                                            <div>
                                                <p className="font-semibold text-gray-900 dark:text-white">
                                                    {testimonial.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Gradient at bottom of whole section */}
            <div className="bottom-0 left-0 h-52 w-full bg-gradient-to-t from-white to-transparent absolute"></div>
        </div>
    );
}

export default Testimonial;
