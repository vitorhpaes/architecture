import { loadEnvironmentConfig } from '@app/driver/env'
import React, { useMemo } from 'react'
import Routes from './routes'
import moduleServices from '../services'

import { MultiModuleContextProvider } from '@app/components/multimodule/MultiModuleContext'
const moduleConfig = loadEnvironmentConfig('risks')

export default function MultiModuleProvider() {
    const app = useMemo(
        () => ({
            app: moduleConfig,
            services: moduleServices,
        }),
        []
    )

    return (
        <MultiModuleContextProvider value={app}>
            <Routes />
        </MultiModuleContextProvider>
    )
}