import { iSystemSDK } from '@app/modules/sdk'

export interface AppSettings {
    module: 'Risks' | 'Indicators' | 'Nonconformities' | 'Documents'
    baseURL: string
    env: string
    api: {
        baseURL: string
        admin: string
    }
    url: {
        login: string
        Documents: string
        Nonconformities: string
        Indicators: string
        Risks: string
    }
    cookie: {
        domain: string
    }
    subscription: {
        productId: number
        vendorId: number
    }
    'google-analytics': {
        token: string
        options: {
            testMode: boolean
            debug: boolean
            'linker:autoLink': string[]
        }
    }
    mixpanel: {
        token: string
        enabled: boolean
    }
    stripe: {
        key: string
    }
    'user-password': {
        secretKey: string
    }
}

export type MultiModuleContextProps = MultiModuleApp | null

export interface MultiModuleApp {
    app: AppSettings
    services: Partial<iSystemSDK>
}
