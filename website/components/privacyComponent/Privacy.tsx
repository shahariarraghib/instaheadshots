import React from "react";

const Privacy = () => {
    return (
        <section className="px-4">
            <div className="mx-auto mt-20 max-w-6xl border-b border-[#929AA5] pb-4 md:pb-8">
                <h1 className="text-center text-lg font-semibold  md:text-3xl"> Privacy Policy</h1>
                <p className="mt-2 text-center text-xs font-medium text-[#808080] dark:text-white/80 md:mt-4 md:text-base">
                    Protecting Your Data with Integrity and Transparency
                </p>
            </div>

            <div className="mx-auto my-10   h-[100vh] max-w-6xl">
                <iframe src="./assets/pdfs/legal/privacy.pdf#view=fith&hideToolbar=1" height="100%" width="100%" />
            </div>
        </section>
    );
};

export default Privacy;
