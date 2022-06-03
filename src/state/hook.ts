import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RisksDispatch } from '@modules/risks/state/store'
import { DocumentsDispatch } from '@modules/documents/state/store'
import { NonConformitiesDispatch } from '@modules/nonconformities/state/store'
import { IndicatorsDispatch } from '@modules/indicators/state/store'
import appStore from '@modules/commons/store/state'

export const useAppSelector: TypedUseSelectorHook<typeof appStore> = useSelector

type AppDispatch = DocumentsDispatch &
    IndicatorsDispatch &
    NonConformitiesDispatch &
    RisksDispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
