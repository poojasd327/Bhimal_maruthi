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
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import BimalLogo from '@/components/BimalLogo';
import { siteConfig } from '@/config/siteConfig';

// Exact red color from Bimal Maruti header: #e7210b
const ACCENT_RED = '#e7210b';
const TEXT_MUTED = '#7d8a9c';
const TEXT_DARK = '#111827';
const BORDER_COLOR = '#ecedf0';

function PhoneIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_RED}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  );
}

function MapPinIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_RED}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MenuIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 5h16" />
      <path d="M4 12h16" />
      <path d="M4 19h16" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();

  // Active tab state (defaults to 'Arena' as in the screenshot)
  const [activeTab, setActiveTab] = useState('Arena');

  const isLinkActive = (item) => {
    if (pathname === '/arena') {
      return item.path === '/arena' || item.title.toLowerCase() === 'arena';
    }
    if (pathname === '/nexa') {
      return item.path === '/nexa' || item.title.toLowerCase() === 'nexa';
    }
    if (pathname === '/commercial') {
      return item.path === '/commercial' || item.title.toLowerCase() === 'commercial';
    }
    if (pathname === '/offers') {
      return item.path === '/offers' || item.title.toLowerCase() === 'offers';
    }
    if (pathname === '/services') {
      return item.path === '/services' || item.title.toLowerCase() === 'service';
    }
    if (pathname === '/contact') {
      return item.path === '/contact' || item.title.toLowerCase() === 'contact';
    }
    return activeTab.toLowerCase() === item.title.toLowerCase();
  };

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
        backgroundColor: '#ffffff',
        borderBottom: '1px solid',
        borderColor: BORDER_COLOR,
        transition: 'all 0.15s ease',
        zIndex: 1100,
        boxShadow: 'none',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1440px',
          px: { xs: 2, md: 3 },
          mx: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 64, // h-16
            width: '100%',
            gap: { xs: 1, md: 1.5 },
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
              flexShrink: 0,
              mr: { xs: 0, md: 0.5 },
            }}
          >
            <BimalLogo height={38} />
          </Box>

          {/* Vertical Divider (Desktop screens) */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              width: '1px',
              height: 24,
              backgroundColor: '#e3e5e8',
              flexShrink: 0,
              mx: { md: 0.5, lg: 1 },
            }}
          />

          {/* Full Navigation Links (Visible on all desktop/tablet screens >= 900px, including 1171px) */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              flex: 1,
              gap: { md: 0.1, lg: 0.3, xl: 0.6 },
              height: '100%',
              flexWrap: 'nowrap',
              justifyContent: 'flex-start',
            }}
          >
            {navLinks.map((item) => {
              const isActive = isLinkActive(item);

              if (item.isOffers) {
                return (
                  <Box
                    key={item.title}
                    component={Link}
                    href={item.path}
                    data-testid={item.testId}
                    onClick={() => setActiveTab(item.title)}
                    sx={{
                      position: 'relative',
                      px: { md: 0.6, lg: 1, xl: 1.2 },
                      height: '100%',
                      display: 'inline-flex',
                      alignItems: 'center',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
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
                  onClick={() => setActiveTab(item.title)}
                  sx={{
                    position: 'relative',
                    px: { md: 0.6, lg: 0.9, xl: 1.3 },
                    height: '100%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    fontSize: { md: '10.5px', lg: '11px' },
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: { md: '0.06em', lg: '0.08em', xl: '0.1em' },
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    color: isActive ? ACCENT_RED : TEXT_MUTED,
                    transition: 'color 0.15s ease',
                    cursor: 'pointer',
                    flexShrink: 0,
                    '&:hover': {
                      color: isActive ? ACCENT_RED : TEXT_DARK,
                    },
                  }}
                >
                  {item.title}
                  {/* Active bottom underline indicator */}
                  {isActive && (
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: { md: 4, lg: 6, xl: 8 },
                        right: { md: 4, lg: 6, xl: 8 },
                        height: '2.5px',
                        backgroundColor: ACCENT_RED,
                        borderRadius: '1px 1px 0 0',
                      }}
                    />
                  )}
                </Box>
              );
            })}
          </Box>

          {/* Spacer for mobile screens */}
          <Box sx={{ flex: 1, display: { md: 'none' } }} />

          {/* Desktop Right Side: Phone & Region Selector (Matches screenshots 1, 2, 3, 5) */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: { md: 1.2, lg: 1.8 },
              flexShrink: 0,
              ml: 'auto',
            }}
          >
            {/* Phone link */}
            <Box
              component="a"
              href={siteConfig.phoneTel || 'tel:08030693069'}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                fontSize: { md: '11.5px', lg: '12px' },
                fontWeight: 500,
                color: TEXT_MUTED,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'color 0.15s ease',
                '&:hover': {
                  color: TEXT_DARK,
                },
              }}
            >
              <PhoneIconSvg />
              <span>{siteConfig.phone || '080-3069 3069'}</span>
            </Box>

            {/* Region Selector Square Icon Button */}
            <Box
              component="button"
              onClick={handleRegionClick}
              data-testid="button-region-selector"
              aria-label={`Select Region (Current: ${selectedRegion})`}
              title={`Region: ${selectedRegion}`}
              sx={{
                width: 36,
                height: 36,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: '#e2e8f0',
                backgroundColor: '#ffffff',
                cursor: 'pointer',
                p: 0,
                transition: 'all 0.15s ease',
                '&:hover': {
                  backgroundColor: '#f8fafc',
                  borderColor: '#cbd5e1',
                },
              }}
            >
              <MapPinIconSvg />
            </Box>
          </Box>

          {/* Mobile Right Side: Region Selector & Hamburger Button */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
              gap: 1,
              flexShrink: 0,
            }}
          >
            <Box
              component="button"
              onClick={handleRegionClick}
              sx={{
                height: 32,
                px: 1.2,
                fontSize: '12px',
                fontWeight: 500,
                color: TEXT_DARK,
                border: '1px solid',
                borderColor: '#e2e8f0',
                borderRadius: '6px',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.6,
                backgroundColor: '#ffffff',
                cursor: 'pointer',
              }}
            >
              <MapPinIconSvg />
              <span>{selectedRegion.split(' - ')[0]}</span>
            </Box>

            <IconButton
              onClick={() => setMobileOpen(true)}
              data-testid="button-mobile-menu"
              aria-label="Open menu"
              size="small"
              sx={{
                color: TEXT_DARK,
                p: 0.8,
                border: '1px solid',
                borderColor: '#e2e8f0',
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
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              minWidth: 220,
              borderRadius: '8px',
              border: '1px solid',
              borderColor: BORDER_COLOR,
              boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
              backgroundColor: '#ffffff',
            },
          },
        }}
      >
        <Typography variant="caption" sx={{ px: 2, py: 1, display: 'block', color: TEXT_MUTED, fontWeight: 600 }}>
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
        keepMounted
        slotProps={{
          paper: {
            sx: {
              width: 300,
              backgroundColor: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              p: 2.5,
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <BimalLogo height={32} />
          <IconButton onClick={() => setMobileOpen(false)} aria-label="Close menu" size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <List sx={{ p: 0, flexGrow: 1 }}>
          {navLinks.map((item) => {
            const isActive = isLinkActive(item);
            return (
              <ListItem key={item.title} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  component={Link}
                  href={item.path}
                  onClick={() => {
                    setActiveTab(item.title);
                    setMobileOpen(false);
                  }}
                  sx={{
                    borderRadius: 1.5,
                    py: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: isActive ? 'rgba(231, 33, 11, 0.06)' : 'transparent',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: isActive ? ACCENT_RED : TEXT_DARK,
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
            );
          })}
        </List>

        <Divider sx={{ my: 2 }} />

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
              backgroundColor: '#f8fafc',
              textDecoration: 'none',
              color: TEXT_DARK,
              fontSize: '0.85rem',
              fontWeight: 600,
            }}
          >
            <PhoneIconSvg />
            <span>Call: {siteConfig.phone || '080-3069 3069'}</span>
          </Box>

          <Button
            variant="contained"
            fullWidth
            component={Link}
            href="/contact"
            onClick={() => setMobileOpen(false)}
            sx={{
              py: 1.2,
              fontWeight: 700,
              backgroundColor: ACCENT_RED,
              color: '#ffffff',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#dc2626',
                boxShadow: 'none',
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
