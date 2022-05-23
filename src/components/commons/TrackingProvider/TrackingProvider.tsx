import React from 'react'

interface TrackingProviderProps {
    children: React.ReactNode
}

const TrackingProvider: React.FC<TrackingProviderProps> = ({ children }) => {
    return <>Tracking Provider - {children}</>
}

export default TrackingProvider
