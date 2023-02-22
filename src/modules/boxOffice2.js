import { boxOfficeMainDaily } from "../lib/apiKofic";
import { axiosKofic } from "../lib/config";
import createRequestThunk from "../lib/createRequestThunk";

const GET_BOXOFFICE = "boxOffice/GET_BOXOFFICE";
const GET_BOXOFFICE_SUCCESS = "boxOffice/GET_BOXOFFICE_SUCCESS";

export const getBox = createRequestThunk(GET_BOXOFFICE, boxOfficeMainDaily);

const initialState = {
  result: null,
};

const boxReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOXOFFICE_SUCCESS:
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
};

export default boxReducer;
