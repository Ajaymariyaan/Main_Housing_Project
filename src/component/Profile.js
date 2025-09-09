import { Avatar, Box, Typography } from "@mui/material";
import React from "react";



function Profile(){



    return(
           <Box
        sx={{
          p: 2,
        

        display: "flex",
          alignItems: "center",
          height:"52px",
        //   paddingBottom:"20px",
        marginBottom:"16px"
        }}
      >
        <Avatar src="/img/avatar.png" alt="avatar" />
        <Box sx={{ ml: 2 ,}}>
          <Typography variant="body2" fontWeight="bold">
            Ajai Anto
          </Typography>
          <Typography variant="caption" >
            ajaii.anto@antz.com
          </Typography>
        </Box>
      </Box>
    )
}
export default Profile;
