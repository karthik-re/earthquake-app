import { DEFAULT_FILTERS } from "../Pages/ClearFilter";

export const createFilterData = () => {
  let filterData = DEFAULT_FILTERS;

  localStorage.setItem("filterData", JSON.stringify(filterData));
};

export const getFilterData = () => {
  let filterData = localStorage.getItem("filterData");

  if (!filterData) {
    createFilterData();
    filterData = localStorage.getItem("filterData");
  } else {
    filterData = JSON.parse(filterData);
  }
  return filterData;
};

export const filterDataLoader = () => {
  return getFilterData();
};
