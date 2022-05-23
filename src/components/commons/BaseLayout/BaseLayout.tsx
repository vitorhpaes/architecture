import React from 'react'
import PageFooter from './PageFooter/PageFooter'

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            {children}
            <PageFooter />
        </div>
    )
}

export default BaseLayout
