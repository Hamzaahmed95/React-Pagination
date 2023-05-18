import { fetchUniversityData } from "../api/UniversityList";
import { GET_ALL_UNIVERSITIES, SEARCH_BY_NAME } from "./types";
import { Dispatch } from "redux";

import { SearchByNameAction } from "./types";

export const getAllUniversities = () => (dispatch: Dispatch<SearchByNameAction>) => {
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

export const searchUniversityByName = (name: string) => (dispatch: Dispatch<SearchByNameAction>) => {
  dispatch({
    type: SEARCH_BY_NAME,
    parameter: name
  });
}
