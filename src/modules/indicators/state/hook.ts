import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from './store'

type IndicatorsState = Omit<RootState, 'app'>

export const useIndicatorsSelector: TypedUseSelectorHook<IndicatorsState> =
    useSelector
