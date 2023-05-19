import { fetchUniversityData } from "../api/UniversityList";
import { DECREMENT_PAGE, GET_ALL_UNIVERSITIES, GO_TO_PAGE_NUMBER, INCREMENT_PAGE, SEARCH_BY_NAME } from "./types";
import { AppDispatch } from "../store";



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
export const incrementPage = () => (dispatch: AppDispatch) => {
  dispatch({
    type: INCREMENT_PAGE
  })
}

export const decrementPage = () => (dispatch: AppDispatch) => {
  dispatch({
    type: DECREMENT_PAGE
  })
}

export const goToThePage = (pageNumber: number) => (dispatch: AppDispatch) => {
  dispatch({
    type: GO_TO_PAGE_NUMBER,
    payload: pageNumber
  })
}
