import React, { Suspense } from 'react'
import TranslationsIntlContainer from './components/translations/TranslationsContainer'
import TranslationsProvider from './components/translations/TranslationsProvider'
import { Provider as StoreProvider } from 'react-redux'
import { loadByModule } from './driver/modules'
import { store } from './state/store'
import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

declare global {
    const POINTING_ENV: string
}

const MultiModuleProvider = loadByModule('commons/MultiModuleProvider')
const queryClient = new QueryClient()

const App: React.FC = () => {
    return (
        <StoreProvider store={store}>
            <QueryClientProvider client={queryClient}>
                <TranslationsIntlContainer userLanguage="en-gb">
                    <TranslationsProvider>
                        <Suspense fallback={<>loading...</>}>
                            <Router>
                                <MultiModuleProvider />
                            </Router>
                        </Suspense>
                    </TranslationsProvider>
                </TranslationsIntlContainer>
            </QueryClientProvider>
        </StoreProvider>
    )
}

export default App
