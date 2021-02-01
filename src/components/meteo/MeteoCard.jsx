import React from "react";
import { Media } from "react-bootstrap";
import { useSelector } from "react-redux";

const MeteoCard = (props) => {
  const meteoData = useSelector((state) => state.meteoData.value);

  return (
    <>
      {meteoData && (
        <Media>
          <img
            width={100}
            height={100}
            className="mr-3"
            src={`../../icons/${meteoData.weather[0].icon}.svg`}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>{meteoData.name}</h5>
            <p>{console.log(meteoData.weather[0].main)}</p>
            <p>{meteoData.weather[0].description}</p>
          </Media.Body>
        </Media>
      )}
    </>
  );
};

export default MeteoCard;
