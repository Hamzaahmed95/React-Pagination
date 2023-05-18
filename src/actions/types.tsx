export const GET_ALL_UNIVERSITIES = "GET_ALL_UNIVERSITIES";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";

export interface SearchByNameAction {
  type: typeof SEARCH_BY_NAME | typeof GET_ALL_UNIVERSITIES;
  parameter?: string;
  payload?: Array<object>
}