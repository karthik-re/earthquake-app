import { json, useLoaderData, Await, redirect, defer } from "react-router-dom";
import { Suspense } from "react";

import Earthquakes from "../Components/Earthquakes";
import { getFilterData } from "../util/FilterData";

const EventPage = () => {
  const { data } = useLoaderData();

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={data}>
          {(loadedEvents) => <Earthquakes events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventPage;

export const loaderDefer = async () => {
  const filterData = getFilterData();
  const url = new URL("https://earthquake.usgs.gov/fdsnws/event/1/query");
  const params = new URLSearchParams();

  for (const key in filterData) {
    if (filterData[key] !== null) {
      params.set(key, filterData[key]);
    }
  }
  url.search = params.toString();

  const response = await fetch(url);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch events." },
      {
        status: response.status,
      }
    );
  } else {
    const data = await response.json();

    let events = [];
    for (const event of data.features) {
      const obj = {
        mag: event.properties.mag.toFixed(2),
        place: event.properties.place,
        time: new Date(event.properties.time).toString(),
        id: event.id,
        alert: event.properties.alert,
      };
      events.push(obj);
    }

    return events;
  }
};

//fetch api results here
export const loader = async () => {
  return defer({ data: loaderDefer() });
};

export const action = async ({ request, params }) => {
  const data = await request.formData();

  const filterData = getFilterData();

  const newFilterData = {
    format: "geojson",
    minmagnitude: filterData.minmagnitude,
    maxmagnitude: filterData.maxmagnitude,
    starttime: data.get("sTime") || filterData.starttime,
    endtime: data.get("eTime") || filterData.endtime,
    eventid: data.get("eventId") || filterData.eventid,
    limit: data.get("limit") || filterData.limit,
    orderby: data.get("order") || filterData.orderby,
    alertlevel: data.get("alert") === "all" ? null : data.get("alert"),
  };
  localStorage.setItem("filterData", JSON.stringify(newFilterData));

  return redirect("/earthquakes");
};
