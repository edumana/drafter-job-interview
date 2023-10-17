import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useRef, useState } from 'react';
import Colors from '../constants/colors';
import fontSettings from '../constants/fontSettings';
import ProductSubMenu from './ProductSubMenu';

const pages = ['Home', 'Products ↓', 'Resources', 'Pricing'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function HeaderMenu() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [productBox, toggleProductBox] = useState(false);
  const productButtonRef = useRef(null);
  const [productBoxPosition, setProductBoxPosition] = useState({ top: 0, left: 0 });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {

    setAnchorElNav(null);

    if (event === 'Products ↓' && productButtonRef.current) {
      toggleProductBox(prevState => !prevState)
      const rect = productButtonRef.current.getBoundingClientRect();
      console.log('bottom', rect.bottom)
      console.log('left', rect.left - 300)

      setProductBoxPosition({
        top: rect.bottom, // position the top of red box to the bottom of "Products" button
        left: rect.left - 300   // align the left side of both
      });
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position='static' color='transparent' elevation={0} sx={{ color: 'black' }}>
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <Box
            component='img'
            width={30}
            height={30}
            src='logo.png'
            alt='logo'
            sx={{ margin: 1 }}
          />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='#app-bar-with-responsive-menu'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'sans-serif',
              fontWeight: 600,
              letterSpacing: '0rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Untitled UI
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center' sx={{ color: Colors.orDarkGray }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant='h5'
            noWrap
            component='a'
            href='#app-bar-with-responsive-menu'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                ref={page === "Products ↓" ? productButtonRef : null}
                sx={{
                  my: 2,
                  color: Colors.orDarkGray,
                  display: 'block',
                  fontWeight: 600,
                  fontSize: fontSettings.s,
                  paddingX: 3,
                  marginLeft: 2
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {productBox && (<ProductSubMenu productBoxPosition={productBoxPosition}/>
          )}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default HeaderMenu;
