import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import PostBanner from "./components/postbanner/postbanner";

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
        </div>
      </div>
    </>
  );
}

export default App;
