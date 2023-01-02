import React, { useState } from "react";
import HeroStyles from "./Hero.styled";
import SimpleBlockContent from "../../SimpleBlockContent";
import ImageBlock from "../../ImageBlock";
import ConditionalWrapper from "../../ConditionalWrapper";
import Link from "next/link";

export default function Hero({
  heroText,
  featuredProject,
  featuredProject2,
  featuredProjectLink,
  featuredProjectLink2,
}) {
  return (
    <HeroStyles>
      <section className="featuredGrid">
        <section className="featuredLeft">
          <ConditionalWrapper
            condition={featuredProjectLink?.slug?.current}
            wrap={(children) => (
              <Link
                href={`${featuredProjectLink?.slug?.current}`}
                scroll={false}
              >
                <a>{children}</a>
              </Link>
            )}
          >
            <ImageBlock
              title={featuredProject?.image?.alt}
              text={featuredProject?.image?.alt}
              image={featuredProject?.image}
              asset={featuredProject?.image?.asset}
              isThumb={false}
              hasPaddingBottom={true}
            />
          </ConditionalWrapper>
        </section>
        <section className="featuredRight">
          <ConditionalWrapper
            condition={featuredProjectLink2?.slug?.current}
            wrap={(children) => (
              <Link
                href={`${featuredProjectLink2?.slug?.current}`}
                scroll={false}
              >
                <a>{children}</a>
              </Link>
            )}
          >
            <ImageBlock
              title={featuredProject2?.image?.alt}
              text={featuredProject2?.image?.alt}
              image={featuredProject2?.image}
              asset={featuredProject2?.image?.asset}
              isThumb={false}
              hasPaddingBottom={true}
            />
          </ConditionalWrapper>
        </section>
      </section>
      <section className="blurb">
        {heroText && <SimpleBlockContent blocks={heroText} />}
      </section>
      <div className="linebreaker"></div>
    </HeroStyles>
  );
}
