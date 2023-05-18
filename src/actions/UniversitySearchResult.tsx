import { fetchUniversityData } from "../api/UniversityList";
import { GET_ALL_UNIVERSITIES, SEARCH_BY_NAME } from "./types";
import { Dispatch } from "redux";
import { AppDispatch } from "../store";

import { SearchByNameAction } from "./types";

export const getAllUniversities = () => (dispatch: AppDispatch) => {
  fetchUniversityData().then(res => {
    dispatch({
      type: GET_ALL_UNIVERSITIES,
      payload: res
    });
  }).catch(error => {
    dispatch({
      type: GET_ALL_UNIVERSITIES,
      payload: []
    });
    console.log("ERROR: ", error)
  })
}

export const searchUniversityByName = (name: string) => (dispatch: AppDispatch) => {
  dispatch({
    type: SEARCH_BY_NAME,
    parameter: name
  });
}
