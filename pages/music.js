import { Container, Text, Box } from "@chakra-ui/react"
import { Inter } from "@next/font/google"
import Head from "next/head"
// import { ReactDOM } from "react"

const inter = Inter({ subsets: ['latin'] })

const musics = [
    {
        musicType: 'bilibili',
        musicIdOrUrl: 'https://www.bilibili.com/video/BV12S4y1e72P/?spm_id_from=333.337.search-card.all.click'
    }
]

const MusicBox = ({ musicType, musicIdOrUrl }) => {
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' mt={2} mb={2}>
            <Text fontSize='xl'>
                {musicType}
            </Text>
        </Box>
    )
}

const Music = () => {

    return (
        <>
            <Head>
                <title>Music | Kaibai.org</title>
            </Head>
            <Container maxW='container.md' mt={10} fontSize='lg'>
                <Text fontSize='3xl' className={inter.className} >
                    Myu-sic!
                </Text>
                Francie is listening to the following recently.
                <div id='music-list' style={{ marginTop: '1em', marginBottom: '1em' }}>
                    
                </div>
            </Container>

        </>
    )



}

export default Music