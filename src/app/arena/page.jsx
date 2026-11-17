'use client';

import React, { useState } from 'react';
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
  Slider,
  Snackbar,
  Alert,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VehicleModal from '@/components/VehicleModal';
import { getBrochureUrl } from '@/config/brochures';

const ACCENT_RED = '#e7210b';
const TEXT_MUTED = '#64748b';
const TEXT_DARK = '#111827';
const CARD_BG = '#ffffff';
const IMG_CONTAINER_BG = '#f3f4f6';

// 10 Official Maruti Suzuki Arena Vehicles matching screenshots
const arenaModels = [
  {
    id: 'brezza',
    name: 'Maruti Suzuki Brezza',
    price: '₹8.26 – 13.13 Lakh',
    basePriceNum: 826000,
    category: 'Compact SUV',
    image: '/images/arena/brezza.webp',
  },
  {
    id: 'victoris',
    name: 'Maruti Suzuki Victoris',
    price: '₹10.49 – 19.98 Lakh',
    basePriceNum: 1049000,
    category: 'Premium Mid-Size Crossover',
    ribbon: 'INDIAN CAR OF THE YEAR',
    image: '/images/arena/victoris.webp',
  },
  {
    id: 'swift',
    name: 'Maruti Suzuki Swift',
    price: '₹5.79 – 8.84 Lakh',
    basePriceNum: 579000,
    category: 'Premium Hatchback',
    image: '/images/arena/swift.webp',
  },
  {
    id: 'wagon-r',
    name: 'Maruti Suzuki Wagon R',
    price: '₹4.98 – 7.23 Lakh',
    basePriceNum: 498000,
    category: 'Tallboy Hatchback',
    image: '/images/arena/wagon-r.webp',
  },
  {
    id: 'celerio',
    name: 'Maruti Suzuki Celerio',
    price: '₹4.69 – 6.72 Lakh',
    basePriceNum: 469000,
    category: 'Compact Hatchback',
    image: '/images/arena/celerio.webp',
  },
  {
    id: 'alto-k10',
    name: 'Maruti Suzuki Alto K10',
    price: '₹3.69 – 5.44 Lakh',
    basePriceNum: 369000,
    category: 'Entry-Level Hatchback',
    image: '/images/arena/alto-k10.webp',
  },
  {
    id: 's-presso',
    name: 'Maruti Suzuki S-Presso',
    price: '₹3.49 – 5.24 Lakh',
    basePriceNum: 349000,
    category: 'Micro-SUV Hatchback',
    image: '/images/arena/s-presso.webp',
  },
  {
    id: 'dzire',
    name: 'Maruti Suzuki Dzire',
    price: '₹6.25 – 9.36 Lakh',
    basePriceNum: 625000,
    category: 'Compact Sedan',
    image: '/images/arena/dzire.webp',
  },
  {
    id: 'ertiga',
    name: 'Maruti Suzuki Ertiga',
    price: '₹8.85 – 12.99 Lakh',
    basePriceNum: 885000,
    category: '7-Seater Family MPV',
    image: '/images/arena/ertiga.webp',
  },
  {
    id: 'eeco',
    name: 'Maruti Suzuki Eeco',
    price: '₹5.23 – 6.40 Lakh',
    basePriceNum: 523000,
    category: 'Multi-Utility Passenger Van',
    image: '/images/arena/eeco.webp',
  },
];

export default function ArenaPage() {
  // Card hover / active state
  const [hoveredCard, setHoveredCard] = useState(null);

  // Dialog State
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogAction, setDialogAction] = useState('Test Drive');
  const [activeCar, setActiveCar] = useState(arenaModels[0]);

  // EMI Calculator state
  const [loanTenure, setLoanTenure] = useState(5); // 5 years (60 months)
  const [interestRate, setInterestRate] = useState(8.5); // 8.5%

  // Toast Snackbar State
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');

  const handleActionClick = (action, car) => {
    setActiveCar(car);
    setDialogAction(action);
    setDialogOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setDialogOpen(false);
    setSnackbarMsg(
      `Thank you! Your ${dialogAction.toLowerCase()} request for ${activeCar.name} has been received. Our Bimal Maruti advisor will call you shortly.`
    );
    setSnackbarOpen(true);
  };

  // Monthly EMI Calculation formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const calculateEMI = () => {
    const P = activeCar.basePriceNum * 0.85; // 85% loan amount
    const r = interestRate / 12 / 100;
    const n = loanTenure * 12;
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi).toLocaleString('en-IN');
  };

  return (
    <Box sx={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* 1. Hero Banner matching Screenshots */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '380px', sm: '420px', md: '480px' },
          overflow: 'hidden',
          backgroundColor: '#0a0d14',
          backgroundImage: 'url(/images/hero-arena.webp)',
          backgroundSize: 'cover',
          backgroundPosition: { xs: 'center right', md: 'center 40%' },
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Subtle Dark Gradient Overlay for optimal readability */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: {
              xs: 'linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.4) 100%)',
              md: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.2) 100%)',
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
            px: { xs: 3, md: 6, lg: 8 },
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
            Arena Collection
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
            Drive the Future
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontSize: { xs: '0.95rem', sm: '1.125rem' },
              color: 'rgba(255, 255, 255, 0.88)',
              maxWidth: 580,
              lineHeight: 1.5,
              textShadow: '0 1px 4px rgba(0,0,0,0.5)',
            }}
          >
            Bold, dynamic, and fuel-efficient cars crafted for the modern Indian road.
          </Typography>
        </Container>
      </Box>

      {/* 2. Arena Lineup 2026 Grid Section */}
      <Box sx={{ py: { xs: 5, md: 8 }, backgroundColor: '#ffffff' }}>
        <Container
          maxWidth={false}
          sx={{
            maxWidth: '1440px',
            px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
          }}
        >
          {/* Section Header */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1.5,
              mb: { xs: 3.5, md: 5 },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                fontSize: { xs: '1.5rem', sm: '2.25rem', md: '2.6rem' },
                color: TEXT_DARK,
                lineHeight: 1.2,
              }}
            >
              Arena Lineup{' '}
              <Box component="span" sx={{ color: ACCENT_RED }}>
                2026
              </Box>
            </Typography>

            {/* 10 Models pill badge */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                px: 1.8,
                py: 0.5,
                borderRadius: 9999,
                border: '1px solid #d1d5db',
                backgroundColor: '#ffffff',
                color: '#374151',
                fontSize: '11.5px',
                fontWeight: 600,
                boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
              }}
            >
              10 Models
            </Box>
          </Box>

          {/* 3-Column Vehicle Grid matching screenshots */}
          <Grid container spacing={{ xs: 3, md: 3.5, lg: 4 }}>
            {arenaModels.map((car) => {
              const isHovered = hoveredCard === car.id;

              return (
                <Grid key={car.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                  <Box
                    onMouseEnter={() => setHoveredCard(car.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: CARD_BG,
                      borderRadius: 4, // rounded-2xl
                      overflow: 'hidden',
                      border: '1px solid',
                      borderColor: isHovered ? 'rgba(231, 33, 11, 0.45)' : '#e5e7eb',
                      boxShadow: isHovered
                        ? '0 10px 28px rgba(231, 33, 11, 0.08), 0 4px 12px rgba(0,0,0,0.04)'
                        : '0 2px 8px rgba(0,0,0,0.02)',
                      transition: 'all 0.25s ease',
                      position: 'relative',
                    }}
                  >
                    {/* Top Image Container */}
                    <Box
                      sx={{
                        position: 'relative',
                        height: 250,
                        backgroundColor: IMG_CONTAINER_BG,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 0,
                        overflow: 'hidden',
                      }}
                    >
                      {/* Top Left Category Pill */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 14,
                          left: 14,
                          zIndex: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 0.5,
                        }}
                      >
                        {car.ribbon && (
                          <Box
                            sx={{
                              alignSelf: 'flex-start',
                              fontSize: '9px',
                              fontWeight: 800,
                              color: '#1e3a8a',
                              letterSpacing: '0.04em',
                              backgroundColor: 'rgba(219, 234, 254, 0.95)',
                              border: '1px solid rgba(147, 197, 253, 0.8)',
                              px: 1,
                              py: 0.2,
                              borderRadius: '4px',
                            }}
                          >
                            {car.ribbon}
                          </Box>
                        )}
                        <Box
                          sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid #e5e7eb',
                            px: 1.5,
                            py: 0.4,
                            borderRadius: 9999,
                            fontSize: '11px',
                            fontWeight: 600,
                            color: '#374151',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                          }}
                        >
                          {car.category}
                        </Box>
                      </Box>

                      {/* Top Right ARENA Pill */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 14,
                          right: 14,
                          zIndex: 2,
                          backgroundColor: 'rgba(254, 242, 242, 0.95)',
                          border: '1px solid rgba(254, 202, 202, 0.8)',
                          color: ACCENT_RED,
                          fontSize: '10px',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          px: 1.2,
                          py: 0.35,
                          borderRadius: '4px',
                        }}
                      >
                        ARENA
                      </Box>

                      {/* Car Image with smooth zoom on hover */}
                      <Box
                        component="img"
                        src={car.image}
                        alt={car.name}
                        loading="lazy"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                    </Box>

                    {/* Bottom Content Area */}
                    <Box
                      sx={{
                        p: { xs: 2.5, md: 3 },
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                      }}
                    >
                      {/* Car Title */}
                      <Typography
                        variant="h3"
                        sx={{
                          fontFamily: "'Rajdhani', sans-serif",
                          fontWeight: 700,
                          fontSize: { xs: '1.35rem', sm: '1.45rem' },
                          color: TEXT_DARK,
                          mb: 0.8,
                          lineHeight: 1.2,
                        }}
                      >
                        {car.name}
                      </Typography>

                      {/* Price Tag in Bold Red */}
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: '1.15rem',
                          color: ACCENT_RED,
                          mb: 2.2,
                        }}
                      >
                        {car.price}
                      </Typography>

                      {/* Subtle Separator */}
                      <Box
                        sx={{
                          height: '1px',
                          backgroundColor: '#e5e7eb',
                          mb: 1.8,
                          mt: 'auto',
                        }}
                      />

                      {/* Action Links Bar */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          columnGap: { xs: 0.6, sm: 0.8 },
                          rowGap: 0.6,
                          fontSize: { xs: '11.5px', sm: '12.5px' },
                          fontWeight: 500,
                          color: '#374151',
                        }}
                      >
                        <Box
                          component="button"
                          onClick={() => handleActionClick('Test Drive', car)}
                          sx={{
                            background: 'none',
                            border: 'none',
                            p: 0,
                            font: 'inherit',
                            color: 'inherit',
                            cursor: 'pointer',
                            transition: 'color 0.15s ease',
                            '&:hover': {
                              color: ACCENT_RED,
                              textDecoration: 'underline',
                              textUnderlineOffset: '3px',
                            },
                          }}
                        >
                          Test Drive
                        </Box>

                        <Box component="span" sx={{ color: '#d1d5db', userSelect: 'none' }}>
                          |
                        </Box>

                        <Box
                          component="a"
                          href={getBrochureUrl(car)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground font-medium transition-colors underline-offset-2 hover:underline hover:text-primary"
                          sx={{
                            textDecoration: 'none',
                            font: 'inherit',
                            color: 'inherit',
                            cursor: 'pointer',
                            transition: 'color 0.15s ease',
                            '&:hover': {
                              color: ACCENT_RED,
                              textDecoration: 'underline',
                              textUnderlineOffset: '3px',
                            },
                          }}
                        >
                          Brochure
                        </Box>

                        <Box component="span" sx={{ color: '#d1d5db', userSelect: 'none' }}>
                          |
                        </Box>

                        <Box
                          component="button"
                          onClick={() => handleActionClick('Get Price', car)}
                          sx={{
                            background: 'none',
                            border: 'none',
                            p: 0,
                            font: 'inherit',
                            color: 'inherit',
                            cursor: 'pointer',
                            transition: 'color 0.15s ease',
                            '&:hover': {
                              color: ACCENT_RED,
                              textDecoration: 'underline',
                              textUnderlineOffset: '3px',
                            },
                          }}
                        >
                          Get Price
                        </Box>

                        <Box component="span" sx={{ color: '#d1d5db', userSelect: 'none' }}>
                          |
                        </Box>

                        <Box
                          component="button"
                          onClick={() => handleActionClick('EMI Calculator', car)}
                          sx={{
                            background: 'none',
                            border: 'none',
                            p: 0,
                            font: 'inherit',
                            color: 'inherit',
                            cursor: 'pointer',
                            transition: 'color 0.15s ease',
                            '&:hover': {
                              color: ACCENT_RED,
                              textDecoration: 'underline',
                              textUnderlineOffset: '3px',
                            },
                          }}
                        >
                          EMI Calculator
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Ready to find your Arena car? Red Banner CTA (matching screenshot) */}
      <Box
        sx={{
          backgroundColor: ACCENT_RED,
          color: '#ffffff',
          py: { xs: 4.5, md: 5.5 },
          width: '100%',
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: '1440px',
            px: { xs: 3, sm: 4, md: 6, lg: 8 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: { xs: 3, md: 4 },
          }}
        >
          {/* Left Text */}
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontFamily: '"Rajdhani", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '1.6rem', sm: '1.9rem', md: '2.15rem' },
                color: '#ffffff',
                lineHeight: 1.2,
                mb: 0.8,
              }}
            >
              Ready to find your Arena car?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', sm: '0.98rem' },
                color: 'rgba(255, 255, 255, 0.92)',
                lineHeight: 1.5,
              }}
            >
              Visit any Bimal showroom for a test drive. No appointment needed.
            </Typography>
          </Box>

          {/* Right Action Buttons */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              gap: 1.8,
              width: { xs: '100%', sm: 'auto' },
              flexShrink: 0,
            }}
          >
            {/* 1. View Offers */}
            <Button
              component={Link}
              href="/offers"
              variant="contained"
              sx={{
                backgroundColor: '#ffffff',
                color: ACCENT_RED,
                fontWeight: 600,
                fontSize: '0.9rem',
                textTransform: 'none',
                textDecoration: 'none',
                px: 3.2,
                py: 1.15,
                borderRadius: '6px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  backgroundColor: '#f8fafc',
                  color: ACCENT_RED,
                },
              }}
            >
              View Offers
            </Button>

            {/* 2. Book Test Drive */}
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.9rem',
                textTransform: 'none',
                textDecoration: 'none',
                px: 3.2,
                py: 1.15,
                borderRadius: '6px',
                boxShadow: 'none',
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  borderColor: 'rgba(255, 255, 255, 0.7)',
                  color: '#ffffff',
                },
              }}
            >
              Book Test Drive
            </Button>

            {/* 3. Find Showroom */}
            <Button
              component={Link}
              href="/locations"
              variant="outlined"
              sx={{
                borderColor: 'rgba(255, 255, 255, 0.85)',
                color: '#ffffff',
                backgroundColor: 'transparent',
                fontWeight: 600,
                fontSize: '0.9rem',
                textTransform: 'none',
                textDecoration: 'none',
                px: 3.2,
                py: 1.15,
                borderRadius: '6px',
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  borderColor: '#ffffff',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                },
              }}
            >
              Find Showroom
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Interactive Modal matching Screenshots (Book Test Drive / Get Price / EMI Calculator) */}
      <VehicleModal
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        action={dialogAction}
        vehicleName={activeCar?.name || 'Maruti Suzuki Brezza'}
        onSuccess={(data) => {
          const type = data.action === 'Book Test Drive' ? 'Test Drive request' : 'On-Road Price quote request';
          setSnackbarMsg(`Thank you, ${data.fullName || 'valued customer'}! Your ${type} for ${data.model} has been received.`);
          setSnackbarOpen(true);
        }}
      />

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

