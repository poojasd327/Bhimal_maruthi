'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Grid,
} from '@mui/material';

const ACCENT_RED = '#e7210b';
const TEXT_DARK = '#111827';
const TEXT_MUTED = '#64748b';
const CARD_BG = '#ffffff';
const BORDER_COLOR = '#e5e7eb';

// SVG Icons
function MapPinIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#64748b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0, marginTop: 2 }}
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ClockIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#64748b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function TargetIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

// Data matching all 6 screenshots
const arenaLocations = [
  {
    name: 'Bimal Maruti Mahadevpura',
    address: 'No. 1, Kundalahalli Main Road, Whitefield, Mahadevpura, Bengaluru - 560048',
    phone: '080-3069 3069',
    tel: '08030693069',
    badge: 'Showroom + Workshop',
  },
  {
    name: 'Bimal Maruti Domlur',
    address: 'No. 7, Amarjyothi Layout, Koramangala, Domlur, Bengaluru - 560071',
    phone: '080-2535 6600',
    tel: '08025356600',
  },
  {
    name: 'Bimal Maruti Yelahanka',
    address: 'No. 55, International Airport Road, Yelahanka New Town, Bengaluru - 560063',
    phone: '080-2856 1234',
    tel: '08028561234',
    badge: 'Showroom + Workshop',
  },
  {
    name: 'Bimal Maruti Varthur',
    address: 'No. 22, Varthur Main Road, Whitefield, Bengaluru - 560087',
    phone: '080-4016 5678',
    tel: '08040165678',
    badge: 'Showroom + Workshop',
  },
  {
    name: 'Bimal Maruti Banashankari',
    address: 'No. 210, 100 Ft Road, 3rd Stage, Banashankari, Bengaluru - 560085',
    phone: '080-2671 9900',
    tel: '08026719900',
  },
  {
    name: 'Bimal Maruti Hoskote',
    address: 'Hoskote Main Road, Opposite ITI, Hoskote, Bengaluru Rural - 562114',
    phone: '080-2719 0011',
    tel: '08027190011',
    badge: 'Showroom + Workshop',
  },
  {
    name: 'Bimal Maruti Devanahalli',
    address: 'Near Devanahalli Fort, NH-7, Devanahalli, Bengaluru - 562110',
    phone: '08110-230033',
    tel: '08110230033',
    badge: 'Showroom + Workshop',
  },
  {
    name: 'Bimal Maruti Chikkaballapura',
    address: 'MG Road, Near Bus Stand, Chikkaballapura - 562101',
    phone: '08156-232100',
    tel: '08156232100',
    badge: 'Showroom + Workshop',
  },
];

const nexaLocations = [
  {
    name: 'Nexa Daddanekkundi',
    address: 'No. 15, Doddanekkundi Main Road, Marathahalli, Bengaluru - 560037',
    phone: '080-4160 7700',
    tel: '08041607700',
    badge: 'Showroom + Workshop',
  },
  {
    name: 'Nexa Nagarbhavi',
    address: 'No. 66, Nagarbhavi Main Road, 2nd Stage, Bengaluru - 560072',
    phone: '080-2329 8800',
    tel: '08023298800',
    badge: 'Showroom + Workshop',
  },
  {
    name: 'Nexa Devanahalli',
    address: 'Near Devanahalli Fort, NH-7, Devanahalli, Bengaluru - 562110',
    phone: '08110-230044',
    tel: '08110230044',
    badge: 'Showroom + Workshop',
  },
  {
    name: 'Nexa Chikkaballapura',
    address: 'MG Road, Near Bus Stand, Chikkaballapura - 562101',
    phone: '08156-232200',
    tel: '08156232200',
    badge: 'Showroom + Workshop',
  },
  {
    name: 'Nexa Hoskote',
    address: 'Hoskote Main Road, Opposite ITI, Hoskote, Bengaluru Rural - 562114',
    phone: '080-2719 0022',
    tel: '08027190022',
    badge: 'Showroom + Workshop',
  },
];

const workshopLocations = [
  {
    name: 'Bimal Maruti Workshop KP Road',
    address: 'KP Road, Bengaluru - 560001',
    phone: '080-2301200',
    tel: '0802301200',
  },
  {
    name: 'Bimal Maruti Workshop Kodihalli',
    address: 'Kodihalli, Bengaluru - 560008',
    phone: '080-2301300',
    tel: '0802301300',
  },
  {
    name: 'Bimal Maruti Workshop Banaswadi',
    address: 'Banaswadi, Bengaluru - 560043',
    phone: '080-2301400',
    tel: '0802301400',
  },
  {
    name: 'Bimal Maruti Workshop Peenya',
    address: 'Peenya Industrial Area, Bengaluru - 560058',
    phone: '080-2301500',
    tel: '0802301500',
  },
  {
    name: 'Bimal Maruti Workshop Kadugodi Nexa',
    address: 'Kadugodi, Whitefield, Bengaluru - 560067',
    phone: '080-2301600',
    tel: '0802301600',
    badge: 'Nexa Workshop',
  },
];

const commercialLocations = [
  {
    name: 'Bimal Maruti Commercial Yeswhanthapura',
    address: 'Yeswhanthapura, Bengaluru - 560022',
    phone: '080-2301100',
    tel: '0802301100',
  },
];

const trueValueLocations = [
  {
    name: 'Bimal Maruti TrueValue',
    address: 'No. 1, Kundalahalli Main Road, Whitefield, Mahadevpura, Bengaluru - 560048',
    phone: '084-3069 3069',
    tel: '08430693069',
    badge: 'Pre-owned cars',
  },
];

const extendedLocations = [
  {
    name: 'Bimal Maruti Bagepalli',
    address: 'Bagepalli Main Road, Near Bus Stand, Bagepalli, Chikkaballapura - 563114',
    phone: '08159-230100',
    tel: '08159230100',
  },
  {
    name: 'Bimal Maruti Shidlaghatta',
    address: 'Shidlaghatta Main Road, Chikkaballapura - 562105',
    phone: '08159-230200',
    tel: '08159230200',
  },
  {
    name: 'Bimal Maruti Vijayapura',
    address: 'Vijayapura Main Road, Bengaluru Rural - 562104',
    phone: '080-2300300',
    tel: '0802300300',
  },
  {
    name: 'Bimal Maruti Hcross',
    address: 'Hcross, Bengaluru Rural - 562163',
    phone: '080-2300400',
    tel: '0802300400',
  },
  {
    name: 'Bimal Maruti Hesargatta',
    address: 'Hesargatta, Bengaluru - 560089',
    phone: '080-2300500',
    tel: '0802300500',
  },
  {
    name: 'Bimal Maruti Budigere',
    address: 'Budigere, Bengaluru Rural - 562129',
    phone: '080-2300600',
    tel: '0802300600',
  },
  {
    name: 'Bimal Maruti Perisandra',
    address: 'Perisandra, Bengaluru - 560067',
    phone: '080-2300700',
    tel: '0802300700',
  },
  {
    name: 'Bimal Maruti Gudibande',
    address: 'Gudibande, Chikkaballapura - 562101',
    phone: '08159-230800',
    tel: '08159230800',
  },
  {
    name: 'Bimal Maruti Oorgaumpet',
    address: 'Oorgaumpet, Bengaluru Rural - 562104',
    phone: '080-2300900',
    tel: '0802300900',
  },
  {
    name: 'Bimal Maruti Bandahalli',
    address: 'Bandahalli, Bengaluru Rural - 562114',
    phone: '080-2301000',
    tel: '0802301000',
  },
];

function LocationCard({ loc, showPin = true }) {
  return (
    <Box
      sx={{
        backgroundColor: CARD_BG,
        borderRadius: '14px',
        border: '1px solid',
        borderColor: BORDER_COLOR,
        p: { xs: 2.2, sm: 2.6 },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
        transition: 'all 0.2s ease',
        '&:hover': {
          borderColor: '#cbd5e1',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          transform: 'translateY(-1px)',
        },
      }}
    >
      <Box>
        {/* Name with Pin */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
          {showPin && <MapPinIconSvg />}
          <Typography
            sx={{
              fontSize: '14.5px',
              fontWeight: 700,
              color: TEXT_DARK,
              lineHeight: 1.3,
            }}
          >
            {loc.name}
          </Typography>
        </Box>

        {/* Address */}
        <Typography
          sx={{
            fontSize: '12.5px',
            color: TEXT_MUTED,
            lineHeight: 1.5,
            mb: 2,
            pl: showPin ? 2.8 : 0,
          }}
        >
          {loc.address}
        </Typography>
      </Box>

      <Box sx={{ pl: showPin ? 2.8 : 0 }}>
        {/* Phone */}
        <Box
          component="a"
          href={`tel:${loc.tel}`}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            color: TEXT_DARK,
            fontSize: '13px',
            fontWeight: 600,
            textDecoration: 'none',
            mb: loc.badge ? 1.5 : 0,
            transition: 'color 0.15s ease',
            '&:hover': {
              color: ACCENT_RED,
            },
          }}
        >
          <PhoneIconSvg />
          <span>{loc.phone}</span>
        </Box>

        {/* Badge if present */}
        {loc.badge && (
          <Box sx={{ mt: 0.5 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.6,
                px: 1.3,
                py: 0.35,
                borderRadius: 9999,
                backgroundColor: '#fef2f2',
                border: '1px solid #fee2e2',
                color: '#dc2626',
                fontSize: '11px',
                fontWeight: 600,
              }}
            >
              <TargetIconSvg />
              <span>{loc.badge}</span>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default function LocationsPage() {
  const [currentRegion, setCurrentRegion] = useState('Karnataka');

  return (
    <Box sx={{ backgroundColor: '#ffffff', minHeight: '100vh', pb: 10 }}>
      {/* 1. HERO SECTION */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '320px', sm: '380px', md: '440px' },
          overflow: 'hidden',
          backgroundColor: '#0a0d14',
          backgroundImage: 'url(/images/hero-locations.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: { xs: 'center right', md: 'center center' },
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark Gradient Overlay for maximum contrast */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: {
              xs: 'linear-gradient(to right, rgba(10,13,20,0.92) 0%, rgba(10,13,20,0.75) 60%, rgba(10,13,20,0.35) 100%)',
              md: 'linear-gradient(to right, #0a0d14 0%, #0a0d14 38%, rgba(10,13,20,0.65) 55%, rgba(10,13,20,0.15) 100%)',
            },
            zIndex: 1,
          }}
        />

        <Container
          maxWidth={false}
          sx={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
            maxWidth: '1440px',
            px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          {/* Pill Badge */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              px: 1.6,
              py: 0.5,
              borderRadius: 9999,
              backgroundColor: 'rgba(185, 28, 28, 0.85)',
              border: '1px solid rgba(239, 68, 68, 0.4)',
              color: '#ffffff',
              fontSize: '11.5px',
              fontWeight: 700,
              letterSpacing: '0.04em',
              mb: 2,
            }}
          >
            {currentRegion}
          </Box>

          {/* Heading */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: { xs: '2.1rem', sm: '3.2rem', md: '4.5rem' },
              color: '#ffffff',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              mb: 1.5,
              textShadow: '0 2px 10px rgba(0,0,0,0.4)',
            }}
          >
            Our Showrooms
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontSize: { xs: '0.95rem', sm: '1.125rem' },
              color: 'rgba(255, 255, 255, 0.88)',
              maxWidth: 640,
              lineHeight: 1.5,
              textShadow: '0 1px 4px rgba(0,0,0,0.5)',
            }}
          >
            30 locations across Karnataka - Arena, Nexa, Extended, Workshop, Commercial, True
            Value, and more.
          </Typography>
        </Container>
      </Box>

      {/* Main Content Container */}
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1440px',
          px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
          mx: 'auto',
          mt: { xs: 4, md: 5 },
        }}
      >
        {/* Switch region link */}
        <Box sx={{ mb: 2.5 }}>
          <Typography
            component="button"
            onClick={() => setCurrentRegion((p) => (p === 'Karnataka' ? 'Kerala' : 'Karnataka'))}
            sx={{
              background: 'none',
              border: 'none',
              p: 0,
              color: '#475569',
              fontSize: '13px',
              textDecoration: 'underline',
              cursor: 'pointer',
              '&:hover': {
                color: ACCENT_RED,
              },
            }}
          >
            {currentRegion === 'Karnataka' ? 'Switch to Kerala showrooms' : 'Switch to Karnataka showrooms'}
          </Typography>
        </Box>

        {/* Business Hours Info Banner */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.2,
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            px: 2.5,
            py: 1.5,
            mb: { xs: 4, md: 5 },
          }}
        >
          <ClockIconSvg />
          <Typography sx={{ fontSize: '13px', color: TEXT_DARK, fontWeight: 500 }}>
            <strong>Business Hours:</strong> All Days: 9:00 AM - 7:00 PM
          </Typography>
        </Box>

        {/* 1. ARENA SHOWROOMS */}
        <Box sx={{ mb: { xs: 5, md: 7 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
            <Box
              sx={{
                width: 4,
                height: 24,
                backgroundColor: ACCENT_RED,
                borderRadius: 2,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: { xs: '1.6rem', sm: '1.9rem', md: '2.1rem' },
                fontWeight: 700,
                color: ACCENT_RED,
                letterSpacing: '-0.01em',
              }}
            >
              Arena Showrooms
            </Typography>
            <Box
              sx={{
                px: 1.2,
                py: 0.3,
                borderRadius: 9999,
                backgroundColor: '#fef2f2',
                border: '1px solid #fee2e2',
                color: '#dc2626',
                fontSize: '11px',
                fontWeight: 700,
              }}
            >
              8 locations
            </Box>
          </Box>

          <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
            {arenaLocations.map((loc) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={loc.name}>
                <LocationCard loc={loc} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 2. NEXA SHOWROOMS */}
        <Box sx={{ mb: { xs: 5, md: 7 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
            <Box
              sx={{
                width: 4,
                height: 24,
                backgroundColor: '#0369a1',
                borderRadius: 2,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: { xs: '1.6rem', sm: '1.9rem', md: '2.1rem' },
                fontWeight: 700,
                color: '#0369a1',
                letterSpacing: '-0.01em',
              }}
            >
              Nexa Showrooms
            </Typography>
            <Box
              sx={{
                px: 1.2,
                py: 0.3,
                borderRadius: 9999,
                backgroundColor: '#eff6ff',
                border: '1px solid #bfdbfe',
                color: '#0284c7',
                fontSize: '11px',
                fontWeight: 700,
              }}
            >
              5 locations
            </Box>
          </Box>

          <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
            {nexaLocations.map((loc) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={loc.name}>
                <LocationCard loc={loc} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 3. WORKSHOP */}
        <Box sx={{ mb: { xs: 5, md: 7 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
            <Box
              sx={{
                width: 4,
                height: 24,
                backgroundColor: '#334155',
                borderRadius: 2,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: { xs: '1.6rem', sm: '1.9rem', md: '2.1rem' },
                fontWeight: 700,
                color: '#334155',
                letterSpacing: '-0.01em',
              }}
            >
              Workshop
            </Typography>
            <Box
              sx={{
                px: 1.2,
                py: 0.3,
                borderRadius: 9999,
                backgroundColor: '#f1f5f9',
                border: '1px solid #e2e8f0',
                color: '#475569',
                fontSize: '11px',
                fontWeight: 700,
              }}
            >
              5 locations
            </Box>
          </Box>

          <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
            {workshopLocations.map((loc) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={loc.name}>
                <LocationCard loc={loc} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 4. COMMERCIAL */}
        <Box sx={{ mb: { xs: 5, md: 7 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
            <Box
              sx={{
                width: 4,
                height: 24,
                backgroundColor: '#ea580c',
                borderRadius: 2,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: { xs: '1.6rem', sm: '1.9rem', md: '2.1rem' },
                fontWeight: 700,
                color: '#ea580c',
                letterSpacing: '-0.01em',
              }}
            >
              Commercial
            </Typography>
            <Box
              sx={{
                px: 1.2,
                py: 0.3,
                borderRadius: 9999,
                backgroundColor: '#fff7ed',
                border: '1px solid #fed7aa',
                color: '#ea580c',
                fontSize: '11px',
                fontWeight: 700,
              }}
            >
              1 locations
            </Box>
          </Box>

          <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
            {commercialLocations.map((loc) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={loc.name}>
                <LocationCard loc={loc} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 5. TRUE VALUE */}
        <Box sx={{ mb: { xs: 5, md: 7 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
            <Box
              sx={{
                width: 4,
                height: 24,
                backgroundColor: '#059669',
                borderRadius: 2,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: { xs: '1.6rem', sm: '1.9rem', md: '2.1rem' },
                fontWeight: 700,
                color: '#059669',
                letterSpacing: '-0.01em',
              }}
            >
              True Value
            </Typography>
            <Box
              sx={{
                px: 1.2,
                py: 0.3,
                borderRadius: 9999,
                backgroundColor: '#ecfdf5',
                border: '1px solid #a7f3d0',
                color: '#059669',
                fontSize: '11px',
                fontWeight: 700,
              }}
            >
              1 locations
            </Box>
          </Box>

          <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
            {trueValueLocations.map((loc) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={loc.name}>
                <LocationCard loc={loc} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 6. EXTENDED OUTLET & WORKSHOP (4 COLUMNS) */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
            <Box
              sx={{
                width: 4,
                height: 24,
                backgroundColor: '#111827',
                borderRadius: 2,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: { xs: '1.6rem', sm: '1.9rem', md: '2.1rem' },
                fontWeight: 700,
                color: TEXT_DARK,
                letterSpacing: '-0.01em',
              }}
            >
              Extended Outlet &amp; Workshop
            </Typography>
            <Box
              sx={{
                px: 1.2,
                py: 0.3,
                borderRadius: 9999,
                backgroundColor: '#f1f5f9',
                border: '1px solid #e2e8f0',
                color: '#475569',
                fontSize: '11px',
                fontWeight: 700,
              }}
            >
              10 locations
            </Box>
          </Box>

          <Grid container spacing={{ xs: 2, sm: 2.2 }}>
            {extendedLocations.map((loc) => (
              <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }} key={loc.name}>
                <LocationCard loc={loc} showPin={false} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

