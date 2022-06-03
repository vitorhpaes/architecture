import { genebraRequest } from '@app/api/requests'
import { useQuery } from 'react-query'

const UNIT_PREFIX = '/organizational-unit-configuration'

const fetchExample = async () =>
    await genebraRequest({
        url: `${UNIT_PREFIX}/organizational-unit/responsible/me`,
    })

export const useExampleQuery = () =>
    useQuery(['indicators-example-query'], async () => {
        const response = await fetchExample()
        return response
    })
