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

const AMBER_GOLD = '#d97706';
const AMBER_BG = '#f59e0b';
const AMBER_HOVER = '#d97706';
const TEXT_DARK = '#111827';
const TEXT_MUTED = '#64748b';
const CARD_BG = '#ffffff';
const BORDER_COLOR = '#e5e7eb';

// Custom SVG Icons matching exact True Value screenshot
function ShieldCheckAmberSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={AMBER_GOLD}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function StarAmberSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={AMBER_GOLD}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function RefreshAmberSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={AMBER_GOLD}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}

function DocumentAmberSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={AMBER_GOLD}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function CreditCardAmberSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={AMBER_GOLD}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  );
}

function FileCheckAmberSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={AMBER_GOLD}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  );
}

function PhoneCallSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
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

const howItWorksSteps = [
  {
    step: '01',
    title: 'Bring Your Car',
    description: 'Visit any Bimal True Value outlet with your car and documents. Our evaluators inspect it on the spot.',
  },
  {
    step: '02',
    title: 'Get Certified Value',
    description: 'We evaluate on 376 quality checkpoints and give you a transparent, fair price.',
  },
  {
    step: '03',
    title: 'Exchange or Sell',
    description: 'Take instant cash, or exchange for a new Maruti Suzuki with the value adjusted.',
  },
];

const trueValueBenefits = [
  {
    id: 'check',
    title: '376-Point Check',
    description: "Every certified car undergoes Maruti's rigorous multi-point inspection.",
    icon: <ShieldCheckAmberSvg />,
  },
  {
    id: 'warranty',
    title: '1-Year Warranty',
    description: 'All True Value cars come with a 1-year warranty.',
    icon: <StarAmberSvg />,
  },
  {
    id: 'buyback',
    title: 'Assured Buyback',
    description: 'Upgrade anytime with guaranteed buyback on your True Value car.',
    icon: <RefreshAmberSvg />,
  },
  {
    id: 'paperwork',
    title: 'Paperwork Assistance',
    description: 'RC transfer, insurance, and all documentation handled end-to-end.',
    icon: <DocumentAmberSvg />,
  },
  {
    id: 'finance',
    title: 'Finance Support',
    description: 'Easy EMI options available on all certified pre-owned purchases.',
    icon: <CreditCardAmberSvg />,
  },
  {
    id: 'rc-transfer',
    title: 'Free RC Transfer',
    description: 'Zero hassle ownership transfer — included at no extra charge.',
    icon: <FileCheckAmberSvg />,
  },
];

export default function TrueValuePage() {
  // Dialog State for Sell My Car & Buy Used Car
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState('sell'); // 'sell' or 'buy'
  const [dialogFormData, setDialogFormData] = useState({
    name: '',
    phone: '',
    carDetails: '',
    preferredLocation: 'Mahadevpura',
    budget: '₹4 - 7 Lakh',
  });

  // Toast Snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleOpenDialog = (type) => {
    setDialogType(type);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleDialogSubmit = (e) => {
    e.preventDefault();
    setDialogOpen(false);
    if (dialogType === 'sell') {
      setSnackbarMessage(
        `Thank you, ${dialogFormData.name}! Your car valuation request has been submitted. A Bimal True Value evaluator will contact you shortly.`
      );
    } else {
      setSnackbarMessage(
        `Thank you, ${dialogFormData.name}! We will share the latest certified pre-owned inventory in your budget (${dialogFormData.budget}) shortly.`
      );
    }
    setSnackbarOpen(true);
    setDialogFormData({
      name: '',
      phone: '',
      carDetails: '',
      preferredLocation: 'Mahadevpura',
      budget: '₹4 - 7 Lakh',
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
          backgroundImage: 'url(/images/hero-true-value.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: { xs: 'center right', md: 'center center' },
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark Gradient Overlay for maximum readability */}
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
              backgroundColor: 'rgba(180, 83, 9, 0.85)',
              border: '1px solid rgba(251, 191, 36, 0.4)',
              color: '#ffffff',
              fontSize: '11.5px',
              fontWeight: 700,
              letterSpacing: '0.04em',
              mb: 2,
            }}
          >
            Maruti True Value
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
            Certified Pre-Owned.
            <br />
            Zero Surprises.
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
            Buy or sell with complete peace of mind — 376-point certified by Maruti Suzuki.
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
          mt: { xs: 5, md: 8 },
        }}
      >
        {/* 2. WHAT IS MARUTI TRUE VALUE? SECTION */}
        <Box sx={{ mb: { xs: 7, md: 10 } }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.4rem' },
              fontWeight: 700,
              color: TEXT_DARK,
              letterSpacing: '-0.01em',
              mb: 2,
            }}
          >
            What is Maruti True Value?
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '0.95rem', sm: '1.025rem' },
              color: TEXT_MUTED,
              lineHeight: 1.7,
              maxWidth: 820,
              mb: 3.5,
            }}
          >
            Maruti True Value is India&apos;s most trusted certified pre-owned car programme. Every vehicle goes through
            a rigorous 376-point evaluation by Maruti-certified engineers. You get a car that&apos;s not just
            inspected, but genuinely certified — backed by warranty, paperwork, and the Maruti Suzuki name.
          </Typography>

          {/* Action Buttons */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              onClick={() => handleOpenDialog('sell')}
              sx={{
                backgroundColor: AMBER_BG,
                color: '#111827',
                fontWeight: 700,
                fontSize: '14.5px',
                textTransform: 'none',
                borderRadius: '8px',
                px: 3.5,
                py: 1.2,
                width: { xs: '100%', sm: 'auto' },
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: AMBER_HOVER,
                  boxShadow: '0 4px 12px rgba(217, 119, 6, 0.25)',
                },
              }}
            >
              Sell My Car
            </Button>

            <Button
              variant="outlined"
              onClick={() => handleOpenDialog('buy')}
              sx={{
                borderColor: BORDER_COLOR,
                backgroundColor: '#ffffff',
                color: TEXT_DARK,
                fontWeight: 600,
                fontSize: '14.5px',
                textTransform: 'none',
                borderRadius: '8px',
                px: 3.5,
                py: 1.2,
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  borderColor: '#9ca3af',
                  backgroundColor: '#f9fafb',
                },
              }}
            >
              Buy Used Car &rarr;
            </Button>
          </Box>
        </Box>

        {/* 3. HOW IT WORKS SECTION */}
        <Box sx={{ mb: { xs: 7, md: 11 } }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.4rem' },
              fontWeight: 700,
              color: TEXT_DARK,
              letterSpacing: '-0.01em',
              mb: { xs: 3.5, md: 4.5 },
            }}
          >
            How It Works
          </Typography>

          <Grid container spacing={{ xs: 4, sm: 4, md: 5 }}>
            {howItWorksSteps.map((stepItem) => (
              <Grid size={{ xs: 12, md: 4 }} key={stepItem.step}>
                <Box>
                  {/* Step Number in soft amber */}
                  <Typography
                    sx={{
                      fontFamily: "'Rajdhani', sans-serif",
                      fontSize: { xs: '2.6rem', sm: '3rem' },
                      fontWeight: 800,
                      color: '#fed7aa',
                      lineHeight: 1,
                      mb: 1.2,
                    }}
                  >
                    {stepItem.step}
                  </Typography>

                  {/* Step Title */}
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '1.15rem', sm: '1.25rem' },
                      fontWeight: 700,
                      color: TEXT_DARK,
                      mb: 1,
                    }}
                  >
                    {stepItem.title}
                  </Typography>

                  {/* Step Description */}
                  <Typography
                    sx={{
                      fontSize: { xs: '0.88rem', sm: '0.925rem' },
                      color: TEXT_MUTED,
                      lineHeight: 1.6,
                    }}
                  >
                    {stepItem.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 4. TRUE VALUE BENEFITS SECTION */}
        <Box sx={{ mb: { xs: 7, md: 10 } }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.4rem' },
              fontWeight: 700,
              color: TEXT_DARK,
              letterSpacing: '-0.01em',
              mb: { xs: 2.5, md: 3.5 },
            }}
          >
            True Value Benefits
          </Typography>

          <Grid container spacing={{ xs: 2.5, sm: 3 }}>
            {trueValueBenefits.map((benefit) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={benefit.id}>
                <Box
                  sx={{
                    backgroundColor: CARD_BG,
                    borderRadius: '16px',
                    border: '1px solid',
                    borderColor: BORDER_COLOR,
                    p: { xs: 2.8, sm: 3.5 },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: '#fed7aa',
                      boxShadow: '0 6px 20px rgba(217, 119, 6, 0.08)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 1.5,
                    }}
                  >
                    {benefit.icon}
                  </Box>

                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '1.05rem', sm: '1.15rem' },
                      fontWeight: 700,
                      color: TEXT_DARK,
                      mb: 0.8,
                    }}
                  >
                    {benefit.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: '0.88rem', sm: '0.92rem' },
                      color: TEXT_MUTED,
                      lineHeight: 1.55,
                    }}
                  >
                    {benefit.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 5. LOOKING TO BUY A PRE-OWNED CAR? CTA BANNER */}
        <Box
          sx={{
            backgroundColor: '#fffbeb',
            borderRadius: '16px',
            border: '1px solid #fed7aa',
            p: { xs: 3, sm: 4, md: 4.5 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 2.5,
            mb: 4,
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: { xs: '1.35rem', sm: '1.55rem', md: '1.75rem' },
                fontWeight: 700,
                color: TEXT_DARK,
                mb: 0.5,
              }}
            >
              Looking to Buy a Pre-Owned Car?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.88rem', sm: '0.95rem' },
                color: TEXT_MUTED,
              }}
            >
              Browse certified True Value stock at our Mahadevpura and Yelahanka showrooms.
            </Typography>
          </Box>

          <Button
            component="a"
            href="tel:08030693069"
            variant="contained"
            startIcon={<PhoneCallSvg />}
            sx={{
              backgroundColor: AMBER_BG,
              color: '#111827',
              fontWeight: 700,
              fontSize: '14.5px',
              textTransform: 'none',
              borderRadius: '8px',
              px: 3.5,
              py: 1.3,
              width: { xs: '100%', sm: 'auto' },
              boxShadow: 'none',
              whiteSpace: 'nowrap',
              '&:hover': {
                backgroundColor: AMBER_HOVER,
                boxShadow: '0 4px 14px rgba(217, 119, 6, 0.3)',
              },
            }}
          >
            080-3069 3069
          </Button>
        </Box>
      </Container>

      {/* Interactive Modal Dialog for Sell / Buy */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="sm"
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
            {dialogType === 'sell' ? 'Get Your Car Evaluated - Free Inspection' : 'Enquire About True Value Inventory'}
          </Typography>
          <IconButton onClick={handleCloseDialog} size="small" aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <Box component="form" onSubmit={handleDialogSubmit}>
          <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2.2, pt: 1 }}>
            <TextField
              label="Full Name *"
              required
              fullWidth
              size="small"
              value={dialogFormData.name}
              onChange={(e) => setDialogFormData((p) => ({ ...p, name: e.target.value }))}
            />
            <TextField
              label="Phone Number *"
              required
              fullWidth
              size="small"
              value={dialogFormData.phone}
              onChange={(e) => setDialogFormData((p) => ({ ...p, phone: e.target.value }))}
            />

            {dialogType === 'sell' ? (
              <TextField
                label="Car Make, Model & Year *"
                placeholder="e.g. Maruti Swift 2021 VXI, 35,000 km"
                required
                fullWidth
                size="small"
                value={dialogFormData.carDetails}
                onChange={(e) => setDialogFormData((p) => ({ ...p, carDetails: e.target.value }))}
              />
            ) : (
              <TextField
                select
                label="Budget Range"
                fullWidth
                size="small"
                value={dialogFormData.budget}
                onChange={(e) => setDialogFormData((p) => ({ ...p, budget: e.target.value }))}
              >
                <MenuItem value="Under ₹4 Lakh">Under ₹4 Lakh</MenuItem>
                <MenuItem value="₹4 - 7 Lakh">₹4 - 7 Lakh</MenuItem>
                <MenuItem value="₹7 - 10 Lakh">₹7 - 10 Lakh</MenuItem>
                <MenuItem value="₹10 Lakh+">₹10 Lakh+</MenuItem>
              </TextField>
            )}

            <TextField
              select
              label="Preferred Showroom Location"
              fullWidth
              size="small"
              value={dialogFormData.preferredLocation}
              onChange={(e) => setDialogFormData((p) => ({ ...p, preferredLocation: e.target.value }))}
            >
              <MenuItem value="Mahadevpura">Bimal True Value Mahadevpura</MenuItem>
              <MenuItem value="Yelahanka">Bimal True Value Yelahanka</MenuItem>
              <MenuItem value="Domlur">Bimal True Value Domlur</MenuItem>
              <MenuItem value="Banashankari">Bimal True Value Banashankari</MenuItem>
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
                backgroundColor: AMBER_BG,
                color: '#111827',
                fontWeight: 700,
                textTransform: 'none',
                px: 3,
                '&:hover': { backgroundColor: AMBER_HOVER },
              }}
            >
              {dialogType === 'sell' ? 'Submit for Valuation' : 'Request Inventory'}
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
