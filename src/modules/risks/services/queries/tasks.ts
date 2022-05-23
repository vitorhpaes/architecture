import { genebraRequest } from '@app/api/requests'
import { useQuery } from 'react-query'

const UNIT_PREFIX = '/organizational-unit-configuration'

const fetchOrganizationalUnit = async () =>
    await genebraRequest({
        url: `${UNIT_PREFIX}/organizational-unit/responsible/me`,
    })

export const useOrganizationalUnits = () =>
    useQuery(['organizational-unit-list'], async () => {
        const response = await fetchOrganizationalUnit()
        return response
    })
