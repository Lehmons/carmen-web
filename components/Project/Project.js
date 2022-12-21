import React, { useState } from "react";
import ProjectStyles from "./Project.styled";
import ImageBlock from "../ImageBlock";

export default function Project(
  pageTransition,
  pageVariants,
  pageStyle,
  featuredImage,
  blocks,
  title
) {
  console.log(featuredImage);
  return (
    <ProjectStyles
      key="project"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page project"
    >
      <ImageBlock
        title={featuredImage?.image?.alt}
        text={featuredImage?.image?.alt}
        image={featuredImage?.image}
        asset={featuredImage?.image?.asset}
        isThumb={false}
        hasPaddingBottom={true}
      />
    </ProjectStyles>
  );
}
