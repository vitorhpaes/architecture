import { AppSettings } from '@config/types/config/app'

let context: AppSettings

export const setContext = (site: AppSettings) => {
    if (!context && site) {
        context = Object.freeze(site)
    }
}

export const getContext = () => {
    return context
}
