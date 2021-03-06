import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input, InputLeftElement, InputGroup } from '@chakra-ui/input'
import { Box, HStack } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import { animate, motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BsPhone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { MdPermIdentity } from 'react-icons/md';
import { Center, Container, Flex, VStack, Link, Stack, Text, Divider } from "@chakra-ui/react";
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Home() {
  const Router = useRouter()
  const easing = [.6, -.05, .01, 0.99]
  const fadInUp = {
    initial: {
      y: 60,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: .6,
        ease: easing

      }
    }
  }
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }



  return (
    <>
    <Box className='Static'  h='auto' bg='white'>
    
        {/* NAVBAR */}

        <Box borderBottom='1px solid #f2f2f2' id='home' >
          <HStack justifyContent='center' spacing='10' alignItems='center' h='10vh'>
            <Box>
              <Button onClick={() => Router.push('/')} fontSize='25' color='#6c63ff' fontWeight='bold'>Dev.Dennis</Button></Box>

            <HStack spacing='1' alignItems='center' color='black'>

              <AnchorLink href='#home'>
                <Button fontWeight='light'><Text>Home</Text></Button>
              </AnchorLink>
              <AnchorLink href='#about'>
                <Button fontWeight='light'>About</Button>
              </AnchorLink>
              <AnchorLink href='#project'>
                <Button fontWeight='light'>Project</Button>
              </AnchorLink>
              <AnchorLink href='#contact'>
                <Button fontWeight='light'>Contact</Button>
              </AnchorLink>
            </HStack>

          </HStack>
          <Divider />
        </Box>
        <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>



          <Box borderBottom='1px solid #f2f2f2' className='landing-page'>
            <motion.div variants={stagger}>
              <Flex className='flex' justifyContent='space-around' alignItems='center' >
                <VStack align='left' spacing='5'>
                  <motion.div variants={fadInUp}>
                    <Text color='#000' fontSize='70' fontWeight='medium' maxW='xl'>Dennis Charity</Text>
                    <Text color='#9da2ab' fontSize='2xl' fontWeight='normal'>I am a Frontend Developer and UI/UX Developer</Text>
                    <Text color='#9d9d9d' fontSize='sm'>Your satisfaction is our priority</Text>
                  </motion.div>
                  <AnchorLink href='#contact'>
                    <Button w='28' onClick={() => Router.push('/')} bg='#6c63ff' color='white' outline='2px solid white' _hover={{ outline: '2px solid #6c63ff', color: '#6c63ff', bg: 'white' }}>Let`s Talk</Button>
                  </AnchorLink>
                </VStack>
                <motion.div variants={fadInUp} pt='10'>
                  <Box className='main-png'>
                    <Image src='/first.svg' alt='dennis' width='500' height='500' />
                  </Box>

                </motion.div>
              </Flex>
            </motion.div>
          </Box>

        </motion.div>

        {/* ABOUT PAGE */}

        <motion.div exit={{ opacity: 3 }} initial='initial' animate='animate' h='100vh'>
          <Box pb='28' className='about' borderBottom='1px solid #f2f2f2' id='about'>
            <Flex className='about' justifyContent='space-around' h='fit-content' pt='10'>
              <motion.div variants={fadInUp} >
                <VStack justifyContent='left'>
                  <Text textAlign='left' fontSize='3xl' fontWeight='bold' color='black' pr='200'>About me</Text>

                  <HStack>
                    <Box border='1px solid #f2f2f2' maxW='400px' borderRadius='xl'>
                      <Text textAlign='left' p='4' color='#515660' fontWeight='medium'>
                        Hi, i am Temoye Dennis Charity. I am a 20 year old Boy. I am just interested in creating something beautiful for you with my Skills</Text>
                      <Text textAlign='left' p='4' color='#515660' fontWeight='medium'>I am a Frontend Developer</Text>
                      <Text textAlign='left' p='4' color='#515660' fontWeight='medium'>Tools: ReactJS, Chakra UI, Javascript, CSS</Text>
                      <Text textAlign='left' p='4' color='#515660'></Text>
                    </Box>

                  </HStack>
                </VStack>
              </motion.div>
              <VStack justifyContent='center' alignItems='center'>
                <Image src='/desk.jpg' alt='about' height='300' width='500' />
              </VStack>
            </Flex>

          </Box>
        </motion.div>

        {/* PROJECTS */}
        <VStack className='project' borderBottom='1px solid #f2f2f2' pt='10' pb='10' id='project'>
          <Text color='black' fontWeight='bold' fontSize='3xl'>Choose your favorite Project</Text>
          <Text fontSize='sm' color='black'>These are my projects</Text>

          <VStack pt='20'>
            <VStack flexDirection='column' align='center' justifyContent='space-around' border='1px solid #f2f2f2' pt='3' color='black' textAlign='left' p='5' fontSize='sm'>
              <Box border='1px solid #f2f2f2' h='auto' w='auto'>
                <Image src='/M-system.png' alt='management system' height='300' width='700px' />
              </Box>
              <Box maxW='56' pb='5'>
                <VStack justifyContent='left'>
                  <Text color='black' fontSize='xl'>Management system</Text>
                  <Text color='#cacaca'>Language: ReactJS</Text>
                  <Text color='#cacaca'>Styling Language: Chakra ui</Text>
                </VStack>
              </Box>
            </VStack>
            <VStack flexDirection='column' align='center' justifyContent='space-around' border='1px solid #f2f2f2' pt='3' color='black' textAlign='left' p='5' fontSize='sm'>
              <Box border='1px solid #f2f2f2'>
                <Image src='/idea.png' alt='management system' height='300' width='700px' />
              </Box>
              <Box maxW='56'>
                <VStack>
                  <Text color='black' fontSize='xl'>Ultrawit</Text>
                  <Text color='#cacaca'>UI/UX with figma</Text>

                </VStack>
              </Box>
            </VStack>
          </VStack>

        </VStack>

        {/* CONTACT PAGE */}
        <Box >
          <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate' id='contact'>




            <motion.div variants={fadInUp}>
              <Box className='Contact'>


                <VStack spacing='16' >
                  <Text textAlign='center' color='black' fontSize='4xl' fontWeight='bold'>Contact</Text>
                  <HStack>
                    <FormControl w='auto' color='black' bg='white' borderRadius='2xl' p='8' boxShadow='0 0 10px 0 #e6e6e6'>
                      <FormLabel>Name:</FormLabel>
                      <InputGroup>

                        <InputLeftElement
                          pointerEvents="none"
                          Icon mt='3' h='5' as={MdPermIdentity}

                        />

                        <Input type="text" placeholder="Name" borderColor='#9d9d9d' _hover={{ borderColor: '#9d9d9d' }} />
                      </InputGroup>
                      <FormLabel>Mail:</FormLabel>
                      <InputGroup>

                        <InputLeftElement
                          pointerEvents="none"
                          Icon mt='3' h='5' as={AiOutlineMail}

                        />

                        <Input type="email" placeholder="Email" borderColor='#9d9d9d' _hover={{ borderColor: '#9d9d9d' }} />
                      </InputGroup>
                      <FormLabel>Phone:</FormLabel>
                      <InputGroup>

                        <InputLeftElement
                          pointerEvents="none"
                          Icon mt='3' h='5' as={BsPhone}
                        />

                        <Input type="tel" placeholder="Phone Number" borderColor='#9d9d9d' _hover={{ borderColor: '#9d9d9d' }} />
                      </InputGroup>
                      <Box>
                        <FormLabel>Message:</FormLabel>
                        <Textarea _hover={{ borderColor: '#9d9d9d' }} borderColor='#9d9d9d' maxH='70' id="desc" />
                      </Box>
                      <Flex justifyContent='center' pt='5'>
                        <Button on fontSize='large' type='submit'
                          colorScheme='#9d9d9d'
                          variant='outline'
                          color='black'
                          border='1px solid #9d9d9d'
                          _hover={{
                            bgColor: '#9d9d9d',
                            color: 'white',
                          }}>
                          Submit
                        </Button>

                      </Flex>
                    </FormControl>

                  </HStack>


                </VStack>

                <HStack p='6' spacing='5' justifyContent='center'>
                  <Link color='black'>tdennis.developer@gmail.com</Link>
                  <Link color='black' _hover={{ bg: 'none' }} bg='none'>Phone: +234 816 354 5039</Link>
                </HStack>

              </Box>
            </motion.div>





          </motion.div>
        </Box>

      
    </Box>
    </>
  )
}
