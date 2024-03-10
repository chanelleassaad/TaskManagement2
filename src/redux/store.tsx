import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const tasksPersistConfig = {
  key: "tasks",
  storage: storage,
  whitelist: ["taskState"],
};

const rootReducer = combineReducers({
  tasks: persistReducer(tasksPersistConfig, tasksReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export default store;
function getDefaultMiddleware(arg0: { serializableCheck: boolean }) {
  throw new Error("Function not implemented.");
}
