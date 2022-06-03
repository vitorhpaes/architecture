import React, { useEffect } from 'react'
import { useDocumentsSDK } from '@app/components/multimodule/hooks'
import { useInView } from 'react-intersection-observer'
import { useAppDispatch, useAppSelector } from '@app/state/hook'
import { setToken } from '@app/state/slices/user'
import { useDocumentsSelector } from '../../state/hook'
import { setExample } from '../../state/slices/example'

const DocumentsPage: React.FC = () => {
    const { useDocuments } = useDocumentsSDK()
    const { ref, inView } = useInView()

    const dispatch = useAppDispatch()
    const { token } = useAppSelector((state) => state.app.user)

    const { example } = useDocumentsSelector((state) => state.example)

    const modifyToken = (newToken: string) => dispatch(setToken(newToken))
    const modifyExample = (newExample: string) =>
        dispatch(setExample(newExample))

    const {
        data: documentsResponse,
        fetchNextPage,
        isSuccess,
        isLoading,
    } = useDocuments()

    useEffect(() => {
        if (!inView) return
        fetchNextPage()
    }, [inView])

    return (
        <div>
            {isLoading && <>Loading...</>}

            <ul>
                <li>userToken: {JSON.stringify(token)}</li>
                <button onClick={() => modifyToken(`${token}123`)}>
                    token
                </button>
                <li>documentsStateExample: {example}</li>
                <button onClick={() => modifyExample(`${example} + example`)}>
                    example
                </button>
            </ul>

            <ul>
                {isSuccess &&
                    documentsResponse.pages.map(({ documents }) =>
                        documents.map((document, index) => {
                            if (documents.length - 1 !== index)
                                return <li key={document.id}>{document.id}</li>

                            return (
                                <li key={document.id} ref={ref}>
                                    {document.name}
                                </li>
                            )
                        })
                    )}
            </ul>
        </div>
    )
}

export default DocumentsPage
