import React from "react";

import style from "./EventItem.module.css";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const EventItem = ({ event }) => {
  return (
    <>
      <article className={style.event}>
        <Card>
          <div className={style.backArrowContainer}>
            <Link to=".." className={style.backArrow}>
              <FontAwesomeIcon icon={faArrowLeft} className={style.backArrow} />
              Back
            </Link>
          </div>
          <div>
            <h1>{event.title}</h1>
            <p>Magnitude: {event.title}</p>
            <p>Place: {event.place}</p>
            <p>Time of occurence: {event.time}</p>
            <p>Last Updated: {event.lastUpdated}</p>
            <p>Number of people who felt the quake: {event.felt || "None"}</p>
            <p>Alert: {event.alert}</p>
            <p>
              Was tsunami alert issued: {event.tsuname === 1 ? "Yes" : "No"}
            </p>
            <Link to={event.url} target="_blank" rel="noopener noreferrer">
              Click here to go detailed event page
            </Link>
          </div>
        </Card>
      </article>
    </>
  );
};
export default EventItem;
