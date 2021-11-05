import { Box } from "@chakra-ui/react"
import Navbar from "./Navbar"

const Layout= ({children})=>{
  return(
<Box>
  <Box>
  <Navbar/>
  </Box>
  {children}
  <Box>
   
  </Box>
</Box>
  )
}
export default Layout;