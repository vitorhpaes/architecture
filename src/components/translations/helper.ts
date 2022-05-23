import qs from 'qs'

import { PossibleLanguages, localeMessages } from '@app/i18n'

const defaultLanguage = 'pt-br'

const loadLocaleFromURL = (): PossibleLanguages | undefined => {
    let language: PossibleLanguages
    const { idioma: languageFromURL } = qs.parse(window.location.search, {
        ignoreQueryPrefix: true,
    })
    if (typeof languageFromURL === 'object') return

    if (['zh', 'es', 'pt-br', 'en-gb'].includes(languageFromURL.toString()))
        language = languageFromURL as PossibleLanguages

    return language
}

const getIntlConfiguration = (userLanguage: PossibleLanguages) => {
    let finalLanguage: PossibleLanguages = userLanguage
    if (!userLanguage) {
        const loadedFromURL = loadLocaleFromURL()
        finalLanguage = loadedFromURL ?? defaultLanguage
    }

    const messages = localeMessages[finalLanguage]

    return {
        language: finalLanguage,
        messages,
    }
}

export { loadLocaleFromURL, getIntlConfiguration }
