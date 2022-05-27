import { AppSettings } from '@config/types/config/app'
import { setContext } from '@app/modules/context'

export const services = {
    useIndicators: () => {},
}

export default (module: AppSettings) => {
    setContext(module)
    return { indicators: services }
}
