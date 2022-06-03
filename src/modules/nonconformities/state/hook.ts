import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from './store'

type NonConformitiesState = Omit<RootState, 'app'>

export const useNonConformitiesSelector: TypedUseSelectorHook<NonConformitiesState> =
    useSelector
