import { FaHandsHelping, FaPlug } from "react-icons/fa";
import { FaBoltLightning, FaSackDollar } from "react-icons/fa6";
import { FeatureType } from "@/types/featureType";
import { MdAutoAwesome, MdTimer } from "react-icons/md";

export const featureList: FeatureType[] = [
    {
        icon: <FaBoltLightning />,
        title: "Rapid",
        description:
            "Immediate PFAS testing results, enabling real-time monitoring and response at wastewater treatment plants"
    },
    {
        icon: <FaSackDollar />,
        title: "Affordable",
        description:
            "Low-cost PFAS testing, reducing the financial burden on wastewater treatment plants compared to traditional lab testing methods"
    },
    {
        icon: <MdAutoAwesome />,
        title: "Automated",
        description:
            "A fully automated device that provides lab-quality PFAS testing directly at wastewater treatment facilities"
    },
    {
        icon: <FaHandsHelping />,
        title: "Subscription ",
        description:
            "A cost-effective approach where the testing instrument is provided for free, and consumables are supplied based on the selected plan"
    },
    {
        icon: <MdTimer />,
        title: "Real time",
        description:
            "Continuous, instant tracking of PFAS levels in wastewater, allowing for immediate, data-driven decisions and compliance actions"
    },
    {
        icon: <FaPlug />,
        title: "Portable ",
        description:
            "A field-deployable, portable device that enables on-site PFAS testing at wastewater treatment facilities, eliminating the need for off-site lab analysis"
    }
];
