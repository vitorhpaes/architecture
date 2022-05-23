interface DefaultHeadersProps {
    [key: string]: string
}

export default {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    'content-type': 'application/json;charset=UTF-8',
    Expires: '0',
} as DefaultHeadersProps
