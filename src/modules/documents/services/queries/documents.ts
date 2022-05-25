import { useQuery } from 'react-query'
import { genebraRequest } from '@app/api/requests'
import {
    DocumentsResponseProps,
    normalizeDocuments,
} from '../normalizers/documents'

const fetchDocuments = async () =>
    await genebraRequest({
        url: '/documents',
    })

export const useDocuments = () =>
    useQuery('documents', async () => {
        const { data: response }: { data: DocumentsResponseProps } =
            await fetchDocuments()

        const documents = normalizeDocuments(response)
        return documents
    })
