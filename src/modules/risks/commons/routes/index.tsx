import SystemRoute from '@app/components/commons/SystemRoute/SystemRoute'
import React from 'react'
// import * as APP_ROUTES from '../constants/routes'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import OrganizationalUnitList from '../../pages/OrganizationalUnit/OrganizationalUnitList'

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <SystemRoute
                    exact
                    path="/"
                    component={<OrganizationalUnitList />}
                />
            </Switch>
        </Router>
    )
}

export default Routes
