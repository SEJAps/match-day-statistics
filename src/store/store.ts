import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage"; // Utiliza localStorage
import { persistReducer, persistStore } from "redux-persist";
import statsReducer from "./slices/statsSlice";
import userReducer from "./slices/userSlice";
import timerReducer from "./slices/timerSlice";
import newTimerReducer from "./slices/newTimerSlice";
import markReducer from "./slices/markSlice";

// Combina tus reducers en uno solo
const rootReducer = combineReducers({
  stats: statsReducer,
  user: userReducer,
  timer: timerReducer,
  newTimer: newTimerReducer,
  marks: markReducer,
});

// Configuración de redux-persist: en este ejemplo persistimos solo el slice "timer"
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["timer"],
};

// Crea el reducer persistido
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configura la store utilizando el reducer persistido
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Necesario para redux-persist
    }),
});

// Crea el persistor para rehidratar el estado
export const persistor = persistStore(store);

// Inferencia de tipos para RootState y AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Hooks tipados para usar en la aplicación
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
