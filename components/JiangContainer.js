import { Container } from "@chakra-ui/react";
import { Nunito_Sans } from "@next/font/google";

const ns = Nunito_Sans({ weight: '400', subsets: ['latin']})

const JiangContainer = ({ children }) => {
    return (
        <>
            <Container fontSize='lg' maxW='container.lg' mt={10} className={ns.className}>
                {children}
            </Container>
        </>
    )
}

export default JiangContainer 