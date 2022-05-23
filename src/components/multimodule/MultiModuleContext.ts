import { createContext } from 'react'
import { createSelectorProvider } from 'react-use-context-selector'
import { MultiModuleContextProps } from '@config/types/config/app'

const initial: any = null

export const MultiModuleContext = createContext(
    initial as MultiModuleContextProps
)
export const MultiModuleContextProvider =
    createSelectorProvider(MultiModuleContext)
