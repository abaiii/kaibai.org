import { Text } from "@chakra-ui/react"
import { Barlow } from "@next/font/google"

const barlow = Barlow({ weight: ['400', '500'], subsets: ['latin']})

const SectionTitle = ({ children }) => {
    return (
        <Text fontSize="2xl" className={barlow.className} mt={2} mb={2} fontWeight='semibold'>
            {children}
        </Text>
    )
}

export default SectionTitle