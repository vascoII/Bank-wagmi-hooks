"use client"
import { Flex, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex
        p="2rem"
        justifyContent="center"
        alignItems="center"
        bg="rgb(9,22,46)"
    >
        <Text>All rights reserved &copy; VascoII {new Date().getFullYear()}</Text>
    </Flex>
  )
}

export default Footer