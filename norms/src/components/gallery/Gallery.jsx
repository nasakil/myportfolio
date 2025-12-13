import img1 from "../../assets/images/gallery/DCCRRMO.jpg";
import img2 from "../../assets/images/gallery/JAIROSOFT3.jpg";
import img3 from "../../assets/images/gallery/NETCOLLABORATION.jpg";
import img4 from "../../assets/images/gallery/Networking102.jpg";
import img5 from "../../assets/images/gallery/VITROINC.jpg";
import img6 from "../../assets/images/gallery/WS101CERTGEN.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoGal from "./MonoGal";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const GalData = [
  {
    id: 1,
    image: img1,
    date: "14 Nov, 2025",
    category: "Experience",
    title: "Davao City Disaster Risk Reduction and Management Office Tour",
    link: "#!",
  },
  {
    id: 2,
    image: img2,
    date: "14 Nov, 2025",
    category: "Experience",
    title: "Jairosoft Inc. Company Tour and Software Demo",
    link: "#!",
  },
  {
    id: 3,
    image: img3,
    date: "5 Dec, 2025",
    category: "Project Collab",
    title: "Networking Project Collaboration and Implementation",
    link: "#!",
  },
  {
    id: 4,
    image: img4,
    date: "12 Dec, 2025",
    category: "Project",
    title: "Networking Project Submission",
    link: "#!",
  },
  {
    id: 5,
    image: img5,
    date: "14 Nov, 2025",
    category: "Experience",
    title: "PLDT and Vitro Inc. Company Tour",
    link: "#!",
  },
  {
    id: 6,
    image: img6,
    date: "16 Nov, 2025",
    category: "Project",
    title: "Certificate Generation System Project For WS101",
    link: "#!",
  },
];

const Gallery = () => {
  return (
    <div className="content py-25 px-2 relative" id="gallery">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Gallery</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Check out my snapshots from my projects, school work, and experiences.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {GalData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoGal data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
