import { useEffect } from "react";

const useClickAway = (ref, fn) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current.contains(event.target)) {
        fn();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, fn]);
};

const useScroll = (fn) => {
  useEffect(() => {
    const handleScroll = () => {
      fn();
    };

    window.addEventListener("scroll", handleScroll);

    // clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fn]);
};

export { useClickAway, useScroll };
