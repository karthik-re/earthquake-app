import React from "react";

import style from "./Card.module.css";

const Card = (props) => {
  const { color } = props;
  let background;
  switch (
    color //dynamically render card background based on API response for earthquakes)
  ) {
    case "red":
      background = "rgba(192, 43, 24, 0.859)";
      break;
    case "yellow":
      background = "rgba(192, 192, 24, 0.859)";
      break;
    case "green":
      background = "rgba(25, 181, 48, 0.859)";
      break;
    case "orange":
      background = "rgba(194, 135, 16, 0.979)";
      break;
    default:
      background = color;
      break;
  }

  return (
    <div className={style.card} style={{ backgroundColor: background }}>
      {props.children}
    </div>
  );
};

export default Card;
