"use client";
import React, { useState, useLayoutEffect, useEffect } from "react";
import Image from "next/image";
import "./default.scss";

const MenuHighlight = () => (
  <Image
    src="/selector.png"
    height={101}
    width={480}
    className="selectorImage"
    alt="Menu highlight"
  />
);

// Restrict value to be between the range [0, value]
const clamp = (value: number) => Math.max(0, value);

// Check if number is between two values
const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;

const useScrollspy = (ids: string[], offset: number = 0) => {
  const [activeId, setActiveId] = useState("");

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      setActiveId(position?.id || "");
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [ids, offset]);

  return activeId;
};

export default function NavBar() {
  const ids = [
    "projectsSection",
    "experienceSection",
    "skillSection",
    "aboutSection",
  ];
  const activeId = useScrollspy(ids, 355);

  const [show, setShow] = useState(true);

  const controlNavbar = () => {
    if (window.scrollY > 400) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });

  return (
    <div className={`active ${show && "display"} navBar`}>
      <div>
        <ul
          onClick={(event: React.SyntheticEvent) => {
            event.preventDefault();
            const target = event.target as HTMLAnchorElement;
            const id = target.getAttribute("href")?.replace("#", "");
            const element = document.getElementById(String(id));
            element?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <li className={activeId == "projectsSection" ? "active" : ""}>
            <MenuHighlight />
            <a href="#projects">Projects</a>
          </li>
          <li className={activeId == "experienceSection" ? "active" : ""}>
            <MenuHighlight />
            <a href="#experience">Experience</a>
          </li>
          <li className={activeId == "skillSection" ? "active" : ""}>
            <MenuHighlight />
            <a href="#skills">Skills</a>
          </li>
          <li className={activeId == "aboutSection" ? "active" : ""}>
            <MenuHighlight />
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
