import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link } from '@chakra-ui/react'

const NoticeableLink = ({ href, children }) => {
    return (
        <>
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                <Link href={href}>
                    {children}
                </Link>
                <ExternalLinkIcon ml={1} />
            </span>

        </>
    )
}

export default NoticeableLink