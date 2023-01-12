import React, { useState, useRef } from "react";
import SlideshowStyles from "./Slideshow.styled";
import Image from '../Image';
import Flickity from 'react-flickity-component'



export default function Slideshow({ images, initialIndex = 0 }) {
	const flickityRef = useRef();

	const prev = (e) => {
		e?.preventDefault();
		flickityRef?.current?.previous(true);
	};
	
	const next = (e) => {
		e?.preventDefault();
		flickityRef?.current?.next(true);
	};

	const flickityOptions = {
		initialIndex: initialIndex || 0,
		draggable: true,
		fade: true,
		wrapAround: true
	};

  return (
    <SlideshowStyles className="slideshow">
      <section className="detail__top">
				<div className="slider__container">
					<Flickity
						className={'slider'} // default ''
						elementType={'div'} // default 'div'
						options={flickityOptions} // takes flickity options {}
						disableImagesLoaded={false} // default false
						reloadOnUpdate // default false
						flickityRef={(e) => {
							flickityRef.current = e;
						}}
						>
							{images.map((image, i) => {
								return (<div key={i} className="each__slide landscape" data-height="1000" data-width="1500" aria-selected="false">
									<Image key={i} image={image?.image} text={image?.alt}/>
								</div>)
							})}
						</Flickity>
						<a className="slider__navigation prev" href="#" onClick={prev}></a>
						<a className="slider__navigation next" href="#" onClick={next}></a>
				</div>
			</section>
    </SlideshowStyles>
  );
}
