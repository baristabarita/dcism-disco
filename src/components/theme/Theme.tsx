import React from "react";
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import image from '../../assets/images/theme_image.png'

const Theme: React.FC = () => {
    return (
        <section id="theme" className='mt-10 pb-4 flex flex-col md:flex-row justify-center items-center space-x-10'>
            {/* column 1 - img goes here */}
            <div className='md:w-1/2 md:max-w-md'>
                <Card>
                    <CardContent className="bg-black border rounded-xl flex items-center justify-center p-6">
                        <img src={image} className="object-cover w-full h-full animate-fade-in" />
                    </CardContent>
                </Card>
            </div>
            {/* column 2 - info here */}
            <div className='px-9 md:w-1/2 md:max-w-md'>
                <h1 className='text-start text-[7vh] md:text-[10vh] font-light font-roboto text-[#d1d1d1] glow'>Theme</h1>
                <Separator className="my-4 bg-white" />
                <h4 className="my-4 italic font-bitter text-[#bdbdbd] glow">Groovy • Radiant • Luminous • Stardust</h4>
                <p className="font-bitter">
                Step into a night where the celestial and the groovy collide, as the DCISM Acquaintance Party 2024 transforms into a radiant pajama disco. The theme, "Disco Pajama Party," invites you to shine like stardust as the venue glows with vibrant lights and luminous hues. Dance the night away in your coziest attire, as the atmosphere becomes a radiant playground where dreams and reality groove together in one unforgettable celebration.
                </p>
            </div>
        </section>
    )
}

export default Theme;