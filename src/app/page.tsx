// App.tsx
import React from "react";
import NavBar from "./components/NavBar";
import MainPixelHero from "./components/Main";
import AboutMe from "./components/AboutMe";
import ChatWidget from "./components/ChatWidget";
import ProjectsPixelGrid from "./components/ProjectsPixelGrid";

import WorkExperience, {
    WorkExperienceTwoUp,
    WorkExperienceRight,
    WorkExperienceLeft,
} from "./components/WorkExperience";
import EducationTraining from "./components/EducationTraining";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export const dynamic = "force-dynamic";

export default function App() {
    return (
        <>
            <NavBar
                logo={{ src: "/Logo_muaiad1.png", alt: "Muaiad" }}
                brand="MUAIAD HADAD"
            />
            <MainPixelHero />
            <AboutMe />
            <WorkExperience />
            <EducationTraining />
            <SkillsSection />
            <ProjectsPixelGrid />
            <ContactSection brand={{ name: "Muaiad Hadad", logo: { src: "/Logo_muaiad1.png", alt: "Muaiad logo" } }} />
            <ChatWidget />
            <Footer />

        </>
    );
}
