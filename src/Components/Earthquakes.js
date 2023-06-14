import style from "./Earthquakes.module.css";
import EventList from "../Components/EventList";
import FiltersEQ from "../Components/EarthquakeFilters";

const Earthquakes = (props) => {
  return (
    <div className={style.container}>
      <div className={style.filtersContainer}>
        <FiltersEQ />
      </div>
      <div className={style.eventListContainer}>
        <EventList events={props.events} />
      </div>
    </div>
  );
};

export default Earthquakes;
