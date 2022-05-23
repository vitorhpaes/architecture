import {
    STORAGE_DIVISOR_KEYS,
    STORAGE_PRIMARY_KEY,
} from '@config/constants/storage'
import { STORAGE_DIVISOR } from '@config/types/config/storage'

const getFromStorage = (divisor: STORAGE_DIVISOR, key: string) => {
    return localStorage.getItem(
        `${STORAGE_PRIMARY_KEY}/${STORAGE_DIVISOR_KEYS[divisor]}/${key}`
    )
}

const setStorageValue = (
    divisor: STORAGE_DIVISOR,
    key: string,
    value: string | object
) => {
    const valueToStorage: string =
        typeof value === 'string' ? value : JSON.parse(String(value))
    return localStorage.setItem(
        `${STORAGE_PRIMARY_KEY}/${STORAGE_DIVISOR_KEYS[divisor]}/${key}`,
        valueToStorage
    )
}

export default {
    getFromStorage,
    setStorageValue,
}
