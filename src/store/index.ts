import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import { hourWeatherReducer } from "@/store/reducers/hourWeatherReducer";
import { positionReducer } from "@/store/reducers/positionReducer";

import { dailyWeatherReducer } from "./reducers/dailyWeatherReducer";
import { rootSaga } from "./sagas";

const rootReducer = combineReducers({
  hourWeatherReducer,
  positionReducer,
  dailyWeatherReducer,
});
const sagaMiddleware = createSagaMiddleware();

const persisConfig = {
  key: "root",
  storage,
};
const myPersistReducer = persistReducer(persisConfig, rootReducer);

export const store = createStore(
  myPersistReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export const persister = persistStore(store);
export type typeState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<typeState> = useSelector;
