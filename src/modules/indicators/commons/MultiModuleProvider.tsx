import React, { useMemo } from 'react'
import Routes from './routes'
import { Provider as StoreProvider } from 'react-redux'

import { store } from '../state/store'
import { MultiModuleContextProvider } from '@app/components/multimodule/MultiModuleContext'
import { loadEnvironmentConfig } from '@app/driver/env'
import createSDK from '@modules/nonconformities/services/sdk'
import { INDICATORS_MODULE } from '@config/constants/modules'

const moduleConfig = loadEnvironmentConfig(INDICATORS_MODULE)

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
