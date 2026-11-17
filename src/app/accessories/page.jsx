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
  Snackbar,
  Alert,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ACCENT_RED = '#e7210b';
const ACCENT_RED_HOVER = '#cf1904';
const TEXT_DARK = '#111827';
const TEXT_MUTED = '#64748b';
const CARD_BG = '#ffffff';
const BORDER_COLOR = '#e5e7eb';

// Custom SVG Icons matching exact screenshot
function SeatCoverIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_RED}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="m2 17 10 5 10-5" />
      <path d="m2 12 10 5 10-5" />
    </svg>
  );
}

function AlloyWheelIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_RED}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="2" x2="12" y2="9" />
      <line x1="12" y1="15" x2="12" y2="22" />
      <line x1="2" y1="12" x2="9" y2="12" />
      <line x1="15" y1="12" x2="22" y2="12" />
    </svg>
  );
}

function DashCamIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_RED}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" />
    </svg>
  );
}

function RoofRailIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_RED}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
      <line x1="6" y1="6" x2="18" y2="6" />
    </svg>
  );
}

function FloorMatIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_RED}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ParkingSensorIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_RED}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function ArrowUpRightSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ marginLeft: 6, flexShrink: 0 }}
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

const accessories = [
  {
    id: 'seat-covers',
    title: 'Seat Covers',
    description: 'Premium leather & fabric covers',
    icon: <SeatCoverIconSvg />,
  },
  {
    id: 'alloy-wheels',
    title: 'Alloy Wheels',
    description: 'Stylish, lightweight alloys',
    icon: <AlloyWheelIconSvg />,
  },
  {
    id: 'dash-cam',
    title: 'Dash Cam',
    description: 'HD recording with night vision',
    icon: <DashCamIconSvg />,
  },
  {
    id: 'roof-rails',
    title: 'Roof Rails',
    description: 'Sleek utility for extra luggage',
    icon: <RoofRailIconSvg />,
  },
  {
    id: 'floor-mats',
    title: 'Floor Mats',
    description: '3D custom-fit anti-skid mats',
    icon: <FloorMatIconSvg />,
  },
  {
    id: 'reverse-sensors',
    title: 'Reverse Parking Sensors',
    description: 'Safe parking with audio alerts',
    icon: <ParkingSensorIconSvg />,
  },
];

const showroomLocations = [
  'Bimal Maruti Mahadevpura',
  'Bimal Maruti Domlur',
  'Bimal Maruti Yelahanka',
  'Bimal Maruti Varthur',
  'Bimal Maruti Banashankari',
  'Bimal Maruti Hoskote',
];

export default function AccessoriesPage() {
  // Modal State for Enquiry
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeAccessory, setActiveAccessory] = useState(accessories[0]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    showroom: 'Bimal Maruti Mahadevpura',
  });

  // Toast Snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleCardClick = (acc) => {
    setActiveAccessory(acc);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleSubmitEnquiry = (e) => {
    e.preventDefault();
    setDialogOpen(false);
    setSnackbarMessage(
      `Thank you, ${formData.name}! Your enquiry for genuine ${activeAccessory.title} has been received. Our accessory specialist will call you with prices and fitting options.`
    );
    setSnackbarOpen(true);
    setFormData({
      name: '',
      phone: '',
      carModel: '',
      showroom: 'Bimal Maruti Mahadevpura',
    });
  };

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
          backgroundImage: 'url(/images/hero-accessories.jpg)',
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
            100% Genuine
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
            Genuine Maruti Suzuki Accessories
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontSize: { xs: '0.95rem', sm: '1.125rem' },
              color: 'rgba(255, 255, 255, 0.88)',
              maxWidth: 620,
              lineHeight: 1.5,
              textShadow: '0 1px 4px rgba(0,0,0,0.5)',
            }}
          >
            Enhance your car with 100% genuine Maruti accessories — designed for perfect fit and lasting performance.
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
          mt: { xs: 5, md: 7 },
        }}
      >
        {/* 2. ACCESSORIES GRID (6 CARDS) */}
        <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }} sx={{ mb: { xs: 5, md: 7 } }}>
          {accessories.map((acc) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={acc.id}>
              <Box
                onClick={() => handleCardClick(acc)}
                sx={{
                  backgroundColor: CARD_BG,
                  borderRadius: '14px',
                  border: '1px solid',
                  borderColor: BORDER_COLOR,
                  p: { xs: 2.5, sm: 3 },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2.2,
                  cursor: 'pointer',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    borderColor: '#fca5a5',
                    boxShadow: '0 6px 18px rgba(231, 33, 11, 0.08)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {/* Circular Icon Container */}
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    backgroundColor: '#fef2f2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {acc.icon}
                </Box>

                {/* Text Content */}
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '1rem', sm: '1.05rem' },
                      fontWeight: 700,
                      color: TEXT_DARK,
                      mb: 0.4,
                    }}
                  >
                    {acc.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: '0.85rem', sm: '0.88rem' },
                      color: TEXT_MUTED,
                      lineHeight: 1.4,
                    }}
                  >
                    {acc.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* 3. EXPLORE THE FULL RANGE CALLOUT BOX */}
        <Box
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            border: '1px solid',
            borderColor: BORDER_COLOR,
            p: { xs: 3.5, sm: 5, md: 6 },
            textAlign: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
            mb: 4,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: { xs: '1.6rem', sm: '1.9rem', md: '2.1rem' },
              fontWeight: 700,
              color: TEXT_DARK,
              letterSpacing: '-0.01em',
              mb: 1,
            }}
          >
            Explore the Full Range
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '0.88rem', sm: '0.95rem' },
              color: TEXT_MUTED,
              maxWidth: 600,
              mx: 'auto',
              mb: 3,
            }}
          >
            Browse the complete catalog of genuine Maruti Suzuki accessories on the official website.
          </Typography>

          <Button
            component="a"
            href="https://www.marutisuzuki.com/genuine-accessories"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{
              backgroundColor: ACCENT_RED,
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '14px',
              textTransform: 'none',
              borderRadius: '8px',
              px: 3.5,
              py: 1.3,
              boxShadow: '0 4px 14px rgba(231, 33, 11, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              '&:hover': {
                backgroundColor: ACCENT_RED_HOVER,
                boxShadow: '0 6px 18px rgba(231, 33, 11, 0.4)',
              },
            }}
          >
            <span>Browse All Accessories on Maruti Suzuki</span>
            <ArrowUpRightSvg />
          </Button>
        </Box>
      </Container>

      {/* Interactive Accessory Enquiry Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="xs"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: '16px',
              p: { xs: 1, sm: 2 },
            },
          },
        }}
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: TEXT_DARK }}>
            Enquire: {activeAccessory.title}
          </Typography>
          <IconButton onClick={handleCloseDialog} size="small" aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <Box component="form" onSubmit={handleSubmitEnquiry}>
          <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
            <TextField
              label="Full Name *"
              required
              fullWidth
              size="small"
              value={formData.name}
              onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
            />
            <TextField
              label="Phone Number *"
              required
              fullWidth
              size="small"
              value={formData.phone}
              onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
            />
            <TextField
              label="Your Maruti Model *"
              placeholder="e.g. Swift, Brezza, Baleno, Fronx"
              required
              fullWidth
              size="small"
              value={formData.carModel}
              onChange={(e) => setFormData((p) => ({ ...p, carModel: e.target.value }))}
            />
            <TextField
              select
              label="Preferred Showroom Location"
              fullWidth
              size="small"
              value={formData.showroom}
              onChange={(e) => setFormData((p) => ({ ...p, showroom: e.target.value }))}
            >
              {showroomLocations.map((loc) => (
                <MenuItem key={loc} value={loc} sx={{ fontSize: '13.5px' }}>
                  {loc}
                </MenuItem>
              ))}
            </TextField>
          </DialogContent>

          <DialogActions sx={{ px: 3, pb: 2.5 }}>
            <Button onClick={handleCloseDialog} sx={{ color: TEXT_MUTED, textTransform: 'none' }}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: ACCENT_RED,
                color: '#ffffff',
                fontWeight: 700,
                textTransform: 'none',
                px: 3,
                '&:hover': { backgroundColor: ACCENT_RED_HOVER },
              }}
            >
              Get Pricing &amp; Fitting
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* Confirmation Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{
            width: '100%',
            backgroundColor: '#15803d',
            color: '#ffffff',
            fontWeight: 600,
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            '& .MuiAlert-icon': {
              color: '#ffffff',
            },
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
