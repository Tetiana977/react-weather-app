import React from "react";
import Header from "./Header";
import Description from "./Description";
import Footer from "./Footer";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Header />
        <Description />
      </div>
      <Footer />
    </div>
  );
}
