const isActive = (setActive) => {
  window.scrollY > 0 ? setActive(true) : setActive(false);
};

export { isActive };
