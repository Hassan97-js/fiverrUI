import { useEffect, useState } from "react";

import { isActive } from "../utils";

function useClickAway(ref) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref?.current?.parentElement?.contains(event.target)) {
        setIsOpen(!isOpen);
      }

      if (!ref?.current?.parentElement?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, isOpen]);

  return [isOpen];
}

function useScroll() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      isActive(setActive);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active]);

  return [active];
}

export { useClickAway, useScroll };
