import React, { useState } from "react";
import { Form, redirect } from "react-router-dom";
import ReactSlider from "react-slider";

import Card from "../UI/Card";
import { createFilterData, getFilterData } from "../util/FilterData";
import style from "./EarthquakeFilters.module.css";

const MIN = 0;
const MAX = 10;

const FiltersEQ = () => {
  let filterData = getFilterData();

  const [minmag, setMinMag] = useState(filterData);

  const sliderChange = (arr) => {
    const newFilterData = {
      ...filterData,
      minmagnitude: arr[0],
      maxmagnitude: arr[1],
    };

    localStorage.setItem("filterData", JSON.stringify(newFilterData));
  };

  const renderThumb = (props, state) => {
    const { index, ...restProps } = props;
    return (
      <div {...restProps}>
        <span className={style.renderThumb}>{state.valueNow}</span>
      </div>
    );
  };

  const clearHandler = () => {
    let form = document.getElementById("filters");
    let formData = new FormData(form);
    console.log(formData);
  };

  return (
    <Form method="post" id="filters">
      <div className={style.filters}>
        <Card>
          <h1>Filters</h1>
          <div className={style.filterDiv}>
            <label htmlFor="mag">Magnitude Range</label>
            <ReactSlider
              id="mag"
              name="mag"
              min={MIN}
              max={MAX}
              step={0.1}
              className={style.slider}
              thumbClassName={style.thumb}
              defaultValue={[filterData.minmagnitude, filterData.maxmagnitude]}
              renderThumb={renderThumb}
              minDistance={0.2}
              onAfterChange={sliderChange}
            />
          </div>
          <div className={style.filterDiv}>
            <label htmlFor="sTime">Start time</label>
            <input
              id="sTime"
              type="date"
              name="sTime"
              defaultValue={filterData.starttime}
            />
          </div>
          <div className={style.filterDiv}>
            <label htmlFor="eTime">End time</label>
            <input
              id="eTime"
              type="date"
              name="eTime"
              defaultValue={filterData.endtime}
            />
          </div>
          <div className={style.filterDiv}>
            <label htmlFor="eventId">Event Id</label>
            <input
              id="eventId"
              type="text"
              name="eventId"
              defaultValue={filterData.eventid}
            />
          </div>
          <div className={style.filterDiv}>
            <label htmlFor="limit">Limit</label>
            <input
              className={style.limitInput}
              id="limit"
              type="number"
              name="limit"
              defaultValue={filterData.limit}
            />
          </div>
          <div className={style.filterDiv}>
            <label htmlFor="order">Order By</label>
            <select id="order" name="order" defaultValue={filterData.orderby}>
              <option value="time">Time - Descending</option>
              <option value="time-asc">Time - Ascending</option>
              <option value="magnitude">Magnitude - Descending</option>
              <option value="magnitude-asc">Magnitude - Ascending</option>
            </select>
          </div>
          <div className={style.filterDiv}>
            <label htmlFor="alert">Alert level</label>
            <select
              id="alert"
              name="alert"
              defaultValue={filterData.alertlevel}
            >
              <option value={"all"}>All events</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="orange">Orange</option>
              <option value="red">Red</option>
            </select>
          </div>
          <div className={`${style.filterDiv} ${style.buttonContainer}`}>
            <button
              type="button"
              className={style.clearButton}
              onClick={clearHandler}
            >
              Clear
            </button>
            <button className={style.applyButton} id="apply-button">
              Apply
            </button>
          </div>
        </Card>
      </div>
    </Form>
  );
};

export default FiltersEQ;
