import React, { useState, useEffect } from "react";
import LightboxStyles from "./Lightbox.styled";
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from "framer-motion";
import useKeyPress from "~/lib/useKeyPress";
import scrollToWithCb from "~/lib/Utils/scrollToWithCb";
import Close from '../../Close';


const Slideshow = dynamic(() => import('../../Slideshow'), {
  ssr: false,
})

export default function Lightbox({ images, activeIndex, setIsLightboxActive, isLightboxActive }) {

	const escPress = useKeyPress("Escape");

	const variants = {
    open: {
      backgroundColor: "rgba(0, 9, 31, 0.5)",
    },
    closed: {
      backgroundColor: "rgba(0, 9, 31, 0)",
    },
  };

	const onClose = () => {
		setIsLightboxActive(false);
	};

	useEffect(() => {
    if (escPress) {
      onClose();
    }
  }, [escPress]);

	const onSettle = async i => {
		if(i === 0){ 
			await scrollToWithCb({ top: 0, behavior: 'smooth' });
			return;
		}
		const images = [...document?.querySelectorAll('.blocks img')];
		const elem = images?.[i - 1];
		if(!elem){
			return;
		}
		const scrollY = window?.scrollY || 0;
		const rect = elem?.getBoundingClientRect();
		const top = rect?.top + scrollY;
		await scrollToWithCb({ top, behavior: 'auto' });
	};


	if(!images){
		return;
	}

	return (
    <AnimatePresence>
      {isLightboxActive && (
        <LightboxStyles
          initial={"closed"}
          animate={"open"}
          exit={"closed"}
          variants={variants}
          className="lightbox"
          transition={{
            backgroundColor: { duration: 0.3 },
          }}
        >
          <motion.section
            className="card"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{
              y: { type: "spring", stiffness: 800, damping: 100 },
              opacity: { duration: 0.3 },
            }}
          >
            <Close onClick={onClose} />
            <Slideshow images={images} initialIndex={activeIndex} onSettle={onSettle} />
          </motion.section>
          <section className="background" onClick={onClose} />
        </LightboxStyles>
      )}
    </AnimatePresence>
  );
}
