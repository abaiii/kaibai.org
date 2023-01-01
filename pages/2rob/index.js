import { ListItem, UnorderedList } from "@chakra-ui/react"
import Head from "next/head"
import Navbar from "../../components/navbar"
import JiangContainer from "../../components/JiangContainer"
import PageTitle from "../../components/PageTitle"
import NoticeableLink from "../../components/NoticeableLink"
import SectionTitle from "../../components/SectionTitle"


const SecondRoadOfBells = () => {
    return (
        <>
            <Head>
                <title>2 Rd of Bells | Kaibai.org</title>
            </Head>
            <Navbar />
            <JiangContainer>
                <PageTitle>
                    2 Road of Bells
                </PageTitle>
                2 Road of Bells is the place where all of the identities of Francie inhabits, including:

                <SectionTitle>
                    Done Writing
                </SectionTitle>
                <UnorderedList mt={2}>
                    <ListItem>Her real-life identity (whose information is redacted)</ListItem>
                    <ListItem><NoticeableLink href='2rob/francie/'>Francie Jiang</NoticeableLink></ListItem>
                    {/* <ListItem><NoticeableLink href='2rob/diana/'>Diana Jiang</NoticeableLink> (well, this is technically Francie's elder sister, so I treat it like my own OC rather than my own identity) </ListItem> */}
                    {/* <ListItem><NoticeableLink href='2rob/ery/'>Ery Kolde</NoticeableLink></ListItem> */}
                    {/* <ListItem><NoticeableLink href='2rob/liz/'>Liz Janet</NoticeableLink></ListItem> */}
                    {/* <ListItem><NoticeableLink href='2rob/koriot/'>Koriot Warrison</NoticeableLink></ListItem> */}
                </UnorderedList>

                <SectionTitle>
                    Half-done
                </SectionTitle>
                <UnorderedList mt={2}>
                    <ListItem><NoticeableLink href='2rob/diana/'>Diana Jiang</NoticeableLink> (well, this is technically Francie&apos;s elder sister, so I treat it like my own OC rather than my own identity) </ListItem>
                </UnorderedList>

                <SectionTitle>
                    Not done
                </SectionTitle>
                <UnorderedList mt={2}>
                    <ListItem>Ery Kolde</ListItem>
                    <ListItem>Liz Janet</ListItem>
                    <ListItem>Koriot Warrison</ListItem>
                </UnorderedList>
            </JiangContainer>
        </>
    )
}

export default SecondRoadOfBells