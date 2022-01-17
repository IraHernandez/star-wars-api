import React, { useState, useContext } from "react";
import { MovieContext } from "../../hooks/movieContext";

import "./poster.css";

const PosterMovie = ({
  key,
  movies,
  image,
  name,
  species,
  gender,
  homeworld,
}) => {
  const [info, setInfo] = useState({});
  // const context = useContext(MovieContext);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (title) => {
    /* findToMovie(title); */
    setShowModal(true);
  };

  const findToMovie = (title) => {
    const response = movies.find((movie) => movie.title === title);
    setInfo(response);
  };

  const close = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="modalContainer ">
          <div className="modal">
            <div className="posterModal">
              <img
                height= {300}
                width={300}
                src={image}
                alt=""
              />
            </div>
            <div className="posterInfo">
              <h3>{name}</h3>
              <p>
              species:
              {species}</p>
              <p>
                gender:
                <span>{gender}</span>
              </p>
              <p>
              homeworld:
                <span>{homeworld}</span>
              </p>
              <button className="btn-close" onClick={close}>
                Close &times;
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="cardContainer ">
        <img
          src={image}
          // height={300}
          // width={220}
          alt=""
          onClick={() => handleClick()}
        />
      </div>
    </>
  );
};

export default PosterMovie;
