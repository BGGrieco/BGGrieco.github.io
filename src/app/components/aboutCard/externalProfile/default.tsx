"use client";
import React from "react";
import "./default.scss";

export default function ExternalProfile({
  title,
  imageUrl,
  altImageUrl,
  href,
}) {
  const handleMouseOver = (event) => {
    event.target.querySelector(".externalImage").src = altImageUrl;
  };
  const handleMouseOut = (event) => {
    event.target.querySelector(".externalImage").src = imageUrl;
  };

  return (
    <a
      href={href}
      className="card externalCard"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <h3>{title}</h3>
      <img
        id={"id" + title}
        className="externalImage"
        src={imageUrl}
        alt={title + " icon"}
      />
      <img className="arrow" src="/arrow.svg" alt="Arrow" />
    </a>
  );
}
