import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.1 }); // if the threshold value is set to 0.5 then the view will be true only if the element's half view appears on the screen
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};
