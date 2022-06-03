import { setContext } from '@app/modules/context'
import { AppSettings } from '@config/types/config/app'
import { useDocuments } from './queries/documents'

export const services = {
    useDocuments,
    useDocumentsProperties: () => {},
}

const createSDK = (module: AppSettings) => {
    setContext(module)
    return { documents: services }
}

export default createSDK
