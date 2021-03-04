# Chapter 4 - Portfolio-Animations

Date Created: Feb 10, 2021 9:40 AM
GitHub repo URL: https://github.com/MovingMelody/Framer-Motion-React-PortfolioAnimations
Tags: framer-motion, react-dom, react-intersection-observer, react-router-dom, styled-components
URL: https://portfolio-animations-reactframer.netlify.app/

## Things I've learned while building this project

1. Using `styled-components` with react projects.
2. React Router Dom → {`BrowserRouter`, `Router`, `Switch`} to handle the routing in react projects.
3. Framer Motion → {`animating elements`, `page transitions`, `animating svg images` } to implement the nice and cool animation effects to our react app.
4. Reusable Components → to toggle show/hide the answer content in FAQ section with cool animation (framer-motion → `AnimateSharedLayout`).
    - Code

        ```jsx
        const Toggle = ({ children, title }) => {
          const [toggle, setToggle] = useState(false);
          return (
            <motion.div layout onClick={() => setToggle(!toggle)}>
              <motion.h4 layout>{title}</motion.h4>
              {toggle ? children : "[expand]"}
              <div className="faq-line"></div>
            </motion.div>
          ); 
        };
        ```

5. React Intersection Observer → {`useInView`} This Intersection Observer API can be used to find when an element enters or leaves the **viewport.**
    - By using this `npm` package we implement **animations while scrolling** the page. {Custom Hook → `useScrollHoook.js`}
        - Code

            ```jsx
            // useScrollHook.js file
            import { useAnimation } from "framer-motion";
            import { useInView } from "react-intersection-observer";
            export const useScroll = () => {
              const controls = useAnimation();
              const [element, view] = useInView({ threshold: 0.1 }); 
            	// if the threshold value is set to 0.5 then the view will be true
            	// only if the element's half view appears on the screen
              if (view) {
                controls.start("show");
              } else {
                controls.start("hidden");
              }
              return [element, controls];
            };
            ```

    - The animations will trigger for components as soon as they enters viewport and they will be set to previous state when they leave the viewport. And many cool animations implemented using the `framer-motion` and `react-intersection-observer`
6. Making the site responsive to look nice in small screens. And implementing the responsive NavBar with the help of `useState` Hook. 
7. Highlighting the current active link Item on the NavBar using `useLocation()` from `react-router-dom`.
