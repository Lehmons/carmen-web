import React, { useState } from "react";
import SingleImageStyles from "./SingleImage.styled";
import ImageBlock from "../../ImageBlock";
import SimpleBlockContent from "../../SimpleBlockContent";

export default function SingleImage({ image, margin, size, caption }) {
  return (
    <SingleImageStyles
      className={`single-image is-${size} ${margin ? "has-margin" : ""}`}
    >
      <ImageBlock
        title={image?.image?.alt}
        text={image?.image?.alt}
        image={image?.image}
        asset={image?.image?.asset}
        // caption={caption?.text}
        isThumb={false}
        hasPaddingBottom={true}
      />
      {caption && (
        <section className="caption">
          <SimpleBlockContent blocks={caption} />
        </section>
      )}
    </SingleImageStyles>
  );
}
