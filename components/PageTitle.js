import { Divider, Text } from "@chakra-ui/react"
import { Barlow } from "@next/font/google"

const barlow = Barlow({ weight: ['500', '400', '600'], subsets: ['latin'] })

const PageTitle = ({ children }) => {
    return (
        <>
            <Text fontSize='4xl' fontWeight='semibold' className={barlow.className}>
                {children}
            </Text>
            <Divider mt={2} mb={2} />
        </>
    )
}

export default PageTitle