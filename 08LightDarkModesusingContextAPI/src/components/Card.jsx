import React from "react";
import "./Card.css";
import useTheme from "../contexts/theme";

function Card({ imageUrl, title, description }) {
  const { themeMode } = useTheme();
  return (
    <div className={`card ${themeMode}`}>
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default Card;
