import { useDocumentsSDK } from '@app/components/multimodule/hooks'
import React from 'react'

const DocumentsPage: React.FC = () => {
    const { useDocuments } = useDocumentsSDK()

    const { data: documents, isLoading } = useDocuments()

    return (
        <div>
            {isLoading && <>Loading...</>}
            <ul>
                {documents.map(({ id }) => (
                    <li key={id}>{id}</li>
                ))}
            </ul>
        </div>
    )
}

export default DocumentsPage
