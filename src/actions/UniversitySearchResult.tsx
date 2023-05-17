import { fetchUniversityData } from "../api/UniversityList";
import { GET_ALL_UNIVERSITIES, SEARCH_BY_NAME } from "./types";
import { Dispatch } from "redux";
import { get, isEmpty } from 'lodash'

interface SearchByNameAction {
  type: typeof SEARCH_BY_NAME | typeof GET_ALL_UNIVERSITIES;
  parameter?: string;
  payload?: any
}

export const getAllUniversities = () => (dispatch: Dispatch<SearchByNameAction>) => {
  fetchUniversityData().then(res => {

    const responseData = get(res, 'apiData')

    if (!isEmpty(responseData)) {
      dispatch({
        type: GET_ALL_UNIVERSITIES,
        payload: responseData
      });
    }
    return res;
  }).catch(error => {
    dispatch({
      type: GET_ALL_UNIVERSITIES,
      payload: []
    });
    console.log("ERROR: ", error)
  })
}

export const filterUniversityByName = (name: string) => (dispatch: Dispatch<SearchByNameAction>) => {
  dispatch({
    type: SEARCH_BY_NAME,
    parameter: name
  });
}
