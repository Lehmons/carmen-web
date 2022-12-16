import React, { useState } from "react";
import AboutStyles from "./About.styled";

export default function About({
  pageTransition,
  pageVariants,
  pageStyle,
  heroText,
}) {
  return (
    <AboutStyles
      key={"about"}
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page home"
    >
      {/* <section className="heroText">
        {<SimpleBlockContent blocks={heroText} />}
      </section> */}
      <section className="twoColumnTextBlock">{<twoColumnTextBlock />}</section>
      <section className="getInTouch">{<editorial />}</section>
    </AboutStyles>
  );
}
