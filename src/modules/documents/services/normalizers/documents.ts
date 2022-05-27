export type DocumentsResponseProps = Array<{ id: string }>

export interface NormalizedDocumentsResponse {
    documents: Array<{
        id: string
    }>
    nextPage: number
}

export const normalizeDocuments = (
    documents: DocumentsResponseProps,
    pageNumber: number
): NormalizedDocumentsResponse => ({
    documents: documents ?? [],
    nextPage: documents ? pageNumber + 1 : null,
})
