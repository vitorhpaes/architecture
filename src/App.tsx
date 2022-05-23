import React, { Suspense } from 'react'
import TranslationsIntlContainer from './components/translations/TranslationsContainer'
import TranslationsProvider from './components/translations/TranslationsProvider'
import { Provider as StoreProvider } from 'react-redux'
import { loadByModule } from './driver/modules'
import { store } from './state/store'
import './App.scss'

declare global {
    const POINTING_ENV: string
}

const MultiModuleProvider = loadByModule('commons/MultiModuleProvider')

const App: React.FC = () => {
    return (
        <StoreProvider store={store}>
            <TranslationsIntlContainer userLanguage="en-gb">
                <TranslationsProvider>
                    <Suspense fallback={<>loading...</>}>
                        <MultiModuleProvider />
                    </Suspense>
                </TranslationsProvider>
            </TranslationsIntlContainer>
        </StoreProvider>
    )
}

export default App
