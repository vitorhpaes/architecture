import { HTTP_METHODS } from '../types/config/HTTPMethods'
interface HTTPMethodsList {
    [key: string]: HTTP_METHODS
}

export default {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',

    HEAD: 'HEAD',
    TRACE: 'TRACE',
    OPTIONS: 'OPTIONS',
} as HTTPMethodsList
