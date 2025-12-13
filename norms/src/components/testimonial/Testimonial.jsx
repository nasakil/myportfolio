import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "It was a great experience and had a wonderful time! Pleased of working with him.",
    quote: `Opportunities awaits you on the horizon as long as you have the determination and consistency to reach it.`,
    name: "Luis Palicte",
    designation: "Holy Cross Of Davao College 3rd Year BSIT Student",
  },
  {
    message:
      "When it comes to brainstorming and collaborative work, I can always count on norman. he's ready anytime/anywhere whether it will success or fail. A keeper for certain.",
    quote: `be zesty, be who you are`,
    name: "Catherine Arnado",
    designation: "Holy Cross Of Davao College 3rd Year BSIT Student",
  },
  {
    message:
      "The tasks gets finished quickly when it comes to collaborative work.",
    quote: `be who you are, for your pride~`,
    name: "Joey Salazar",
    designation: "Holy Cross Of Davao College 3rd Year BSIT Student",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
