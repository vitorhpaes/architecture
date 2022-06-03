import React, { useCallback } from 'react'
import { useDocumentsSDK } from '@app/components/multimodule/hooks'
import { useAppDispatch, useAppSelector } from '@app/state/hook'
import { setToken } from '@app/state/slices/user'
import { useDocumentsSelector } from '../../state/hook'
import { setExample } from '../../state/slices/example'

const DocumentsPage: React.FC = () => {
    // acess module sdk
    const { useDocuments } = useDocumentsSDK()
    // acess global system sdk (only example)
    // const { useCurrentUser } = useSystemSDK()

    // use auxiliar hook for pagination
    // const { ref, inView } = useInView()

    // acess application global state
    const { token } = useAppSelector(({ app }) => app.user)
    // acess module state
    const { example } = useDocumentsSelector((state) => state.example)

    // create dispatchers
    const dispatch = useAppDispatch()

    // current module dispatcher handler
    const modifyExample = useCallback(
        (newExample: string) => dispatch(setExample(newExample)),
        []
    )
    // global state dispatcher handler
    const modifyToken = useCallback(
        (newToken: string) => dispatch(setToken(newToken)),
        []
    )

    // using sdk query
    const {
        data: documentsResponse,
        // fetchNextPage, -> @use-query pagination auxiliar
        isSuccess,
        isLoading,
    } = useDocuments()

    /* 
    -> handle pagination effect
    useEffect(() => {
        if (!inView) return
        fetchNextPage()
    }, [inView])
    */

    return (
        <div>
            {isLoading && <>Loading...</>}

            <ul>
                {/* example usage global application state from layout */}
                <li>userToken: {JSON.stringify(token)}</li>
                <button onClick={() => modifyToken(`${token} + example`)}>
                    change token
                </button>

                {/* example usage module application state from layout */}
                <li>documentsStateExample: {example}</li>
                <button onClick={() => modifyExample(`${example} + example`)}>
                    change module state
                </button>
            </ul>

            <ul>
                {/* query auxiliars usage (using pagination) */}
                {isSuccess &&
                    documentsResponse.pages.map(({ documents }) =>
                        documents.map((document, index) => {
                            if (documents.length - 1 !== index)
                                return <li key={document.id}>{document.id}</li>

                            return (
                                // <li key={document.id} ref={ref}>
                                <li key={document.id}>{document.name}</li>
                            )
                        })
                    )}

                {/* query auxiliars usage (not using pagination) */}
                {/* {isSuccess && documents.map((document, index) => <li key={document.uuid}>{document.name}</li>)} */}
            </ul>
        </div>
    )
}

export default DocumentsPage
