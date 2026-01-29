export const transition = {
  type: "spring",
  stiffness: 200,
  damping: 20,
};

export const hoverScale = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

export const tapScale = {
  scale: 0.95,
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const staggerContainer = (staggerChildren = 0.1) => ({
  animate: {
    transition: {
      staggerChildren
    }
  }
});
