import Terms from "@/components/termsComponent/Terms";
import { SeoContent } from "@/content/SeoContent";
import { generateMetadata } from "@/utility/generateMetadata";

export const metadata = generateMetadata(SeoContent["termsSeo"] || SeoContent.baseSeo);

export default function TermsPage() {
    return (
        <section>
            <Terms />
        </section>
    );
}
