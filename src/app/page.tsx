"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Hero from "./components/hero/default";
import Intro from "./components/intro/default";
import BrokenText from "./components/brokenText/default";
import AuroraBackground from "./components/auroraBackground/default";
import ProjectCard from "./components/projectCard/default";
import ExperienceCard from "./components/experienceCard/default";
import SkillCard from "./components/skillCard/default";
import AboutCard from "./components/aboutCard/default";
import ProjectDetail from "./components/projectDetail/default";
import ProjecstInfo from "./projects.json";
import ExperienceInfo from "./experience.json";

export default function Home() {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  const [projectContent, setProjectContent] = useState(ProjecstInfo.cyberPilot);
  const [open, setOpen] = useState(false);
  const [opacity, setOpacity] = useState("1");

  function scrollmainOpacity() {
    let num = 1 - (window.scrollY / 50);
    let result = "" + num + "";
    return result;
  }

  const controlIndicator = () => {
    if (window.scrollY > 0) {
      setOpacity(scrollmainOpacity());
    } else {
      setOpacity("1");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlIndicator);

    return () => {
      window.removeEventListener("scroll", controlIndicator);
    };
  });

  const handleProjectClick = (event) => {
    const value = event.currentTarget.getAttribute("id");
    var root = document.getElementsByTagName( 'html' )[0];
    root.style.overflowY = "hidden";

    switch (value) {
      case "firstCard": {
        setProjectContent(ProjecstInfo.cyberPilot);
      }
        break;
      case "secondCard": {
        setProjectContent(ProjecstInfo.brembo);
      }
        break;
      case "thirdCard": {
        setProjectContent(ProjecstInfo.areaClienti);
      }
        break;
      case "fourthCard": {
        setProjectContent(ProjecstInfo.unifarco);
      }
      break;
      case "fifthCard": {
        setProjectContent(ProjecstInfo.ePaper);
      }
        break;
      case "sixthCard": {
        setProjectContent(ProjecstInfo.customFit);
      }
        break;
      case "seventhCard": {
        setProjectContent(ProjecstInfo.pMp);
      }
        break;
      case "eightCard": {
        setProjectContent(ProjecstInfo.listen);
      }
        break;
      default: {
        root.style.overflowY = "scroll";
      }
    }

    setOpen(current => !current);
  };

  return (
    <main className="main">
      <Hero />
      <div className="gradient"></div>
      <div className="scrollIndicator" style={{ opacity: opacity }}><img src="/chevron.svg"/></div>
      <Intro />
      <div className="spacerOne"></div>
      <BrokenText />
      <div className="spacerTwo"></div>
      <div className="spacerTwo"></div>

      <div className="feed">
        <AuroraBackground />

        <div className={`overlay ${open ? 'overlayOpen' : ''}`} onClick={handleProjectClick}></div>

        <ProjectDetail
          className={`card projectDetail ${open ? 'open' : ''}`}
          imageUrl={projectContent.imageURL}
          onClick={handleProjectClick}
          title={projectContent.title}
          subTitle={projectContent.subtitle}
          entities={projectContent.entities}
          blurb1={projectContent.blurb1}
          blurb2={projectContent.blurb2}
          blurb3={projectContent.blurb3}
          blurb4={projectContent.blurb4}
          role={projectContent.role}
        />

        <div id="projectsSection" className="section">
          <div id="projects" className="marginBottom_lrg"></div>
          <Image
            src="/projects.png"
            alt="Projects"
            layout="responsive"
            className="marginBottom_med"
            width={2725}
            height={388}
            priority={true}
          />

          <div className="squaresGrid">
            <div id="firstCard" className="projectCardContainer" onClick={handleProjectClick}>
              <ProjectCard
                title="CyberPilot"
                subTitle="Cyber Security Portal"
                imageUrl="/w3bCTI.png"
              />
            </div>
            <div id="secondCard" className="projectCardContainer" onClick={handleProjectClick}>
              <ProjectCard
                title="Brembo"
                subTitle="E-Commerce"
                imageUrl="/brembo.png"
              />
            </div>
            <div id="thirdCard" className="projectCardContainer" onClick={handleProjectClick}>
              <ProjectCard
                title="WindTre"
                subTitle="Client Area"
                imageUrl="/windTreBusiness.png"
              />
            </div>
            <div id="fourthCard" className="projectCardContainer" onClick={handleProjectClick}>
              <ProjectCard
                title="Unifarco"
                subTitle="Design System"
                imageUrl="/unifarco.png"
              />
            </div>
          </div>

          <div className="squaresGrid squaresGridTwo">
            <div id="fifthCard" className="projectCardContainer" onClick={handleProjectClick}>
              <ProjectCard
                title="The Irish Times"
                subTitle="ePaper"
                imageUrl="/ePaper.png"
              />
            </div>
            <div id="sixthCard" className="projectCardContainer" onClick={handleProjectClick}>
              <ProjectCard
                title="CustomFit"
                subTitle="My M.Sc. Thesis"
                imageUrl="/customFit.png"
              />
            </div>
            <div id="seventhCard" className="projectCardContainer" onClick={handleProjectClick}>
              <ProjectCard
                title="patientMpower"
                subTitle="Patient App"
                imageUrl="/pMpApp.png"
              />
            </div>
            <div id="eightCard" className="projectCardContainer" onClick={handleProjectClick}>
              <ProjectCard
                title="The Irish Times"
                subTitle="Listen"
                imageUrl="/listen.png"
              />
            </div>
          </div>
        </div>

        <div id="experienceSection" className="section">
          <Image
            src="/experience.png"
            alt="Experience"
            layout="responsive"
            className="marginBottom_med"
            width={2724}
            height={333}
          />

          {ExperienceInfo.experience.map((item) => (
            <ExperienceCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              period={item.period}
              alignment={item.alignment}
              imageURL={item.imageURL}
              info1={item.info1}
              info2={item.info2}
              content1={item.content1}
              content2={item.content2}
              linkURL={item.linkURL}
            />
          ))}
        </div>

        <div id="skillSection" className="section">
          <Image
            src="/skills.png"
            alt="Skills"
            layout="responsive"
            className="marginBottom_med"
            width={2726}
            height={558}
          />

          <SkillCard />
        </div>

        <div id="aboutSection" className="section">
          <Image
            src="/about.png"
            alt="About"
            layout="responsive"
            className="marginBottom_med"
            width={2726}
            height={569}
          />

          <AboutCard />
        </div>
      </div>
    </main>
  );
}
