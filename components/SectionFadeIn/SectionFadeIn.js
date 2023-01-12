import React, { useState, useEffect, useRef } from "react";
import SectionFadeInStyles from "./SectionFadeIn.styled";
import { useInView } from "react-intersection-observer";
import isInViewport from "../../lib/isInViewport";
import loadImage from "image-promise";

export default function SectionFadeIn(props) {
  const elements = React.Children.toArray(props.children);
  const img = useRef();

  const containerRef = useRef();
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "-100px 0px -100px 0px",
    triggerOnce: true,
  });

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    img.current = containerRef.current.querySelector("img");
  }, []);

  const onInView = () => {
    if (!img.current || img.current.complete) {
      setVisible(true);
      return;
    }

    loadImage(img.current)
      .then(function (img) {
        setVisible(true);
      })
      .catch(function () {
        setVisible(true);
      });
  };

  useEffect(() => {
    if (inView) {
      onInView();
    }
  }, [inView]);

  useEffect(() => {
    if (isInViewport(containerRef.current)) {
      setVisible();
    }
  }, []);

  return (
    <SectionFadeInStyles
      ref={ref}
      className={`${isVisible ? "is-visible" : "is-hidden"} ${
        props.className || ""
      }`}
    >
      <section ref={containerRef}>{elements}</section>
    </SectionFadeInStyles>
  );
}
