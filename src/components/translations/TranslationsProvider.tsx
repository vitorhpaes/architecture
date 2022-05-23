import React, { createContext, useCallback, useContext } from 'react'
import { useIntl } from 'react-intl'

interface TranslationsProviderProps {
    children: React.ReactNode
}

interface TranslationsContextProps {
    translate: (key: string) => string
}

const TranslationsContext = createContext({} as TranslationsContextProps)

const TranslationsProvider: React.FC<TranslationsProviderProps> = ({
    children,
}) => {
    const intl = useIntl()

    const translate = useCallback(
        (key: string) => intl.formatMessage({ id: key }),
        []
    )

    return (
        <TranslationsContext.Provider value={{ translate }}>
            <>{children}</>
        </TranslationsContext.Provider>
    )
}

export const useTranslations = () => useContext(TranslationsContext)

export default TranslationsProvider
