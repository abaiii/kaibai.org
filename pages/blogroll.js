import Head from "next/head"
import { Container, Box, LinkBox, Text, LinkOverlay, Divider, Link } from "@chakra-ui/react"
import Image from "next/image"
import Navbar from "../components/navbar"
import { Barlow, Nunito_Sans, Noto_Sans_SC } from '@next/font/google'

const barlow = Barlow({ weight: ['500', '600'], subsets: ['latin'] })
const ns = Nunito_Sans({ weight: '400', subsets: ['latin'] })
const nssc = Noto_Sans_SC({ weight: ['400', '500'], subsets: ['chinese-simplified'] })

const RollEntry = ({ name, icon, slogan, url }) => {
    return (
        <>
            <LinkBox maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Box display='flex'>
                    <Image
                        src={icon}
                        width={84}
                        height={84}
                        alt='Lufs&apos; avatar'
                    ></Image>
                    <Box display='flex' w='full' justifyContent='center' alignItems='center'>
                        <Box>
                            <LinkOverlay href={url}>
                                <Text fontSize='lg' className={nssc.className}>
                                    {name}
                                </Text>
                            </LinkOverlay>
                            <Text fontSize='md'>
                                {slogan}
                            </Text>
                        </Box>

                    </Box>

                </Box>
            </LinkBox>
        </>
    )
}

const Blogroll = () => {
    return (
        <>
            <Head>
                <title>My friends | Kaibai.org</title>
            </Head>
            <Navbar />
            <Container maxW='container.md' mt={10} className={ns.className}>
                <Text fontSize='3xl' className={barlow.className}>
                    My friends
                </Text>
                If you want to display your site on this page, feel free to visit <Link href='https://github.com/franci-e/blogrolls'>here</Link>.
                <Divider mt={2} mb={2} />
                <RollEntry name="Lufs' Blog" url='https://blog.isteed.cc' slogan='Life feed on negative entropy' icon='https://cdn.isteed.cc/avatar/avatar-256x256.png' />
            </Container>
        </>
    )
}

export default Blogroll