import { json, useLoaderData, Await } from "react-router-dom";
import React, { Suspense } from "react";
import EventItem from "../Components/EventItem";

const EventDetailPage = () => {
  const data = useLoaderData();

  const event = {
    mag: data.properties.mag,
    place: data.properties.place,
    time: new Date(data.properties.time).toString(),
    lastUpdated: new Date(data.properties.updated).toString(),
    felt: data.properties.felt,
    url: data.properties.url,
    alert: data.properties.alert,
    tsunami: data.properties.tsunami,
    title: data.properties.title,
  };

  return (
    <>
      <Suspense
        fallback={
          <p style={{ textAlign: "center", backgroundColor: "white" }}>
            Loading...
          </p>
        }
      >
        <Await resolve={event}>
          {(loadedEvents) => <EventItem event={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.earthquakeId;
  const response = await fetch(
    "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventid=" +
      id
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  }

  return response;
};
