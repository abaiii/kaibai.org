import { Container, Box, Text, Link, Button, useControllableProp, useControllableState } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Inter } from '@next/font/google'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

const Navbar = () => {

    const [toggled, setToggled] = React.useState(false)

    const [isToggled, setIsToggled] = useControllableState({
        toggled,
        onchange: setToggled
    })

    return (
        <Container maxW='container.md' mt={8} display='flex' flexDir={{ base: 'column', md: 'row' }}>

            <Box w='100%' display='flex' alignItems='center'>
                <Box w='100%'>
                    <Text fontSize='xl' fontWeight='semibold' className={inter.className}>
                        <Link href='/' as={NextLink}>
                            Francie Jiang
                        </Link>
                    </Text>
                </Box>

                <Box display={{ base: 'flex', md: 'none' }} w='full' justifyContent='flex-end' >
                    <Button onClick={
                        () => {
                            var links = document.querySelector('#links')
                            if (!isToggled) {
                                links.style.display = 'flex'
                                links.style.flexDirection = 'column'
                                setIsToggled(true)
                            } else {
                                links.style.display = 'none'
                                setIsToggled(false)
                            }
                        }
                    } display='flex' fontSize='xl' h='2em' w='2em'>
                        <HamburgerIcon />
                    </Button>
                </Box>
            </Box>



            <Box pl={4} display={{ base: 'none', md: 'flex' }} gap={4} alignItems={{ base: 'flex-start', md: 'center' }} justifyContent={{ base: 'flex-start', md: 'flex-end' }} width={{ base: 'full' }} className={inter.className} mt={{ base: 2, md: 0 }} id='links'>
                {/* <Link href='https://i.kaibai.org' as={NextLink} isExternal>Bai with us!</Link> */}
                <Link href='https://blog.kaibai.org' as={NextLink} isExternal>My blog</Link>
                <Link href='/contact' as={NextLink}>Contact me</Link>
                <Link href='/blogroll' as={NextLink}>Friends</Link>
            </Box>

        </Container>
    )
}

export default Navbar