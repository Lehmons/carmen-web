import React, { useState } from "react";
import NavStyled from "./nav.styled";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  const isHome = router?.asPath === "/";
  const isWork = router?.asPath.slice(0, 5) === "/work";

  return (
    <NavStyled>
      <Link href="/">
        <a className="logo">Carmen Dowling</a>
      </Link>
      <section className="work-about">
        <Link href="/">
          <a className={`work ${isHome || isWork ? "is-active" : ""}`}>Work</a>
        </Link>
        <Link href="/about">
          <a
            className={`about ${
              router?.asPath === "/about" ? "is-active" : ""
            }`}
          >
            About
          </a>
        </Link>
      </section>
    </NavStyled>
  );
}
