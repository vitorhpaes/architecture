import { MultiModuleContextProvider } from '@app/components/multimodule/MultiModuleContext'
import { loadEnvironmentConfig } from '@app/driver/env'
import React, { useMemo } from 'react'
import sdk from '../services/sdk'

import Routes from './routes'

const moduleConfig = loadEnvironmentConfig('documents')

export default function MultiModuleProvider() {
    const app = useMemo(
        () => ({
            app: moduleConfig,
            services: sdk(moduleConfig),
        }),
        []
    )

    return (
        <MultiModuleContextProvider value={app}>
            <Routes />
        </MultiModuleContextProvider>
    )
}
