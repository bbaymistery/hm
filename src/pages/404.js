import React from "react";
const CustomError = () => {
  return (
    <div className="error_pagee">
      <div id="mainC">
        <div className="message">
          <h1>404</h1>
          <h3>Die gesuchte Seite existiert nicht</h3>
          &nbsp;
        </div>
        <div className="footer">
          <a href="/" title="home">
            Go Back <span></span>
          </a>
          <p className="legal">
            &copy;Copyright © 2024 Zuverlässiges Heimteam<br /> All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomError;
