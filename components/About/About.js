import React, { useState } from "react";
import AboutStyles from "./About.styled";
import SimpleBlockContent from "../SimpleBlockContent";

export default function About({
  pageTransition,
  pageVariants,
  pageStyle,
  heroText,
  getInTouch,
  twoColumnTextBlock,
}) {
  console.log(twoColumnTextBlock);

  return (
    <AboutStyles
      key={"about"}
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page about"
    >
      {heroText && (
        <section className="heroText">
          <SimpleBlockContent blocks={heroText} />
        </section>
      )}
      {twoColumnTextBlock && (
        <section className="two-column">
          <section>
            {twoColumnTextBlock?.title && (
              <SimpleBlockContent blocks={twoColumnTextBlock?.title} />
            )}
            <section className="grid">
              {twoColumnTextBlock?.paragraphs
                ? twoColumnTextBlock?.paragraphs.map((item, i) => (
                    <section key={i}>
                      <SimpleBlockContent blocks={item?.paragraph} />
                    </section>
                  ))
                : null}
            </section>
          </section>
        </section>
      )}
      {getInTouch && (
        <section className="get-in-touch">
          <SimpleBlockContent blocks={getInTouch} />
        </section>
      )}
    </AboutStyles>
  );
}
