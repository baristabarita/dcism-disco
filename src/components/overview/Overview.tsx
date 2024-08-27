import React, { useEffect, useState } from "react";
import background from "@/assets/images/overview_banner.png";

const Overview: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const overviewElement = document.getElementById("overview");
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
      id="overview"
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
      <div className="absolute inset-0 flex flex-col items-start justify-center pl-8 sm:pl-8 md:pl-10 lg:pl-14">
        <div className="relative">
          <div
            className={`absolute left-0 h-full w-1 bg-white  ${
              isVisible ? "animate-slide-down delay-1 duration-2000" : ""
            }`}
          ></div>
          <h1
            className={`text-2xl sm:text-4xl font-light font-bodoni text-white my-4 ml-4 custom-text-shadow ${
              isVisible ? "animate-fade-in delay-4" : ""
            }`}
          >
            EXPERIENCE TRANQUILITY
          </h1>
        </div>
        <h2
          className={`text-[5em] font-normal font-bitter text-white custom-text-shadow ${
            isVisible ? "animate-fade-up delay-75" : ""
          }`}
        >
          OVERVIEW
        </h2>
        <p
          className={`text-white font-bitter font-medium max-w-screen-sm mt-2 sm:mt-4 custom-text-shadow ${
            isVisible ? "animate-fade-up delay-75" : ""
          }`}
        >
          The DCISM DISCO, also known as the DCISM Acquaintance Party 2024, is
          the most anticipated and glamorous event of the school year, organized
          by the Computer and Information Sciences Council (CISCO) and the
          Mathematics Society. It's a perfect opportunity for DCISM students and
          faculty from all levels and backgrounds to connect and socialize. The
          evening promises an array of surprises that will make it a night to
          remember for everyone involved.
        </p>
      </div>
    </section>
  );
};

export default Overview;
