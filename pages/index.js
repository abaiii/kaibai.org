import Head from 'next/head'
import { Container, Text, Divider, Code, Link } from '@chakra-ui/react'
import { Barlow, Nunito_Sans, Fira_Code } from '@next/font/google'
import Navbar from '../components/navbar'
import { ExternalLinkIcon } from '@chakra-ui/icons'


const barlow = Barlow({ weight: ['500', '600'], subsets: ['latin'] })
const ns = Nunito_Sans({ weight: '400', subsets: ['latin'] })
const fc = Fira_Code({ weight: '400', subsets: ['latin'] })


const SectionTitle = ({ children }) => {
  return (
    <Text fontSize="2xl" className={barlow.className} mt={2} mb={2} fontWeight='semibold'>
      {children}
    </Text>
  )
}

const Cd = ({ children }) => {
  return (
    <Code className={fc.className}>
      {children}
    </Code>
  )
}

const NoticeableLink = ({ href, children }) => {
  return (
    <>
      <span style={{display: 'inline-flex', alignItems: 'center'}}>
        <Link href={href}>
          {children}
        </Link>
        <ExternalLinkIcon ml={1} />
      </span>

    </>
  )
}

const Bai = () => {
  return (
    <>
      <Head>
        <title>Kaibai.org | A personal website of Francie Jiang</title>
      </Head>
      <Navbar />

      <Container maxW='container.md' mt={10} className={ns.className} fontSize='lg'>

        <Text fontSize='4xl' className={barlow.className}>
          Francie Jiang
        </Text>

        <Divider />

        <SectionTitle>
          A brief introduction
        </SectionTitle>

        Francie Jiang is a grandiloquent, loquacious and prosaic senior high student currently inhabiting
        in China. <br />

        She is endeavouring to - just as the domain name she owned indicated - kaibai <sup><Link href='#footnote-1'>(1)</Link></sup> . <br />

        <SectionTitle>
          Languages used
        </SectionTitle>

        Francie Jiang speaks Chinese primarily and English frequently. Yes, there is no conflict in the
        previous sentence. <br />

        She writes <Cd>Javascript</Cd> mainly now, but she wrote <Cd>[C++, Python]</Cd> before so she is familiar with them.

        <SectionTitle>
          Games played
        </SectionTitle>

        Minecraft. She has a Minecraft bedrock server. Sometimes she plays osu! and other rhythm games (such as Phigros, but rarely).

        <SectionTitle>
          Musics listened
        </SectionTitle>

        Francie likes ZUTOMAYO, yama, and YOASOBI.
        {/* You may turn to <NoticeableLink href='/music'>this page</NoticeableLink> to see what she is listening to recently. */}

        <SectionTitle>
          Behind this site
        </SectionTitle>
        
        This is the first site I&apos;ve ever written using Next.js.

        <Divider mt={1} mb={1} />

        <div id='footnote-1'>
          <Text fontSize='md'>
            (1) for those who doesn&apos;t know - Kaibai is an action when you say fxxk off to a situation that has no chance of
            becoming any better and leave it what it&apos;s like. Also check out <NoticeableLink href='https://www.bilibili.com/video/BV12S4y1e72P/?spm_id_from=333.337.search-card.all.click'>the song &apos;Kaibai&apos; on Bilibili</NoticeableLink>.
          </Text>
        </div>

      </Container>
    </>
  )
}

export default Bai