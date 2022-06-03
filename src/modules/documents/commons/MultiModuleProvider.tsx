import React, { useMemo } from 'react'
import { MultiModuleContextProvider } from '@app/components/multimodule/MultiModuleContext'
import { loadEnvironmentConfig } from '@app/driver/env'
import { Provider as StoreProvider } from 'react-redux'
import createSDK from '../services/sdk'
import { DOCUMENTS_MODULE } from '@constants/modules'

import Routes from './routes'
import { store } from '../state/store'

const moduleConfig = loadEnvironmentConfig(DOCUMENTS_MODULE)

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
