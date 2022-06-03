import { configureStore } from '@reduxjs/toolkit'
import appStore from '@app/state/appStore'
import nonConformities from './slices/nonconformities'

export const store = configureStore({
    reducer: {
        nonConformities,
        app: appStore,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type NonConformitiesDispatch = typeof store.dispatch
