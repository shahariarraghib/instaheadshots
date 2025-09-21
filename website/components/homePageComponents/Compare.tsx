import React from "react";
import SectionTitle from "../commonComponents/SectionTitle";
import { compareData, compareReviewData } from "@/content/compareData";
import Image from "next/image";

const Compare = () => {
    return (
        <section className="mx-auto mt-4 max-w-5xl gap-10 p-4 sm:py-16 lg:mt-28 lg:px-0 lg:py-0">
            <SectionTitle
                mainTitle="COMPARE"
                title={
                    <>
                        <span>10 times better, </span>
                        <span className="bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end bg-clip-text text-transparent">
                            1/10th the price
                        </span>
                    </>
                }
                subTitle="Get professional headshots, the modern way."
                left
            />
            <div className="mt-4 flex w-full flex-col gap-8 rounded-xl border border-primary/10 py-3 md:gap-10 md:border-0 lg:mt-5">
                <table className="w-full border-collapse">
                    {/* Table Head */}
                    <thead>
                        <tr className="grid grid-cols-2 align-top sm:px-6 md:table-row md:align-bottom">
                            <th className="hidden px-4 text-left md:table-cell"></th>
                            <th className="border-r px-4 text-left md:border-r-0">
                                <p className="text-lg font-medium tracking-wide md:text-2xl">Studio Photoshoot</p>
                            </th>
                            <th className="px-4 text-left">
                                <span className="bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end bg-clip-text text-lg font-medium tracking-wide text-transparent md:text-2xl">
                                    InstaHeadshots
                                </span>
                            </th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {compareData.map((row, i) => (
                            <tr
                                key={i}
                                className="grid grid-cols-2 border-0 border-primary/10 align-top sm:px-4 md:table-row md:border-b"
                            >
                                {/* Row Label (Desktop) */}
                                <td className="hidden py-5 align-middle text-lg font-medium text-primary/80 md:table-cell md:py-8">
                                    {row.label}
                                </td>

                                {/* Studio Column */}
                                <td className="border-r px-4 py-5 align-middle md:border-r-0 md:py-8">
                                    <div className="flex items-center gap-4">
                                        <span className="h-fit w-fit rounded-full bg-red-500/10 p-1 text-red-500">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-x"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                        <p className="text-base font-medium md:text-xl">{row.studio}</p>
                                    </div>
                                </td>

                                {/* InstaHeadshots Column */}
                                <td className="px-4 py-5 align-middle md:py-8">
                                    <div className="flex items-center gap-4">
                                        <span className="h-fit w-fit rounded-full bg-green-500/10 p-1 text-green-500">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <div className="flex flex-col">
                                            <p className="text-base font-medium md:text-xl">{row.insta}</p>
                                            {/* Mobile label */}
                                            <p className="text-xs font-normal text-primary/65 md:hidden">{row.label}</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                {compareReviewData.map((review, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center rounded-lg  p-6 text-center s"
                    >
                        {/* ⭐ Rating */}
                        <div className="mb-2 flex items-center justify-center gap-1">
                            {(() => {
                                const starValue = Number(review.star) || 0;
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
                                                    <linearGradient id="halfStar" x1="0" y1="0" x2="1" y2="0">
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

                        {/* 📝 Review Text */}
                        <p className="text-center text-base leading-relaxed text-gray-700 dark:text-gray-200">
                            {review.comment}
                        </p>

                        {/* 👤 Reviewer */}
                        <div className="mt-4 flex items-center justify-center">
                            {review.image && (
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="mr-4 h-12 w-12 rounded-full object-cover"
                                />
                            )}
                            <div>
                                <p className="font-semibold text-gray-900 dark:text-white">{review.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Compare;
