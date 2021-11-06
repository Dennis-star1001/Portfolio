import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box, Flex, Link, Stack, Text, VStack } from "@chakra-ui/layout";
import { HStack, Icon, Textarea } from "@chakra-ui/react";
import { BsPhone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai'; MdPermIdentity
import { MdPermIdentity } from 'react-icons/md';
import { motion } from "framer-motion";
const Contact = () => {
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
  return (
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <Box bg='#6c63ff' h='90vh'>
        <Text textAlign='center' color='white' fontSize='4xl' fontWeight='bold'>Contact</Text>
        <Flex justifyContent='space-around' alignItems='center' pt='3' >
          <motion.div variants={fadInUp}>
            <FormControl p='8' bg='white' maxW='500' border='none' borderRadius='2xl'>
              <VStack spacing='5'>
                <HStack>
                  <FormControl w='80'>
                    <FormLabel>Name:</FormLabel>
                    <InputGroup>

                      <InputLeftElement
                        pointerEvents="none"
                        Icon mt='3' h='5' as={MdPermIdentity}

                      />

                      <Input type="tel" placeholder="Name" />
                    </InputGroup>
                    <FormLabel>Mail:</FormLabel>
                    <InputGroup>

                      <InputLeftElement
                        pointerEvents="none"
                        Icon mt='3' h='5' as={AiOutlineMail}

                      />

                      <Input type="tel" placeholder="Email address" />
                    </InputGroup>
                    <FormLabel>Phone:</FormLabel>
                    <InputGroup>

                      <InputLeftElement
                        pointerEvents="none"
                        Icon mt='3' h='5' as={BsPhone}
                      />

                      <Input type="tel" placeholder="Phone number" />
                    </InputGroup>
                    <Box >
                      <FormLabel>Message:</FormLabel>
                      <Textarea maxH='70' id="desc" />
                    </Box>
                  </FormControl>

                </HStack>

                <Box>
                  <Button fontSize='large' type='submit'
                    colorScheme='#9d9d9d'
                    variant='outline'

                    border='1px solid #808080'
                    _hover={{
                      bgColor: '#9d9d9d',
                      color: 'white',
                    }}>
                    Submit
                </Button>

                </Box>
              </VStack>
            </FormControl>
          </motion.div>
        </Flex>
        <HStack p='6' spacing='20' justifyContent='center'>
          <Link color='white'>tdennis.developer@gmail.com</Link>
          <Link color='white' _hover={{ bg: 'none' }} bg='none'>Phone: +234 816 354 5039</Link>
        </HStack>
      </Box>

    </motion.div>
  )
}
export default Contact;