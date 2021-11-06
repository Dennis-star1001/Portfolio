import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, Container, Flex, HStack, Link, Stack, Text, VStack } from '@chakra-ui/layout'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const Router = useRouter()
  return (
    <Box h='auto'>
      <Box bg='#6c63ff'>


        <Box h='90vh' >
          <Flex justifyContent='space-around' alignItems='center'>
            <VStack align='left' spacing='5'>
              <Box>
                <Text color='white' fontSize='80' fontWeight='medium' maxW='xl'>Dennis Charity</Text>
                <Text color='White' fontSize='2xl' fontWeight='normal'>I am a Frontend Developer and UI/UX Developer</Text>
                <Text color='#9d9d9d' fontSize='xl'>Your satisfaction is our priority</Text>
              </Box>
              <Button w='28'  onClick={() => Router.push('/Contact')} bg='#6c63ff' color='white' outline='2px solid white' _hover={{ outline: '2px solid #6c63ff', color: '#6c63ff', bg: 'white' }}>Let`s Talk</Button>
            </VStack>
            <Box pt='10'>
              <img src='/first.svg' width='600' />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
