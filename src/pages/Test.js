import React, { useState } from "react";
import {
  Drawer,
  Box,
  IconButton,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Chip,
  Divider,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Initial rows data
const initialRows = [
  {
    id: 1,
    name: "Northern Highland Zoological Park With Extra Long Name Example",
    species: 542,
    animals: 1234,
    enclosures: 210,
    sections: 24,
    cluster: "Rainforest Habitat Enclosure",
    inCharge: "John Mathew R",
    avatar: "/img/avatar.png",
  },
  {
    id: 2,
    name: "Hillcrest Wildlife Center",
    species: 487,
    animals: 1189,
    enclosures: 198,
    sections: 19,
    cluster: "Northern Highland Zoological Sanctuary",
    inCharge: "Emily Carter",
    avatar: "/img/avatar.png",
  },
  {
    id: 3,
    name: "Greenwood Safari Park",
    species: 623,
    animals: 1420,
    enclosures: 230,
    sections: 28,
    cluster: "Savannah Herbivore Grazing Zone",
    inCharge: "Michael Thompson",
    avatar: "/img/avatar.png",
  },
];

export default function SectionsDrawer() {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState(initialRows);
  const [search, setSearch] = useState("");

  // Form state for adding new item
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

  // Filter rows by search
  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase())
  );

  // Handle adding new row
  const handleAddRow = () => {
    if (!newItem.name.trim()) return; // require a name

    const newRow = {
      id: rows.length + 1,
      ...newItem,
      species: parseInt(newItem.species) || 0,
      animals: parseInt(newItem.animals) || 0,
      enclosures: parseInt(newItem.enclosures) || 0,
      sections: parseInt(newItem.sections) || 0,
    };

    setRows([...rows, newRow]);

    // reset form
    setNewItem({
      name: "",
      species: "",
      animals: "",
      enclosures: "",
      sections: "",
      cluster: "",
      inCharge: "",
      avatar: "/img/avatar.png",
    });
  };

  return (
    <>
      {/* Button to open drawer */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
        sx={{ mt: 3 }}
      >
        Open Sections
      </Button>

      {/* Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 400, p: 2 }}>
          {/* Header */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Sections</Typography>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Search */}
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search sections..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ my: 2 }}
          />

          {/* List of sections */}
          <List>
            {filteredRows.map((row) => (
              <React.Fragment key={row.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar src={row.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={row.name}
                    secondary={`${row.inCharge} | ${row.cluster}`}
                    primaryTypographyProps={{ fontWeight: "bold" }}
                  />
                </ListItem>

                {/* Chips */}
                <Box sx={{ display: "flex", gap: 1, px: 7, pb: 2 }}>
                  <Chip label={`Species ${row.species}`} size="small" />
                  <Chip label={`Animals ${row.animals}`} size="small" />
                  <Chip label={`Enclosures ${row.enclosures}`} size="small" />
                  <Chip label={`Sections ${row.sections}`} size="small" />
                </Box>
                <Divider />
              </React.Fragment>
            ))}
          </List>

          {/* Add new item form */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Add New Section
            </Typography>
            <TextField
              fullWidth
              size="small"
              label="Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              sx={{ mt: 1 }}
            />
            <TextField
              fullWidth
              size="small"
              label="Species"
              type="number"
              value={newItem.species}
              onChange={(e) =>
                setNewItem({ ...newItem, species: e.target.value })
              }
              sx={{ mt: 1 }}
            />
            <TextField
              fullWidth
              size="small"
              label="Animals"
              type="number"
              value={newItem.animals}
              onChange={(e) =>
                setNewItem({ ...newItem, animals: e.target.value })
              }
              sx={{ mt: 1 }}
            />
            <TextField
              fullWidth
              size="small"
              label="Enclosures"
              type="number"
              value={newItem.enclosures}
              onChange={(e) =>
                setNewItem({ ...newItem, enclosures: e.target.value })
              }
              sx={{ mt: 1 }}
            />
            <TextField
              fullWidth
              size="small"
              label="Sections"
              type="number"
              value={newItem.sections}
              onChange={(e) =>
                setNewItem({ ...newItem, sections: e.target.value })
              }
              sx={{ mt: 1 }}
            />
            <TextField
              fullWidth
              size="small"
              label="Cluster"
              value={newItem.cluster}
              onChange={(e) =>
                setNewItem({ ...newItem, cluster: e.target.value })
              }
              sx={{ mt: 1 }}
            />
            <TextField
              fullWidth
              size="small"
              label="In Charge"
              value={newItem.inCharge}
              onChange={(e) =>
                setNewItem({ ...newItem, inCharge: e.target.value })
              }
              sx={{ mt: 1 }}
            />
            <Button
              variant="contained"
              color="success"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleAddRow}
            >
              Add Section
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
