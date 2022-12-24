import React, { useState, useEffect } from "react";
import FooterStyles from "./Footer.styled";
import Link from "next/link";
import { groq } from "next-sanity";
import { getClient } from "../../lib/sanity.server";

const query = groq`*[_type == 'footer'][0]{
  ...
}`;

export default function Footer() {
  const [data, setData] = useState();
  const preview = false;

  const setup = async () => {
    const newData = await getClient(preview).fetch(query); // fetches the data
    if (newData) {
      setData(newData); // set data if it's returned
    }
  };

  useEffect(() => {
    setup();
  }, []);

  if (!data) {
    return null;
  }

  return (
    <FooterStyles>
      <section className="site-name">
        <p>&copy; {data?.siteName}</p>
      </section>
      <section className="social-links">
        {data?.socialLinks?.map((item, i) => (
          <Link
            className="cta"
            key={i}
            href={item?.link}
            target="_blank"
            rel="noopener, nofollow"
          >
            <a>{item?.title}</a>
          </Link>
        ))}
      </section>
    </FooterStyles>
  );
}
