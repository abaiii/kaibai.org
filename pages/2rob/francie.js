import Head from "next/head"
import JiangContainer from "../../components/JiangContainer"
import Navbar from "../../components/navbar"
import PageTitle from "../../components/PageTitle"

const Francie = () => {
    return (
        <>
            <Head>
                <title>Francie Jiang | 2ROB | Kaibai.org</title> 
            </Head>
            <Navbar />
            <JiangContainer>
                <PageTitle>
                    Francie Jiang
                </PageTitle>
                Born on January 28, 2006, Francie Jiang comes from Pasadena, CA and has lived in Saveur, the provincial capital of Dualduck province, for a long time. <br />
                As a Saveuran, she is open to diversity and is used to experiencing culture shocks. <br />
                For example, her favorite main dish is salty <em>zongzi</em> from Saltur, and her favorite dessert is sweet <em>zongzi</em> from Melliculus, considering that most Salturan and Melliculan cannot tolerate others consuming the zongzi of the flavor of the city of each other. <br />
                She is currently studying at <strong>Dualducan Provincial Experimental</strong>, a top senior high in the province.
            </JiangContainer>
        </>
    )
}

export default Francie