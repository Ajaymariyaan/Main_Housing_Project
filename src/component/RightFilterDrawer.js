



import { useState } from "react";
import {
  Box,
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  Checkbox,
  ListItemText,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const clusterOptions = [
  "Rainforest Habitat Enclosure",
  "Northern Highland Zoological Sanctuary",
  "Savannah Herbivore Grazing Zone",
  "Insect and Arthropod Study Zone",
  "Aquatic Life Research Zone",
];
const sitesOptions = ["Site A", "Site B", "Site C", "Site D"];
const speciesOptions = ["Mammals", "Birds", "Reptiles", "Fish", "Amphibians"];

function RightFilterDrawer({ open, setOpen, onApplyFilter }) {
  const [activeTab, setActiveTab] = useState("Cluster");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState({
    Cluster: [],
    Sites: [],
    Species: [],
  });

  const activeFilterGroupsCount = Object.keys(selectedItems).filter(
    (tab) => selectedItems[tab].length > 0
  ).length;

  const handleSelectAll = () => {
    const options = filteredOptions(activeTab); 
    setSelectedItems((prev) => ({ ...prev, [activeTab]: options }));
  };

const handleClearAll = () => {
  setSelectedItems({
    Cluster: [],
    Sites: [],
    Species: [],
  });
};

  
  const filteredOptions = (tab) => {
    const allOptions =
      tab === "Cluster"
        ? clusterOptions
        : tab === "Sites"
        ? sitesOptions
        : speciesOptions;
    return allOptions.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

 
  const handleToggle = (tab, item) => {
    setSelectedItems((prev) => {
      const current = prev[tab];
      return current.includes(item)
        ? { ...prev, [tab]: current.filter((i) => i !== item) }
        : { ...prev, [tab]: [...current, item] };
    });
  };

  return (
    <Box>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 400,
            p: 2,
            display: "flex",
            flexDirection: "column",
            color: "#839D8D",
          },
        }}
      >
    
        <Box
          sx={{
            display: "flex",
            bgcolor: "#EFF5F2",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Filter - {activeFilterGroupsCount}</Typography>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box sx={{ display: "flex", flex: 1 }}>
          <List sx={{ width: 120, borderRight: "1px solid #eee" ,}}>
            {["Cluster", "Sites", "Species"].map((tab) => (
              <ListItem
                button
                key={tab}
                selected={activeTab === tab}
                onClick={() => {
                  setActiveTab(tab);
                  setSearchTerm("");
                }}
              >
                <ListItemText
                  primary={`${tab} (${selectedItems[tab].length})`}
                  primaryTypographyProps={{
                    fontWeight: activeTab === tab ? "bold" : "normal",
                  }}
                />
              </ListItem>
            ))}
          </List>

          <Box
            sx={{ flex: 1, pl: 2, display: "flex", flexDirection: "column" }}
          >
            <TextField
              placeholder="Search"
              size="small"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ mb: 1 }}
            />

            <List sx={{ overflowY: "auto", flex: 1 }}>
              <ListItem button onClick={handleSelectAll}>
                
                
                <Checkbox
               
                  checked={
                    selectedItems[activeTab].length ===
                      filteredOptions(activeTab).length &&
                    filteredOptions(activeTab).length > 0
                  }
                  indeterminate={
                    selectedItems[activeTab].length > 0 &&
                    selectedItems[activeTab].length <
                      filteredOptions(activeTab).length
                  }
                />
                <ListItemText primary="Select All" />
              </ListItem>

              {filteredOptions(activeTab).map((item) => (
                <ListItem
                  key={item}
                  button
                  onClick={() => handleToggle(activeTab, item)}
                >
                  <Checkbox
                    checked={selectedItems[activeTab].includes(item)}
                  />
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button
            variant="outlined"
            onClick={handleClearAll}
            sx={{ borderColor: "#37BD69", color: "#37BD69" }}
          >
            Clear All
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              onApplyFilter(selectedItems); 
              setOpen(false);
            }}
            sx={{ backgroundColor: "#37BD69" }}
          >
            Apply Filter
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}

export default RightFilterDrawer;
