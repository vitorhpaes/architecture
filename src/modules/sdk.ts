import NonConformitiesServices from './nonconformities/services/sdk'
import IndicatorsServices from './indicators/services/sdk'
import DocumentsServices from './documents/services/sdk'
import RisksServices from './risks/services/sdk'

const systemSDK = {
    nonconformities: NonConformitiesServices,
    indicators: IndicatorsServices,
    documents: DocumentsServices,
    risks: RisksServices,
}
export default systemSDK

export type iSystemSDK = typeof systemSDK
