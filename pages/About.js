import { Box, Flex, Text, VStack } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () =>{
  const easing = [.6, -.05, .01, 0.99]
  const fadInUp = {
    initial: {
      x: 60,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: .6,
        ease: easing

      }
    }
  }
  return(
    <motion.div exit={{opacity: 0}}  initial='initial' animate='animate'>
    <Box h='90vh' overflow='hidden' bg='white'>
      <Flex justifyContent='left'  h='50vh' alignItems='center'>
        <motion.div variants={fadInUp} >
          <Box  p='28'>
      <Text textAlign='left' fontSize='sm'fontWeight='bold' >About me</Text>
      <Text pt='3' fontWeight='bold' textAlign='left' fontSize='4xl' maxW='400'>We design and develop web for startup, small and medium businesses</Text>
      </Box>
      </motion.div>
      </Flex>
      <Image src='/about.jpg' alt='about' height='400' width='1500'/>
    </Box>
    </motion.div>
  )
}
export default About;