import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from './store'

type RisksState = Omit<RootState, 'app'>

export const useRisksSelector: TypedUseSelectorHook<RisksState> = useSelector
