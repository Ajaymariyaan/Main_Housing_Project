import React, { useState } from "react";
import { Drawer, Box, IconButton, Typography, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function AddSiteDrawer({ onSave, open, setOpen }) {
  const [newItem, setNewItem] = useState({
    name: "",
    species: "",
    animals: "",
    enclosures: "",
    sections: "",
    cluster: "",
    inCharge: "",
    avatar: "/img/avatar.png",
  });

  const handleAddRow = () => {
    if (!newItem.name.trim()) return;
    onSave(newItem);
    setNewItem({ name: "", species: "", animals: "", enclosures: "", sections: "", cluster: "", inCharge: "", avatar: "/img/avatar.png" });
    setOpen(false);
  };

  return (
    <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
      <Box sx={{ width: 400, p: 2 ,bgcolor:"#EFF5F2"}}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{color:"#287a46ff"}} variant="h6">Add New Site</Typography>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <TextField fullWidth size="small" label="Name" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}  sx={{
    mt: 2,
    bgcolor: "#dcf6e5ff",
    "& .MuiInputLabel-root": {
      color: "#6b6f6dff",       
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#26b37f", 
      },
      "&:hover fieldset": {
        borderColor: "#00994d",  
      },
      "&.Mui-focused fieldset": {
        borderColor: "#006D35",
        color:"#00994d"  
      },
    },
  }}/>
        <TextField fullWidth size="small" label="Species" type="number" value={newItem.species} onChange={(e) => setNewItem({ ...newItem, species: e.target.value })} sx={{
    mt: 2,
    bgcolor: "#dcf6e5ff",
    "& .MuiInputLabel-root": {
      color: "#6b6f6dff",       
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#26b37f", 
      },
      "&:hover fieldset": {
        borderColor: "#00994d",  
      },
      "&.Mui-focused fieldset": {
        borderColor: "#006D35",
        color:"#00994d"  
      },
    },
  }} />
        <TextField fullWidth size="small" label="Animals" type="number" value={newItem.animals} onChange={(e) => setNewItem({ ...newItem, animals: e.target.value })} sx={{
    mt: 2,
    bgcolor: "#dcf6e5ff",
    "& .MuiInputLabel-root": {
      color: "#6b6f6dff",       
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#26b37f", 
      },
      "&:hover fieldset": {
        borderColor: "#00994d",  
      },
      "&.Mui-focused fieldset": {
        borderColor: "#006D35",
        color:"#00994d"  
      },
    },
  }} />
        <TextField fullWidth size="small" label="Enclosures" type="number" value={newItem.enclosures} onChange={(e) => setNewItem({ ...newItem, enclosures: e.target.value })} sx={{
    mt: 2,
    bgcolor: "#dcf6e5ff",
    "& .MuiInputLabel-root": {
      color: "#6b6f6dff",       
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#26b37f", 
      },
      "&:hover fieldset": {
        borderColor: "#00994d",  
      },
      "&.Mui-focused fieldset": {
        borderColor: "#006D35",
        color:"#00994d"  
      },
    },
  }} />
        <TextField fullWidth size="small" label="Sections" type="number" value={newItem.sections} onChange={(e) => setNewItem({ ...newItem, sections: e.target.value })} sx={{
    mt: 2,
    bgcolor: "#dcf6e5ff",
    "& .MuiInputLabel-root": {
      color: "#6b6f6dff",       
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#26b37f", 
      },
      "&:hover fieldset": {
        borderColor: "#00994d",  
      },
      "&.Mui-focused fieldset": {
        borderColor: "#006D35",
        color:"#00994d"  
      },
    },
  }} />
        <TextField fullWidth size="small" label="Cluster" value={newItem.cluster} onChange={(e) => setNewItem({ ...newItem, cluster: e.target.value })} sx={{
    mt: 2,
    bgcolor: "#dcf6e5ff",
    "& .MuiInputLabel-root": {
      color: "#6b6f6dff",       
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#26b37f", 
      },
      "&:hover fieldset": {
        borderColor: "#00994d",  
      },
      "&.Mui-focused fieldset": {
        borderColor: "#006D35",
        color:"#00994d"  
      },
    },
  }}/>
        <TextField fullWidth size="small" label="In Charge" value={newItem.inCharge} onChange={(e) => setNewItem({ ...newItem, inCharge: e.target.value })} sx={{
    mt: 2,
    bgcolor: "#dcf6e5ff",
    "& .MuiInputLabel-root": {
      color: "#6b6f6dff",       
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#26b37f", 
      },
      "&:hover fieldset": {
        borderColor: "#00994d",  
      },
      "&.Mui-focused fieldset": {
        borderColor: "#006D35",
        color:"#00994d"  
      },
    },
  }} />

        <Button fullWidth variant="contained" color="success" sx={{ mt: 3,bgcolor:"#287a46ff" }} onClick={handleAddRow}>
          Save
        </Button>
      </Box>
    </Drawer>
  );
}
