import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="gitHub-link m-3">
        <small>
          <a
            href="https://github.com/Tetiana977/weather-app.git"
            target="_blank"
            className="github"
          >
            Open-source code{" "}
          </a>
          by Tetiana Taranova
        </small>
      </div>
    </div>
  );
}
