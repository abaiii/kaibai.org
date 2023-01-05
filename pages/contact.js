import Head from "next/head"
import Navbar from "../components/navbar"
import { Container, Divider, Link, Text } from "@chakra-ui/react"
import { Barlow, Nunito_Sans } from '@next/font/google'

const barlow = Barlow({ weight: ['500', '600'], subsets: ['latin'] })
const ns = Nunito_Sans({ weight: '400', subsets: ['latin'] })

const Contact = () => {
    return (
        <>
        <Head>
            <title>Contact me | Kaibai.org</title>
        </Head>
            <Navbar />
            <Container maxW='container.lg' className={ns.className} mt={10}>
                <Text fontSize='4xl' className={barlow.className}>
                    Contact me
                </Text>
                <Divider mt={2} mb={2} />
                You can find me on Twitter: <Link href="https://twitter.com/erykolde">@erykolde</Link>. (Yea I have a lot of err... cyber-identities, as I can
                describe, so calling me Ery is totally fine.) <br />
                Or, you can find me on Telegram: <Link href="https://t.me/ekyde">@ekyde</Link>.
            </Container>
        </>
    )
}

export default Contact