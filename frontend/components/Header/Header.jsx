"use client"
import { Flex } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Header = () => {
  return (
    <Flex
        justifyContent="space-between"
        alignItems="center"
        p="2rem"
        bg="rgb(9,22,46)"
      >
        <img src="/images/logo01.png" alt="Logo" style={{
    width: '100px',
    height: '100px',
    borderRadius: '50%', // rend l'image ronde
    objectFit: 'cover' // assure que l'image garde ses proportions
  }}/>
        <ConnectButton />
    </Flex>
  )
}

export default Header