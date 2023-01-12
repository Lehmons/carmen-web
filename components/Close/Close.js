import React, { useState } from "react";
import CloseStyles from "./Close.styled";

export default function Close({ isInverse, onClick }) {
  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 }
  };
  return (
    <CloseStyles
      onClick={onClick}
      className={`close-btn ${isInverse ? "is-inverse" : ""}`}
      variants={variants}
      initial={"closed"}
      animate={"open"}
    >
      <span className="circle">
        <span />
        <span />
      </span>
    </CloseStyles>
  );
}
