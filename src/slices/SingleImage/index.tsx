import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `SingleImage`.
 */
export type SingleImageProps = SliceComponentProps<Content.SingleImageSlice>;

/**
 * Component for "SingleImage" Slices.
 */
const SingleImage: FC<SingleImageProps> = ({ slice }) => {
  return (
    <>
      {slice.variation === "default" && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="  mx-auto bg-[#0d0a25]  my-12  text-center"
        >
          <PrismicNextImage
            field={slice.primary.imagefull}
            className="max-w-full mx-auto"
            alt="Single Image"
            width={slice.primary.imagefull.dimensions?.width}
            height={slice.primary.imagefull.dimensions?.height}
            loading="lazy"
          />
        </section>
      )}

      {slice.variation === "imageCenter" && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="  mx-auto px-2  my-12  text-center"
        >
          <PrismicNextImage
            field={slice.primary.imagefull}
            className="max-w-full mx-auto"
            alt="Single Image"
            width={slice.primary.imagefull.dimensions?.width}
            height={slice.primary.imagefull.dimensions?.height}
            loading="lazy"
          />
        </section>
      )}
    </>
  );
};

export default SingleImage;
