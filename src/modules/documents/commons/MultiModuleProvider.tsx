import React, { useMemo } from 'react'
import { MultiModuleContextProvider } from '@app/components/multimodule/MultiModuleContext'
import { loadEnvironmentConfig } from '@app/driver/env'
import { Provider as StoreProvider } from 'react-redux'
import createSDK from '../services/sdk'

import Routes from './routes'
import { store } from '../state/store'

const moduleConfig = loadEnvironmentConfig('documents')

export default function MultiModuleProvider() {
    const app = useMemo(
        () => ({
            app: moduleConfig,
            services: createSDK(moduleConfig),
        }),
        []
    )

    return (
        <StoreProvider store={store}>
            <MultiModuleContextProvider value={app}>
                <Routes />
            </MultiModuleContextProvider>
        </StoreProvider>
    )
}
