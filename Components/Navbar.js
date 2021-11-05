import { Box, Button, Center, Container, Flex, HStack, VStack, Link, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";


export default function Navbar() {
  const Router = useRouter()

  return (
    <>
      <Box bg='#e6e6e6' border='none'>
        <HStack justifyContent='space-around' alignItems='center' pl='10' h='10vh'>
          <Box><Button  onClick={() => Router.push('/')} fontSize='25' color='#6c63ff' fontWeight='bold'>Dev.Dennis</Button></Box>
          
            <HStack spacing='20' alignItems='center'>
              <Button   onClick={() => Router.push('/')}>Home</Button>
              <Button   onClick={() => Router.push('/About')}>About</Button>
              <Button   onClick={() => Router.push('/Contact')}>Contact</Button>
              <Button   onClick={() => Router.push('/Projects')}>Projects</Button>
            </HStack>
          
        </HStack>
      </Box>
    </>
  )
}
