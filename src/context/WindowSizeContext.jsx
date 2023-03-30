import React, { createContext, useState, useEffect } from "react";

const MobileViewContext = createContext(false);

export default function MobileViewProvider({ children }) {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth <= 600);
    }

    // Call handleResize once when component is mounted
    handleResize();

    // Add event listener to update isMobileView state when screen size changes
    window.addEventListener("resize", handleResize);

    // Remove event listener when component is unmounted
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MobileViewContext.Provider value={isMobileView}>
      {children}
    </MobileViewContext.Provider>
  );
}

export { MobileViewContext, MobileViewProvider };
