import { Box } from "@mui/material";
import React from "react";
import Carder from "./Cart";
import SitesTable from "./SitesTable";



function Content(){



    return(
        <>
        <Box sx={{bgcolor:"#EFF5F2",
             width:"100%",
             display:"flex",
             flexDirection:"column",
             width:"100%",
             padding:"0px 24px 72px 24px ",
             gap:"24px",
             
             }}>
            <Box sx={{alignSelf:"start",}}> Housing/Sites</Box>
            {/* <Box><Carder/></Box> */}
            <Box><SitesTable/></Box>
            {/* <Box>Table</Box> */}
        </Box>
        
        </>


    )



}

export default Content;
