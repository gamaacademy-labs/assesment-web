import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from './user'

const persistConfig = {
  key: '@user',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
  reducer: {
    persistedReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
}),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch