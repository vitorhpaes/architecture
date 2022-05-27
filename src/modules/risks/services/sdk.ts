import { AppSettings } from '@config/types/config/app'
import { useOrganizationalUnits } from './queries/tasks'
import { setContext } from '@app/modules/context'

export const services = {
    useOrganizationalUnits,
}

export default (module: AppSettings) => {
    setContext(module)
    return { risks: services }
}
