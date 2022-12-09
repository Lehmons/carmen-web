import React, { useState } from "react";
import NavStyled from "./Nav.styled";
import Link from "next/link";

export default function Nav() {
  return (
    <NavStyled>
      <Link href="/">
        <a className="logo">Carmen Dowling</a>
      </Link>
      <section className="WorkAbout">
        <Link href="/projects">
          <a className="projects">Work</a>
        </Link>
        <Link href="/about">
          <a className="about">About</a>
        </Link>
      </section>
    </NavStyled>
  );
}
