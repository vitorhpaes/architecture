import { services as NonConformitiesServices } from './nonconformities/services/sdk'
import { services as IndicatorsServices } from './indicators/services/sdk'
import { services as DocumentsServices } from './documents/services/sdk'
import { services as RisksServices } from './risks/services/sdk'

const systemSDK = {
    nonconformities: NonConformitiesServices,
    indicators: IndicatorsServices,
    documents: DocumentsServices,
    risks: RisksServices,
}
export default systemSDK

export type iSystemSDK = typeof systemSDK
