import { AppSettings } from '@config/types/config/app'
import { setContext } from '@app/modules/context'
import { useExampleQuery } from './queries/example'

export const services = {
    useExampleQuery,
}

export default (module: AppSettings) => {
    setContext(module)
    return { indicators: services }
}
