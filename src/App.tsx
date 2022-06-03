import React, { Suspense } from 'react'
import TranslationsIntlContainer from './components/translations/TranslationsContainer'
import TranslationsProvider from './components/translations/TranslationsProvider'
import { loadByModule } from './driver/modules'
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
        <QueryClientProvider client={queryClient}>
            <TranslationsIntlContainer userLanguage="en-gb">
                <TranslationsProvider>
                    <Suspense fallback={<></>}>
                        <Router>
                            <MultiModuleProvider />
                        </Router>
                    </Suspense>
                </TranslationsProvider>
            </TranslationsIntlContainer>
        </QueryClientProvider>
    )
}

export default App
