import React, { useState } from "react";
import HomeStyles from "./Home.styled";
import ConditionalWrapper from "../ConditionalWrapper";
import Hero from "./Hero";
import ImageBlock from "../ImageBlock";
import Footer from "../Footer";
import SectionFadeIn from "../SectionFadeIn";
import Link from "next/link";
import Head from "next/head";
// import { motion } from "framer-motion";
import { useAppStore } from '~/stores/AppStore';

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

	const [{ isAnimating }, { setAnimatingProject }] = useAppStore();

	const setupScaler = (e, project) => {
		if(!project?.linkedPage?.featuredImage?.image || !project?.linkedPage?.slug){
			return;
		}
		const rect = e?.target?.getBoundingClientRect();
		if(!rect){
			return;
		}
		e?.preventDefault(); 
		setAnimatingProject({
			image: project?.linkedPage?.featuredImage?.image,
			slug: project?.linkedPage?.slug,
			rect
		});
	};

  return (
    <HomeStyles
      key={"home"}
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={`page home ${isAnimating ?  'is-animating' : ''}`}
    >
      <Head>
        <title>Home | Carmen Dowling</title>
      </Head>
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
                      <a onClick={e => { setupScaler(e, project); }}>{children}</a>
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
										<SectionFadeIn>
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
										</SectionFadeIn>
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
