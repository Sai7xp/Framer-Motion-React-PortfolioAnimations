// framer motion animations

export const pageAnimation = {
  hidden: {
    opacity: 0,
    // x: 200,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, when: "beforeChildren", staggerChildren: 0.25 },
  },
  exit: {
    opacity: 0,
    x: 0,
    transition: { duration: 1 },
  },
};

export const titleAnim = {
  hidden: {
    // y: -200,
    y: 200,
  },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { type: "tween", ease: "easeOut", duration: 2, delay: 0.4 },
  },
};  

export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 1,
      delay: 0.5,
    },
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: { width: "100%", transition: { duration: 1 } },
};
