import React, { useState } from "react";
import HomeStyles from "./Home.styled";
import SimpleBlockContent from "../SimpleBlockContent";
import Hero from "./Hero";
import ImageBlock from "../ImageBlock";
// import { motion } from "framer-motion";

export default function Home({
  pageTransition,
  pageVariants,
  pageStyle,
  FeaturedprojectLink,
  FeaturedprojectLink2,
  featuredProject,
  featuredProject2,
  projects,
  heroText,
}) {
  return (
    <HomeStyles
      key={"home"}
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page home"
    >
      {/* about page 
    feed page */}
      <Hero
        heroText={heroText}
        FeaturedprojectLink={FeaturedprojectLink}
        FeaturedprojectLink2={FeaturedprojectLink2}
        featuredProject={featuredProject}
        featuredProject2={featuredProject2}
      />
      <section className="project-feed">
        {projects
          ? projects.map((project, i) => (
              <section key={i} className="project-tile">
                {/* {project?.linkedPage?.title && (
                  <h2>{project?.linkedPage?.title}</h2>
                )} */}
                {project?.linkedPage?.blurb && (
                  <p>{project?.linkedPage?.blurb}</p>
                )}
                <section className="image-wrapper">
                  {project?.linkedPage?.featuredImage && (
                    <ImageBlock
                      title={project?.linkedPage?.featuredImage?.image?.alt}
                      text={project?.linkedPage?.featuredImage?.image?.alt}
                      image={project?.linkedPage?.featuredImage?.image}
                      asset={project?.linkedPage?.featuredImage?.image?.asset}
                      isThumb={false}
                      hasPaddingBottom={true}
                    />
                  )}
                </section>
              </section>
            ))
          : null}
      </section>
    </HomeStyles>
  );
}
