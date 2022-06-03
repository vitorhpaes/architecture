import React, { useMemo } from 'react'
import { PossibleLanguages } from '@app/i18n'
import { IntlProvider } from 'react-intl'
import { getIntlConfiguration } from '@app/driver/locale'

interface TranslationsIntlContainerProps {
    userLanguage: PossibleLanguages
    children: React.ReactNode
}

const TranslationsIntlContainer: React.FC<TranslationsIntlContainerProps> = ({
    userLanguage,
    children,
}) => {
    const { language, messages } = useMemo(
        () => getIntlConfiguration(userLanguage),
        [userLanguage]
    )

    return (
        <IntlProvider locale={language} messages={messages}>
            {children}
        </IntlProvider>
    )
}

export default TranslationsIntlContainer
