import { setContext } from '@app/modules/context'
import { AppSettings } from '@config/types/config/app'
import { useExampleQuery } from './queries/example'

export const services = {
    useExampleQuery,
}

const createSDK = (config: AppSettings) => {
    setContext(config)
    return {
        nonconformities: services,
    }
}

export default createSDK
