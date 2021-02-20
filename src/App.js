import React from "react";
// import the pages
import AboutUs from "./pages/AboutUs";
// global style
import GlobalStyle from "./components/GlobalStyle";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
