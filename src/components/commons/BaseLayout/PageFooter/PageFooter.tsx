import React from 'react'
import classNames from 'classnames'
// import { Paragraph } from '../paragraph'
import { useTranslations } from '@app/components/translations/TranslationsProvider'

import './PageFooter.scss'

interface PageFooterProps {
    className?: string
}

const PageFooter: React.FC<PageFooterProps> = ({ className }) => {
    const { translate } = useTranslations()

    return (
        <div className={classNames('col-md-12', className, 'footer')}>
            <p>{translate('qualyteamCopyright')}</p>
        </div>
    )
}

export default PageFooter
