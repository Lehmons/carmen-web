import React, { useState } from "react";
import HeroStyles from "./Hero.styled";
import SimpleBlockContent from "../../SimpleBlockContent";
import ImageBlock from "../../ImageBlock";

export default function Hero({ heroText, featuredProject }) {
  return (
    <HeroStyles>
      <section>
        <ImageBlock
          title={featuredProject?.image?.alt}
          text={featuredProject?.image?.alt}
          image={featuredProject?.image}
          asset={featuredProject?.image?.asset}
          isThumb={false}
          hasPaddingBottom={true}
        />
      </section>
      {heroText && <SimpleBlockContent blocks={heroText} />}
    </HeroStyles>
  );
}

//    Hero section for
//ft left and ft right

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
