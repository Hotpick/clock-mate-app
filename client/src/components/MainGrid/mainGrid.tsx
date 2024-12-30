import Box from "@mui/material/Box";
import {Grid2 as Grid} from "@mui/material";

const MainGrid = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        <Grid size={{ xs: 12, sm: 8 }}>
          Weekly total
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          Monthly total
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          Time tracking
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          Invoiced total
        </Grid>
      </Grid>
    </Box>
  )
}

export default MainGrid;