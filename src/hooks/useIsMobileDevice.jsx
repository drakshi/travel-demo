import { useEffect, useState } from "react";

const useIsMobileDevice = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobileDevice(
        typeof window !== "undefined" && window.innerWidth <= 600
      );
    };

    checkIsMobile();

    const handleResize = () => {
      checkIsMobile();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobileDevice;
};

export default useIsMobileDevice;
