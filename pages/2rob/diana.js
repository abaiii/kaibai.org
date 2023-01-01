import { Divider } from "@chakra-ui/react"
import Head from "next/head"
import Image from "next/image"
import JiangContainer from "../../components/JiangContainer"
import Navbar from "../../components/navbar"
import NoticeableLink from "../../components/NoticeableLink"
import ChineseSpan from '../../components/ChineseSpan'

const Awu = () => {
    return (
        <>
            <Head>
                <title>Diana Jiang | 2ROB | Kaibai.org</title>
            </Head>
            <Navbar />
            <JiangContainer>
                <Image src='/awu.png' width={256} height={64} alt='Diana Jiang'></Image>
                <Divider mb={2} mt={2} />
                Diana Jiang [「<ChineseSpan>江柄浯</ChineseSpan>」 in Chinese, also referred to as 「<ChineseSpan>啊呜</ChineseSpan>」(<em>awu</em>, as is handwritten in the title section, which is only called by her girlfriend-slash-housemate <NoticeableLink href='koriot'>Koriot Warrison</NoticeableLink>.)] <br />
                As a teacher-to-be studying at Dualducan Normal University (「<ChineseSpan>鸭鸭师范大学</ChineseSpan>」, abbreviated as <strong>NYA</strong>), she is fond of acting as catgirl when being alone with Koriot.
            </JiangContainer>
        </>
    )
}

export default Awu