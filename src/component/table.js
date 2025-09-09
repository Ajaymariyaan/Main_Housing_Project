// import {
//   Box,
//   TextField,
//   Select,
//   MenuItem,
//   Button,
//   IconButton,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   Avatar,
//   Typography,
//   Paper,
//   TableContainer,
//   Pagination,
//   Tooltip,
//   InputAdornment,
// } from "@mui/material";
// import { DataGrid } from '@mui/x-data-grid';

// import { Download, FilterList, Message, Call, Filter, Tune, Search } from "@mui/icons-material";
// import { useState } from "react";

// function SitesTable() {
//   const [species, setSpecies] = useState("All Species");
//   const [page, setPage] = useState(1);
//   const rowsPerPage = 10;
// const rows = [
//   {
//     id: 1,
//     name: "Northern Highland Zoological Park With Extra Long Name Example",
//     species: 542,
//     animals: 1234,
//     enclosures: 210,
//     sections: 24,
//     cluster: "Rainforest Habitat Enclosure Cluster",
//     inCharge: "John Mathew R",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 2,
//     name: "Hillcrest Wildlife Center",
//     species: 487,
//     animals: 1189,
//     enclosures: 198,
//     sections: 19,
//     cluster: "Endangered Species Observatory",
//     inCharge: "Emily Carter",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 3,
//     name: "Greenwood Safari Park",
//     species: 623,
//     animals: 1420,
//     enclosures: 230,
//     sections: 28,
//     cluster: "Savannah Animal Cluster",
//     inCharge: "Michael Thompson",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 4,
//     name: "Silverlake Animal Reserve",
//     species: 510,
//     animals: 1342,
//     enclosures: 200,
//     sections: 21,
//     cluster: "Wetland Habitat Cluster",
//     inCharge: "Sophia Williams",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 5,
//     name: "BlueRiver Wildlife Sanctuary",
//     species: 578,
//     animals: 1287,
//     enclosures: 215,
//     sections: 23,
//     cluster: "Mountainous Species Cluster",
//     inCharge: "David Johnson",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 6,
//     name: "Golden Plains Animal Park",
//     species: 603,
//     animals: 1405,
//     enclosures: 240,
//     sections: 27,
//     cluster: "Grassland Mammals Cluster",
//     inCharge: "Olivia Brown",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 7,
//     name: "Evergreen Zoological Center",
//     species: 495,
//     animals: 1208,
//     enclosures: 190,
//     sections: 18,
//     cluster: "Tropical Aviary Cluster",
//     inCharge: "Ethan Davis",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 8,
//     name: "Maplewood Wildlife Reserve",
//     species: 555,
//     animals: 1270,
//     enclosures: 205,
//     sections: 22,
//     cluster: "Predator Enclosure Cluster",
//     inCharge: "Charlotte Wilson",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 9,
//     name: "Redwood Safari Grounds",
//     species: 620,
//     animals: 1450,
//     enclosures: 245,
//     sections: 29,
//     cluster: "Large Mammals Cluster",
//     inCharge: "Benjamin Moore",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 10,
//     name: "Crystal Lake Wildlife Park",
//     species: 502,
//     animals: 1215,
//     enclosures: 195,
//     sections: 20,
//     cluster: "Aquatic Life Cluster",
//     inCharge: "Amelia Taylor",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 11,
//     name: "Shadow Creek Wildlife Refuge",
//     species: 480,
//     animals: 1198,
//     enclosures: 188,
//     sections: 17,
//     cluster: "Nocturnal Animals Cluster",
//     inCharge: "Lucas Martinez",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 12,
//     name: "Willow Springs Zoo",
//     species: 532,
//     animals: 1300,
//     enclosures: 210,
//     sections: 22,
//     cluster: "Reptile and Amphibian Cluster",
//     inCharge: "Mia Anderson",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 13,
//     name: "Ironwood Wildlife Center",
//     species: 600,
//     animals: 1395,
//     enclosures: 238,
//     sections: 26,
//     cluster: "Desert Species Cluster",
//     inCharge: "Daniel White",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 14,
//     name: "Riverbend Safari Park",
//     species: 515,
//     animals: 1220,
//     enclosures: 200,
//     sections: 21,
//     cluster: "Aquatic Mammals Cluster",
//     inCharge: "Emma Clark",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 15,
//     name: "Cedarwood Zoological Park",
//     species: 488,
//     animals: 1175,
//     enclosures: 185,
//     sections: 18,
//     cluster: "Forest Mammals Cluster",
//     inCharge: "William Lewis",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 16,
//     name: "Highland Meadows Animal Reserve",
//     species: 545,
//     animals: 1325,
//     enclosures: 212,
//     sections: 24,
//     cluster: "Mountain Habitat Cluster",
//     inCharge: "Ava Robinson",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 17,
//     name: "Sunset Valley Safari",
//     species: 612,
//     animals: 1410,
//     enclosures: 242,
//     sections: 28,
//     cluster: "Savannah Mammals Cluster",
//     inCharge: "James Walker",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 18,
//     name: "Oceanview Marine Park",
//     species: 470,
//     animals: 1105,
//     enclosures: 180,
//     sections: 16,
//     cluster: "Marine Life Cluster",
//     inCharge: "Sophia Hall",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 19,
//     name: "Stonebridge Wildlife Sanctuary",
//     species: 590,
//     animals: 1380,
//     enclosures: 235,
//     sections: 27,
//     cluster: "Endangered Mammals Cluster",
//     inCharge: "Henry Allen",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 20,
//     name: "Riverstone Zoological Park",
//     species: 520,
//     animals: 1248,
//     enclosures: 202,
//     sections: 20,
//     cluster: "Wetland Birds Cluster",
//     inCharge: "Isabella Young",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 21,
//     name: "Wildflower Animal Reserve",
//     species: 503,
//     animals: 1200,
//     enclosures: 190,
//     sections: 19,
//     cluster: "Grassland Aviary Cluster",
//     inCharge: "Jack Hernandez",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 22,
//     name: "Thunder Valley Wildlife Park",
//     species: 615,
//     animals: 1435,
//     enclosures: 250,
//     sections: 30,
//     cluster: "Predator Mammals Cluster",
//     inCharge: "Grace King",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 23,
//     name: "Forest Glen Zoological Reserve",
//     species: 525,
//     animals: 1260,
//     enclosures: 210,
//     sections: 22,
//     cluster: "Rainforest Aviary Cluster",
//     inCharge: "Alexander Scott",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 24,
//     name: "Silverstone Animal Habitat",
//     species: 495,
//     animals: 1212,
//     enclosures: 192,
//     sections: 18,
//     cluster: "Small Mammals Cluster",
//     inCharge: "Ella Green",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 25,
//     name: "Meadowbrook Wildlife Refuge",
//     species: 540,
//     animals: 1290,
//     enclosures: 215,
//     sections: 23,
//     cluster: "Migratory Birds Cluster",
//     inCharge: "Matthew Adams",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 26,
//     name: "Goldenleaf Safari Reserve",
//     species: 610,
//     animals: 1428,
//     enclosures: 245,
//     sections: 28,
//     cluster: "Big Cats Cluster",
//     inCharge: "Lily Baker",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 27,
//     name: "Oakridge Zoological Sanctuary",
//     species: 505,
//     animals: 1195,
//     enclosures: 186,
//     sections: 17,
//     cluster: "Forest Reptiles Cluster",
//     inCharge: "Christopher Perez",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 28,
//     name: "Brightwater Animal Park",
//     species: 555,
//     animals: 1275,
//     enclosures: 208,
//     sections: 21,
//     cluster: "Tropical Mammals Cluster",
//     inCharge: "Hannah Wright",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 29,
//     name: "Lakeside Wildlife Center",
//     species: 498,
//     animals: 1222,
//     enclosures: 194,
//     sections: 19,
//     cluster: "Aquatic Birds Cluster",
//     inCharge: "David Campbell",
//     avatar: "/img/avatar.png"
//   },
//   {
//     id: 30,
//     name: "Everglade Wildlife Park",
//     species: 620,
//     animals: 1460,
//     enclosures: 248,
//     sections: 30,
//     cluster: "Reptiles & Amphibians Cluster",
//     inCharge: "Samantha Mitchell",
//     avatar: "/img/avatar.png"
//   }
// ];


// const column =[{
//   field:'id', headerName:'NO' , width: '80',color:'red'
// },
//  {
//     field: 'name',
//     headerName: 'Site Name',
//     width: '200',
    
//   },
//    {
//     field: 'species',
//     headerName: 'Species',
//     width: '80',
    
//   },
//    {
//     field: 'animals',
//     headerName: 'Animals',
//     width: 80,
    
//   },
//    {
//     field: 'enclosures',
//     headerName: 'Enclosures',
//     width: 80,
    
//   },
//   {
//     field: 'sections',
//     headerName: 'Sections',
//     width: 80,
    
//   },
//   {
//     field: 'cluster',
//     headerName: 'Cluster',
//     width: 200,
    
//   },
//   {
//     field: 'inCharge',
//     headerName: 'In-Charge',
//     width: 150,
    
//   },

//    {
//     field: 'avatar',
//     headerName: 'Actions',
//     width: 150,
    
//   },


// ]







//   const paginatedRows = rows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

//   return (
//     <Box
//       sx={{
//         height:"901px",
//         padding: "24px",
//         borderRadius: "16px",
//         gap: "24px",
//         display: "flex",
//         flexDirection: "column",
//         bgcolor:"white"
//       }}
//     >
//       <Box>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//              <TextField
//     fullWidth
//     placeholder="Search sites,sections..."
//     size="small"
//     variant="outlined"
//     sx={{width:"250px"}}
//     InputProps={{
//       startAdornment: (
//         <InputAdornment position="start">
//           <Search />
//         </InputAdornment>
//       ),
//     }}
//   />

//           <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
//             <Select
//               size="small"
//               value={species}
//               onChange={(e) => setSpecies(e.target.value)}
//               sx={{color:"006D35", border:" 1px solid "}}
//             >
//               <MenuItem value="All Species">All Species</MenuItem>
//               <MenuItem value="Mammals">Mammals</MenuItem>
//               <MenuItem value="Birds">Birds</MenuItem>
//             </Select>
//             <Button
//               variant="outlined"
//               startIcon={<Tune />}
//               sx={{ textTransform: "none",color:"#006D35" ,border:"1px solid #006D35"}}
//             >
//               Filter
//             </Button>
//             <Button
//               variant="outlined"
//               startIcon={<Download />}
//               sx={{ textTransform: "none",color:"#006D35" ,borderColor:"#006D35"}}
//             >
//               Download
//             </Button>
//           </Box>
//         </Box>
//       </Box>

//       <Box>
//         <TableContainer component={Paper}>
//           <Table sx={{border:"1px solid #e1dedeff",borderRadius:"8px",height:"688px"}}>
//             <TableHead>
//               <TableRow sx={{ backgroundColor: "#f9f9f9" }}>
//                 <TableCell>NO</TableCell>
//                 <TableCell sx={{width:"250px"}}>Site Name</TableCell>
//                 <TableCell>Species</TableCell>
//                 <TableCell>Animals</TableCell>
//                 <TableCell>Enclosures</TableCell>
//                 <TableCell>Sections</TableCell>
//                 <TableCell>Cluster</TableCell>
//                 <TableCell>In-Charge</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {paginatedRows.map((row) => (
//                 <TableRow key={row.id} sx={{ height: 20 }}>
//                   <TableCell sx={{ padding: "4px 8px" }}>{row.id}</TableCell>
//                   <TableCell
//                     sx={{
//                       maxWidth:"180px", 
//                       whiteSpace: "nowrap",
//                       overflow: "hidden",
//                       textOverflow: "ellipsis",
//                       padding: "4px 8px",
//                     }}
//                   >
//                     <Tooltip title={row.name}   sx={{
//                       maxWidth:"240px", 
//                       whiteSpace: "nowrap",
//                       overflow: "hidden",
//                       textOverflow: "ellipsis",
//                       padding: "4px 8px",
//                     }}>
//                       <Typography fontWeight={500} >{row.name}</Typography>
//                     </Tooltip>
//                   </TableCell>
//                   <TableCell sx={{ color: "green", padding: "4px 8px" }}>
//                     {row.species}
//                   </TableCell>
//                   <TableCell sx={{ color: "green", padding: "4px 8px" }}>
//                     {row.animals}
//                   </TableCell>
//                   <TableCell sx={{ color: "green", padding: "4px 8px" }}>
//                     {row.enclosures}
//                   </TableCell>
//                   <TableCell sx={{ color: "green", padding: "4px 8px" }}>
//                     {row.sections}
//                   </TableCell>
//                   <TableCell sx={{ padding: "4px 8px" }}>
//                     {row.cluster}
//                   </TableCell>
//                   <TableCell sx={{ padding: "4px 8px" }}>
//                     <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                       <Avatar src={row.avatar} sx={{ width: 28, height: 28 }} />
//                       <Typography variant="body2">{row.inCharge}</Typography>
//                     </Box>
//                   </TableCell>
//                   <TableCell sx={{ padding: "4px 8px" }}>
//                     <IconButton size="small" color="primary">
                      
//                       <img src={"/img/message.svg"}></img>
//                     </IconButton>
//                     <IconButton size="small" color="success">
                     
//                       <img src={"/img/phone.svg"}></img>
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box> 

//       <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
//         <Pagination
//           count={Math.ceil(rows.length / rowsPerPage)}
//           page={page}
//           onChange={(e, value) => setPage(value)}
//           color="primary"
//           variant="rounded"
//           sx={{
//     "& .MuiPaginationItem-root": {
//       color: "green",             
//       borderRadius: "6px",        
//       border: "1px solid #26b37fff", 
      
//     },
//     "& .Mui-selected": {
//       backgroundColor: " #5e9372ff",   
      
//       color: "white",             
      
//       fontWeight: "bold",
//       "&:hover": {
//         backgroundColor: "darkgreen",
//       }
//     }
//   }}
//         /> 
//        </Box>

//        {/* <Box sx={{ height: 400, width: '100%' }}> */}
//      {/* <div style={{ height: "86.5vh" }}>
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         height: "100%",
//       }}
//     >
//       <DataGrid
//         rows={rows}
//         columns={column}
//         initialState={{
//           pagination: { paginationModel: { pageSize: 10 } },
//         }}
//         pageSizeOptions={[10]}
//         disableColumnMenu
//         disableColumnFilter
//         disableColumnSorting
//         disableColumnResize
//         // disableRowSelectionOnClick
//         sx={{
//           flexGrow: 1,
//           "& .MuiTablePagination-root": {
//             backgroundColor: "#fff",
//             borderRadius: "12px",
//             padding: "4px 8px",
//           },
//           "& .MuiTablePagination-actions button": {
//             color: "green",      // changed to green
//             borderRadius: "6px",  // match your custom design
//             border: "1px solid #26b37fff",
//             "&:hover": {
//               backgroundColor: "#e3f2fd",
//             },
//           },
//           "& .Mui-selected": {
//             backgroundColor: "#5e9372ff",
//             color: "white",
//             fontWeight: "bold",
//             "&:hover": {
//               backgroundColor: "darkgreen",
//             },
//           },
//           "& .MuiTablePagination-displayedRows": {
//             fontWeight: "bold",
//             color: "#333",
//           },
//           "& .MuiDataGrid-columnsHeaders": {
//   backgroundColor: "#006D35 !impoet" ,
//   color: "#fff",
//   borderBottom: "2px solid #004d26",
// }

//         }}
//       />
//     </Box>
//   </div> */}

//     </Box>
//   );
// }

// export default SitesTable;


import {
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  InputAdornment,
} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { Download, Tune, Search } from "@mui/icons-material";
import { useState } from "react";
import RightFilterDrawer from "./RightFilterDrawer";
import Carder from "./Cart";
import AddSiteDrawer from "./AddSiteDrawer";

function SitesTable() {
  const [species, setSpecies] = useState("All Species");
  const [page, setPage] = useState(1);
  const [serachQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [addDrawerOpen, setAddDrawerOpen] = useState(false);
  const rowsPerPage = 10;

  const [rows, setRows] = useState([
    // ... all your 30 initial rows as before
  ]);

  const addNewRow = (newItem) => {
    const newRow = {
      id: rows.length + 1,
      ...newItem,
      species: parseInt(newItem.species) || 0,
      animals: parseInt(newItem.animals) || 0,
      enclosures: parseInt(newItem.enclosures) || 0,
      sections: parseInt(newItem.sections) || 0,
    };
    setRows([...rows, newRow]);
  };

  const column = [
    { field: 'id', headerName: 'NO', width: 80 },
    { field: 'name', headerName: 'Site Name', width: 200 },
    { field: 'species', headerName: 'Species', width: 80 },
    { field: 'animals', headerName: 'Animals', width: 80 },
    { field: 'enclosures', headerName: 'Enclosures', width: 80 },
    { field: 'sections', headerName: 'Sections', width: 80 },
    { field: 'cluster', headerName: 'Cluster', width: 200 },
    { field: 'inCharge', headerName: 'In-Charge', width: 150 },
    { field: 'avatar', headerName: 'Actions', width: 150 },
  ];

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(serachQuery.toLowerCase()) ||
    row.cluster.toLowerCase().includes(serachQuery.toLowerCase())
  );

  const handleApplyFilter = (selectedItems) => {
    const newRows = rows.filter((row) => {
      return selectedItems.Cluster.length === 0 || selectedItems.Cluster.includes(row.cluster);
    });
    setRows(newRows);
  };

  return (
    <Box sx={{ padding: "24px", borderRadius: "16px", display: "flex", flexDirection: "column", bgcolor: "white" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <TextField
          fullWidth
          placeholder="Search sites,sections..."
          size="small"
          variant="outlined"
          value={serachQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: "250px" }}
          InputProps={{ startAdornment: (<InputAdornment position="start"><Search /></InputAdornment>) }}
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
          columns={column}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[10]}
          disableColumnMenu
          disableColumnFilter
          disableColumnSorting
          disableColumnResize
          sx={{ flexGrow: 1 }}
        />
      </Box>

      <RightFilterDrawer open={filterOpen} setOpen={setFilterOpen} onApplyFilter={handleApplyFilter} />
      <Carder setAddOpen={setAddDrawerOpen} />
      <AddSiteDrawer open={addDrawerOpen} setOpen={setAddDrawerOpen} onSave={addNewRow} />
    </Box>
  );
}

export default SitesTable;
