'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Box,
  Container,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
  Divider,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BimalLogo from '@/components/BimalLogo';
import { siteConfig } from '@/config/siteConfig';
import { useColorMode } from '@/components/ThemeClientProvider';

// SVG Icons matching user's Lucide icons with red accent
function PhoneIconSvg({ sx = {} }) {
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e7210b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      sx={{ width: 14, height: 14, shrink: 0, ...sx }}
      aria-hidden="true"
    >
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </Box>
  );
}

function MapPinIconSvg({ sx = {} }) {
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e7210b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      sx={{ width: 14, height: 14, shrink: 0, ...sx }}
      aria-hidden="true"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </Box>
  );
}

function MenuIconSvg({ sx = {} }) {
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      sx={{ width: 22, height: 22, ...sx }}
      aria-hidden="true"
    >
      <path d="M4 5h16" />
      <path d="M4 12h16" />
      <path d="M4 19h16" />
    </Box>
  );
}

export default function Header() {
  const pathname = usePathname();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // Responsive breakpoints
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  // Mobile drawer state
  const [mobileOpen, setMobileOpen] = useState(false);

  // Region dropdown state
  const [regionAnchorEl, setRegionAnchorEl] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(siteConfig.defaultRegion || 'Karnataka');

  const handleRegionClick = (event) => {
    setRegionAnchorEl(event.currentTarget);
  };

  const handleRegionClose = (region) => {
    if (typeof region === 'string') {
      setSelectedRegion(region);
    }
    setRegionAnchorEl(null);
  };

  const navLinks = siteConfig.navLinks;

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{
        backgroundColor: isDark ? '#0f172a' : '#fafafa',
        borderBottom: '1px solid',
        borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : '#ecedf0',
        transition: 'all 0.2s ease',
        zIndex: 1100,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 3 } }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            height: 64, // h-16
            width: '100%',
          }}
        >
          {/* Logo Button */}
          <Box
            component={Link}
            href="/"
            data-testid="link-logo-home"
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              textDecoration: 'none',
              color: 'inherit',
              flexShrink: 0,
              mr: 1,
            }}
          >
            <BimalLogo height={38} />
          </Box>

          {/* Vertical Divider (XL screens) */}
          <Box
            sx={{
              display: { xs: 'none', xl: 'block' },
              width: '1px',
              height: 24,
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.15)' : '#e3e5e8',
              flexShrink: 0,
              mx: 0.5,
            }}
          />

          {/* Full Navigation Links (XL screens) */}
          <Box
            sx={{
              display: { xs: 'none', xl: 'flex' },
              alignItems: 'center',
              flex: 1,
              gap: 0.5,
            }}
          >
            {navLinks.map((item) => {
              const isActive = pathname === item.path;

              if (item.isOffers) {
                return (
                  <Box
                    key={item.title}
                    component={Link}
                    href={item.path}
                    data-testid={item.testId}
                    sx={{
                      position: 'relative',
                      px: 1.5,
                      py: '18px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span className="offers-pill offers-pulse">{item.title}</span>
                  </Box>
                );
              }

              return (
                <Box
                  key={item.title}
                  component={Link}
                  href={item.path}
                  data-testid={item.testId}
                  sx={{
                    position: 'relative',
                    px: 1.5,
                    py: '18px',
                    fontSize: '11px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    color: isActive ? (isDark ? '#f8fafc' : '#111827') : (isDark ? '#94a3b8' : '#7d8a9c'),
                    transition: 'color 0.15s ease',
                    '&:hover': {
                      color: isDark ? '#ffffff' : '#111827',
                    },
                  }}
                >
                  {item.title}
                </Box>
              );
            })}
          </Box>

          {/* Compact Navigation (LG to XL screens) */}
          <Box
            sx={{
              display: { xs: 'none', lg: 'flex', xl: 'none' },
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            {navLinks.slice(0, 5).map((item) => {
              if (item.isOffers) {
                return (
                  <Box
                    key={item.title}
                    component={Link}
                    href={item.path}
                    sx={{
                      px: 1,
                      py: 1.5,
                      display: 'inline-flex',
                      alignItems: 'center',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span className="offers-pill offers-pulse" style={{ fontSize: '9px', padding: '2px 8px' }}>
                      {item.title}
                    </span>
                  </Box>
                );
              }

              return (
                <Box
                  key={item.title}
                  component={Link}
                  href={item.path}
                  sx={{
                    px: 1.2,
                    py: 1.5,
                    fontSize: '10px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    color: isDark ? '#94a3b8' : '#7d8a9c',
                    '&:hover': {
                      color: isDark ? '#ffffff' : '#111827',
                    },
                  }}
                >
                  {item.title}
                </Box>
              );
            })}
            <Typography variant="caption" sx={{ color: 'text.secondary', opacity: 0.5, px: 0.5 }}>
              …
            </Typography>
          </Box>

          {/* Spacer on non-XL screens */}
          <Box sx={{ flex: 1, display: { xl: 'none' } }} />

          {/* Desktop Right Side: Phone & Region Selector (LG & XL) */}
          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' },
              alignItems: 'center',
              gap: 2,
              flexShrink: 0,
            }}
          >
            {/* Phone link (shown on XL) */}
            <Box
              component="a"
              href={siteConfig.phoneTel || 'tel:08030693069'}
              sx={{
                display: { xs: 'none', xl: 'flex' },
                alignItems: 'center',
                gap: 1,
                fontSize: '0.75rem',
                fontWeight: 600,
                color: isDark ? '#94a3b8' : '#7d8a9c',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'color 0.15s ease',
                '&:hover': {
                  color: isDark ? '#ffffff' : '#111827',
                },
              }}
            >
              <PhoneIconSvg />
              {siteConfig.phone || '080-3069 3069'}
            </Box>

            {/* Region Selector Button */}
            <Button
              onClick={handleRegionClick}
              data-testid="button-region-selector"
              size="small"
              variant="outlined"
              sx={{
                height: 32,
                px: 1.5,
                fontSize: '0.75rem',
                fontWeight: 500,
                textTransform: 'none',
                color: 'text.primary',
                borderColor: isDark ? 'rgba(255,255,255,0.15)' : '#e2e8f0',
                borderRadius: '6px',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: 0.8,
                backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : '#ffffff',
                '&:hover': {
                  borderColor: isDark ? 'rgba(255,255,255,0.3)' : '#cbd5e1',
                  backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : '#f8fafc',
                },
              }}
            >
              <MapPinIconSvg />
              <span>{selectedRegion}</span>
              <KeyboardArrowDownIcon sx={{ fontSize: 16, opacity: 0.6 }} />
            </Button>
          </Box>

          {/* Mobile Right Side: Region Selector & Menu Button */}
          <Box
            sx={{
              display: { xs: 'flex', lg: 'none' },
              alignItems: 'center',
              gap: 1,
              flexShrink: 0,
            }}
          >
            {/* Region Selector on Mobile */}
            <Button
              onClick={handleRegionClick}
              size="small"
              variant="outlined"
              sx={{
                height: 32,
                px: 1.2,
                fontSize: '0.75rem',
                fontWeight: 500,
                textTransform: 'none',
                color: 'text.primary',
                borderColor: isDark ? 'rgba(255,255,255,0.15)' : '#e2e8f0',
                borderRadius: '6px',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: 0.6,
                minWidth: 'auto',
              }}
            >
              <MapPinIconSvg />
              <span>{selectedRegion.split(' - ')[0]}</span>
            </Button>

            {/* Mobile Hamburger Menu Button */}
            <IconButton
              onClick={() => setMobileOpen(true)}
              data-testid="button-mobile-menu"
              aria-label="Open menu"
              size="small"
              sx={{
                color: 'text.primary',
                p: 0.8,
                border: '1px solid',
                borderColor: isDark ? 'rgba(255,255,255,0.15)' : '#e2e8f0',
                borderRadius: '6px',
              }}
            >
              <MenuIconSvg />
            </IconButton>
          </Box>
        </Box>
      </Container>

      {/* Region Selection Menu */}
      <Menu
        anchorEl={regionAnchorEl}
        open={Boolean(regionAnchorEl)}
        onClose={() => handleRegionClose()}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 220,
            borderRadius: '8px',
            border: '1px solid',
            borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#e5e7eb',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          },
        }}
      >
        <Typography variant="caption" sx={{ px: 2, py: 1, display: 'block', color: 'text.secondary', fontWeight: 600 }}>
          Select Location
        </Typography>
        <Divider />
        {(siteConfig.regions || ['Karnataka', 'Bengaluru - Central', 'Bengaluru - East', 'Bengaluru - North']).map((region) => (
          <MenuItem
            key={region}
            selected={selectedRegion === region}
            onClick={() => handleRegionClose(region)}
            sx={{ fontSize: '0.85rem', py: 1 }}
          >
            {region}
          </MenuItem>
        ))}
      </Menu>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: 300,
            backgroundColor: isDark ? '#0f172a' : '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            p: 2.5,
          },
        }}
      >
        {/* Drawer Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <BimalLogo height={32} />
          <IconButton onClick={() => setMobileOpen(false)} aria-label="Close menu" size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Drawer Navigation Links */}
        <List sx={{ p: 0, flexGrow: 1 }}>
          {navLinks.map((item) => (
            <ListItem key={item.title} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={Link}
                href={item.path}
                onClick={() => setMobileOpen(false)}
                sx={{
                  borderRadius: 1.5,
                  py: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'text.primary',
                  }}
                >
                  {item.title}
                </Typography>
                {item.isOffers && (
                  <span className="offers-pill offers-pulse" style={{ fontSize: '9px', padding: '2px 8px' }}>
                    Offers
                  </span>
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        {/* Direct Contact & Location inside Drawer */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, pt: 1 }}>
          <Box
            component="a"
            href={siteConfig.phoneTel || 'tel:08030693069'}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              p: 1.5,
              borderRadius: 2,
              backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#f8fafc',
              textDecoration: 'none',
              color: 'text.primary',
              fontSize: '0.85rem',
              fontWeight: 600,
            }}
          >
            <PhoneIconSvg />
            <span>Call: {siteConfig.phone || '080-3069 3069'}</span>
          </Box>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            component={Link}
            href="/contact"
            onClick={() => setMobileOpen(false)}
            sx={{
              py: 1.2,
              fontWeight: 700,
              backgroundColor: '#e52b20',
              '&:hover': {
                backgroundColor: '#dc2626',
              },
            }}
          >
            Book Test Drive / Service
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}

