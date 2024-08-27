import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import image from "../../assets/images/theme_image.png";

const Theme: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const overviewElement = document.getElementById("theme");
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
      id="theme"
      className={`mt-10 pb-4 flex flex-col md:flex-row justify-center items-center space-x-10 ${
        isVisible ? "animate-fade-up" : ""
      }`}
    >
      {/* column 1 - img goes here */}
      <div className="md:w-1/2 md:max-w-md">
        <Card>
          <CardContent className="bg-black border rounded-xl flex items-center justify-center p-6">
            <img
              src={image}
              className="object-cover w-full h-full animate-fade-in"
            />
          </CardContent>
        </Card>
      </div>

      {/* column 2 - info here */}
      <div className="px-9 md:w-1/2 md:max-w-md">
        <div className="relative">
          <div
            className={`absolute right-0 h-full w-1 bg-white ${
              isVisible ? "animate-slide-down delay-1 duration-2000" : ""
            }`}
          ></div>
          <h1
            className={`text-1.5xl sm:text-1xl font-light text-white text-right my-4 mr-4 glow ${
              isVisible ? "animate-fade-in delay-4" : ""
            }`}
          >
            GROOVY • RADIANT • LUMINOUS • STARDUST
          </h1>
        </div>

        <h2
          className={`text-[5em] font-normal font-roboto text-white text-right glow ${
            isVisible ? "animate-fade-up delay-75" : ""
          }`}
        >
          THEME
        </h2>

        <p
          className={`text-white text-right font-roboto font-medium max-w-screen-sm mt-2 sm:mt-4 custom-text-shadow ${
            isVisible ? "animate-fade-up delay-75" : ""
          }`}
        >
          Step into a night where the celestial and the groovy collide, as the
          DCISM Acquaintance Party 2024 transforms into a radiant pajama disco.
          The theme, "Disco Pajama Party," invites you to shine like stardust as
          the venue glows with vibrant lights and luminous hues. Dance the night
          away in your coziest attire, as the atmosphere becomes a radiant
          playground where dreams and reality groove together in one
          unforgettable celebration.
        </p>
      </div>
    </section>
  );
};

export default Theme;
