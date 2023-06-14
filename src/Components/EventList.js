import React from "react";

import style from "./EventList.module.css";
import Card from "../UI/Card";
import { Link } from "react-router-dom";

const EventList = ({ events }) => {
  //if()
  return (
    <>
      <div className={style.events}>
        <h2>Earthquakes</h2>
        <ul className={style.list}>
          {events.map((event) => (
            <Card key={event.id} color={event.alert}>
              <li className={style.item}>
                <Link to={event.id}>
                  <div className={style.magcontainer}>
                    <h1>{event.mag}</h1>
                  </div>
                  <div className={style.content}>
                    <p>{event.place || "Location unavailable"}</p>
                    <time>{event.time}</time>
                  </div>
                </Link>
              </li>
            </Card>
          ))}
        </ul>
      </div>
    </>
  );
};
export default EventList;
