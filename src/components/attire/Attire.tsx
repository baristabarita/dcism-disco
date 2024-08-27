import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import attire1 from "../../assets/images/attire/attire1.png";
import attire2 from "../../assets/images/attire/attire2.jpg";
import attire3 from "../../assets/images/attire/attire3.png";
import attire4 from "../../assets/images/attire/attire4.png";
import attire5 from "../../assets/images/attire/attire5.png";
import attire6 from "../../assets/images/attire/attire6.jpg";

const Attire: React.FC = () => {
  const [gender, setGender] = useState<"women" | "men">("women"); // Initialize with 'men'
  const menAttires = [attire2, attire4, attire6];
  const womenAttires = [attire1, attire3, attire5];
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const overviewElement = document.getElementById("attire");
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
      id="attire"
      className={`flex flex-col items-center mt-4 ${
        isVisible ? "animate-fade-up" : ""
      }`}
    >
      <h1 className="text-[7vh] md:text-[10vh] text-center font-light font-bodoni text-[#dadada] glow">
        Outfit and Attire
      </h1>

      {/* Gender toggle button */}
      <div className="my-4">
        <Button
          onClick={() => setGender(gender === "men" ? "women" : "men")}
          className="bg-[#5e7484] text-white font-roboto px-4 py-2 rounded-md hover:underline"
        >
          {gender === "men" ? "View Women's Attire" : "View Men's Attire"}
        </Button>
      </div>

      {/* Display attires based on selected gender */}
      <div className="flex flex-wrap justify-center">
        {gender === "men"
          ? menAttires.map((attire, index) => (
              <div key={index} className="py-1 px-3">
                <Card>
                  <CardContent className="bg-black flex items-center justify-center p-4 aspect-auto rounded-lg w-[13em] h-[24em]">
                    <img
                      src={attire}
                      alt={`Men's Attire ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </CardContent>
                </Card>
              </div>
            ))
          : womenAttires.map((attire, index) => (
              <div key={index} className="py-1 px-3">
                <Card>
                  <CardContent className="bg-black flex items-center justify-center p-4 aspect-auto rounded-lg w-[13em] h-[24em]">
                    <img
                      src={attire}
                      alt={`Women's Attire ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </CardContent>
                </Card>
              </div>
            ))}
      </div>

      <p className="text-[1em] md:text-[1.2em] lg:text-[1.3em] text-center italic font-bitter text-[#dadada] my-4 mx-20 glow">
        Shine your divine radiance in a dazzling outfit that reflects your
        personality and style. The dress code for the party is casual to semi-formal, with a touch of blueish gray to silver. Be
        creative and have fun with your look, but remember to keep it classy and
        comfortable.
      </p>

      <h1 className="font-bold text-[2em] text-[#dadada] font-bitter glow my-4">
        🪩 IMPORTANT NOTE 🪩
      </h1>
      <p className="text-center text-[#dadada] font-bitter mb-4 mx-20">
        Attendees are not obligated to strictly follow outfit guidelines, but
        are simply encouraged to express their creativity through their outfits
        as long as it is not harmful, insensitive, or disrespectful to any
        person or community.
      </p>
    </section>
  );
};

export default Attire;
