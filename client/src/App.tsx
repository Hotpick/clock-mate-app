import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from "./components/Sidebar";
import {Stack} from "@mui/material";
import MainGrid from "./components/MainGrid";

function App() {
  return (
    <>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <Sidebar/>
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            // backgroundColor: "grey",
            overflow: 'auto',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            {/*<Header />*/}
            <MainGrid />
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default App;
