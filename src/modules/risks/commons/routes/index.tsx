import SystemRoute from '@app/components/commons/SystemRoute/SystemRoute'
import React from 'react'
import { Switch } from 'react-router-dom'
import OrganizationalUnitList from '../../pages/OrganizationalUnit/OrganizationalUnitList'

const Routes: React.FC = () => {
    return (
        <Switch>
            <SystemRoute
                exact
                path="/"
                component={<OrganizationalUnitList />}
            />
        </Switch>
    )
}

export default Routes
