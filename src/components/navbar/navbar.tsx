import React, { useState, useEffect } from "react";
import { LinkName } from "@/common/types";
import { Link } from "react-scroll";
import ReactPlayer from "react-player";

//UI and misc related imports
import { MusicNoteRounded } from "@mui/icons-material";
import { MusicOffRounded } from "@mui/icons-material";
import { GiHamburgerMenu, GiTiedScroll } from "react-icons/gi";
import { MdHomeFilled } from "react-icons/md";
import { GiStarSattelites, GiQueenCrown, GiPolarStar } from "react-icons/gi";
import { TbMusicOff } from "react-icons/tb";
import { FaLocationDot, FaMusic } from "react-icons/fa6";
import bgmusic1 from "../../assets/music/bgmusic1.mp3";
import bgmusic2 from "../../assets/music/bgmusic2.mp3";
import bgmusic3 from "../../assets/music/bgmusic1.mp3";
import ciscoLogo from "../../assets/images/full_logo.png";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<LinkName>("home"); // defines the state for the active link
  const links: LinkName[] = ["home", "overview", "theme", "attire", "venue"]; // defines the links
  const linkIcons = [
    MdHomeFilled,
    GiStarSattelites,
    GiTiedScroll,
    GiQueenCrown,
    FaLocationDot,
  ];
  const [playMusic, setPlayMusic] = useState(true); // defines the state for the music player
  const [currentTrack, setCurrentTrack] = useState(0); // defines the state for the current track
  const musicUrls: string[] = [bgmusic1, bgmusic2, bgmusic3];

  //for mobile view
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navigateTo = (_id: string): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80;

      links.forEach((link) => {
        const section = document.getElementById(link);
        if (section) {
          const { offsetTop, clientHeight } = section;
          if (
            offsetTop <= scrollPosition &&
            offsetTop + clientHeight > scrollPosition
          ) {
            setActiveLink(link);
          }
        }
      });
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth >= 300 && window.innerWidth <= 640);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [links]);

  const handleEnd = () => {
    setCurrentTrack((currentTrack + 1) % musicUrls.length);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-gradient-to-r from-transparent to-black grid grid-cols-3 justify-between items-center h-[4rem] font-bitter">
      <div className="col-span-1 flex items-center">
        {!isMobile && (
          <img
            src={ciscoLogo}
            alt="USC Cisco Logo"
            className="ml-[5%] w-[20%] cursor-pointer"
            onClick={() => navigateTo("home")}
          />
        )}
      </div>

      {isMobile && (
        <div className="">
          <img
            src={ciscoLogo}
            alt="USC Cisco Logo"
            className=" mt-[0.8rem] w-[8rem] cursor-pointer"
            onClick={() => navigateTo("home")}
          />
        </div>
      )}

      {isMobile && (
        <div className="col-span-1 z-[100] fixed right-5 items-center justify-center">
          <button
            className="text-white p-2 ml-3 rounded-2xl focus:outline-none"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <GiHamburgerMenu className="text-[1.5rem]" />
          </button>
        </div>
      )}

      <div
        className={`col-span-1 flex items-center text-[1.4em] text-white space-x-10 justify-center ${
          isMobile ? "hidden" : "block"
        }`}
      >
        <nav className="xl:max-2xl:ml-[5%]">
          <ul className="flex xs:max-sm:text-[0.8em] xl:max-2xl:text-[0.8em]">
            {links.map((link) => (
              <li
                key={link}
                className={`md:mr-4 lg:mr-20 text-center cursor-pointer xs:max-sm:mr-8 xl:max-2xl:mr-16 
                        ${
                          activeLink === link
                            ? "text-white font-bold relative group bg-[#5e7484] px-5 py-3"
                            : "relative group py-3 "
                        }`}
              >
                <Link to={link} smooth={true} offset={-80}>
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                  {activeLink === link && (
                    <div className="absolute w-full h-1 bg-white top-0 left-0"></div>
                  )}
                </Link>
                {activeLink !== link && (
                  <div className="absolute w-full h-1 bg-white top-0 left-0 opacity-0 transition-opacity duration-3000 delay-250 ease-in group-hover:opacity-100"></div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="col-span-1 flex items-center justify-end space-x-4">
        <div className="flex space-x-2 items-center">
          {!isMobile && (
            <>
              <button
                onClick={() => setPlayMusic(!playMusic)}
                className="text-white"
              >
                {playMusic ? <MusicNoteRounded /> : <MusicOffRounded />}
              </button>
              <button
                onClick={() =>
                  (window.location.href = "https://bit.ly/DCISMLuminaDivina")
                }
                className="pl-3 pr-9 py-5 bg-white hover:bg-[#5e7484] text-black font-bold rounded-bl-xl hover:text-[#e2e2e2] transition-colors delay-250 duration-3000 ease-in"
              >
                Register Now
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile View Navbar */}
      {showSidebar && isMobile && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-80 z-50 animate-slide-right">
          <div className="fixed w-[18rem] h-full right-0 bg-gradient-to-b from-[#72adc9] from-10% via-[#2b3276] via-40% to-black to-90% rounded-tl-xl rounded-bl-xl ">
            <div className="">
              <nav className="flex mt-[3rem]">
                <ul>
                  {links.map((link, index) => (
                    <li
                      key={link}
                      className={`ml-[1.5rem] mb-[10%] flex text-[1.4em] text-left cursor-pointer py-[10%] drop-shadow-2xl hover:animate-zoom-in-end xs:max-sm:mr-8 xl:max-2xl:mr-16 ${
                        activeLink === link
                          ? "text-white glow font-semibold"
                          : "hover:text-white"
                      }`}
                    >
                      <Link
                        to={link}
                        smooth={true}
                        offset={-80}
                        className="flex items-center"
                        onClick={() => {
                          setActiveLink(link);
                          setShowSidebar(false);
                        }}
                      >
                        {React.createElement(linkIcons[index], {
                          size: "1.5em",
                        })}
                        <span className="ml-[1rem]">
                          {link.charAt(0).toUpperCase() + link.slice(1)}
                        </span>
                      </Link>
                    </li>
                  ))}

                  <li className="ml-[1.5rem] mt-[1.5rem]">
                    <div className="">
                      <button
                        onClick={() => setPlayMusic(!playMusic)}
                        className={`text-black flex text-[1.5em] ml-[3%] focus:outline-none ${
                          playMusic ? "text-white glow animate-fade-in" : ""
                        }`}
                      >
                        {playMusic ? (
                          <FaMusic className="text-[#84b0e6] glow animate-fade-in mt-[0.4rem] " />
                        ) : (
                          <TbMusicOff className="mt-[0.4rem]" />
                        )}
                        <span className="ml-[1.3rem]">Music</span>
                      </button>
                    </div>
                  </li>

                  <li className="">
                    <div className="fixed bottom-0">
                      <button
                        onClick={() =>
                          (window.location.href =
                            "https://bit.ly/DCISMLuminaDivina")
                        }
                        className="pl-5 pr-9 py-5 w-[17.8rem] text-[1.2em] flex items-center outline-[3px] outline bg-[#371F76] bg-opacity-10 text-[#84b0e6] glow font-bold rounded-tl-xl rounded-tr-xl drop-shadow-xl hover:text-[#e2e2e2] transition-colors delay-250 duration-3000 ease-in"
                      >
                        <GiPolarStar className="ml-[2rem] mr-[1rem]" />
                        <span className="text-white">Register Now</span>
                        <GiPolarStar className="ml-[1rem]" />
                      </button>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}

      <ReactPlayer
        url={musicUrls[currentTrack]}
        playing={playMusic}
        loop={false}
        onEnded={handleEnd}
      />
    </nav>
  );
};

export default Navbar;
