export type DocumentsResponseProps = Array<{ id: string }>

export const normalizeDocuments = (documents: DocumentsResponseProps) =>
    documents
