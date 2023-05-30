import { useEffect, useState } from "react";

import { isActive } from "../utils";

const useClickAway = (ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref?.current.parentElement.contains(event.target)) {
        setIsOpen(!isOpen);
      }

      if (!ref?.current.parentElement.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, isOpen]);

  return [isOpen];
};

const useScroll = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      isActive(setActive);
    };

    window.addEventListener("scroll", handleScroll);

    // clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active]);

  return [active];
};

export { useClickAway, useScroll };
