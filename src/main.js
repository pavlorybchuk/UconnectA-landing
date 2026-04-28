import "./style.css";
import { TopBanner } from "./components/TopBanner";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { HowItWorks } from "./components/HowItWorks";
import { Footer } from "./components/Footer";
import { downloadApk } from "./download_apk";

document.querySelector("#app").innerHTML = `
    ${TopBanner()}
    ${Header()}
    ${HeroSection()}
    ${HowItWorks()}
    ${Footer()}
`;

document.querySelector("#header button").addEventListener("click", downloadApk);

document.querySelector("#download-btn").addEventListener("click", downloadApk);
