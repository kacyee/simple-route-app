const initialState = {
  photosData: {},
  isFetching: false,
  isError: false
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PHOTOS":
      return Object.assign({}, state, {
        isFetching: true,
        photosData: {},
        isError: false
      });
    case "FETCHED_PHOTOS":
      return Object.assign({}, state, {
        photosData: action.data,
        isFetching: false,
        isError: false
      });
    case "RECEIVE_ERROR":
      return Object.assign({}, state, {
        isError: true,
        isFetching: false,
      });
    default:
      return state;
  }
};

export default asyncReducer;