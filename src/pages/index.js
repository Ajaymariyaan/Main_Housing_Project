// import Carder from "@/component/Cart";
import Content from "@/component/Content";
import Sidebar from "@/component/Sidebar";
import { Box } from "@mui/material";
import React, { useState } from "react";





function HousingHomePage(){

 const [selectedHousingItem, setSelectedHousingItem] = useState("Sites");



  return(<>
  
  <Box sx={{
    display:"Flex",
    flexDirection:"row",
    width:"100%"}}>
     {/* <Sidebar />
    <Content/> */}

 <Sidebar
        selectedItem={selectedHousingItem}
        setSelectedItem={setSelectedHousingItem}
      />
      {/* Pass state to Content */}
      <Content selectedItem={selectedHousingItem} />

      

  </Box>
   
    </>)
}



export default HousingHomePage;
