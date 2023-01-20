import { SET_BACKGROUND, SET_CITY, SET_LOADING } from "@/store/actions";
import { getBackgroundImageUrLv1 } from "@/utils/getBackgroundImageUrl";

const initialState = {
  url: " ",
  isLoading: true,
  city: "",
  name: "",
};
interface actionType {
  type: string;
  payload: string | boolean;
}
export const statusReducer = (
  state = initialState,
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
    default:
      return state;
    case SET_CITY:
      if (typeof payload === "string") return { ...state, city: payload };
      return state;
  }
};
