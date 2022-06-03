import { iSystemSDK } from '@app/modules/sdk'
import { MODULE_NAME_CAPITALIZED } from './modules'
export interface AppSettings {
    module: MODULE_NAME_CAPITALIZED
    baseURL: string
    env: string
    api: {
        baseURL: string
        admin: string
    }
    flags: {
        [key: string]: string
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
