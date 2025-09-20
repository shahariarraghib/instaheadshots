import { compareReviewType, compareType } from "@/types/compareType";

export const compareData: compareType[] = [
    {
        label: "Value for money",
        studio: "$250",
        insta: "$49"
    },
    {
        label: "Save time",
        studio: "2-3 days",
        insta: "15 minutes"
    },
    {
        label: "Variety",
        studio: "4-5 headshots",
        insta: "100 headshots"
    },
    {
        label: "More choices",
        studio: "1 look",
        insta: "40 looks"
    }
];

export const compareReviewData: compareReviewType[] = [
    {
        name: "april",
        comment: "Several people reached out asking me which company I used because they look so realistic.",
        image: "/images/compare/april.webp",
        star: "4"
    },
    {
        name: "Trey",
        comment: "Great way to get a headshot without spending the money to get it done professionally.",
        image: "/images/compare/trey.webp",
        star: "4.5"
    }
];
