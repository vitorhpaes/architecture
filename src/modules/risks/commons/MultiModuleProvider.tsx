import React, { useMemo } from 'react'
import { MultiModuleContextProvider } from '@app/components/multimodule/MultiModuleContext'
import { loadEnvironmentConfig } from '@app/driver/env'
import Routes from './routes'

import createSDK from '../services/sdk'
const moduleConfig = loadEnvironmentConfig('risks')

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
