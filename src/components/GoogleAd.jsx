import { useEffect } from "react";

const GoogleAd = ({ client, slot }) => {
  useEffect(() => {
    if (window.adsbygoogle && process.env.NODE_ENV !== "development") {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Ad error:", e);
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default GoogleAd;
