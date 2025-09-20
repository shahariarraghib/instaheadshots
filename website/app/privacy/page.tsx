import Privacy from "@/components/privacyComponent/Privacy";
import { SeoContent } from "@/content/SeoContent";
import { generateMetadata } from "@/utility/generateMetadata";

export const metadata = generateMetadata(SeoContent["privacySeo"] || SeoContent.baseSeo);

export default function PrivacyPage() {
    return (
        <section>
            <Privacy />
        </section>
    );
}
