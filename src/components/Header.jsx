import React from "react";
import useIsMobileDevice from "../hooks/useIsMobileDevice";

function Header() {
  const isMobile = useIsMobileDevice();
  const headerMenu = [
    "Services",
    "Industries",
    "Resources",
    "About Us",
    "Contact Us",
    "EN ",
  ];
  return (
    <div className="fixed top-0 bottom-0 w-full px-10 py-3 items-center bg-white/75  h-[15%]">
      <div className="md:flex p-3 justify-between items-center">
        <div>
          <a href="https://thenest.concentrix.com" class="nest-logo">
            {isMobile ? (
              <img
                src="https://thenest.concentrix.com/wp-content/themes/thenest/img/thenest-by-concentrix.svg"
                className="h-14 w-auto"
                alt="The Nest by Concentrix"
              ></img>
            ) : (
              <img
                src="https://thenest.concentrix.com/wp-content/themes/thenest/img/thenest-by-concentrix.svg"
                className="h-14 w-auto"
                alt="The Nest by Concentrix"
              />
            )}
          </a>
        </div>
        <div className="md:flex items-end gap-3 justify-between">
          {!isMobile &&
            headerMenu.map((header) => (
              <div className="px-4 py-5 ">{header}</div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
