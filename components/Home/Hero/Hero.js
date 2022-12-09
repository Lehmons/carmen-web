import React, { useState } from "react";
import HeroStyles from "./Hero.styled";
import SimpleBlockContent from "../../SimpleBlockContent";
import ImageBlock from "../../ImageBlock";

export default function Hero({ heroText, featuredProject, featuredProject2 }) {
  return (
    <HeroStyles>
      <section className="featuredGrid">
        <section className="featuredLeft">
          <ImageBlock
            title={featuredProject?.image?.alt}
            text={featuredProject?.image?.alt}
            image={featuredProject?.image}
            asset={featuredProject?.image?.asset}
            isThumb={false}
            hasPaddingBottom={true}
          />
        </section>
        <section className="featuredRight">
          <ImageBlock
            title={featuredProject2?.image?.alt}
            text={featuredProject2?.image?.alt}
            image={featuredProject2?.image}
            asset={featuredProject2?.image?.asset}
            isThumb={false}
            hasPaddingBottom={true}
          />
        </section>
      </section>
      <section className="blurb">
        {heroText && <SimpleBlockContent blocks={heroText} />}
      </section>
      <div className="linebreaker"></div>
    </HeroStyles>
  );
}

// {featuredProject ? featuredProject.map((featuredProject, i) => {
//   return (
//     <FeaturedProject
//     key={i}
//     slug={featuredProject?.slug}
//     images={featuredProject?.images}
//     />
//   );
// })
// :null}
