import { urlFor, urlPortraitFor } from "../../lib/sanity";

export default function Image({
  portraitMobileCrop,
  text,
  image,
  noLazy,
  desktopDimensions,
  mobileDimensions,
}) {

  return (
		<picture>
			<source
				media="(max-width: 750px)"
				srcSet={
					portraitMobileCrop
						? urlPortraitFor({ image, isThumb: true })
						: urlFor({
								image,
								isThumb: true,
								width: mobileDimensions?.width,
								height: mobileDimensions?.height,
							})
				}
			/>
			<img
				src={urlFor({
					image,
					isThumb: false,
					width: desktopDimensions?.width,
					height: desktopDimensions?.height,
				})}
				loading={!noLazy ? "lazy" : ""}
				alt={text || "Michael Schmelling"}
			/>
		</picture>
  );
}
