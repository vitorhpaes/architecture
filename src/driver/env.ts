export const loadEnvironmentConfig = (moduleName: string) => {
    return require(`@config/envs/${POINTING_ENV}/${moduleName}.json`)
}

export const getEnvironment = () => {
    return POINTING_ENV
}
