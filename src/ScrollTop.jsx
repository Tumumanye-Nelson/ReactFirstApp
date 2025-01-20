import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); // Smoothly scroll to the top
  }, [location]);

  return null;
};

export default ScrollTop;
