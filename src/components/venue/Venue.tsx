import React, { useEffect, useState } from "react";
import background from "@/assets/images/venue_image.png";

const Venue: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const overviewElement = document.getElementById("venue");
    if (overviewElement) {
      const rect = overviewElement.getBoundingClientRect();
      setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="venue"
      className={`relative h-screen flex items-center ${
        isVisible ? "animate-fade-up" : ""
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>
      <div className="absolute inset-0 flex flex-col items-end justify-center pr-8 sm:pr-8 md:pr-10 lg:pr-14">
        <div className="relative">
          <div
            className={`absolute right-0 h-full w-1 bg-white ${
              isVisible ? "animate-slide-down delay-1 duration-2000" : ""
            }`}
          ></div>
          <h1
            className={`text-2xl sm:text-4xl font-light font-bodoni text-white my-4 mr-4 custom-text-shadow ${
              isVisible ? "animate-fade-in delay-4" : ""
            }`}
          >
            THE MAIN STAGE
          </h1>
        </div>
        <h2
          className={`text-5xl md:text-6xl font-normal font-bodoni text-white custom-text-shadow ${
            isVisible ? "animate-fade-up delay-75" : ""
          }`}
        >
          VENUE
        </h2>
        <p
          className={`text-white text-right font-bitter font-medium max-w-screen-sm mt-2 sm:mt-4 custom-text-shadow ${
            isVisible ? "animate-fade-up delay-75" : ""
          }`}
        >
          Paradise Garden Events Pavilion is located at H. Abellana St, Mandaue
          City, Cebu, Philippines.
          <br />
          <br />
          Check them out by{" "}
          <a
            className="text-[#dadada] hover:underline glow"
            href="https://www.google.com/maps/place/Paradise+Garden+Events+Pavilion/@10.3630047,123.9487533,15z/data=!4m6!3m5!1s0x33a99873eb866bdf:0xe54e22b8829efd98!8m2!3d10.3630047!4d123.9487533!16s%2Fg%2F1q62dzcns?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
          >
            clicking here
          </a>
          !
        </p>
      </div>
    </section>
  );
};

export default Venue;
