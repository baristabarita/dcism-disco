import React from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import attire1 from '../../assets/images/attire/attire1.jpg'
import attire2 from '../../assets/images/attire/attire2.jpg'
import attire3 from '../../assets/images/attire/attire3.png'
import attire4 from '../../assets/images/attire/attire4.jpg'
import attire5 from '../../assets/images/attire/attire5.png'
import attire6 from '../../assets/images/attire/attire6.jpg'

const Attire: React.FC = () => {
  const attires = [attire1, attire2, attire3, attire4, attire5, attire6];
  return (
    <section id="attire" className="flex flex-col items-center mt-4">
      <h1 className="text-[7vh] md:text-[10vh] text-center font-light font-bodoni text-[#fddc5c] glow">Outfit and Attire</h1>
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full max-w-lg"
      >
        <CarouselContent className='px-20 md:px-1'>
          {attires.map((attire, index) => (
            <CarouselItem key={index} className="basis-3/3 md:basis-1/3 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="bg-[#ffffff] flex items-center justify-center p-6 aspect-square w-[10em] h-[20em]">
                    <img src={attire} alt={`Attire ${index + 1}`} className="object-cover w-full h-full" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-black" />
        <CarouselNext className="bg-black" />
      </Carousel>
      <p className="text-[1em] md:text-[1.2em] lg:text-[1.3em] text-center italic font-bitter text-[#fddc5c] my-4 mx-20 glow ">
        Shine your divine radiance in a dazzling outfit that reflects your personality and style. The dress code for the party is semi-formal, with a touch of gold or silver. Be creative and have fun with your look, but remember to keep it classy and comfortable.
      </p>
      <h1 className="font-bold text-[2em] text-[#ebce59] font-bitter glow">IMPORTANT NOTE</h1>
      <p className="text-center text-[#ebce59] font-bitter mb-4 mx-20 ">
        Attendees are not obligated to strictly follow outfit guidelines, but are simply encouraged to express their creativity through their outfits as long as it is not harmful, insensitive, or disrespectful to any person or community.
      </p>
    </section>
  )
}

export default Attire