import { HTTP_METHODS } from '@config/types/config/HTTPMethods'
import HTTPMethods from '@config/constants/HTTPMethods'
import { getContext } from './../modules/context'

import defaultHeaders from './headers'
import storage from '@app/driver/storage'
import axios, { AxiosRequestHeaders } from 'axios'

interface GenebraRequest {
    url: string
    body?: any
    method?: HTTP_METHODS
    params?: { [key: string]: any } | null
    hasToken?: boolean
    headers?: AxiosRequestHeaders
}

export const genebraRequest = async ({
    url,
    body = {},
    params = null,
    method = HTTPMethods.GET,
    hasToken = true,
    headers = {},
}: GenebraRequest) => {
    const { baseURL } = getContext()

    Object.keys(defaultHeaders).map((key) => {
        headers = { ...headers, key: defaultHeaders[key] }
    })

    if (hasToken) {
        const token = storage.getFromStorage('authorization', 'token')
        headers.Authorization = `Bearer ${token}`
    }

    const finalEndpoint = `${baseURL}/${url}`

    return await axios.request({
        url: finalEndpoint,
        method,
        headers,
        data: body,
        params,
    })
}
