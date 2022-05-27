import { useInfiniteQuery } from 'react-query'
import { genebraRequest } from '@app/api/requests'
import {
    DocumentsResponseProps,
    normalizeDocuments,
} from '../normalizers/documents'

const fetchDocuments = async (pageParam: number) =>
    await genebraRequest({
        method: 'GET',
        url: 'analysis',
        params: {
            _page: pageParam,
            _limit: 50,
        },
    })

export const useDocuments = () => {
    return useInfiniteQuery(
        'documents',
        async ({ pageParam = 1 }) => {
            const { data }: { data: DocumentsResponseProps } =
                await fetchDocuments(pageParam)
            return normalizeDocuments(data, pageParam)
        },
        {
            getNextPageParam: (lastPage) => lastPage.nextPage,
            getPreviousPageParam: (firstPage) => firstPage.nextPage - 1,
        }
    )
}
