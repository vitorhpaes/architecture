import React, { useEffect } from 'react'
import { useDocumentsSDK } from '@app/components/multimodule/hooks'
import { useInView } from 'react-intersection-observer'

const DocumentsPage: React.FC = () => {
    const { useDocuments } = useDocumentsSDK()
    const { ref, inView } = useInView()

    const {
        data: documentsResponse,
        fetchNextPage,
        isSuccess,
        isLoading,
        isError,
    } = useDocuments()

    useEffect(() => {
        if (!inView) return
        fetchNextPage()
    }, [inView])

    return (
        <div>
            {isLoading && <>Loading...</>}
            {isError && <>isError</>}
            <ul>
                {isSuccess &&
                    documentsResponse.pages.map(({ documents }) =>
                        documents.map((document, index) => {
                            if (documents.length - 1 !== index)
                                return <li key={document.id}>{document.id}</li>

                            return (
                                <li key={document.id} ref={ref}>
                                    {document.id}
                                </li>
                            )
                        })
                    )}
            </ul>
        </div>
    )
}

export default DocumentsPage
