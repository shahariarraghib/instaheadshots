import AboutCompanySection from "@/components/homePageComponents/AboutCompanySection";
import Banner from "@/components/homePageComponents/Banner";
import Brand from "@/components/homePageComponents/Brand";

import ContactUs from "@/components/homePageComponents/ContactUs";
import FAQ from "@/components/homePageComponents/FAQ";
import MissionVision from "@/components/homePageComponents/Works";
import OurFeature from "@/components/homePageComponents/Examples";
import TeamSection from "@/components/homePageComponents/TeamSection";
import TestimonialSection from "@/components/homePageComponents/Testimonial";
import TrustedCompany from "@/components/homePageComponents/TrustedCompany";
import { SeoContent } from "@/content/SeoContent";
import { generateMetadata } from "@/utility/generateMetadata";
import Works from "@/components/homePageComponents/Works";
import Examples from "@/components/homePageComponents/Examples";
import Compare from "@/components/homePageComponents/Compare";
import Pricing from "@/components/homePageComponents/Pricing";
import PrivacySection from "@/components/homePageComponents/PrivacySection";
import Resources from "@/components/homePageComponents/Resources";
import CreateYourHeadshots from "@/components/homePageComponents/CreateYourHeadshots";

// export const metadata = generateMetadata(SeoContent.baseSeo);

export default function HomePage() {
    return (
        <section>
            <Banner />
            <Brand />
            <TestimonialSection />
            <Works />
            <Examples />
            <Compare />
            <Pricing />
            <TeamSection />
            <PrivacySection />
            <FAQ />
            <Resources />
            <CreateYourHeadshots />
            {/* 
            <OurFeature />
            <TeamSection />
            <TrustedCompany />
           
            
            <ContactUs />  */}
        </section>
    );
}
