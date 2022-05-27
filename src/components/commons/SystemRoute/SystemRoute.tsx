import React from 'react'
import { Route } from 'react-router-dom'
import usePageWrapper from '../PanelConfiguration/hooks/usePageWrapper'

export interface SystemPageProps {
    hasBaseLayout?: boolean
    hasPermissionChecker?: boolean
    hasQualyTeamIntegration?: boolean
    hasTracking?: boolean
}

interface SystemRouteProps extends SystemPageProps {
    path: string
    exact?: boolean
    component: JSX.Element
}

const SystemRoute: React.FC<SystemRouteProps> = ({
    component,
    hasBaseLayout = true,
    hasPermissionChecker = true,
    hasQualyTeamIntegration = true,
    hasTracking = true,
    ...props
}: SystemRouteProps) => {
    const PageWithWrappers = usePageWrapper(component, {
        hasBaseLayout,
        hasPermissionChecker,
        hasQualyTeamIntegration,
        hasTracking,
    })
    return <Route {...props} component={() => PageWithWrappers} />
}

export default SystemRoute
