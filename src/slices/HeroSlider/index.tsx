import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import CountDown from "@/components/CountDown";

/**
 * Props for `HeroSlider`.
 */
export type HeroSliderProps = SliceComponentProps<Content.HeroSliderSlice>;

/**
 * Component for "HeroSlider" Slices.
 */
// const HeroSlider: FC<HeroSliderProps> = ({ slice }) => {
//   return (
//     <section
//       data-slice-type={slice.slice_type}
//       data-slice-variation={slice.variation}
//     >
//       {slice.primary.slideritems.map((item, index) => (
//         <div key={index} className="slider-item">
//           <PrismicNextImage field={item.item} />
//         </div>
//       ))}
//     </section>
//   );
// };

const HeroSlider: FC<HeroSliderProps> = ({ slice }) => {
  return (
    <>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="mt-16 container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {slice.primary.slideritems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <PrismicNextImage
                  field={item.item}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Floating indicator */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
          ))}
        </div>
      </section>

      <CountDown />
    </>
  );
};

export default HeroSlider;
