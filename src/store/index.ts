import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { hourWeatherReduser } from "store/redusers/hourWeatherReduser";
import { positionReduser } from "store/redusers/positionReduser";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import { rootSaga } from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReduser = combineReducers({ hourWeatherReduser, positionReduser });
const sagaMiddleware = createSagaMiddleware();

const presisrConfig = {
  key: "root",
  storage,
};
const persistReduser = persistReducer(presisrConfig, rootReduser);

export const store = createStore(
  persistReduser,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
export type typeState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<typeState> = useSelector;
