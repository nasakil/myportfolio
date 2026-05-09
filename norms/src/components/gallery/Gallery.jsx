import img1 from "../../assets/images/gallery/DCCRRMO.jpg";
import img2 from "../../assets/images/gallery/JAIROSOFT3.jpg";
import img3 from "../../assets/images/gallery/NETCOLLABORATION.jpg";
import img4 from "../../assets/images/gallery/Networking102.jpg";
import img5 from "../../assets/images/gallery/VITROINC.jpg";
import img6 from "../../assets/images/gallery/WS101CERTGEN.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import MonoGal from "./MonoGal";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./blog.css";
import { useState, useEffect } from "react";
import { Pagination, Autoplay } from "swiper/modules";

const custom_breakpoints = {
  640: { slidesPerView: 2, spaceBetween: 15 },
  768: { slidesPerView: 3, spaceBetween: 15 },
  1220: { slidesPerView: 4, spaceBetween: 24 },
};

const GalData = [
  { id: 1, image: img1, date: "14 Nov, 2025", category: "Experience", title: "Davao City Disaster Risk Reduction and Management Office Tour" },
  { id: 2, image: img2, date: "14 Nov, 2025", category: "Experience", title: "Jairosoft Inc. Company Tour and Software Demo" },
  { id: 3, image: img3, date: "5 Dec, 2025", category: "Project Collab", title: "Networking Project Collaboration and Implementation" },
  { id: 4, image: img4, date: "12 Dec, 2025", category: "Project", title: "Networking Project Submission" },
  { id: 5, image: img5, date: "14 Nov, 2025", category: "Experience", title: "PLDT and Vitro Inc. Company Tour" },
  { id: 6, image: img6, date: "16 Nov, 2025", category: "Project", title: "Certificate Generation System Project For WS101" },
];

const Gallery = () => {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeItem ? "hidden" : "auto";
  }, [activeItem]);

  return (
    <div className="content py-25 px-2 relative" id="gallery">
      <div className="max-w-135 text-center mx-auto pb-17.5" data-aos="fade-up">
        <p className="section-title pb-6">Gallery</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Check out my snapshots from my projects, school work, and experiences.
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="150">
        <Swiper
            grabCursor
            loop={true}
            breakpoints={custom_breakpoints}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={800}
            modules={[Pagination, Autoplay]}  // ← add Autoplay
        >
          {GalData.map((data) => (
            <SwiperSlide key={data.id} className="mb-10">
              <MonoGal data={data} onClick={() => setActiveItem(data)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

            {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/20 backdrop-blur-s flex items-center justify-center px-4"
          onClick={() => setActiveItem(null)}  // ← close on outside click
        >
          <div
            className="bg-white max-w-3xl w-full rounded-lg overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}  // ← prevent closing when clicking the card itself
          >
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-400 mb-1">
                {activeItem.category} • {activeItem.date}
              </p>
              <h2 className="text-xl font-semibold mb-3">
                {activeItem.title}
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
