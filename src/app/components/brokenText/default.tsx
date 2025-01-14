"use client";
import React, { useState, useEffect } from "react";
import "./default.scss";

export default function BrokenText() {
  const [show, setShow] = useState(false);
  const [opacity, setOpacity] = useState("1");
  const scrollNumber = (window.innerHeight * 2) - 282;

  function scrollOpacity() {
    let num = 2 - (window.scrollY / window.innerHeight) * 0.6;
    return "" + num + "";
  }

  const controlText = () => {
    if (window.scrollY > scrollNumber) {
      setShow(true);
      setOpacity(scrollOpacity());
    } else {
      setShow(false);
      setOpacity("1");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlText);

    return () => {
      window.removeEventListener("scroll", controlText);
    };
  });

  return (
    <div
      className={`brokenTextContainer ${show && "fixed"}`}
      style={{ opacity: opacity }}
    >
      <div className="brokenText">
        <h1>Design</h1>
        <h1>Portfolio</h1>
      </div>
    </div>
  );
}
