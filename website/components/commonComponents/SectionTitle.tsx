import React from "react";

const SectionTitle = ({
    mainTitle,
    title,
    subTitle,
    small,
    left
}: {
    mainTitle?: any;
    title: any;
    subTitle?: any;
    small?: boolean;
    left?: boolean;
}) => {
    return (
        <div className={`mx-auto max-w-5xl  ${left ? "" : "text-center"} `}>
            {/* Main Title (COMPARE) */}
            {mainTitle && (
                <p className="mb-2 text-[13px] font-medium uppercase tracking-widest text-primary/80 antialiased sm:text-sm">
                    {mainTitle}
                </p>
            )}

            {/* Title */}
            <div className={`flex items-center ${left ? "" : "justify-center"}`}>
                <h2
                    className={`tracking-2xl font-medium -tracking-[0.021em] text-primary antialiased ${
                        small
                            ? "text-2xl lg:text-3xl"
                            : "text-3xl sm:text-[2.5rem] sm:leading-[1.1] sm:-tracking-[0.022em]"
                    }`}
                >
                    {title}
                </h2>
            </div>

            {/* Subtitle */}
            {subTitle && (
                <p className="tracking-base sm:tracking-lg py-2 text-base font-normal text-primary/80 antialiased sm:text-lg">
                    {subTitle}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;
