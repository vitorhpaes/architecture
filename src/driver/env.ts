import { AppSettings } from '@config/types/config/app'

export const loadEnvironmentConfig = (moduleName: string): AppSettings => {
    return require(`@config/envs/${POINTING_ENV}/${moduleName}.json`)
}

export const getEnvironment = () => {
    return POINTING_ENV
}
