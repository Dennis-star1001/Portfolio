import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box, Flex, Link, Stack, Text, VStack } from "@chakra-ui/layout";
import { HStack, Textarea } from "@chakra-ui/react";
import { BsPhone } from 'react-icons/bs';
const Contact = () => {
  return (
    <>
      <Box bg='#6c63ff' h='90vh'>
        <Text textAlign='center' color='white' fontSize='4xl' fontWeight='bold'>Contact</Text>
        <Flex justifyContent='space-around' alignItems='center' pt='3' >
          <FormControl p='8' bg='white' maxW='500' border='none' borderRadius='2xl'>
            <VStack spacing='5'>
              <HStack>
                <FormControl w='80'>
                  <FormLabel>Name:</FormLabel>
                  <Input
                    id='text'
                    _focus={{
                      border: ' 1px solid #48bb78',
                    }} />

                  <FormLabel>Mail:</FormLabel>
                  <Input
                    type='text'
                    _focus={{
                      border: ' 1px solid #48bb78',
                    }}

                  />
                  <FormLabel>Phone:</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsPhone color="gray.300" />}
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

        </Flex>
        <HStack p='6' spacing='20' justifyContent='center'>
          <Link color='white'>tdennis.developer@gmail.com</Link>
          <Link color='white' _hover={{ bg: 'none' }} bg='none'>Phone: +234 816 354 5039</Link>
        </HStack>
      </Box>

    </>
  )
}
export default Contact;