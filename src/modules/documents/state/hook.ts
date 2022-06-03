import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from './store'

type DocumentsState = Omit<RootState, 'app'>

export const useDocumentsSelector: TypedUseSelectorHook<DocumentsState> =
    useSelector
