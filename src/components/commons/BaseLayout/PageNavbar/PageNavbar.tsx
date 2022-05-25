import React from 'react'

interface PageNavbarProps {
    children: React.ReactNode
}

const PageNavbar: React.FC<PageNavbarProps> = ({ children }) => {
    return (
        <div>
            {children}
            <div>logout</div>
            <div>user</div>
        </div>
    )
}

export default PageNavbar
