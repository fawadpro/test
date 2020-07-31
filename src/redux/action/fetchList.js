import axios from "axios";
import config from "../../config";

export const FETCH_LIST = "FETCH_LIST";
export const FETCH_LIST_LOAD = "FETCH_LIST_LOAD";
export const FETCH_LIST_SUCCESS = "FETCH_LIST_SUCCESS";

export const fetchList = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_LIST_LOAD });
    axios
      .get(
        `${config.apiPath}/api/v3/country/getspecies/AZ?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee`
      )
      .then((res) => {
        dispatch({ type: FETCH_LIST_SUCCESS });
        return dispatch({ type: FETCH_LIST, data: res.data });
      });
  };
};
