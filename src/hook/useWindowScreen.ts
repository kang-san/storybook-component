import { useState, useEffect } from "react";

const useScreenWidth = () => {
  const [screenType, setScreenType] = useState<
    "mobile" | "tablet" | "desktop"
  >(
    window.innerWidth < 768
      ? "mobile"
      : window.innerWidth < 992
      ? "tablet"
      : "desktop"
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenType(
        window.innerWidth < 768
          ? "mobile"
          : window.innerWidth < 992
          ? "tablet"
          : "desktop"
      );
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenType;
};
export default useScreenWidth;
