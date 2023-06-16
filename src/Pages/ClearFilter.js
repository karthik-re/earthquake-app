import { redirect } from "react-router-dom";

const DEFAULT_FILTERS = {
  format: "geojson",
  minmagnitude: 0,
  maxmagnitude: 10,
  starttime: new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0],
  endtime: new Date().toISOString().split("T")[0],
  eventid: null,
  limit: 10,
  orderby: "time",
  alertlevel: null,
};

export { DEFAULT_FILTERS };

export const action = () => {
  localStorage.removeItem("filterData");

  let filterData = DEFAULT_FILTERS;

  localStorage.setItem("filterData", JSON.stringify(filterData));

  return redirect("/earthquakes");
};
