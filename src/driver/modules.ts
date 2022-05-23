import { lazy } from 'react'

const getHostname = () => window.location.hostname

const loadCurrentModule = () => {
    const hostname = getHostname()
    const splittedCurrentURL = hostname.split('.')
    const currentModuleName = splittedCurrentURL[1]
    return currentModuleName
}

const currentModule = loadCurrentModule()

export const loadByModule = (path: string) =>
    lazy(async () => await import(`@modules/${currentModule}/${path}`))
