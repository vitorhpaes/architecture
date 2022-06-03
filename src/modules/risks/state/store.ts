import { configureStore } from '@reduxjs/toolkit'
import appStore from '@app/state/appStore'
import risks from './slices/risks'

export const store = configureStore({
    reducer: {
        risks,
        app: appStore,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type RisksDispatch = typeof store.dispatch
