export interface AppSettings {
    module: 'Risks' | 'Indicators' | 'Nonconformities' | 'Documents'
    baseURL: string
}

export type MultiModuleContextProps = MultiModuleApp | null

export interface MultiModuleApp {
    app: AppSettings
    services: {
        [key: string]: Promise<Function> | Function
    }
}
