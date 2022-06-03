import React, { useMemo } from 'react'
import { MultiModuleContextProvider } from '@app/components/multimodule/MultiModuleContext'
import { loadEnvironmentConfig } from '@app/driver/env'
import Routes from './routes'

import createSDK from '../services/sdk'
import { RISKS_MODULE } from '@config/constants/modules'
const moduleConfig = loadEnvironmentConfig(RISKS_MODULE)

export default function MultiModuleProvider() {
    const app = useMemo(
        () => ({
            app: moduleConfig,
            services: createSDK(moduleConfig),
        }),
        []
    )

    return (
        <MultiModuleContextProvider value={app}>
            <Routes />
        </MultiModuleContextProvider>
    )
}
