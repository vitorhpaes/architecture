import SystemRoute from '@app/components/commons/SystemRoute/SystemRoute'
import React from 'react'
import { Switch } from 'react-router-dom'
import DocumentsPage from '../../pages/documents/DocumentsPage'

const Routes: React.FC = () => {
    return (
        <Switch>
            <SystemRoute path="/" exact component={<DocumentsPage />} />
        </Switch>
    )
}

export default Routes
