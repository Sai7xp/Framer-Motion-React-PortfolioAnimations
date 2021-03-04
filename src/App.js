import React from "react";
// import the pages
import AboutUs from "./pages/AboutUs";
// global style
import GlobalStyle from "./components/GlobalStyle";
import NavBar from "./components/NavBar";
import { Switch, Route, useLocation } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetails from "./pages/MovieDetails";
import { AnimatePresence } from "framer-motion";

// scroll to top every time user visits the new page inside the app
import ScrollToTop from "./components/scrollTop";
function App() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="App">
        <NavBar />
        <GlobalStyle />
        <ScrollToTop />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            {/* here the switch component will render out only the first component which matches the url and ignores the next components */}
            <Route path="/" exact>
              <AboutUs />
            </Route>
            <Route path="/work" exact>
              <OurWork />
            </Route>
            <Route path="/work/:id">
              <MovieDetails />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
