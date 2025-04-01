// import { Link, useLocation } from "react-router-dom";
// import { disablePageScroll, enablePageScroll } from "scroll-lock";
// import { navigation } from "../constants";
// import Button from "./Button";
// import MenuSvg from "../assets/svg/MenuSvg";
// import { HamburgerMenu } from "./design/Header";
// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
// import logo from "../assets/logo.png";

// const Header = () => {
//   const pathname = useLocation();
//   const [openNavigation, setOpenNavigation] = useState(false);

//   // Toggle navigation menu
//   const toggleNavigation = () => {
//     if (openNavigation) {
//       setOpenNavigation(false);
//       enablePageScroll();
//     } else {
//       setOpenNavigation(true);
//       disablePageScroll();
//     }
//   };

//   // Handle navigation clicks
//   const handleNavigation = (url) => {
//     if (!url) {
//       console.warn("Navigation item missing URL");
//       return;
//     }

//     // Smooth scroll for internal links
//     if (url.startsWith("#")) {
//       const element = document.querySelector(url);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     } else {
//       // External link handling
//       window.location.href = url;
//     }

//     // Close the navigation menu after clicking
//     if (openNavigation) {
//       setOpenNavigation(false);
//       enablePageScroll();
//     }
//   };

//   const handleRedirect = () => {
//     window.open("https://app.iclosed.io/e/Amar/rendez-vous", "_blank");
//   };

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full z-50 lg:bg-n-8/90 lg:backdrop-blur-sm ${
//         openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
//       }`}
//     >
//       <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
//           <div className="flex items-center" href="/">
//             {/* <p className="font-bold  lg:text-md text-md">
//               <span className="text-[#77be89]">STRATEGIC</span>{" "}
//               <span className="text-black">PARTNER</span>
//             </p> */}
//             <img src={logo} alt="logo" className="object-contain w-auto h-40" />
//           </div>

//         <nav
//           className={`${
//             openNavigation ? "flex" : "hidden"
//           } fixed top-[5rem] left-0 right-0 bottom-0 bg-[#86ad86] lg:static lg:flex lg:mx-auto lg:bg-transparent`}
//         >
//           <div className="relative z-0 flex flex-col items-center lg:mt-0 mt-4 justify-start m-auto lg:flex-row">
//             <Button
//               onClick={handleRedirect}
//               className="bg-[#5ba85b] mb-2 text-white font-bold text-sm rounded-lg flex items-center hover:bg-[#e6ece6] transition lg:hidden"
//             >
//               Planifier une Réunion
//               <FontAwesomeIcon
//                 icon={faCalendarAlt}
//                 style={{ fontSize: "20px" }}
//                 className="ml-2"
//               />
//             </Button>
//             {navigation.map((item, index) =>
//               item.url ? (
//                 <Link
//                   key={item.id || index}
//                   to={item.url.startsWith("#") ? pathname : item.url}
//                   onClick={() => handleNavigation(item.url)}
//                   className={`block relative font-bold text-xl uppercase text-black transition-colors ${
//                     item.onlyMobile ? "lg:hidden" : ""
//                   } px-6 py-2 md:py-8 lg:-mr-0.25 lg:text-sm text-lg lg:font-semibold ${
//                     item.url === pathname.hash
//                       ? "z-0 lg:text-black py-0"
//                       : "lg:text-black"
//                   } lg:leading-0 xl:text-sm xl:px-3`}
//                 >
//                   <span className="inline-block space-x-6 gap-6 text-sm relative">
//                     <span className="underline mb-4 lg:mb-0">{item.title}</span>
//                   </span>
//                 </Link>
//               ) : (
//                 <span
//                   key={item.id || index}
//                   className="block font-bold text-xl uppercase text-gray-400 px-6 py-2"
//                 >
//                   {item.title}
//                 </span>
//               )
//             )}
//           </div>

//           <HamburgerMenu />
//         </nav>

//         <Button
//           onClick={handleRedirect}
//           className="bg-[#77be89] text-white font-bold hover:text-black text-md rounded-lg mr-4 items-center hover:bg-[#5ea76c] transition hidden lg:flex"
//         >
//           <span className="text-[12px]">
//           Planifier un rendez-vous
//           </span>
//           <FontAwesomeIcon
//             icon={faCalendarAlt}
//             style={{ fontSize: "20px" }}
//             className="ml-2"
//           />
//         </Button>

//         <Button
//           className="ml-auto lg:hidden bg-black rounded-md"
//           px="px-3"
//           onClick={toggleNavigation}
//         >
//           <MenuSvg openNavigation={openNavigation} />
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Header;
import { Link, useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.jpeg";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  // Toggle navigation menu
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  // Handle navigation clicks
  const handleNavigation = (url) => {
    if (!url) {
      console.warn("Navigation item missing URL");
      return;
    }

    // Smooth scroll for internal links
    if (url.startsWith("#")) {
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // External link handling
      window.location.href = url;
    }

    // Close the navigation menu after clicking
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    }
  };

  const handleRedirect = () => {
    window.open("https://app.iclosed.io/e/Amar/rendez-vous", "_blank");
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center max-lg:py-2 px-2">
        <div className="flex items-center">
          <a href="/">
            <img
              src={logo}
              alt="logo"
              className="h-auto max-h-32 sm:max-h-20 md:max-h-24 lg:max-h-28 xl:max-h-32 w-auto"
            />
          </a>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-[#86ad86] lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-0 flex flex-col items-center lg:mt-0 mt-4 justify-start m-auto lg:flex-row">
            <Button
              onClick={handleRedirect}
              className="bg-[#5ba85b] mb-2  text-white font-bold text-sm rounded-lg flex items-center hover:bg-[#e6ece6] transition lg:hidden"
            >
              Planifier une Réunion
              <FontAwesomeIcon
                icon={faCalendarAlt}
                style={{ fontSize: "20px" }}
                className="ml-2"
              />
            </Button>

            {/* Navigation links */}
            {navigation.map((item, index) =>
              item.url ? (
                <Link
                  key={item.id || index}
                  to={item.url.startsWith("#") ? pathname : item.url}
                  onClick={() => handleNavigation(item.url)}
                  className={`block relative font-bold text-xl uppercase text-black transition-colors ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-2 md:py-8 lg:-mr-0.25 lg:text-sm text-lg lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-0 lg:text-black py-0"
                      : "lg:text-black"
                  } lg:leading-0 xl:text-sm xl:px-3`}
                >
                  <span className="inline-block space-x-6 gap-6 text-sm relative">
                    <span className="underline mb-4 lg:mb-0">{item.title}</span>
                  </span>
                </Link>
              ) : (
                <span
                  key={item.id || index}
                  className="block font-bold text-xl uppercase text-gray-400 px-6 py-2"
                >
                  {item.title}
                </span>
              )
            )}
          </div>

          <HamburgerMenu />
        </nav>

        {/* Planifier button */}
        <div className="mr-4">
          <Button
            onClick={handleRedirect}
            className="bg-[#77be89] text-white font-bold hover:text-black text-md rounded-lg mr-4 items-center hover:bg-[#5ea76c] transition hidden lg:flex"
          >
            <span className="text-[12px]">Planifier un rendez-vous</span>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              style={{ fontSize: "20px" }}
              className="ml-2"
            />
          </Button>
        </div>

        {/* Hamburger Menu Button */}
        <Button
          className="md-12 ml-auto lg:hidden bg-black rounded-md"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
