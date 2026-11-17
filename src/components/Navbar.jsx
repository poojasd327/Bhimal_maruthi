'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { siteConfig } from '@/config/siteConfig';
import { useColorMode } from '@/components/ThemeClientProvider';

export default function Navbar() {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode, toggleColorMode } = useColorMode();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const navLinks = siteConfig.navLinks;

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.85)' : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(12px)',
        color: 'text.primary',
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: 70 }}>
          {/* Logo / Brand Name */}
          <Box
            component={Link}
            href="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: 2,
                backgroundColor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 800,
                fontSize: 20,
              }}
            >
              {siteConfig.name.charAt(0)}
            </Box>
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontWeight: 700,
                letterSpacing: '-0.02em',
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(90deg, #60a5fa, #c084fc)'
                  : 'linear-gradient(90deg, #1976d2, #9c27b0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {siteConfig.name}
            </Typography>
          </Box>

          {/* Desktop Navigation Links */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {navLinks.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Button
                    key={item.path}
                    component={Link}
                    href={item.path}
                    sx={{
                      color: isActive ? 'primary.main' : 'text.primary',
                      fontWeight: isActive ? 700 : 500,
                      position: 'relative',
                      px: 2,
                      py: 1,
                      '&::after': isActive
                        ? {
                            content: '""',
                            position: 'absolute',
                            bottom: 4,
                            left: '20%',
                            right: '20%',
                            height: '2px',
                            backgroundColor: 'primary.main',
                            borderRadius: '2px',
                          }
                        : undefined,
                      '&:hover': {
                        backgroundColor: 'action.hover',
                      },
                    }}
                  >
                    {item.title}
                  </Button>
                );
              })}
            </Box>
          )}

          {/* Right Action Icons & CTA */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Color Mode Toggle */}
            <IconButton
              onClick={toggleColorMode}
              color="inherit"
              aria-label="toggle light or dark theme"
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                p: 1,
              }}
            >
              {mode === 'dark' ? (
                <Brightness7Icon sx={{ color: 'warning.light' }} />
              ) : (
                <Brightness4Icon sx={{ color: 'text.secondary' }} />
              )}
            </IconButton>

            {/* Desktop CTA Button */}
            {!isMobile && (
              <Button
                variant="contained"
                color="primary"
                component={Link}
                href="/contact"
                sx={{ ml: 1, px: 2.5 }}
              >
                Get Started
              </Button>
            )}

            {/* Mobile Hamburger Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer menu"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ ml: 0.5 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: 280,
            p: 2,
            backgroundColor: 'background.paper',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {siteConfig.name}
          </Typography>
          <IconButton onClick={handleDrawerToggle} aria-label="close drawer">
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 2 }} />

        <List sx={{ p: 0 }}>
          {navLinks.map((item) => {
            const isActive = pathname === item.path;
            return (
              <ListItem key={item.path} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  component={Link}
                  href={item.path}
                  onClick={handleDrawerToggle}
                  selected={isActive}
                  sx={{
                    borderRadius: 2,
                    fontWeight: isActive ? 700 : 500,
                  }}
                >
                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'primary.main' : 'text.primary',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Box sx={{ mt: 'auto', pt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            component={Link}
            href="/contact"
            onClick={handleDrawerToggle}
            size="large"
          >
            Get In Touch
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}

