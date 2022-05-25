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

export const useRisksSDK = () =>
    useContextSelector(
        MultiModuleContext,
        (fullContext) => fullContext.services.risks
    )

export const useIndicatorsSDK = () =>
    useContextSelector(
        MultiModuleContext,
        (fullContext) => fullContext.services.indicators
    )

export const useDocumentsSDK = () =>
    useContextSelector(
        MultiModuleContext,
        (fullContext) => fullContext.services.documents
    )

export const useNonConformitiesSDK = () =>
    useContextSelector(
        MultiModuleContext,
        (fullContext) => fullContext.services.nonconformities
    )

export const useModule = () =>
    useContextSelector(MultiModuleContext, (fullContext) => fullContext.app)
