export const GET_ALL_UNIVERSITIES = "GET_ALL_UNIVERSITIES";
export const INCREMENT_PAGE = "INCREMENT_PAGE";
export const DECREMENT_PAGE = "DECREMENT_PAGE";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const GO_TO_PAGE_NUMBER = "GO_TO_PAGE_NUMBER";
export interface SearchByNameAction {
  type: typeof SEARCH_BY_NAME | typeof GET_ALL_UNIVERSITIES;
  parameter?: string;
  payload?: Array<object>
}