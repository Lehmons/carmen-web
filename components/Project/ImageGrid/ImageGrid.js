import React, { useState } from "react";
import ImageGridStyles from "./ImageGrid.styled";
import ImageBlock from "../../ImageBlock";

export default function ImageGrid({ images }) {
  return (
    <ImageGridStyles>
      {images?.map((item, i) => (
        <section key={i}>
          <ImageBlock
            title={item?.image?.alt}
            text={item?.image?.alt}
            image={item?.image}
            asset={item?.image?.asset}
            isThumb={false}
            hasPaddingBottom={true}
            key={i}
          />
        </section>
      ))}
    </ImageGridStyles>
  );
}
