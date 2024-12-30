import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import {Avatar, Stack, styled, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
});

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: 'background.paper',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          // mt: 'calc(var(--template-frame-height, 0px) + 4px)',
          p: 1.5,
        }}
      >
        Clock mate logo
      </Box>
      Menu
      {/*<MenuContent />*/}
      {/*<CardAlert />*/}
      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: 'center',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Avatar
          sizes="small"
          alt="Riley Carter"
          src="/avatar.png"
          sx={{ width: 24, height: 24 }}
        />
        <Box sx={{ mr: 'auto' }}>
          <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
            Roma Melnik
          </Typography>
        </Box>
        <SettingsIcon />
        {/*<OptionsMenu />*/}
      </Stack>
    </Drawer>
  )
}

export default Sidebar;