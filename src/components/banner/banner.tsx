import React from 'react';
import bannerImage from '../../assets/images/banner.png';

const Banner: React.FC = () => {
    return (
        <section className='overflow-hidden h-96 banner relative lg:h-[100vh] w-[100vw] flex items-center justify-center animate-fade-in bg-black' id="home" >
            <img
                src={bannerImage}
                alt="Banner"
                className="object-cover w-full h-full lg:h-[100vh]  "
            />
        </section>
    );
};

export default Banner;
