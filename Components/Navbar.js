import { Box, Button, Center, Container, Flex, HStack, VStack, Link, Stack, Text, Divider } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";


export default function Navbar() {
  const Router = useRouter()

  return (
    <>
      <Box bg='white' borderBottom='1px solid #f2f2f2'>
        <HStack justifyContent='space-around' alignItems='center' pl='10' h='10vh'>
          <Box>
            <Button onClick={() => Router.push('/')} fontSize='25' color='#6c63ff' fontWeight='bold'>Dev.Dennis</Button></Box>
          
            <HStack spacing='20' alignItems='center' color='black'>
              <Button   onClick={() => Router.push('/')}>
                <Text
                 p='5'
                //  _hover={{
                //    borderLeft:'2px solid white',
                //      borderRight:'2px solid white',
                //       borderRadius:'15px'
                //       }}
                >
                        Home
                        </Text>
                        </Button>
              <Button onClick={() => Router.push('/')}>About</Button>
              <Button onClick={() => Router.push('/')}>Contact</Button>
              <Button onClick={() => Router.push('/')}>Projects</Button>
            </HStack>
          
        </HStack>
        <Divider/>
      </Box>
    </>
  )
}
