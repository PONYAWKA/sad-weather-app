import {
  SET_AUTHORIZATION,
  SET_BACKGROUND,
  SET_CITY,
  SET_CITY_NAME,
  SET_LOADING,
} from "@/store/actions";
import { actionType, IStatusReducer } from "@/store/reducers/interfaces";
import { getBackgroundImageUrLv1 } from "@/utils/getBackgroundImageUrl";

const initialState = {
  url: " ",
  isLoading: true,
  city: "",
  isAuthorized: false,
};

export const statusReducer = (
  state: IStatusReducer = initialState,
  { type, payload }: actionType
) => {
  switch (type) {
    case SET_BACKGROUND: {
      if (typeof payload === "string")
        return { ...state, url: getBackgroundImageUrLv1(payload) };
      return state;
    }
    case SET_LOADING:
      if (typeof payload === "boolean") return { ...state, isLoading: payload };
      return state;
    case SET_CITY:
      if (typeof payload === "string") return { ...state, city: payload };
      return state;
    case SET_CITY_NAME:
      if (typeof payload === "object")
        return {
          ...state,
          city: payload.city,
        };
      return state;
    case SET_AUTHORIZATION:
      if (typeof payload === "boolean")
        return { ...state, isAuthorized: payload };
      return state;
    default:
      return state;
  }
};
