import { configureStore } from '@reduxjs/toolkit'
import appStore from '@app/state/appStore'
import indicators from './slices/indicators'

export const store = configureStore({
    reducer: {
        indicators,
        app: appStore,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type IndicatorsDispatch = typeof store.dispatch
