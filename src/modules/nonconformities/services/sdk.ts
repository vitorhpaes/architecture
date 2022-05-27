import { AppSettings } from '@config/types/config/app'
import { setContext } from '@app/modules/context'

export const services = {
    useNonConformities: () => {},
}

export default (module: AppSettings) => {
    setContext(module)
    return { nonconformities: services }
}
