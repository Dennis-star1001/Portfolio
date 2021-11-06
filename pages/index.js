import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, Container, Flex, HStack, Link, Stack, Text, VStack } from '@chakra-ui/layout'
import { animate, motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const Router = useRouter()
const easing = [.6, -.05, .01, 0.99]
  const fadInUp = {
    initial: {
      y :60,
      opacity :0
    },
    animate: {
      y :0,
      opacity :1,
      transition:{
        duration: .6,
        ease: easing

      }
    }
  }
  const stagger = {
    animate : {
      transition : {
        staggerChildren: 0.1
      }
    }
  }
  return (
    <motion.div exit={{opacity: 0}}  initial='initial'  animate='animate'>
    <Box h='auto'>
      <Box bg='#6c63ff'>


        <Box h='90vh' >
          <motion.div  variants={stagger}>
          <Flex justifyContent='space-around' alignItems='center'>
            <VStack align='left' spacing='5'>
              <motion.div variants={fadInUp}>
                <Text color='white' fontSize='80' fontWeight='medium' maxW='xl'>Dennis Charity</Text>
                <Text color='White' fontSize='2xl' fontWeight='normal'>I am a Frontend Developer and UI/UX Developer</Text>
                <Text color='#9d9d9d' fontSize='xl'>Your satisfaction is our priority</Text>
              </motion.div>
              <Button w='28'  onClick={() => Router.push('/Contact')} bg='#6c63ff' color='white' outline='2px solid white' _hover={{ outline: '2px solid #6c63ff', color: '#6c63ff', bg: 'white' }}>Let`s Talk</Button>
            </VStack>
            <motion.div variants={fadInUp} pt='10'>
              <Image src='/first.svg' alt='dennis' width='600'height='500' />
            </motion.div>
          </Flex>
          </motion.div>
        </Box>
      </Box>
    </Box>
    </motion.div>
  )
}
