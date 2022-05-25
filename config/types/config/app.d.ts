import { iSystemSDK } from '@app/modules/sdk'

export interface AppSettings {
    module: 'Risks' | 'Indicators' | 'Nonconformities' | 'Documents'
    baseURL: string
}

export type MultiModuleContextProps = MultiModuleApp | null

export interface MultiModuleApp {
    app: AppSettings
    services: Partial<iSystemSDK>
}
