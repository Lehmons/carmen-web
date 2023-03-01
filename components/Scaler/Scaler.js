import React, { useState, useEffect, useRef } from "react";
import ScalerStyles from "./Scaler.styled";
import { useAppStore } from '~/stores/AppStore';
import useWindowSize from "~/lib/useWindowSize";
import { motion, useAnimationControls } from 'framer-motion';
import { useRouter } from 'next/router';
import ImageBlock from '../ImageBlock';
import scrollToWithCb from '~/lib/Utils/scrollToWithCb';

export default function Scaler() {
	const [{ animatingProject, isAnimating }, { setAnimatingProject, setIsAnimating }] = useAppStore();
	const { viewportW, viewportH } = useWindowSize();
	const controls = useAnimationControls();
	const router = useRouter();
	const timer = useRef();

	const paddingTops = {
		desktop: 92,
		mobile: 72
	};

	const setup = () => {
		controls.set({ 
			top: animatingProject?.rect?.top,
			left: animatingProject?.rect?.left,
			width: animatingProject?.rect?.width,
			height: animatingProject?.rect?.height,
		});
	};

	const calcTop = () => {
		if(viewportW > 1440){
			const remsToPixelValue = (viewportW / 1440) * paddingTops?.desktop;
			return remsToPixelValue;
		}
		if(viewportW > 768){
			return paddingTops?.desktop;
		}
		paddingTops?.mobile;
	}

  const animate = () => {
		const aspectRatio = animatingProject?.image?.asset?.metadata?.dimensions?.aspectRatio || 1.7;
		const height = viewportW / aspectRatio;
		const top = calcTop();
		controls.start(
			{ left: 0, 
				top,
				width: viewportW,
				height,
				transition: { 
					type: 'linear', 
					duration: 0.3
				}, 
			});
	};


	const resetAnimation = () => {
		setup();
	};

	const onAnimationStart = () => {
		setIsAnimating(true);
		router.push(animatingProject?.slug?.current, undefined, { scroll: false });
	};
	
	const onAnimationComplete = () => {
		
	};

	useEffect(()=> {
	 if(animatingProject){
		setup();
		animate();
	 }
	}, [animatingProject]);

	const onRouteComplete = () => {
		if(!animatingProject){
			return;
		}
		clearTimeout(timer.current);
		timer.current = setTimeout(() => {
			setAnimatingProject();
			setIsAnimating(false);
			scrollToWithCb({ top: 100, behavior: 'smooth'});
		}, 1000);
	}

	useEffect(() => {
		router.events.on('routeChangeComplete', onRouteComplete)
		return () => {
			router.events.off('routeChangeComplete', onRouteComplete)
		};
	}, [animatingProject, router.events]);

	useEffect(()=> {
		const originalStyle = window.getComputedStyle(document.body).overflow;
		function preventMotion(event)
		{
				window.scrollTo(0, 0);
				event.preventDefault();
				event.stopPropagation();
		}

		if (isAnimating) {
			//prevent scrolling on mount
			document.body.style.overflow = "hidden";
			document.body.style.position = "relative";
			window.addEventListener("touchmove", preventMotion, false);
		} else {
			document.body.style.overflow = originalStyle;
			document.body.style.position = '';
			window.removeEventListener("touchmove", preventMotion, false);
		}
		// re-enable scrolling when component unmounts
		return () => {
			document.body.style.overflow = originalStyle;
			document.body.style.position = '';
			window.removeEventListener("touchmove", preventMotion, false);
		};
	}, [isAnimating]);

  return (
    <ScalerStyles>
      <motion.section 
				animate={controls} 
				className='scaler' 
				onAnimationStart={onAnimationStart} 
				onAnimationComplete={onAnimationComplete}>
			{animatingProject && (
				<ImageBlock
					title={animatingProject?.image?.alt}
					text={animatingProject?.image?.alt}
					image={animatingProject?.image}
					asset={animatingProject?.image?.asset}
					isThumb={false}
					hasPaddingBottom={false}
				/>
			)}
			</motion.section>
    </ScalerStyles>
  );
}
