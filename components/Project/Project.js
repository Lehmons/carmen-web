import React, { useState, useEffect } from "react";
import ProjectStyles from "./Project.styled";
import ImageBlock from "../ImageBlock";
import ImageGrid from "./ImageGrid";
import SingleImage from "./SingleImage";
import Head from "next/head";
import SimpleBlockContent from "../SimpleBlockContent";
import Footer from "../Footer";
import NextProject from "./NextProject";
import SectionFadeIn from "../SectionFadeIn";
import Lightbox from "./Lightbox";
import ProjectVideo from "./ProjectVideo";

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
  const [activeIndex, setActiveIndex] = useState();
  const [images, setImages] = useState();
  const [isLightboxActive, setIsLightboxActive] = useState(false);

  const setupImages = () => {
    const arr = [featuredImage];
    blocks.map((item) => {
      if (item?._type == "singleImage") {
        arr.push(item?.image);
      }
      if (item?._type == "imageGrid") {
        arr.push(...item?.images);
      }
    });
    setImages(arr);
  };

  const onImageClick = (e, i) => {
    e?.preventDefault();
    const nextActiveIndex = i + 1;
    setActiveIndex(nextActiveIndex);
    setIsLightboxActive(true);
  };

  useEffect(() => {
    setupImages();
  }, []);

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
      <section className="featured-image" onClick={(e) => onImageClick(e, -1)}>
        <ImageBlock
          title={featuredImage?.image?.alt}
          text={featuredImage?.image?.alt}
          image={featuredImage?.image}
          asset={featuredImage?.image?.asset}
          isThumb={false}
          hasPaddingBottom={true}
        />
      </section>
      {description && (
        <section className="description">
          <SimpleBlockContent blocks={description} />
          {tags && <span>{tags.join(", ")}</span>}
        </section>
      )}
      <section className="blocks">
        {blocks?.map((item, i) => {
          if (item?._type == "imageGrid") {
            return (
              <SectionFadeIn key={i}>
                <ImageGrid
                  images={item?.images}
                  key={i}
                  onClick={onImageClick}
                  counter={i}
                />
              </SectionFadeIn>
            );
          }
          if (item?._type == "singleImage") {
            return (
              <SectionFadeIn
                key={i}
                onClick={(e) => {
                  onImageClick(e, i);
                }}
              >
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
          if (item?._type == "projectVideo") {
            return (
              <ProjectVideo key={i} video={item?.video} margin={item?.margin} />
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
      {credits && (
        <section className="credits">
          <SimpleBlockContent blocks={credits} />
        </section>
      )}
      <NextProject _id={_id} />
      <Lightbox
        images={images}
        activeIndex={activeIndex}
        isLightboxActive={isLightboxActive}
        setIsLightboxActive={setIsLightboxActive}
      />
      <Footer />
    </ProjectStyles>
  );
}
