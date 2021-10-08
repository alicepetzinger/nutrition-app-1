import "./tracking.css";
import trackingText from "./tracking-text.html";
import trackingLogo from "./tracking-logo.html";

export default {
  title: "Components/tracking",
  parameters: { layout: "centered" },
};

export const withText = () => trackingText;
export const withLogo = () => trackingLogo;
