import { store as documentsStore } from '@modules/documents/state/store'
import { store as indicatorsStore } from '@modules/indicators/state/store'
import { store as nonConformitiesStore } from '@modules/nonconformities/state/store'
import { store as risksStore } from '@modules/risks/state/store'

const { app: documentsStateAPP } = documentsStore.getState()
const { app: indicatorsStateAPP } = indicatorsStore.getState()
const { app: nonConformitiesStateAPP } = nonConformitiesStore.getState()
const { app: risksStateAPP } = risksStore.getState()

export default {
    app: {
        ...documentsStateAPP,
        ...indicatorsStateAPP,
        ...nonConformitiesStateAPP,
        ...risksStateAPP,
    },
}
