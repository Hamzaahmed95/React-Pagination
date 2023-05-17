const initialState = {
  searchText: '',
  universities: [],
  page: 1
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case "GET_ALL_UNIVERSITIES":
      return {
        ...state,
        universities: action.payload
      };
    case "SEARCH_BY_NAME":
      return Object.assign({}, state, {
        searchText: action.parameter
      });
    default:
      return state;
  }
}
