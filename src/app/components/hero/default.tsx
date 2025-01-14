"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "./default.scss";

export default function Hero() {
  const [blur, setBlur] = useState("blur(0)");
  const [scroll, setScroll] = useState("0");
  const scrollNumber = window.innerHeight - 282;
  const headerImageRef = useRef(null);

  function scrollBlur() {
    let num = -1 + (window.scrollY / window.innerHeight) * 2;
    let result: string;
    if (num > 4) {
      result = "blur(4px)";
    } else {
      result = "blur(" + num + "px)";
    }
    return result;
  }

  const controlHero = () => {
    let scrolledHero = (window.innerHeight - window.scrollY) / 10000;

    if (window.scrollY > scrollNumber) {
      setScroll("-" + scrolledHero + "px");
      setBlur(scrollBlur());
    } else {
      setScroll("0");
      setBlur("blur(0)");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHero);
    return () => {
      window.removeEventListener("scroll", controlHero);
    };
  });

  return (
    <div className="hero">
      <Image
        src="/duomo.jpg"
        alt="Hero Image"
        className="heroImage"
        style={{ filter: blur, top: scroll }}
        width={1620}
        height={1080}
        priority={true}
        ref={headerImageRef}
      />
    </div>
  );
}
