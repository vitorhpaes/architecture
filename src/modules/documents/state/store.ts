import { configureStore } from '@reduxjs/toolkit'
import appStore from '@app/state/appStore'
import example from './slices/example'

export const store = configureStore({
    reducer: {
        app: appStore,
        example,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type DocumentsDispatch = typeof store.dispatch
