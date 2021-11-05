import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";

const Contact = () => {
  return (
    <>
      <Box bg='#6c63ff' h='90vh'>
        <Text textAlign='center' pt='10' color='white' fontSize='4xl' fontWeight='bold'>Contact</Text>
        <Flex justifyContent='space-around' alignItems='center' pt='20' >
          <FormControl p='10' bg='white' w='200'  border='none' borderRadius='2xl'>
            <Stack spacing='8'>
              <FormControl
                id='email'>
                <FormLabel>Email</FormLabel>
                <Input
                  id='email'
                  _focus={{
                    border: ' 1px solid #48bb78',
                  }} />
              </FormControl>
              <FormControl
                id='password'>
                <FormLabel>Password</FormLabel>
                <Input
                  type='password'
                  _focus={{
                    border: ' 1px solid #48bb78',
                  }}

                />
                <Button
                  colorScheme='blue'
                  float='right'
                  d='flex'
                  variant='link'>
                  Forgot your password?
                </Button>
              </FormControl>
              <Box>
                <Button fontSize='large' type='submit'
                  colorScheme='green'
                  variant='outline'

                  border='1px solid #808080'
                  _hover={{
                    bgColor: '#48bb78',
                    color: 'white',
                  }}>
                  Submit
                </Button>
                <Text mt='4' d='flex' alignItems='center'>
                  Don`t have an acount?
                  <Button
                    colorScheme='blue'
                    variant='link'

                    ml='2'>
                    Register
                  </Button>
                </Text>
              </Box>
            </Stack>
          </FormControl>

        </Flex>
      </Box>

    </>
  )
}
export default Contact;