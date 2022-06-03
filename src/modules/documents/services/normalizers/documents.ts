export type DocumentsResponseProps = Array<{
    id: string
    document_name: string
}>
export interface NormalizedDocument {
    id: string
    name: string
}

export interface NormalizedDocumentsResponse {
    documents: NormalizedDocument[]
    nextPage: number
}

export const normalizeDocuments = (
    documents: DocumentsResponseProps,
    pageNumber: number
): NormalizedDocumentsResponse => ({
    documents:
        documents.map((document) => ({
            id: document.id,
            name: document.document_name,
        })) ?? [],
    nextPage: documents ? pageNumber + 1 : null,
})
