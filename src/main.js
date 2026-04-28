import "./style.css";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { HowItWorks } from "./components/HowItWorks";
import { Footer } from "./components/Footer";
import { downloadApk } from "./download_apk";

document.querySelector("#app").innerHTML = `
    ${Header()}
    ${HeroSection()}
    ${HowItWorks()}
    ${Footer()}
`;

document.querySelector("#header .hidden.lg\\:flex button")?.addEventListener("click", downloadApk);

document.querySelector("#mobile-download-btn")?.addEventListener("click", downloadApk);

document.querySelector("#download-btn")?.addEventListener("click", downloadApk);

const menuBtn = document.querySelector("#mobile-menu-btn");
const mobileNav = document.querySelector("#mobile-nav");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = mobileNav.style.maxHeight !== "0px" && mobileNav.style.maxHeight !== "";
    if (isOpen) {
      mobileNav.style.maxHeight = "0px";
      menuBtn.setAttribute("aria-expanded", "false");
    } else {
      mobileNav.style.maxHeight = mobileNav.scrollHeight + "px";
      menuBtn.setAttribute("aria-expanded", "true");
    }
  });
  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.style.maxHeight = "0px";
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}
