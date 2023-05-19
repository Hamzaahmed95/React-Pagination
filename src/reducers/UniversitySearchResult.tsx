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
    case "INCREMENT_PAGE":
      return {
        ...state,
        page: state.page + 1
      }

    case "DECREMENT_PAGE":
      return {
        ...state,
        page: state.page - 1
      }
    case "SEARCH_BY_NAME":
      return Object.assign({}, state, {
        searchText: action.parameter
      });
    case "GO_TO_PAGE_NUMBER":
      return {
        ...state,
        page: action.payload
      }
    default:
      return state;
  }
}
