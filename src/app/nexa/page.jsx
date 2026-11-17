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

const NEXA_BLUE = '#1d68c9';
const NEXA_DARK_BLUE = '#144a91';
const TEXT_MUTED = '#64748b';
const TEXT_DARK = '#111827';
const CARD_BG = '#ffffff';
const IMG_CONTAINER_BG = '#f8fafc';

function ZapIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={NEXA_BLUE}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

// 7 Official Maruti Suzuki Nexa Vehicles matching screenshots
const nexaModels = [
  {
    id: 'baleno',
    name: 'Maruti Suzuki Baleno',
    price: '₹5.98 – 9.17 Lakh',
    basePriceNum: 598000,
    category: 'Premium Hatchback',
    image: '/images/nexa/baleno-no-bg.png',
  },
  {
    id: 'e-vitara',
    name: 'Maruti Suzuki e Vitara',
    price: '₹15.99 – 20.21 Lakh',
    basePriceNum: 1599000,
    category: 'Born-Electric SUV Flagship',
    isElectric: true,
    image: '/images/nexa/e-vitara-no-bg.png',
  },
  {
    id: 'grand-vitara',
    name: 'Maruti Suzuki Grand Vitara',
    price: '₹10.76 – 19.72 Lakh',
    basePriceNum: 1076000,
    category: 'Mid-Size Hybrid SUV',
    image: '/images/nexa/grand-vitara-no-bg.png',
  },
  {
    id: 'fronx',
    name: 'Maruti Suzuki Fronx',
    price: '₹6.84 – 11.97 Lakh',
    basePriceNum: 684000,
    category: 'Compact SUV-Coupe',
    image: '/images/nexa/fronx-no-bg.png',
  },
  {
    id: 'jimny',
    name: 'Maruti Suzuki Jimny',
    price: '₹12.39 – 14.52 Lakh',
    basePriceNum: 1239000,
    category: '4×4 Off-Road SUV',
    image: '/images/nexa/jimny-no-bg.png',
  },
  {
    id: 'invicto',
    name: 'Maruti Suzuki Invicto',
    price: '₹24.97 – 28.69 Lakh',
    basePriceNum: 2497000,
    category: 'Luxury 7/8 Seater Hybrid MPV',
    image: '/images/nexa/invicto-no-bg.png',
  },
  {
    id: 'xl6',
    name: 'Maruti Suzuki XL6',
    price: '₹11.57 – 14.52 Lakh',
    basePriceNum: 1157000,
    category: 'Premium 6-Seater MPV',
    image: '/images/nexa/xl6-no-bg.png',
  },
];

export default function NexaPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Dialog State
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogAction, setDialogAction] = useState('Test Drive');
  const [activeCar, setActiveCar] = useState(nexaModels[0]);

  // EMI Calculator state
  const [loanTenure, setLoanTenure] = useState(5);
  const [interestRate, setInterestRate] = useState(8.5);

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
      `Thank you! Your ${dialogAction.toLowerCase()} request for ${activeCar.name} has been received. Our Bimal Maruti Nexa relationship manager will get in touch with you shortly.`
    );
    setSnackbarOpen(true);
  };

  // Monthly EMI Calculation formula
  const calculateEMI = () => {
    const P = activeCar.basePriceNum * 0.85;
    const r = interestRate / 12 / 100;
    const n = loanTenure * 12;
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi).toLocaleString('en-IN');
  };

  return (
    <Box sx={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* 1. Hero Banner matching Screenshot */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '380px', sm: '420px', md: '480px' },
          overflow: 'hidden',
          backgroundColor: '#0a0d14',
          backgroundImage: 'url(/images/hero-evitara.webp)',
          backgroundSize: 'cover',
          backgroundPosition: { xs: 'center right', md: 'center 40%' },
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark Gradient Overlay for high-contrast typography */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: {
              xs: 'linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 100%)',
              md: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.15) 100%)',
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
          {/* Nexa Pill Badge */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              px: 1.6,
              py: 0.5,
              borderRadius: 9999,
              backgroundColor: 'rgba(29, 78, 216, 0.75)',
              border: '1px solid rgba(96, 165, 250, 0.4)',
              color: '#ffffff',
              fontSize: '11.5px',
              fontWeight: 700,
              letterSpacing: '0.04em',
              mb: 2,
            }}
          >
            Nexa Experience
          </Box>

          {/* Heading */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              color: '#ffffff',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              mb: 1.5,
              textShadow: '0 2px 10px rgba(0,0,0,0.4)',
            }}
          >
            Create. Inspire.
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontSize: { xs: '1rem', sm: '1.125rem' },
              color: 'rgba(255, 255, 255, 0.88)',
              maxWidth: 580,
              lineHeight: 1.5,
              textShadow: '0 1px 4px rgba(0,0,0,0.5)',
            }}
          >
            Premium mobility with cutting-edge technology and sophisticated design.
          </Typography>
        </Container>
      </Box>

      {/* 2. Spotlight Announcement Bar matching Screenshot */}
      <Box
        sx={{
          backgroundColor: '#f1f5f9',
          borderBottom: '1px solid #e2e8f0',
          py: 2,
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: '1440px',
            px: { xs: 3, md: 6, lg: 8 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          {/* Left: Electric Flagship announcement */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: '8px',
                backgroundColor: 'rgba(29, 104, 201, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <ZapIconSvg />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: '10.5px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: NEXA_BLUE,
                  lineHeight: 1.2,
                }}
              >
                NOW AVAILABLE
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', sm: '0.98rem' },
                  fontWeight: 700,
                  color: TEXT_DARK,
                  lineHeight: 1.3,
                }}
              >
                Maruti Suzuki e Vitara — India&apos;s Premium Electric SUV
              </Typography>
            </Box>
          </Box>

          {/* Right: Starting price & Book Now */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2.5,
              alignSelf: { xs: 'stretch', sm: 'flex-end', md: 'center' },
              justifyContent: { xs: 'space-between', md: 'flex-end' },
            }}
          >
            <Typography sx={{ fontSize: '0.9rem', color: TEXT_MUTED }}>
              Starting{' '}
              <Box component="span" sx={{ fontWeight: 700, color: TEXT_DARK }}>
                ₹15.99 – 20.21 Lakh
              </Box>
            </Typography>

            <Button
              variant="contained"
              onClick={() => {
                const eVitara = nexaModels.find((m) => m.id === 'e-vitara') || nexaModels[1];
                handleActionClick('Test Drive', eVitara);
              }}
              sx={{
                backgroundColor: NEXA_BLUE,
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.85rem',
                textTransform: 'none',
                px: 2.8,
                py: 0.8,
                borderRadius: '6px',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: NEXA_DARK_BLUE,
                  boxShadow: '0 4px 12px rgba(29, 104, 201, 0.25)',
                },
              }}
            >
              Book Now
            </Button>
          </Box>
        </Container>
      </Box>

      {/* 3. Nexa Lineup 2026 Grid Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#ffffff' }}>
        <Container
          maxWidth={false}
          sx={{
            maxWidth: '1440px',
            px: { xs: 3, md: 6, lg: 8 },
          }}
        >
          {/* Section Header */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: { xs: 4, md: 5 },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.6rem' },
                color: TEXT_DARK,
                lineHeight: 1.2,
              }}
            >
              Nexa Lineup{' '}
              <Box component="span" sx={{ color: NEXA_BLUE }}>
                2026
              </Box>
            </Typography>

            {/* 7 Models pill badge */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                px: 2,
                py: 0.6,
                borderRadius: 9999,
                border: '1px solid #d1d5db',
                backgroundColor: '#ffffff',
                color: '#374151',
                fontSize: '12px',
                fontWeight: 600,
                boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
              }}
            >
              7 Models
            </Box>
          </Box>

          {/* 3-Column Vehicle Grid matching screenshots */}
          <Grid container spacing={{ xs: 3, md: 3.5, lg: 4 }}>
            {nexaModels.map((car) => {
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
                      borderRadius: 4,
                      overflow: 'hidden',
                      border: '1px solid',
                      borderColor: isHovered ? 'rgba(29, 104, 201, 0.45)' : '#e5e7eb',
                      boxShadow: isHovered
                        ? '0 10px 28px rgba(29, 104, 201, 0.08), 0 4px 12px rgba(0,0,0,0.04)'
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
                        p: 3,
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
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
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

                        {/* Extra Electric Pill for e Vitara */}
                        {car.isElectric && (
                          <Box
                            sx={{
                              backgroundColor: NEXA_BLUE,
                              color: '#ffffff',
                              px: 1.2,
                              py: 0.35,
                              borderRadius: 9999,
                              fontSize: '10.5px',
                              fontWeight: 700,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 0.4,
                              boxShadow: '0 1px 4px rgba(29, 104, 201, 0.3)',
                            }}
                          >
                            <Box component="span" sx={{ fontSize: '10px' }}>
                              ⚡
                            </Box>
                            Electric
                          </Box>
                        )}
                      </Box>

                      {/* Car Image with smooth zoom on hover */}
                      <Box
                        component="img"
                        src={car.image}
                        alt={car.name}
                        loading="lazy"
                        sx={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
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

                      {/* Price Tag in Bold Nexa Blue */}
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: '1.15rem',
                          color: NEXA_BLUE,
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
                          gap: { xs: 0.6, md: 0.8 },
                          fontSize: '12.5px',
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
                              color: NEXA_BLUE,
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
                          component="button"
                          onClick={() => handleActionClick('Brochure', car)}
                          sx={{
                            background: 'none',
                            border: 'none',
                            p: 0,
                            font: 'inherit',
                            color: 'inherit',
                            cursor: 'pointer',
                            transition: 'color 0.15s ease',
                            '&:hover': {
                              color: NEXA_BLUE,
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
                              color: NEXA_BLUE,
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
                              color: NEXA_BLUE,
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

      {/* Interactive Modal (Test Drive / Brochure / Get Price / EMI Calculator) */}
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
            {dialogAction === 'EMI Calculator'
              ? `EMI Calculator: ${activeCar.name}`
              : `${dialogAction}: ${activeCar.name}`}
          </Typography>
          <IconButton onClick={() => setDialogOpen(false)} size="small" aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        {dialogAction === 'EMI Calculator' ? (
          <Box sx={{ p: 3 }}>
            <Box
              sx={{
                p: 2.5,
                borderRadius: 2,
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                mb: 3,
                textAlign: 'center',
              }}
            >
              <Typography variant="body2" sx={{ color: TEXT_MUTED, mb: 0.5 }}>
                Estimated Monthly EMI for {activeCar.name} ({activeCar.price})
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  fontSize: '2.5rem',
                  color: NEXA_BLUE,
                }}
              >
                ₹{calculateEMI()}
                <Typography component="span" sx={{ fontSize: '1rem', color: TEXT_MUTED }}>
                  /month
                </Typography>
              </Typography>
              <Typography variant="caption" sx={{ color: TEXT_MUTED, display: 'block', mt: 0.5 }}>
                *Calculated with 85% loan funding at {interestRate}% p.a. over {loanTenure} years.
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, color: TEXT_DARK }}>
                  Loan Tenure
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 700, color: NEXA_BLUE }}>
                  {loanTenure} Years ({loanTenure * 12} Months)
                </Typography>
              </Box>
              <Slider
                value={loanTenure}
                min={1}
                max={7}
                step={1}
                marks
                onChange={(e, val) => setLoanTenure(val)}
                sx={{ color: NEXA_BLUE }}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, color: TEXT_DARK }}>
                  Interest Rate (p.a.)
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 700, color: NEXA_BLUE }}>
                  {interestRate}%
                </Typography>
              </Box>
              <Slider
                value={interestRate}
                min={7.5}
                max={14}
                step={0.25}
                onChange={(e, val) => setInterestRate(val)}
                sx={{ color: NEXA_BLUE }}
              />
            </Box>

            <DialogActions sx={{ px: 0, pt: 2 }}>
              <Button onClick={() => setDialogOpen(false)} sx={{ color: TEXT_MUTED }}>
                Close
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  setDialogAction('Get Price');
                }}
                sx={{
                  backgroundColor: NEXA_BLUE,
                  color: '#ffffff',
                  fontWeight: 700,
                  px: 3,
                  '&:hover': { backgroundColor: NEXA_DARK_BLUE },
                }}
              >
                Apply for Nexa Finance
              </Button>
            </DialogActions>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleFormSubmit}>
            <DialogContent dividers sx={{ p: 3 }}>
              <Typography variant="body2" sx={{ color: TEXT_MUTED, mb: 3 }}>
                Enter your details to receive an instant {dialogAction.toLowerCase()} quotation and exclusive showroom offers from Bimal Maruti Nexa.
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
                    label="Preferred Nexa Showroom"
                    size="small"
                    defaultValue="Bangalore - Indiranagar Nexa"
                  >
                    <MenuItem value="Bangalore - Indiranagar Nexa">Bangalore - Indiranagar Nexa</MenuItem>
                    <MenuItem value="Bangalore - Whitefield Nexa">Bangalore - Whitefield Nexa</MenuItem>
                    <MenuItem value="Bangalore - Yelahanka Nexa">Bangalore - Yelahanka Nexa</MenuItem>
                    <MenuItem value="Bangalore - Mahadevapura Nexa">Bangalore - Mahadevapura Nexa</MenuItem>
                    <MenuItem value="Mysore - Hunsur Road Nexa">Mysore - Hunsur Road Nexa</MenuItem>
                    <MenuItem value="Mangalore - Bejai Nexa">Mangalore - Bejai Nexa</MenuItem>
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={2}
                    label="Variant / Powertrain Preference"
                    size="small"
                    placeholder="e.g. Strong Hybrid / Smart Hybrid / Electric, AllGrip AWD, or test drive at home"
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
                  backgroundColor: NEXA_BLUE,
                  color: '#ffffff',
                  fontWeight: 700,
                  px: 3,
                  '&:hover': { backgroundColor: NEXA_DARK_BLUE },
                }}
              >
                {dialogAction === 'Brochure'
                  ? 'Download Nexa Brochure'
                  : dialogAction === 'Test Drive'
                  ? 'Schedule Nexa Test Drive'
                  : 'Get Nexa On-Road Quote'}
              </Button>
            </DialogActions>
          </Box>
        )}
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

