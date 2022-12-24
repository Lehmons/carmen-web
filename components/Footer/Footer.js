import React, { useState, useEffect } from "react";
import FooterStyles from "./Footer.styled";
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
    if (!newData) {
      return;
      // setData(newData); set data if it's returned
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
      <section>
        {data?.socialLinks?.map((item, i) => (
          <a key={i} href={item?.link} target="_blank" rel="noopener">
            {item?.title}
          </a>
        ))}
      </section>
    </FooterStyles>
  );
}
