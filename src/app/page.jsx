'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Snackbar,
  Alert,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HeroSlider from '@/components/HeroSlider';

const ACCENT_RED = '#e7210b';
const ACCENT_BLUE = '#1d68c9';
const TEXT_MUTED = '#64748b';
const TEXT_DARK = '#0f172a';
const BORDER_COLOR = '#e2e8f0';

// Tag icon for offers
function TagIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_RED}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginBottom: 12 }}
    >
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  );
}

// Zap Icon
function ZapIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_BLUE}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

// Speedometer Icon
function GaugeIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_BLUE}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
}

// Battery Charging Icon
function BatteryChargeIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_BLUE}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
      <path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1" />
      <path d="m11 7-3 5h4l-3 5" />
      <line x1="22" x2="22" y1="11" y2="13" />
    </svg>
  );
}

// Rupee Icon
function RupeeIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_BLUE}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h12" />
      <path d="M6 8h12" />
      <path d="m6 13 8.5 8" />
      <path d="M6 13h3a4 4 0 0 0 0-8" />
    </svg>
  );
}

// Value Proposition Icons
function TrophyIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_RED}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function UsersIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_RED}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ShieldCheckIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_RED}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function WrenchIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_RED}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
    </svg>
  );
}

function ClockIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_RED}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinFilledSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_RED}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

// Exclusive Offers Data
const exclusiveOffers = [
  {
    id: 1,
    title: 'Up to ₹1,25,000 Exchange + up to ₹40,000 Cash on Victoris',
    description: 'Premium crossover with corporate benefit up to ₹15,000',
  },
  {
    id: 2,
    title: 'Up to ₹75,000 Cash + ₹20,000 – ₹1,00,000 Exchange on Grand Vitara',
    description: 'Smart Hybrid & Strong Hybrid with 5-year warranty',
  },
  {
    id: 3,
    title: '₹30,000 – ₹80,000 Exchange Bonus on Invicto',
    description: 'Luxury MPV with complimentary 3-year service package',
  },
  {
    id: 4,
    title: '₹15,000 – ₹20,000 Cash + ₹20,000 Exchange on XL6',
    description: '6-seater premium MPV with special interest rate 6.99%',
  },
];

// Vehicles Data Grouped by Body Type
const vehiclesByCategory = {
  SUV: [
    {
      id: 'brezza',
      name: 'Maruti Suzuki Brezza',
      price: '₹8.26 – 13.13 Lakh',
      category: 'Compact SUV',
      channel: 'arena',
      image: '/images/suv/brezza.webp',
    },
    {
      id: 'victoris',
      name: 'Maruti Suzuki Victoris',
      price: '₹10.49 – 19.98 Lakh',
      category: 'Premium Mid-Size Crossover',
      channel: 'arena',
      image: '/images/suv/victoris.webp',
    },
    {
      id: 's-presso',
      name: 'Maruti Suzuki S-Presso',
      price: '₹3.49 – 5.24 Lakh',
      category: 'Micro-SUV Hatchback',
      channel: 'arena',
      image: '/images/suv/s-presso.webp',
    },
    {
      id: 'e-vitara-suv',
      name: 'Maruti Suzuki e Vitara',
      price: '₹15.99 – 20.21 Lakh',
      category: 'Born-Electric SUV Flagship',
      channel: 'nexa',
      image: '/images/suv/e-vitara-no-bg.png',
    },
    {
      id: 'grand-vitara',
      name: 'Maruti Suzuki Grand Vitara',
      price: '₹10.76 – 19.72 Lakh',
      category: 'Mid-Size Hybrid SUV',
      channel: 'nexa',
      image: '/images/suv/grand-vitara-no-bg.png',
    },
    {
      id: 'fronx',
      name: 'Maruti Suzuki Fronx',
      price: '₹6.84 – 11.97 Lakh',
      category: 'Compact SUV-Coupe',
      channel: 'nexa',
      image: '/images/suv/fronx-no-bg.png',
    },
    {
      id: 'jimny',
      name: 'Maruti Suzuki Jimny',
      price: '₹12.39 – 14.52 Lakh',
      category: '4x4 Off-Road SUV',
      channel: 'nexa',
      image: '/images/suv/jimny-no-bg.png',
    },
  ],
  Hatchback: [
    {
      id: 'swift',
      name: 'Maruti Suzuki Swift',
      price: '₹5.79 – 8.84 Lakh',
      category: 'Premium Hatchback',
      channel: 'arena',
      image: '/images/hatchback/swift.webp',
    },
    {
      id: 'wagon-r',
      name: 'Maruti Suzuki Wagon R',
      price: '₹4.98 – 7.23 Lakh',
      category: 'Tallboy Hatchback',
      channel: 'arena',
      image: '/images/hatchback/wagon-r.webp',
    },
    {
      id: 'celerio',
      name: 'Maruti Suzuki Celerio',
      price: '₹4.69 – 6.72 Lakh',
      category: 'Compact Hatchback',
      channel: 'arena',
      image: '/images/hatchback/celerio.webp',
    },
    {
      id: 'alto-k10',
      name: 'Maruti Suzuki Alto K10',
      price: '₹3.69 – 5.44 Lakh',
      category: 'Entry-Level Hatchback',
      channel: 'arena',
      image: '/images/hatchback/alto-k10.webp',
    },
    {
      id: 'baleno',
      name: 'Maruti Suzuki Baleno',
      price: '₹5.98 – 9.17 Lakh',
      category: 'Premium Hatchback',
      channel: 'nexa',
      image: '/images/hatchback/baleno-no-bg.png',
    },
  ],
  Sedan: [
    {
      id: 'dzire',
      name: 'Maruti Suzuki Dzire',
      price: '₹6.25 – 9.36 Lakh',
      category: 'Compact Sedan',
      channel: 'arena',
      image: '/images/sedan/dzire.webp',
    },
  ],
  Electric: [
    {
      id: 'e-vitara-electric',
      name: 'Maruti Suzuki e Vitara',
      price: '₹15.99 – 20.21 Lakh',
      category: 'Born-Electric SUV Flagship',
      channel: 'nexa',
      image: '/images/electric/e-vitara-no-bg.png',
    },
  ],
  Commercial: [
    {
      id: 'super-carry',
      name: 'Maruti Suzuki Super Carry',
      price: 'From ₹5.34 Lakh',
      category: "India's Best Mini Truck",
      channel: 'commercial',
      image: '/images/commercial/super-carry.webp',
    },
    {
      id: 'tour-s',
      name: 'Maruti Suzuki Tour S',
      price: 'From ₹6.23 Lakh',
      category: 'Taxi Segment Sedan',
      channel: 'commercial',
      image: '/images/commercial/tour-s.webp',
    },
    {
      id: 'tour-h1',
      name: 'Maruti Suzuki Tour H1',
      price: 'From ₹3.99 Lakh',
      category: 'Fleet Segment Hatchback',
      channel: 'commercial',
      image: '/images/commercial/tour-h1.webp',
    },
    {
      id: 'tour-h3',
      name: 'Maruti Suzuki Tour H3',
      price: 'From ₹4.98 Lakh',
      category: 'Fleet Segment Hatchback',
      channel: 'commercial',
      image: '/images/commercial/tour-h3.webp',
    },
    {
      id: 'tour-m',
      name: 'Maruti Suzuki Tour M',
      price: 'From ₹9.87 Lakh',
      category: 'Commercial MPV',
      channel: 'commercial',
      image: '/images/commercial/tour-m.webp',
    },
    {
      id: 'tour-v',
      name: 'Maruti Suzuki Tour V',
      price: 'From ₹5.20 Lakh',
      category: 'Commercial Passenger Van',
      channel: 'commercial',
      image: '/images/commercial/tour-v.webp',
    },
    {
      id: 'eeco-cargo',
      name: 'Maruti Suzuki Eeco Cargo',
      price: 'From ₹5.41 Lakh',
      category: 'Cargo Delivery Van',
      channel: 'commercial',
      image: '/images/commercial/eeco-cargo.webp',
    },
  ],
  MPV: [
    {
      id: 'ertiga',
      name: 'Maruti Suzuki Ertiga',
      price: '₹8.85 – 12.99 Lakh',
      category: '7-Seater Family MPV',
      channel: 'arena',
      image: '/images/mpv/ertiga.webp',
    },
    {
      id: 'eeco',
      name: 'Maruti Suzuki Eeco',
      price: '₹5.23 – 6.40 Lakh',
      category: 'Multi-Utility Passenger Van',
      channel: 'arena',
      image: '/images/mpv/eeco.webp',
    },
    {
      id: 'invicto',
      name: 'Maruti Suzuki Invicto',
      price: '₹24.97 – 28.69 Lakh',
      category: 'Luxury 7/8 Seater Hybrid MPV',
      channel: 'nexa',
      image: '/images/mpv/invicto-no-bg.png',
    },
    {
      id: 'xl6',
      name: 'Maruti Suzuki XL6',
      price: '₹11.57 – 14.52 Lakh',
      category: 'Premium 6-Seater MPV',
      channel: 'nexa',
      image: '/images/mpv/xl6-no-bg.png',
    },
  ],
};

const allVehicles = [
  ...vehiclesByCategory.SUV,
  ...vehiclesByCategory.Hatchback,
  ...vehiclesByCategory.Sedan,
  ...vehiclesByCategory.Commercial,
  ...vehiclesByCategory.MPV,
];

const categories = ['SUV', 'Hatchback', 'Sedan', 'Electric', 'Commercial', 'MPV', 'All'];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('SUV');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogAction, setDialogAction] = useState('Test Drive');
  const [selectedVehicle, setSelectedVehicle] = useState('Maruti Suzuki Brezza');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');

  // Filter vehicles by category
  const filteredVehicles = useMemo(() => {
    if (selectedCategory === 'All') return allVehicles;
    return vehiclesByCategory[selectedCategory] || [];
  }, [selectedCategory]);

  const handleOpenAction = (action, vehicleName) => {
    setDialogAction(action);
    setSelectedVehicle(vehicleName || 'Maruti Suzuki');
    setDialogOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setDialogOpen(false);
    setSnackbarMsg(`Thank you! Your request for ${selectedVehicle} (${dialogAction}) has been submitted.`);
    setSnackbarOpen(true);
  };

  return (
    <Box sx={{ backgroundColor: '#ffffff', minHeight: '100vh', width: '100%' }}>
      {/* 1. Hero Carousel Slider */}
      <HeroSlider />

      {/* 2. Exclusive Offers Section (id="offers") */}
      <Box
        id="offers"
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          backgroundColor: '#fafbfc',
          borderTop: '1px solid',
          borderBottom: '1px solid',
          borderColor: BORDER_COLOR,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                color: TEXT_DARK,
                fontFamily: 'inherit',
              }}
            >
              Exclusive Offers
            </Typography>
            <Typography sx={{ color: TEXT_MUTED, mt: 1, fontSize: '1.05rem' }}>
              Unbeatable deals in <strong style={{ color: TEXT_DARK }}>Karnataka</strong>
            </Typography>
            <Typography sx={{ fontSize: '0.8rem', color: TEXT_MUTED, mt: 0.5 }}>
              October 2026 offers · Valid through 31 October 2026
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {exclusiveOffers.map((offer) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={offer.id}>
                <Box
                  onClick={() => handleOpenAction('Claim Offer', offer.title)}
                  sx={{
                    position: 'relative',
                    height: '100%',
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: '#ffffff',
                    border: '1px solid',
                    borderColor: 'rgba(231, 33, 11, 0.25)',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      borderColor: ACCENT_RED,
                      boxShadow: '0 8px 24px rgba(231, 33, 11, 0.1)',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  {/* Left Red Accent Line */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '4px',
                      height: '100%',
                      backgroundColor: ACCENT_RED,
                    }}
                  />

                  <TagIconSvg />

                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      lineHeight: 1.35,
                      color: TEXT_DARK,
                      mb: 1,
                    }}
                  >
                    {offer.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.85rem',
                      color: TEXT_MUTED,
                      lineHeight: 1.5,
                      mt: 'auto',
                    }}
                  >
                    {offer.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. Explore Our Range (id="range") */}
      <Box id="range" component="section" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Box
              sx={{
                display: 'inline-block',
                px: 2,
                py: 0.5,
                mb: 1.5,
                borderRadius: '9999px',
                backgroundColor: 'rgba(231, 33, 11, 0.08)',
                color: ACCENT_RED,
                border: '1px solid rgba(231, 33, 11, 0.2)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Explore Our Range
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 700,
                color: TEXT_DARK,
                fontFamily: 'inherit',
              }}
            >
              Find Your Perfect Maruti
            </Typography>
            <Typography sx={{ color: TEXT_MUTED, mt: 1.5, maxWidth: 600, mx: 'auto', fontSize: '1rem' }}>
              Browse by body type — from compact hatchbacks to premium SUVs and electric vehicles.
            </Typography>
          </Box>

          {/* Filter Pills with smooth horizontal touch scroll on mobile */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: { xs: 'nowrap', sm: 'wrap' },
              overflowX: { xs: 'auto', sm: 'visible' },
              justifyContent: { xs: 'flex-start', sm: 'center' },
              alignItems: 'center',
              gap: { xs: 1, sm: 1.2 },
              mb: { xs: 4, md: 6 },
              px: { xs: 1, sm: 0 },
              py: 0.5,
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <Box
                  key={cat}
                  component="button"
                  onClick={() => setSelectedCategory(cat)}
                  sx={{
                    px: { xs: 2.2, md: 3 },
                    py: 1.1,
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                    border: '1px solid',
                    borderColor: isSelected ? ACCENT_RED : BORDER_COLOR,
                    backgroundColor: isSelected ? ACCENT_RED : '#ffffff',
                    color: isSelected ? '#ffffff' : TEXT_MUTED,
                    boxShadow: isSelected ? '0 4px 14px rgba(231, 33, 11, 0.25)' : 'none',
                    '&:hover': {
                      backgroundColor: isSelected ? '#dc2626' : '#f8fafc',
                      color: isSelected ? '#ffffff' : TEXT_DARK,
                    },
                  }}
                >
                  {cat}
                </Box>
              );
            })}
          </Box>

          {/* Vehicle Cards Grid */}
          <Grid container spacing={3.5}>
            {filteredVehicles.map((car) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={car.id}>
                <Box
                  sx={{
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: BORDER_COLOR,
                    backgroundColor: '#ffffff',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'rgba(231, 33, 11, 0.4)',
                      boxShadow: '0 12px 28px rgba(0, 0, 0, 0.08)',
                      transform: 'translateY(-4px)',
                      '& .car-img': {
                        transform: 'scale(1.05)',
                      },
                    },
                  }}
                >
                  {/* Image Container with Badges */}
                  <Box
                    sx={{
                      position: 'relative',
                      height: 220,
                      backgroundColor: '#f8fafc',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      component="img"
                      className="car-img"
                      src={car.image}
                      alt={car.name}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        p: 0,
                        transition: 'transform 0.4s ease',
                      }}
                    />

                    {/* Top Left: Category Badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        px: 1.2,
                        py: 0.4,
                        borderRadius: 1.5,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(4px)',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: TEXT_DARK,
                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
                      }}
                    >
                      {car.category}
                    </Box>

                    {/* Top Right: Channel Badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        px: 1.2,
                        py: 0.4,
                        borderRadius: 1.5,
                        backgroundColor:
                          car.channel === 'nexa'
                            ? 'rgba(29, 104, 201, 0.1)'
                            : car.channel === 'commercial'
                            ? 'rgba(249, 115, 22, 0.1)'
                            : 'rgba(231, 33, 11, 0.1)',
                        color:
                          car.channel === 'nexa'
                            ? ACCENT_BLUE
                            : car.channel === 'commercial'
                            ? '#ea580c'
                            : ACCENT_RED,
                        border: '1px solid',
                        borderColor:
                          car.channel === 'nexa'
                            ? 'rgba(29, 104, 201, 0.25)'
                            : car.channel === 'commercial'
                            ? 'rgba(249, 115, 22, 0.25)'
                            : 'rgba(231, 33, 11, 0.25)',
                        fontSize: '10px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {car.channel}
                    </Box>
                  </Box>

                  {/* Card Content */}
                  <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: '"Rajdhani", sans-serif',
                        fontSize: '1.45rem',
                        fontWeight: 700,
                        color: TEXT_DARK,
                        lineHeight: 1.25,
                      }}
                    >
                      {car.name}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.6,
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: ACCENT_RED,
                      }}
                    >
                      {car.price}
                    </Typography>

                    {/* Action Links */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        columnGap: 1.2,
                        rowGap: 0.5,
                        mt: 2.5,
                        pt: 2,
                        borderTop: '1px solid',
                        borderColor: BORDER_COLOR,
                        fontSize: '12px',
                      }}
                    >
                      <Box
                        component="button"
                        onClick={() => handleOpenAction('Test Drive', car.name)}
                        sx={{
                          border: 'none',
                          background: 'none',
                          p: 0,
                          cursor: 'pointer',
                          fontWeight: 600,
                          color: TEXT_DARK,
                          transition: 'color 0.15s ease',
                          '&:hover': { color: ACCENT_RED, textDecoration: 'underline' },
                        }}
                      >
                        Test Drive
                      </Box>
                      <Box component="span" sx={{ color: '#cbd5e1' }}>|</Box>

                      <Box
                        component="button"
                        onClick={() => {
                          setSnackbarMsg(`Downloading official brochure for ${car.name}...`);
                          setSnackbarOpen(true);
                        }}
                        sx={{
                          border: 'none',
                          background: 'none',
                          p: 0,
                          cursor: 'pointer',
                          fontWeight: 600,
                          color: TEXT_DARK,
                          transition: 'color 0.15s ease',
                          '&:hover': { color: ACCENT_RED, textDecoration: 'underline' },
                        }}
                      >
                        Brochure
                      </Box>
                      <Box component="span" sx={{ color: '#cbd5e1' }}>|</Box>

                      <Box
                        component="button"
                        onClick={() => handleOpenAction('Get On-Road Price', car.name)}
                        sx={{
                          border: 'none',
                          background: 'none',
                          p: 0,
                          cursor: 'pointer',
                          fontWeight: 600,
                          color: TEXT_DARK,
                          transition: 'color 0.15s ease',
                          '&:hover': { color: ACCENT_RED, textDecoration: 'underline' },
                        }}
                      >
                        Get Price
                      </Box>
                      <Box component="span" sx={{ color: '#cbd5e1' }}>|</Box>

                      <Box
                        component="button"
                        onClick={() => handleOpenAction('EMI Calculator', car.name)}
                        sx={{
                          border: 'none',
                          background: 'none',
                          p: 0,
                          cursor: 'pointer',
                          fontWeight: 600,
                          color: TEXT_DARK,
                          transition: 'color 0.15s ease',
                          '&:hover': { color: ACCENT_RED, textDecoration: 'underline' },
                        }}
                      >
                        EMI Calculator
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Explore by Channel Links */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              mt: 8,
            }}
          >
            <Button
              component={Link}
              href="/arena"
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              sx={{
                py: 1.2,
                px: 3,
                borderRadius: 2,
                borderColor: 'rgba(231, 33, 11, 0.4)',
                color: ACCENT_RED,
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': {
                  borderColor: ACCENT_RED,
                  backgroundColor: ACCENT_RED,
                  color: '#ffffff',
                },
              }}
            >
              View All Arena
            </Button>

            <Button
              component={Link}
              href="/nexa"
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              sx={{
                py: 1.2,
                px: 3,
                borderRadius: 2,
                borderColor: 'rgba(29, 104, 201, 0.4)',
                color: ACCENT_BLUE,
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': {
                  borderColor: ACCENT_BLUE,
                  backgroundColor: ACCENT_BLUE,
                  color: '#ffffff',
                },
              }}
            >
              View All Nexa
            </Button>

            <Button
              component={Link}
              href="/commercial"
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              sx={{
                py: 1.2,
                px: 3,
                borderRadius: 2,
                borderColor: '#64748b',
                color: '#475569',
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': {
                  borderColor: '#0f172a',
                  backgroundColor: '#0f172a',
                  color: '#ffffff',
                },
              }}
            >
              View All Commercial
            </Button>
          </Box>
        </Container>
      </Box>

      {/* 4. Maruti Suzuki e Vitara Spotlight Section */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: 'color-mix(in oklab, hsl(210, 40%, 96.1%) 40%, transparent)',
          borderTop: '1px solid',
          borderBottom: '1px solid',
          borderColor: BORDER_COLOR,
          py: { xs: 8, md: 12, lg: 14 },
        }}
      >
        {/* Subtle accent gradient overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(29, 104, 201, 0.08), transparent, transparent)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth={false} sx={{ maxWidth: '1600px', px: { xs: 3, md: 6, lg: 10 }, position: 'relative', zIndex: 10 }}>
          <Grid container spacing={{ xs: 6, lg: 8 }} sx={{ alignItems: 'center' }}>
            {/* Left Content */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Box>
                  <Box
                    component="span"
                    sx={{
                      display: 'inline-block',
                      px: 2,
                      py: 0.6,
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(231, 33, 11, 0.1)',
                      border: '1px solid rgba(231, 33, 11, 0.2)',
                      color: ACCENT_RED,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      boxShadow: '0 0 10px rgba(220, 38, 38, 0.2)',
                      mb: 2,
                    }}
                  >
                    NOW AVAILABLE — INDIA&apos;S FIRST ELECTRIC SUV FROM MARUTI
                  </Box>

                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: '2.8rem', sm: '3.8rem', lg: '4.8rem' },
                      fontWeight: 700,
                      color: TEXT_DARK,
                      lineHeight: 1.05,
                      fontFamily: '"Rajdhani", sans-serif',
                      mb: 1.5,
                    }}
                  >
                    Maruti Suzuki e Vitara
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: '1.15rem', md: '1.35rem' },
                      color: TEXT_MUTED,
                      fontWeight: 500,
                    }}
                  >
                    Zero Emissions. Maximum Luxury.
                  </Typography>
                </Box>

                {/* 4 Specs Grid */}
                <Grid container spacing={{ xs: 1.5, sm: 2.5, md: 3 }}>
                  <Grid size={{ xs: 6, sm: 6 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 1.2, sm: 2 },
                        p: { xs: 1.5, sm: 2.5 },
                        borderRadius: 3,
                        backgroundColor: 'rgba(255, 255, 255, 0.65)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(226, 232, 240, 0.8)',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
                      }}
                    >
                      <Box
                        sx={{
                          p: { xs: 1, sm: 1.5 },
                          borderRadius: 2,
                          backgroundColor: 'rgba(29, 104, 201, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <ZapIconSvg />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: { xs: '0.75rem', sm: '0.85rem' }, color: TEXT_MUTED }}>Range</Typography>
                        <Typography sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, fontWeight: 700, color: TEXT_DARK }}>
                          500+ km
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 6, sm: 6 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 1.2, sm: 2 },
                        p: { xs: 1.5, sm: 2.5 },
                        borderRadius: 3,
                        backgroundColor: 'rgba(255, 255, 255, 0.65)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(226, 232, 240, 0.8)',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
                      }}
                    >
                      <Box
                        sx={{
                          p: { xs: 1, sm: 1.5 },
                          borderRadius: 2,
                          backgroundColor: 'rgba(29, 104, 201, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <GaugeIconSvg />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: { xs: '0.75rem', sm: '0.85rem' }, color: TEXT_MUTED }}>Motor</Typography>
                        <Typography sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, fontWeight: 700, color: TEXT_DARK }}>
                          144 PS
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 6, sm: 6 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 1.2, sm: 2 },
                        p: { xs: 1.5, sm: 2.5 },
                        borderRadius: 3,
                        backgroundColor: 'rgba(255, 255, 255, 0.65)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(226, 232, 240, 0.8)',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
                      }}
                    >
                      <Box
                        sx={{
                          p: { xs: 1, sm: 1.5 },
                          borderRadius: 2,
                          backgroundColor: 'rgba(29, 104, 201, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <ZapIconSvg />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: { xs: '0.75rem', sm: '0.85rem' }, color: TEXT_MUTED }}>Charging</Typography>
                        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1.2rem' }, fontWeight: 700, color: TEXT_DARK }}>
                          Fast Charge
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 6, sm: 6 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 1.2, sm: 2 },
                        p: { xs: 1.5, sm: 2.5 },
                        borderRadius: 3,
                        backgroundColor: 'rgba(255, 255, 255, 0.65)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(226, 232, 240, 0.8)',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
                      }}
                    >
                      <Box
                        sx={{
                          p: { xs: 1, sm: 1.5 },
                          borderRadius: 2,
                          backgroundColor: 'rgba(29, 104, 201, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <RupeeIconSvg />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: { xs: '0.75rem', sm: '0.85rem' }, color: TEXT_MUTED }}>Starting</Typography>
                        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1.2rem' }, fontWeight: 700, color: TEXT_DARK }}>
                          ₹15.99 L*
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>

                {/* CTAs */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, pt: 1 }}>
                  <Button
                    onClick={() => handleOpenAction('Pre-Book', 'Maruti Suzuki e Vitara')}
                    variant="contained"
                    sx={{
                      px: 4.5,
                      py: 1.4,
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      backgroundColor: ACCENT_RED,
                      color: '#ffffff',
                      borderRadius: '6px',
                      boxShadow: '0 0 20px rgba(220, 38, 38, 0.4)',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: '#dc2626',
                      },
                    }}
                  >
                    Book Now
                  </Button>

                  <Button
                    onClick={() => handleOpenAction('Explore Details', 'Maruti Suzuki e Vitara')}
                    variant="outlined"
                    sx={{
                      px: 4.5,
                      py: 1.4,
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      borderColor: ACCENT_BLUE,
                      color: ACCENT_BLUE,
                      borderRadius: '6px',
                      boxShadow: '0 0 20px rgba(29, 78, 216, 0.2)',
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: ACCENT_BLUE,
                        backgroundColor: ACCENT_BLUE,
                        color: '#ffffff',
                      },
                    }}
                  >
                    Explore e Vitara
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Right Image */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  filter: 'drop-shadow(0 20px 40px rgba(29, 78, 216, 0.25))',
                  py: { xs: 2, lg: 4 },
                }}
              >
                <Box
                  component="img"
                  src="/images/suv/e-vitara-no-bg.png"
                  alt="Maruti Suzuki e Vitara"
                  sx={{
                    width: '100%',
                    maxWidth: 580,
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 5. Why Choose Bimal Maruti Section */}
      <Box component="section" sx={{ py: { xs: 8, md: 14 }, backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 700,
                color: TEXT_DARK,
                fontFamily: 'inherit',
              }}
            >
              Why Choose Bimal Maruti
            </Typography>
            <Typography sx={{ color: TEXT_MUTED, mt: 1.5, maxWidth: 650, mx: 'auto', fontSize: '1.05rem' }}>
              Experience the difference of dealing with South India&apos;s most trusted automotive partner.
            </Typography>
          </Box>

          {/* 6 Value Cards */}
          <Grid container spacing={3.5} sx={{ mb: 8 }}>
            {[
              {
                title: 'Award-Winning Dealer',
                desc: 'Consistently ranked #1 Maruti Suzuki dealership in South India for sales and service satisfaction',
                icon: TrophyIconSvg,
              },
              {
                title: '5,00,000+ Happy Customers',
                desc: 'Four decades of creating smiles across Karnataka and Kerala with trusted automotive solutions',
                icon: UsersIconSvg,
              },
              {
                title: 'Transparent Pricing',
                desc: 'No hidden charges. Best-price guarantee on all new and preowned cars',
                icon: ShieldCheckIconSvg,
              },
              {
                title: 'Certified Technicians',
                desc: 'Maruti Suzuki trained technicians and Genuine Parts in every service',
                icon: WrenchIconSvg,
              },
              {
                title: 'Quick Service Turnaround',
                desc: 'Express service in under 2 hours for scheduled maintenance',
                icon: ClockIconSvg,
              },
              {
                title: 'Multi-State Network',
                desc: '25 showrooms in Karnataka, expanding to 5 cities in Kerala',
                icon: MapPinFilledSvg,
              },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                  <Box
                    sx={{
                      p: 3.5,
                      height: '100%',
                      borderRadius: 3,
                      backgroundColor: '#ffffff',
                      border: '1px solid',
                      borderColor: BORDER_COLOR,
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        borderColor: 'rgba(231, 33, 11, 0.4)',
                        boxShadow: '0 8px 24px rgba(231, 33, 11, 0.08)',
                        transform: 'translateY(-3px)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 2.5,
                        backgroundColor: 'rgba(231, 33, 11, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2.5,
                      }}
                    >
                      <IconComp />
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: TEXT_DARK,
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.9rem',
                        color: TEXT_MUTED,
                        lineHeight: 1.6,
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          {/* 3-Column Stats Banner */}
          <Box
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              backgroundColor: '#f8fafc',
              border: '1px solid',
              borderColor: BORDER_COLOR,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
            }}
          >
            <Grid container spacing={4} sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 800,
                    color: TEXT_DARK,
                    lineHeight: 1,
                    mb: 1,
                  }}
                >
                  42+ Years
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: TEXT_MUTED,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                  }}
                >
                  Of Excellence
                </Typography>
              </Grid>

              <Grid
                size={{ xs: 12, md: 4 }}
                sx={{
                  borderLeft: { md: '1px solid #e2e8f0' },
                  borderRight: { md: '1px solid #e2e8f0' },
                  borderTop: { xs: '1px solid #e2e8f0', md: 'none' },
                  borderBottom: { xs: '1px solid #e2e8f0', md: 'none' },
                  py: { xs: 3, md: 0 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 800,
                    color: TEXT_DARK,
                    lineHeight: 1,
                    mb: 1,
                  }}
                >
                  50,000+
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: TEXT_MUTED,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                  }}
                >
                  Cars Sold
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Typography
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 800,
                    color: ACCENT_RED,
                    lineHeight: 1,
                    mb: 1,
                  }}
                >
                  4.8★
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: TEXT_MUTED,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                  }}
                >
                  Average Rating
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Interactive Booking / Test Drive Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        maxWidth="sm"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: 3,
              p: 1,
            },
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: TEXT_DARK }}>
            {dialogAction}: {selectedVehicle}
          </Typography>
          <IconButton onClick={() => setDialogOpen(false)} size="small" aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <Box component="form" onSubmit={handleFormSubmit}>
          <DialogContent dividers sx={{ p: 3 }}>
            <Typography variant="body2" sx={{ color: TEXT_MUTED, mb: 3 }}>
              Enter your contact details to schedule your {dialogAction.toLowerCase()} or receive an instant price quote from Bimal Maruti.
            </Typography>

            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField required fullWidth label="Full Name" size="small" defaultValue="Customer" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField required fullWidth label="Phone Number" size="small" defaultValue="+91 " />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  select
                  fullWidth
                  label="Preferred City / Showroom"
                  size="small"
                  defaultValue="Bangalore - Indiranagar"
                >
                  <MenuItem value="Bangalore - Indiranagar">Bangalore - Indiranagar</MenuItem>
                  <MenuItem value="Bangalore - Whitefield">Bangalore - Whitefield</MenuItem>
                  <MenuItem value="Bangalore - Yelahanka">Bangalore - Yelahanka</MenuItem>
                  <MenuItem value="Mysore - Hunsur Road">Mysore - Hunsur Road</MenuItem>
                  <MenuItem value="Mangalore - Bejai">Mangalore - Bejai</MenuItem>
                  <MenuItem value="Kochi - Edappally">Kochi - Edappally</MenuItem>
                </TextField>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  label="Special Requirements / Note"
                  size="small"
                  placeholder="e.g. Preferred test drive time, exchange evaluation, or financing request"
                />
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions sx={{ p: 2.5 }}>
            <Button onClick={() => setDialogOpen(false)} sx={{ color: TEXT_MUTED }}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: ACCENT_RED,
                color: '#ffffff',
                fontWeight: 700,
                px: 3,
                '&:hover': { backgroundColor: '#dc2626' },
              }}
            >
              Submit Request
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* Snackbar feedback */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </Box>
  );
}
