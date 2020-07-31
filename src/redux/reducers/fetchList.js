import * as ActionTypes from "../action/fetchList";
const initialState = {};

const List = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_LIST:
      return {
        ...state,
        list: action.data,
      };
    case ActionTypes.FETCH_LIST_LOAD:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default List;
