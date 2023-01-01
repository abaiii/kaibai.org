import Head from "next/head"
import JiangContainer from "../../components/JiangContainer"
import Navbar from "../../components/navbar"
import PageTitle from "../../components/PageTitle"

const Koriot = () => {
    return (
        <>
            <Head>
                <title>Koriot Warrison | 2ROB | Kaibai.org</title>
            </Head>
            <Navbar />
            <JiangContainer>
                <PageTitle>
                    Koriot Warrison
                </PageTitle>
                
            </JiangContainer>
        </>
    )
}

export default Koriot