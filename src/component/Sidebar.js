import {
  Drawer,
  Box,
  TextField,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  InputAdornment,
 
} from "@mui/material";


import { ExpandLess, ExpandMore, Search, SearchOutlined } from "@mui/icons-material";
import { useState } from "react";
import Profile from "./Profile";

export default function Sidebar({ selectedItem, setSelectedItem }) {
  const [openMenu, setOpenMenu] = useState(null);
  
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const housingItems = ["Sites", "Clusters", "Sections", "Enclosures"];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
      <Box>
        
        <Box
          sx={{
            display: "flex",
            flexDirection:"row",
            alignItems: "center",
            justifyContent: "flex-start",
            p: 2,
            borderBottom: "1px solid #eee",
            justifyItems:"flex-start",
            gap:"10px"

            
          }}
        >
          <img
            src="/img/logo.svg" 
            alt="Logo"
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              objectFit: "cover",
            }}/>
          <img 
          src="/img/union.svg"></img>
        </Box>

        
        <Box sx={{ p: 2 }}>
         <TextField
    fullWidth
    placeholder="Search..."
    size="small"
    variant="outlined"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      ),
    }}
  />
        </Box>

        
        <List sx={{ color: "#839D8D" ,fontWeight:900, padding:"6px", display:"flex",flexDirection:"column",justifyContent:"flex-start" }}>
          
          <ListItemButton
            selected={activeItem === "Dashboard"}
            onClick={() => setActiveItem("Dashboard")}
            // disableRipple
            sx={{ 
        //         borderBottom: "2px solid #d6e0ddff",
        // paddingBottom: "4px", 
               
              "&.Mui-selected": {
                backgroundColor: "#1F515B",
                color: "#fff",
                transition: "none",
                "&:hover": { backgroundColor: "#1F515B" },
              },
            }}
          >
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          
          <ListItemButton
            selected={activeItem === "Reports"}
            onClick={() => setActiveItem("Reports")}
            disableRipple
            sx={{
        //         borderBottom: "2px solid #d6e0ddff",
        // paddingBottom: "4px", 
              "&.Mui-selected": {
                backgroundColor: "#1F515B",
                color: "#fff",
                transition: "none",
                "&:hover": { backgroundColor: "#1F515B" },
              },
            }}
          >
            <ListItemText primary="Reports" />
          </ListItemButton>

          
          <ListItemButton onClick={() => handleClick("housing")} disableRipple>
            <ListItemText primary="Housing" 
        //     sx={{borderBottom: "2px solid #d6e0ddff",
        // paddingBottom: "4px", }}
        />
            {openMenu === "housing" ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openMenu === "housing"} timeout={0} unmountOnExit>
            <List component="div" disablePadding>
              {housingItems.map((item) => (
                <ListItemButton
                  key={item}
                  sx={{
                    
                    pl: 4,
                    fontWeight: 500 ,
                    color:"#44544A",
                    "&.Mui-selected": {
                      backgroundColor: "#1F515B",
                      color: "#fff",
                      transition: "none",
                      "&:hover": { backgroundColor: "#1F515B" },
                    },
                  }}
                  selected={selectedItem === item} 
                  onClick={() => setSelectedItem(item)}
                  //  selected={activeItem === item}      // same, just using prop now
                  // onClick={() => setActiveItem(item)} // use the setter prop from HousingHomePage
                  disableRipple
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>

        
          {/* <ListItemButton
            selected={activeItem === "Collection"}
            onClick={() => setActiveItem("Collection")}
            disableRipple
            sx={{
        //         borderBottom: "2px solid #d6e0ddff",
        // paddingBottom: "4px", 
        // borderTop: "2px solid #d6e0ddff",
        // paddingTop: "4px", 
              "&.Mui-selected": {
                backgroundColor: "#1F515B",
                color: "#fff",
                transition: "none",
                "&:hover": { backgroundColor: "#1F515B" },
              },
            }}
          >
            <ListItemText primary="Collection" />
          </ListItemButton> */}
        </List>
      </Box>

      
   <Box sx={{alignItems:"center",paddingTop:"10px",marginBottom:"16px",backgroundColor:"rgba(68, 216, 172, 0.2)"}}>
    <Profile/>
   </Box>
    </Drawer>
  );
}
