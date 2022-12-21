import React, { useState } from "react";
import SingleImageStyles from "./SingleImage.styled";
import ImageBlock from "../../ImageBlock";

export default function SingleImage({ image, margin, size }) {
  return (
    <SingleImageStyles
      className={`single-image is-${size} ${margin ? "has-margin" : ""}`}
    >
      <ImageBlock
        title={image?.image?.alt}
        text={image?.image?.alt}
        image={image?.image}
        asset={image?.image?.asset}
        isThumb={false}
        hasPaddingBottom={true}
      />
    </SingleImageStyles>
  );
}
