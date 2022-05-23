import React from 'react'
import BaseLayout from '../../BaseLayout/BaseLayout'
import { SystemPageProps } from '../../SystemRoute/SystemRoute'
import TrackingProvider from '../../TrackingProvider/TrackingProvider'
import AuthProvider from '../AuthProvider'

interface WrapperProps {
    children: JSX.Element
}
const QualyTeamIntegrationProvider: React.FC<WrapperProps> = ({ children }) => (
    <>QualyTeamIntegration - {children}</>
)

const apply = {
    authentication: (page: JSX.Element) => <AuthProvider>{page}</AuthProvider>,
    baseLayout: (page: JSX.Element) => <BaseLayout>{page}</BaseLayout>,
    qualyTeamIntegration: (page: JSX.Element) => (
        <QualyTeamIntegrationProvider>{page}</QualyTeamIntegrationProvider>
    ),
    tracking: (page: JSX.Element) => (
        <TrackingProvider>{page}</TrackingProvider>
    ),
}

const usePageWrapper = (page: JSX.Element, config: SystemPageProps) => {
    let finalPage = <>{page}</>

    if (config.hasPermissionChecker) finalPage = apply.authentication(finalPage)

    if (config.hasBaseLayout) finalPage = apply.baseLayout(finalPage)

    if (config.hasQualyTeamIntegration)
        finalPage = apply.qualyTeamIntegration(finalPage)

    if (config.hasTracking) finalPage = apply.tracking(finalPage)

    return <>{finalPage}</>
}

export default usePageWrapper
