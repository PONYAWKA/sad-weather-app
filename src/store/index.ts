import { combineReducers } from "redux";
import { createStore } from "redux";
import { hourWeatherReduser } from "store/redusers/hourWeatherReduser";
import { positionReduser } from "store/redusers/positionReduser";
import storage from "redux-persist/lib/storage";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";

const rootReduser = combineReducers({ hourWeatherReduser, positionReduser });

const presisrConfig = {
  key: "root",
  storage,
};
const persistReduser = persistReducer(presisrConfig, rootReduser);

export const store = createStore(persistReduser);
export const persistor = persistStore(store);
export type typeState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<typeState> = useSelector;
