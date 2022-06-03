import { MODULE_NAME } from './../../config/types/config/modules.d'
import { AppSettings } from '@config/types/config/app'

export const loadEnvironmentConfig = (moduleName: MODULE_NAME): AppSettings => {
    return require(`@config/envs/${POINTING_ENV}/${moduleName}.json`)
}

export const getEnvironment = () => {
    return POINTING_ENV
}
