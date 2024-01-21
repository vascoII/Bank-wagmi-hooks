"use client"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Flex } from '@chakra-ui/react'

const Layout = ({ children }) => {
  return (
    <Flex
      direction="column"
      minHeight="100vh"
      justifyContent="center"
      style={{
        backgroundImage: 'url(/images/layout01.png)', // chemin vers votre image de fond
        backgroundSize: 'cover', // couvre tout le fond
        backgroundPosition: 'center', // centre l'image de fond
        backgroundRepeat: 'no-repeat', // empêche la répétition de l'image
      }}
    >
        <Header />
        <Flex
          grow="1"
          p="2rem"
        >
        {children}
        </Flex>
        <Footer />
    </Flex>
  )
}

export default Layout