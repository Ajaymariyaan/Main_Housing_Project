

import { Box, TextField, Select, MenuItem, Button, InputAdornment } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Download, Tune, Search } from "@mui/icons-material";
import { useState, useEffect } from "react";
import RightFilterDrawer from "./RightFilterDrawer";
import Carder from "./Cart";
import AddSiteDrawer from "./AddSiteDrawer";

const applyFilters = (rows, filters, query) => {
  const q = (query || "").trim().toLowerCase();
  return rows.filter((row) => {
    const matchesSearch =
      !q ||
      row.name.toLowerCase().includes(q) ||
      row.cluster.toLowerCase().includes(q);

    const clusterOk =
      filters.Cluster.length === 0 || filters.Cluster.includes(row.cluster);

    const sitesOk =
      filters.Sites.length === 0 || filters.Sites.includes(row.name);

    const speciesOk =
      filters.Species.length === 0 || filters.Species.includes(row.speciesType);

    return matchesSearch && clusterOk && sitesOk && speciesOk;
  });
};

function SitesTable() {
  const [species, setSpecies] = useState("All Species");
  const [serachQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [addDrawerOpen, setAddDrawerOpen] = useState(false);

  const initialRows = 
[
{
"id": 1,
"name": "Northern Highland Zoological Park With Extra Long Name Example",
"species": 542,
"animals": 1234,
"enclosures": 210,
"sections": 24,
"cluster": "Rainforest Habitat Enclosure",
"inCharge": "John Mathew R",
"avatar": "/img/avatar.png"
},
{
"id": 2,
"name": "Hillcrest Wildlife Center",
"species": 487,
"animals": 1189,
"enclosures": 198,
"sections": 19,
"cluster": "Northern Highland Zoological Sanctuary",
"inCharge": "Emily Carter",
"avatar": "/img/avatar.png"
},
{
"id": 3,
"name": "Greenwood Safari Park",
"species": 623,
"animals": 1420,
"enclosures": 230,
"sections": 28,
"cluster": "Savannah Herbivore Grazing Zone",
"inCharge": "Michael Thompson",
"avatar": "/img/avatar.png"
},
{
"id": 4,
"name": "Silverlake Animal Reserve",
"species": 510,
"animals": 1342,
"enclosures": 200,
"sections": 21,
"cluster": "Insect and Arthropod Study Zone",
"inCharge": "Sophia Williams",
"avatar": "/img/avatar.png"
},
{
"id": 5,
"name": "BlueRiver Wildlife Sanctuary",
"species": 578,
"animals": 1287,
"enclosures": 215,
"sections": 23,
"cluster": "Aquatic Life Research Zone",
"inCharge": "David Johnson",
"avatar": "/img/avatar.png"
},
{
"id": 6,
"name": "Golden Plains Animal Park",
"species": 603,
"animals": 1405,
"enclosures": 240,
"sections": 27,
"cluster": "Rainforest Habitat Enclosure",
"inCharge": "Olivia Brown",
"avatar": "/img/avatar.png"
},
{
"id": 7,
"name": "Evergreen Zoological Center",
"species": 495,
"animals": 1208,
"enclosures": 190,
"sections": 18,
"cluster": "Northern Highland Zoological Sanctuary",
"inCharge": "Ethan Davis",
"avatar": "/img/avatar.png"
},
{
"id": 8,
"name": "Maplewood Wildlife Reserve",
"species": 555,
"animals": 1270,
"enclosures": 205,
"sections": 22,
"cluster": "Savannah Herbivore Grazing Zone",
"inCharge": "Charlotte Wilson",
"avatar": "/img/avatar.png"
},
{
"id": 9,
"name": "Redwood Safari Grounds",
"species": 620,
"animals": 1450,
"enclosures": 245,
"sections": 29,
"cluster": "Insect and Arthropod Study Zone",
"inCharge": "Benjamin Moore",
"avatar": "/img/avatar.png"
},
{
"id": 10,
"name": "Crystal Lake Wildlife Park",
"species": 502,
"animals": 1215,
"enclosures": 195,
"sections": 20,
"cluster": "Aquatic Life Research Zone",
"inCharge": "Amelia Taylor",
"avatar": "/img/avatar.png"
},
{
"id": 11,
"name": "Shadow Creek Wildlife Refuge",
"species": 480,
"animals": 1198,
"enclosures": 188,
"sections": 17,
"cluster": "Rainforest Habitat Enclosure",
"inCharge": "Lucas Martinez",
"avatar": "/img/avatar.png"
},
{
"id": 12,
"name": "Willow Springs Zoo",
"species": 532,
"animals": 1300,
"enclosures": 210,
"sections": 22,
"cluster": "Northern Highland Zoological Sanctuary",
"inCharge": "Mia Anderson",
"avatar": "/img/avatar.png"
},
{
"id": 13,
"name": "Ironwood Wildlife Center",
"species": 600,
"animals": 1395,
"enclosures": 238,
"sections": 26,
"cluster": "Savannah Herbivore Grazing Zone",
"inCharge": "Daniel White",
"avatar": "/img/avatar.png"
},
{
"id": 14,
"name": "Riverbend Safari Park",
"species": 515,
"animals": 1220,
"enclosures": 200,
"sections": 21,
"cluster": "Insect and Arthropod Study Zone",
"inCharge": "Emma Clark",
"avatar": "/img/avatar.png"
},
{
"id": 15,
"name": "Cedarwood Zoological Park",
"species": 488,
"animals": 1175,
"enclosures": 185,
"sections": 18,
"cluster": "Aquatic Life Research Zone",
"inCharge": "William Lewis",
"avatar": "/img/avatar.png"
},
{
"id": 16,
"name": "Highland Meadows Animal Reserve",
"species": 545,
"animals": 1325,
"enclosures": 212,
"sections": 24,
"cluster": "Rainforest Habitat Enclosure",
"inCharge": "Ava Robinson",
"avatar": "/img/avatar.png"
},
{
"id": 17,
"name": "Sunset Valley Safari",
"species": 612,
"animals": 1410,
"enclosures": 242,
"sections": 28,
"cluster": "Northern Highland Zoological Sanctuary",
"inCharge": "James Walker",
"avatar": "/img/avatar.png"
},
{
"id": 18,
"name": "Oceanview Marine Park",
"species": 470,
"animals": 1105,
"enclosures": 180,
"sections": 16,
"cluster": "Savannah Herbivore Grazing Zone",
"inCharge": "Sophia Hall",
"avatar": "/img/avatar.png"
},
{
"id": 19,
"name": "Stonebridge Wildlife Sanctuary",
"species": 590,
"animals": 1380,
"enclosures": 235,
"sections": 27,
"cluster": "Insect and Arthropod Study Zone",
"inCharge": "Henry Allen",
"avatar": "/img/avatar.png"
},
{
"id": 20,
"name": "Riverstone Zoological Park",
"species": 520,
"animals": 1248,
"enclosures": 202,
"sections": 20,
"cluster": "Aquatic Life Research Zone",
"inCharge": "Isabella Young",
"avatar": "/img/avatar.png"
},
{
"id": 21,
"name": "Wildflower Animal Reserve",
"species": 503,
"animals": 1200,
"enclosures": 190,
"sections": 19,
"cluster": "Rainforest Habitat Enclosure",
"inCharge": "Jack Hernandez",
"avatar": "/img/avatar.png"
},
{
"id": 22,
"name": "Thunder Valley Wildlife Park",
"species": 615,
"animals": 1435,
"enclosures": 250,
"sections": 30,
"cluster": "Northern Highland Zoological Sanctuary",
"inCharge": "Grace King",
"avatar": "/img/avatar.png"
},
{
"id": 23,
"name": "Forest Glen Zoological Reserve",
"species": 525,
"animals": 1260,
"enclosures": 210,
"sections": 22,
"cluster": "Savannah Herbivore Grazing Zone",
"inCharge": "Alexander Scott",
"avatar": "/img/avatar.png"
},
{
"id": 24,
"name": "Silverstone Animal Habitat",
"species": 495,
"animals": 1212,
"enclosures": 192,
"sections": 18,
"cluster": "Insect and Arthropod Study Zone",
"inCharge": "Ella Green",
"avatar": "/img/avatar.png"
},
{
"id": 25,
"name": "Meadowbrook Wildlife Refuge",
"species": 540,
"animals": 1290,
"enclosures": 215,
"sections": 23,
"cluster": "Aquatic Life Research Zone",
"inCharge": "Matthew Adams",
"avatar": "/img/avatar.png"
},
{
"id": 26,
"name": "Goldenleaf Safari Reserve",
"species": 610,
"animals": 1428,
"enclosures": 245,
"sections": 28,
"cluster": "Rainforest Habitat Enclosure",
"inCharge": "Lily Baker",
"avatar": "/img/avatar.png"
},
{
"id": 27,
"name": "Oakridge Zoological Sanctuary",
"species": 505,
"animals": 1195,
"enclosures": 186,
"sections": 17,
"cluster": "Northern Highland Zoological Sanctuary",
"inCharge": "Christopher Perez",
"avatar": "/img/avatar.png"
},
{
"id": 28,
"name": "Brightwater Animal Park",
"species": 555,
"animals": 1275,
"enclosures": 208,
"sections": 21,
"cluster": "Savannah Herbivore Grazing Zone",
"inCharge": "Hannah Wright",
"avatar": "/img/avatar.png"
},
{
"id": 29,
"name": "Lakeside Wildlife Center",
"species": 498,
"animals": 1222,
"enclosures": 194,
"sections": 19,
"cluster": "Insect and Arthropod Study Zone",
"inCharge": "David Campbell",
"avatar": "/img/avatar.png"
},
{
"id": 30,
"name": "Everglade Wildlife Park",
"species": 620,
"animals": 1460,
"enclosures": 248,
"sections": 30,
"cluster": "Aquatic Life Research Zone",
"inCharge": "Samantha Mitchell",
"avatar": "/img/avatar.png"
}
]

;

  const [allRows, setAllRows] = useState(initialRows);
  const [filteredRows, setFilteredRows] = useState(initialRows);

  const [activeFilters, setActiveFilters] = useState({
    Cluster: [],
    Sites: [],
    Species: [],
  });

  useEffect(() => {
    setFilteredRows(applyFilters(allRows, activeFilters, serachQuery));
  }, [allRows, activeFilters, serachQuery]);

  const addNewRow = (newItem) => {
    const newRow = {
      id: allRows.length + 1,
      ...newItem,
      species: parseInt(newItem.species) || 0,
      animals: parseInt(newItem.animals) || 0,
      enclosures: parseInt(newItem.enclosures) || 0,
      sections: parseInt(newItem.sections) || 0,
      speciesType: newItem.speciesType || "Mammals",
    };
    setAllRows((prev) => [...prev, newRow]);
  };
const columns = [
  { field: "id", headerName: "NO", width: 80 },
  { field: "name", headerName: "Site Name", flex: 1 }, // flex makes it auto-expand
  { field: "species", headerName: "Species", width: 80 },
  { field: "animals", headerName: "Animals", width: 80 },
  { field: "enclosures", headerName: "Enclosures", width: 80 },
  { field: "sections", headerName: "Sections", width: 80 },
  { field: "cluster", headerName: "Cluster", flex: 1 }, // flex again
  {
    field: "inCharge",
    headerName: "In-Charge",
    flex: 1,
    renderCell: (params) => (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <img
          src={params.row.avatar}
          alt="avatar"
          style={{ width: 40, height: 40, borderRadius: "50%" }}
        />
        <span>{params.row.inCharge}</span>
      </Box>
    ),
  },
];



  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Box>
        <Carder onAddClick={() => setAddDrawerOpen(true)} />
      </Box>
      <Box
        sx={{
          padding: "24px",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          bgcolor: "white",
        }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <TextField
            fullWidth
            placeholder="Search sites, sections..."
            size="small"
            variant="outlined"
            value={serachQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ width: "250px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Select
              size="small"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
              sx={{ color: "006D35", border: "1px solid" }}
            >
              <MenuItem value="All Species">All Species</MenuItem>
              <MenuItem value="Mammals">Mammals</MenuItem>
              <MenuItem value="Birds">Birds</MenuItem>
            </Select>
            <Button
              variant="outlined"
              startIcon={<Tune />}
              sx={{ textTransform: "none", color: "#006D35", border: "1px solid #006D35" }}
              onClick={() => setFilterOpen(true)}
            >
              Filter
            </Button>
            <Button
              variant="outlined"
              startIcon={<Download />}
              sx={{ textTransform: "none", color: "#006D35", borderColor: "#006D35" }}
            >
              Download
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", height: "100%", mt: 2 }}>
          <DataGrid
  rows={filteredRows}
  columns={columns}
  initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
  pageSizeOptions={[10]}
  disableColumnMenu
  disableColumnResize
  disableColumnFilter
  


            componentsProps={{
              pagination: {
                sx: {
                  "& .MuiPaginationItem-root": {
                    color: "#006D35",
                    borderRadius: "6px",
                    border: "1px solid #26b37f",
                  },
                  "& .Mui-selected": {
                    backgroundColor: "#26b37f",
                    color: "#fff",
                  },
                  "& .MuiPaginationItem-page:hover": {
                 
                    backgroundColor: "#a5f2b8",
                  },
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: "#006D35",
                  },

                 
                },
              },
            }}
          />
        </Box>

        <RightFilterDrawer
          open={filterOpen}
          setOpen={setFilterOpen}
          onApplyFilter={setActiveFilters}
        />

        <AddSiteDrawer
          open={addDrawerOpen}
          setOpen={setAddDrawerOpen}
          onSave={addNewRow}
        />
      </Box>
    </Box>
  );
}

export default SitesTable;
