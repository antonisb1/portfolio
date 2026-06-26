import { useEffect } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from "react-ga4";

const GA_ID = "G-2YYS2WEJLL";

export default function AnalyticsConsent() {
  const enableAnalytics = () => {
    ReactGA.initialize(GA_ID);
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  };

  useEffect(() => {
    if (getCookieConsentValue("analytics_consent") === "true") {
      enableAnalytics();
    }
  }, []);

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Reject"
      enableDeclineButton
      cookieName="analytics_consent"
      expires={180}
      onAccept={enableAnalytics}
      containerClasses="!bg-slate-900 !text-slate-200 !px-4 !py-3 !border-t !border-slate-700 !shadow-2xl"
      contentClasses="!m-0 !text-sm !leading-snug"
      buttonClasses="!bg-sky-400 !text-slate-950 !rounded-full !px-4 !py-2 !font-semibold !text-sm"
      declineButtonClasses="!bg-transparent !text-slate-300 !border !border-slate-600 !rounded-full !px-4 !py-2 !font-semibold !text-sm"
    >
      Χρησιμοποιούμε Google Analytics για στατιστικά επισκεψιμότητας.
    </CookieConsent>
  );
}
