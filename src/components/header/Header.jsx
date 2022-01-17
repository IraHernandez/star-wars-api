import React, { useContext, useState } from "react";
import "./header.css";
import { MovieContext } from "../../hooks/movieContext";

const Header = () => { 
  return (
    <header className="">
      <div className="wrapper">
        <div className="header-container">
          <h1 className="textCenter">
          Star Wars
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
