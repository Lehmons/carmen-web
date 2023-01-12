import React, { useState } from "react";
import ProjectStyles from "./Project.styled";
import ImageBlock from "../ImageBlock";
import ImageGrid from "./ImageGrid";
import SingleImage from "./SingleImage";
import Head from "next/head";
import SimpleBlockContent from "../SimpleBlockContent";
import Footer from "../Footer";
import NextProject from "./NextProject";
import SectionFadeIn from '../SectionFadeIn';

export default function Project({
  pageTransition,
  pageVariants,
  pageStyle,
  featuredImage,
  blocks,
  title,
  tags,
  description,
  credits,
  _id,
}) {
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
      <Head>
        <title>{title ? title : "Project"} | Carmen Dowling</title>
      </Head>
      <ImageBlock
        title={featuredImage?.image?.alt}
        text={featuredImage?.image?.alt}
        image={featuredImage?.image}
        asset={featuredImage?.image?.asset}
        isThumb={false}
        hasPaddingBottom={true}
      />
      {description && (
        <section className="description">
          <SimpleBlockContent blocks={description} />
          {tags && <span>{tags.join(", ")}</span>}
        </section>
      )}
      <section className="blocks">
        {blocks?.map((item, i) => {
          if (item?._type == "imageGrid") {
            return <SectionFadeIn><ImageGrid images={item?.images} key={i} /></SectionFadeIn>;
          }
          if (item?._type == "singleImage") {
            return (
              <SectionFadeIn>
								<SingleImage
									image={item?.image}
									margin={item?.margin}
									size={item?.size}
									caption={item?.caption}
									key={i}
								/>
							</SectionFadeIn>
            );
          }
          if (item?._type == "projectText") {
            return (
              <section className="project-text" key={i}>
                {item?.text && <SimpleBlockContent blocks={item?.text} />}
              </section>
            );
          }
          if (item?._type == "caption") {
            return (
              <section className="caption" key={i}>
                	{item?.text && <SimpleBlockContent blocks={item?.text} />}
              </section>
            );
          }
          return null;
        })}
      </section>
      {/* {caption && (
        <section className="caption">
          <SimpleBlockContent blocks={caption} />
        </section>
      )} */}
      {credits && (
        <section className="credits">
          <SimpleBlockContent blocks={credits} />
        </section>
      )}
      <NextProject _id={_id} />
      <Footer />
    </ProjectStyles>
  );
}
