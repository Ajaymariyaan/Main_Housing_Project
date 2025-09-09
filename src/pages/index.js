// import Carder from "@/component/Cart";
import Content from "@/component/Content";
import Sidebar from "@/component/Sidebar";
import { Box, Stack } from "@mui/material";
import React from "react";





function HousingHomePage(){




  return(<>
  
  <Box sx={{
    display:"Flex",
    flexDirection:"row",
    width:"100%"}}>
     <Sidebar/>
    <Content/>
    

  </Box>
   
    </>)
}



export default HousingHomePage;
