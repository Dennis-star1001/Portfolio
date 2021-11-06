import { Box, Flex, Text, VStack } from "@chakra-ui/layout";

const About = () =>{
  return(
    <Box h='90vh' overflow='hidden' bg='white'>
      <Flex justifyContent='left'  h='50vh' alignItems='center'>
        <Box  p='28'>
      <Text textAlign='left' fontSize='sm'fontWeight='bold' >About me</Text>
      <Text pt='3' fontWeight='bold' textAlign='left' fontSize='4xl' maxW='400'>We design and develop web for startup, small and medium businesses</Text>
      </Box>
      </Flex>
      <img src='/about.jpg'/>
    </Box>
  )
}
export default About;