import { GoogleAnalytics } from "./googleAnalytics";

const analyticsEnabled = process.env.ANALYTICS_ENABLED === "true";

export const Analytics: React.FC = () =>
    analyticsEnabled ? (
        <>
            <GoogleAnalytics />
        </>
    ) : (
        <></>
    );
