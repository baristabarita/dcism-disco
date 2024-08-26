import { useState } from "react";
import Navbar from "./components/navbar/Navbar.tsx";
import Banner from "./components/banner/Banner.tsx";
import PostBanner from "./components/postbanner/PostBanner.tsx";
import Overview from "./components/overview/Overview.tsx";
import Theme from "./components/theme/Theme.tsx";
import Attire from "./components/attire/Attire.tsx";
import Footer from "./components/footer/Footer.tsx";

import BackgroundImage from "./assets/images/backgroundimage.png";

import { Button } from "@/components/ui/button"; 
function App() {
  return (
    <>
      <Navbar />
      <div className="w-full animate-fade-in overflow-x-hidden">
        <Banner />
        <div
          style={{
            backgroundImage: `url(${BackgroundImage})`,
          }}
        >
          <PostBanner />
          <div className="cart text-white">
            <Overview />
            <Theme />
            <Attire />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
