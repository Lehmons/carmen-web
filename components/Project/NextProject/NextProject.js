import React, { useState, useEffect } from "react";
import NextProjectStyles from "./NextProject.styled";
import { groq } from "next-sanity";
import { getClient } from "../../../lib/sanity.server";
import Link from "next/link";
import ImageBlock from "../../ImageBlock";
import ArrowRight from "./arrowRight.svg";

const query = groq`*[_type == 'project' && !(_id in path("drafts.**"))]|order(orderRank){
  _id,
  slug,
  featuredImage{
    ...
    image {
      ...,
      asset->
    }
  }
}`;

export default function NextProject({ _id }) {
  const [data, setData] = useState();
  const preview = false;

  const setup = async () => {
    const newData = await getClient(preview).fetch(query); // fetches the data
    if (!newData) {
      return;
    }
    const index = newData.findIndex((item) => item?._id === _id);
    if (index < 0 || index === undefined) {
      return;
    }

    const nextProject = newData?.[index + 1] || newData?.[0];
    const nextNextProject = newData?.[index + 2] || newData?.[1];

    if (nextProject && nextNextProject) {
      setData([nextProject, nextNextProject]);
    }
  };

  useEffect(() => {
    setup();
  }, []);

  if (!data) {
    return null;
  }

  return (
    <NextProjectStyles>
      <section class="another-project">
        <p>
          Another project
          <ArrowRight />
        </p>
      </section>
      <section>
        {data[0] && data[0]?.slug?.current && (
          <Link href={data[0]?.slug?.current} scroll={false}>
            <a>
              <ImageBlock
                title={data[0]?.featuredImage?.alt}
                text={data[0]?.featuredImage?.alt}
                image={data[0]?.featuredImage}
                asset={data[0]?.featuredImage?.asset}
                isThumb={false}
                hasPaddingBottom={true}
              />
            </a>
          </Link>
        )}
        {data[1] && data[1]?.slug?.current && (
          <Link href={data[1]?.slug?.current} scroll={false}>
            <a>
              <ImageBlock
                title={data[1]?.featuredImage?.alt}
                text={data[1]?.featuredImage?.alt}
                image={data[1]?.featuredImage}
                asset={data[1]?.featuredImage?.asset}
                isThumb={false}
                hasPaddingBottom={true}
              />
            </a>
          </Link>
        )}
      </section>
    </NextProjectStyles>
  );
}

// export SVG Can't take her design
// outside section
// make section 2 collumn
// padding top and bottom
