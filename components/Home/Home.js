import React, { useState } from "react";
import HomeStyles from "./Home.styled";
import SimpleBlockContent from "../SimpleBlockContent";
import ConditionalWrapper from "../ConditionalWrapper";
import Hero from "./Hero";
import ImageBlock from "../ImageBlock";
import Footer from "../Footer";
import Link from "next/link";
import Head from "next/head";
// import { motion } from "framer-motion";

export default function Home({
  pageTransition,
  pageVariants,
  pageStyle,
  featuredProjectLink,
  featuredProjectLink2,
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
      <Head>
        <title>Home | Carmen Dowling</title>
      </Head>
      {/* about page 
    feed page */}
      <Hero
        heroText={heroText}
        featuredProjectLink={featuredProjectLink}
        featuredProjectLink2={featuredProjectLink2}
        featuredProject={featuredProject}
        featuredProject2={featuredProject2}
      />
      <section className="project-feed">
        {projects
          ? projects.map((project, i) => (
              <section key={i} className="project-tile">
                <ConditionalWrapper
                  condition={project?.linkedPage?.slug?.current}
                  wrap={(children) => (
                    <Link
                      href={`${project?.linkedPage?.slug?.current}`}
                      scroll={false}
                    >
                      <a>{children}</a>
                    </Link>
                  )}
                >
                  {project?.linkedPage?.blurb && (
                    <p>{project?.linkedPage?.blurb}</p>
                  )}
                  {project?.linkedPage?.blurbLineTwo && (
                    <p className="indent">
                      {project?.linkedPage?.blurbLineTwo}
                    </p>
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
                </ConditionalWrapper>
              </section>
            ))
          : null}
      </section>
      <Footer />
    </HomeStyles>
  );
}
