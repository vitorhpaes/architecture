import { useContext } from 'react'
import { useContextSelector } from 'react-use-context-selector'
import { MultiModuleContext } from './MultiModuleContext'

export const useModuleContext = () => {
    const context = useContext(MultiModuleContext)
    if (!context) throw new Error('MultiModule not found.')
    return context
}

export const useServices = () =>
    useContextSelector(
        MultiModuleContext,
        (fullContext) => fullContext.services
    )

export const useModule = () =>
    useContextSelector(MultiModuleContext, (fullContext) => fullContext.app)
