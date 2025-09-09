
import { Box, Card, CardContent, Typography, Button, Avatar, IconButton } from "@mui/material";
import { Call, Chat, Add, LocationOnOutlined } from "@mui/icons-material";
import Profile from "./Profile";

function Carder({ onAddClick,stats,backgroundImage }) { 
  return (
    <Card
      sx={{
        width: '100%',
        height: '262px',
        backgroundImage:  `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffff',
        borderRadius: 2,
      }}
    >
      <CardContent sx={{ backdropFilter: 'brightness(0.9)' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: 2 }}>
            <Box>
              <Typography variant="h6">All Site Insights</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                <Profile />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: "center", gap: 1 }}>
              <Box sx={{ backgroundColor: "#898c8aff", borderRadius: "50px", border: "0.5px solid white" }}>
                <IconButton sx={{ color: '#fff' }}><Call /></IconButton>
              </Box>
              <Box sx={{ backgroundColor: "#898c8aff", borderRadius: "50px", border: "0.5px solid white" }}>
                <IconButton sx={{ color: '#fff' }}><Chat /></IconButton>
              </Box>
            </Box>
          </Box>
          <Box>
            <Button
              onClick={onAddClick} 
              sx={{ color: "#49fe4fff" }}
              variant="text"
              startIcon={<Add />}
            >
              Add New
            </Button>
          </Box>
        </Box>

        
        <Box sx={{
          display: 'flex',
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignContent: "space-evenly",
          height: "92px",
          mt: "0px",
          background: 'rgba(0,0,0,0.5)',
          borderRadius: "8px"
        }}>
          <Box sx={{ color: "#49fe4fff", borderRadius: 1, display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
            <Avatar sx={{ p: 1, bgcolor: "#FFFFFF29", borderRadius: "4px" }} variant="square" src="/img/rabbit.svg" alt="avatar" />
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography>{stats.species}</Typography><Typography>Species</Typography>
            </Box>
          </Box>
          <Box sx={{ color: "#49fe4fff", borderRadius: 1, display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
            <Avatar sx={{ p: 1, bgcolor: "#FFFFFF29", borderRadius: "4px" }} variant="square" src="/img/animalFoot.svg" alt="avatar" />
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography>{stats.sites}</Typography><Typography>Sites</Typography>
            </Box>
          </Box>
          <Box sx={{ color: "#49fe4fff", borderRadius: 1, display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
            <Avatar sx={{ p: 1, bgcolor: "#FFFFFF29", borderRadius: "4px" }} variant="square"><LocationOnOutlined /></Avatar>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography>{stats.animals}</Typography><Typography>Animals</Typography>
            </Box>
          </Box>
          <Box sx={{ color: "#49fe4fff", borderRadius: 1, display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
            <Avatar sx={{ p: 1, bgcolor: "#FFFFFF29", borderRadius: "4px" }} variant="square" src="/img/House.svg" alt="avatar" />
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography>{stats.enclosures}</Typography><Typography>Enclosures</Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Carder;
