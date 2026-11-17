'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  TextField,
  MenuItem,
  Snackbar,
  Alert,
} from '@mui/material';

const ACCENT_RED = '#e7210b';
const TEXT_DARK = '#111827';
const TEXT_MUTED = '#64748b';
const CARD_BG = '#ffffff';
const BORDER_COLOR = '#e5e7eb';

// Icons matching exact screenshot
function WrenchRedIconSvg() {
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
      aria-hidden="true"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function ClockRedIconSvg() {
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
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ShieldCheckRedIconSvg() {
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
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CheckCircleRedIconSvg() {
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
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function PhoneIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
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

const servicePackages = [
  {
    id: 'pms',
    title: 'Periodic Maintenance (PMS)',
    badge: 'Most Popular',
    badgeBg: '#fef2f2',
    badgeColor: '#dc2626',
    badgeBorder: '#fee2e2',
    description: 'Engine oil, oil filter, air filter, fluid top-ups, and multi-point inspection.',
    actionLabel: 'From ₹2,499',
    icon: <WrenchRedIconSvg />,
  },
  {
    id: 'express',
    title: 'Express Service',
    badge: 'Quick',
    badgeBg: '#eff6ff',
    badgeColor: '#2563eb',
    badgeBorder: '#dbeafe',
    description: 'Oil and filter change done in under 60 minutes. In and out, no waiting.',
    actionLabel: 'From ₹1,499',
    icon: <ClockRedIconSvg />,
  },
  {
    id: 'accidental',
    title: 'Accidental Repair',
    badge: 'Insurance Accepted',
    badgeBg: '#f1f5f9',
    badgeColor: '#475569',
    badgeBorder: '#e2e8f0',
    description: 'Full body restoration with Genuine Parts, color matching, and structural repair.',
    actionLabel: 'Get Estimate',
    icon: <ShieldCheckRedIconSvg />,
  },
  {
    id: 'inspection',
    title: 'Comprehensive Inspection',
    badge: 'Complimentary',
    badgeBg: '#ecfdf5',
    badgeColor: '#059669',
    badgeBorder: '#d1fae5',
    description: '53-point vehicle health check covering engine, brakes, suspension, electricals.',
    actionLabel: 'Free with Service',
    icon: <CheckCircleRedIconSvg />,
  },
];

const whyServicePoints = [
  {
    title: 'Factory-Trained Technicians',
    description: "Every technician is certified and trained at Maruti Suzuki's own training centers.",
  },
  {
    title: 'Maruti Genuine Parts Only',
    description: 'We never compromise on parts quality. Genuine parts mean better performance and longer life.',
  },
  {
    title: 'Real-Time SMS Updates',
    description: "Know exactly what's happening with your vehicle at every stage of service.",
  },
];

const serviceLocations = [
  { name: 'Bimal Maruti Mahadevpura', phone: '080-3069 3069', tel: '08030693069' },
  { name: 'Bimal Maruti Domlur', phone: '080-2535 6600', tel: '08025356600' },
  { name: 'Bimal Maruti Yelahanka', phone: '080-2856 1234', tel: '08028561234' },
  { name: 'Bimal Maruti Varthur', phone: '080-4016 5678', tel: '08040165678' },
  { name: 'Bimal Maruti Banashankari', phone: '080-2671 9900', tel: '08026719900' },
  { name: 'Bimal Maruti Hoskote', phone: '080-2719 0011', tel: '08027190011' },
  { name: 'Bimal Maruti Devanahalli', phone: '08110-230033', tel: '08110230033' },
  { name: 'Bimal Maruti Chikkaballapura', phone: '08156-232100', tel: '08156232100' },
];

const serviceOptions = [
  'Periodic Maintenance (PMS)',
  'Express Service',
  'Accidental Repair',
  'Comprehensive Inspection',
  'Wheel Alignment & Balancing',
  'General Check-up',
];

const showroomOptions = [
  'Bimal Maruti Mahadevpura',
  'Bimal Maruti Domlur',
  'Bimal Maruti Yelahanka',
  'Bimal Maruti Varthur',
  'Bimal Maruti Banashankari',
  'Bimal Maruti Hoskote',
  'Bimal Maruti Devanahalli',
  'Bimal Maruti Chikkaballapura',
];

export default function ServicePage() {
  // Booking Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    vehicleReg: '',
    serviceType: '',
    preferredDate: '',
    showroom: '',
  });

  // Snackbar Toast
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSelectPackage = (pkgTitle) => {
    setFormData((prev) => ({ ...prev, serviceType: pkgTitle }));
    const element = document.getElementById('book-slot');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.vehicleReg) {
      setSnackbarMessage('Please fill in all required fields (Name, Phone, and Vehicle Reg. No.)');
      setSnackbarOpen(true);
      return;
    }

    setSnackbarMessage(
      `Thank you, ${formData.fullName}! Your service slot request for ${formData.vehicleReg} has been received. Our Bimal Maruti service team will call you shortly to confirm your appointment.`
    );
    setSnackbarOpen(true);

    // Reset form
    setFormData({
      fullName: '',
      phone: '',
      vehicleReg: '',
      serviceType: '',
      preferredDate: '',
      showroom: '',
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
          backgroundImage: 'url(/images/hero-service.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: { xs: 'center right', md: 'center center' },
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark Gradient Overlay for optimal readability */}
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
            Maruti Authorized Service
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
            World-Class Service.
            <br />
            Right Here.
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
            Factory-trained technicians. Genuine parts. Transparent pricing.
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
        {/* 2. SERVICE PACKAGES SECTION */}
        <Box sx={{ mb: { xs: 6, md: 9 } }}>
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
            Service Packages
          </Typography>

          <Grid container spacing={{ xs: 2.5, sm: 3, md: 3.5 }}>
            {servicePackages.map((pkg) => (
              <Grid size={{ xs: 12, md: 6 }} key={pkg.id}>
                <Box
                  onClick={() => handleSelectPackage(pkg.title)}
                  sx={{
                    backgroundColor: CARD_BG,
                    borderRadius: '16px',
                    border: '1px solid',
                    borderColor: BORDER_COLOR,
                    p: { xs: 2.8, sm: 3.5 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: { xs: 'auto', sm: 195 },
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                    '&:hover': {
                      borderColor: '#fca5a5',
                      boxShadow: '0 8px 24px rgba(231, 33, 11, 0.08)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <Box>
                    {/* Top Row: Icon + Badge */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 36,
                          height: 36,
                        }}
                      >
                        {pkg.icon}
                      </Box>
                      <Box
                        sx={{
                          px: 1.5,
                          py: 0.4,
                          borderRadius: 9999,
                          backgroundColor: pkg.badgeBg,
                          border: `1px solid ${pkg.badgeBorder}`,
                          color: pkg.badgeColor,
                          fontSize: '11px',
                          fontWeight: 700,
                          letterSpacing: '0.02em',
                        }}
                      >
                        {pkg.badge}
                      </Box>
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: '1.15rem', sm: '1.25rem' },
                        fontWeight: 700,
                        color: TEXT_DARK,
                        mb: 1,
                      }}
                    >
                      {pkg.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        fontSize: { xs: '0.88rem', sm: '0.94rem' },
                        color: TEXT_MUTED,
                        lineHeight: 1.55,
                        mb: 2.5,
                      }}
                    >
                      {pkg.description}
                    </Typography>
                  </Box>

                  {/* Price / Action Link */}
                  <Typography
                    sx={{
                      fontSize: { xs: '1.05rem', sm: '1.15rem' },
                      fontWeight: 700,
                      color: ACCENT_RED,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.5,
                    }}
                  >
                    {pkg.actionLabel}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 3. WHY SERVICE WITH BIMAL? SECTION */}
        <Box sx={{ mb: { xs: 7, md: 11 } }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.4rem' },
              fontWeight: 700,
              color: TEXT_DARK,
              letterSpacing: '-0.01em',
              mb: { xs: 3, md: 4 },
            }}
          >
            Why Service with Bimal?
          </Typography>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {whyServicePoints.map((item, idx) => (
              <Grid size={{ xs: 12, md: 4 }} key={idx}>
                <Box
                  sx={{
                    borderLeft: `3px solid ${ACCENT_RED}`,
                    pl: 2.2,
                    py: 0.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: '1.05rem', sm: '1.1rem' },
                      fontWeight: 700,
                      color: TEXT_DARK,
                      mb: 0.8,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: '0.88rem', sm: '0.925rem' },
                      color: TEXT_MUTED,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 4. BOOK A SERVICE SLOT SECTION */}
        <Box
          id="book-slot"
          sx={{
            mb: { xs: 7, md: 11 },
            scrollMarginTop: '100px',
          }}
        >
          {/* Section Heading */}
          <Box sx={{ textAlign: 'center', mb: { xs: 3.5, sm: 4.5 } }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: { xs: '1.85rem', sm: '2.3rem', md: '2.6rem' },
                fontWeight: 700,
                color: TEXT_DARK,
                letterSpacing: '-0.01em',
                mb: 1,
              }}
            >
              Book a Service Slot
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                color: TEXT_MUTED,
              }}
            >
              Fill in the details and we&apos;ll confirm your appointment.
            </Typography>
          </Box>

          {/* Form Container */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              maxWidth: '820px',
              mx: 'auto',
              backgroundColor: CARD_BG,
              borderRadius: '20px',
              border: '1px solid',
              borderColor: BORDER_COLOR,
              p: { xs: 2.8, sm: 4.5, md: 5 },
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            }}
          >
            <Grid container spacing={{ xs: 2.5, sm: 3 }}>
              {/* Full Name */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography
                  component="label"
                  htmlFor="full-name-input"
                  sx={{
                    display: 'block',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: TEXT_DARK,
                    mb: 0.8,
                  }}
                >
                  Full Name *
                </Typography>
                <TextField
                  id="full-name-input"
                  fullWidth
                  required
                  placeholder="Your name"
                  value={formData.fullName}
                  onChange={handleInputChange('fullName')}
                  size="small"
                  slotProps={{
                    htmlInput: {
                      sx: {
                        fontSize: '14px',
                        py: 1.3,
                        px: 1.8,
                      },
                    },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      backgroundColor: '#ffffff',
                      '&:hover fieldset': {
                        borderColor: '#9ca3af',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: ACCENT_RED,
                      },
                    },
                  }}
                />
              </Grid>

              {/* Phone Number */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography
                  component="label"
                  htmlFor="phone-input"
                  sx={{
                    display: 'block',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: TEXT_DARK,
                    mb: 0.8,
                  }}
                >
                  Phone Number *
                </Typography>
                <TextField
                  id="phone-input"
                  fullWidth
                  required
                  placeholder="10-digit number"
                  value={formData.phone}
                  onChange={handleInputChange('phone')}
                  size="small"
                  slotProps={{
                    htmlInput: {
                      sx: {
                        fontSize: '14px',
                        py: 1.3,
                        px: 1.8,
                      },
                    },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      backgroundColor: '#ffffff',
                      '&:hover fieldset': {
                        borderColor: '#9ca3af',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: ACCENT_RED,
                      },
                    },
                  }}
                />
              </Grid>

              {/* Vehicle Reg. No. */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography
                  component="label"
                  htmlFor="vehicle-reg-input"
                  sx={{
                    display: 'block',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: TEXT_DARK,
                    mb: 0.8,
                  }}
                >
                  Vehicle Reg. No. *
                </Typography>
                <TextField
                  id="vehicle-reg-input"
                  fullWidth
                  required
                  placeholder="KA01AB1234"
                  value={formData.vehicleReg}
                  onChange={handleInputChange('vehicleReg')}
                  size="small"
                  slotProps={{
                    htmlInput: {
                      sx: {
                        fontSize: '14px',
                        py: 1.3,
                        px: 1.8,
                      },
                    },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      backgroundColor: '#ffffff',
                      '&:hover fieldset': {
                        borderColor: '#9ca3af',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: ACCENT_RED,
                      },
                    },
                  }}
                />
              </Grid>

              {/* Service Type */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography
                  component="label"
                  htmlFor="service-type-input"
                  sx={{
                    display: 'block',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: TEXT_DARK,
                    mb: 0.8,
                  }}
                >
                  Service Type *
                </Typography>
                <TextField
                  id="service-type-input"
                  select
                  fullWidth
                  value={formData.serviceType}
                  onChange={handleInputChange('serviceType')}
                  size="small"
                  slotProps={{
                    select: {
                      displayEmpty: true,
                      renderValue: (val) => (!val ? <span style={{ color: '#9ca3af' }}>Select service</span> : val),
                    },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      backgroundColor: '#ffffff',
                      '&:hover fieldset': {
                        borderColor: '#9ca3af',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: ACCENT_RED,
                      },
                    },
                  }}
                >
                  <MenuItem value="" disabled sx={{ fontSize: '14px', color: '#9ca3af' }}>
                    Select service
                  </MenuItem>
                  {serviceOptions.map((opt) => (
                    <MenuItem key={opt} value={opt} sx={{ fontSize: '14px' }}>
                      {opt}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* Preferred Date */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography
                  component="label"
                  htmlFor="preferred-date-input"
                  sx={{
                    display: 'block',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: TEXT_DARK,
                    mb: 0.8,
                  }}
                >
                  Preferred Date *
                </Typography>
                <TextField
                  id="preferred-date-input"
                  fullWidth
                  type="date"
                  value={formData.preferredDate}
                  onChange={handleInputChange('preferredDate')}
                  size="small"
                  slotProps={{
                    htmlInput: {
                      sx: {
                        fontSize: '14px',
                        py: 1.3,
                        px: 1.8,
                      },
                    },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      backgroundColor: '#ffffff',
                      '&:hover fieldset': {
                        borderColor: '#9ca3af',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: ACCENT_RED,
                      },
                    },
                  }}
                />
              </Grid>

              {/* Select Showroom */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography
                  component="label"
                  htmlFor="select-showroom-input"
                  sx={{
                    display: 'block',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: TEXT_DARK,
                    mb: 0.8,
                  }}
                >
                  Select Showroom *
                </Typography>
                <TextField
                  id="select-showroom-input"
                  select
                  fullWidth
                  value={formData.showroom}
                  onChange={handleInputChange('showroom')}
                  size="small"
                  slotProps={{
                    select: {
                      displayEmpty: true,
                      renderValue: (val) => (!val ? <span style={{ color: '#9ca3af' }}>Choose location</span> : val),
                    },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      backgroundColor: '#ffffff',
                      '&:hover fieldset': {
                        borderColor: '#9ca3af',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: ACCENT_RED,
                      },
                    },
                  }}
                >
                  <MenuItem value="" disabled sx={{ fontSize: '14px', color: '#9ca3af' }}>
                    Choose location
                  </MenuItem>
                  {showroomOptions.map((room) => (
                    <MenuItem key={room} value={room} sx={{ fontSize: '14px' }}>
                      {room}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>

            {/* Submit Button */}
            <Box sx={{ mt: 3.5, display: 'flex', justifyContent: 'flex-start' }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: ACCENT_RED,
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '14.5px',
                  textTransform: 'none',
                  borderRadius: '8px',
                  px: 4.5,
                  py: 1.3,
                  width: { xs: '100%', sm: 'auto' },
                  boxShadow: '0 4px 14px rgba(231, 33, 11, 0.35)',
                  '&:hover': {
                    backgroundColor: '#cf1904',
                    boxShadow: '0 6px 18px rgba(231, 33, 11, 0.45)',
                  },
                }}
              >
                Book Service Slot
              </Button>
            </Box>
          </Box>
        </Box>

        {/* 5. SERVICE LOCATIONS SECTION */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.4rem' },
              fontWeight: 700,
              color: TEXT_DARK,
              letterSpacing: '-0.01em',
              mb: { xs: 2.5, md: 3 },
            }}
          >
            Service Locations
          </Typography>

          <Grid container spacing={{ xs: 2, sm: 2.5 }}>
            {serviceLocations.map((loc) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={loc.name}>
                <Box
                  sx={{
                    backgroundColor: CARD_BG,
                    borderRadius: '12px',
                    border: '1px solid',
                    borderColor: BORDER_COLOR,
                    p: 2.5,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                    '&:hover': {
                      borderColor: '#cbd5e1',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '14.5px',
                      fontWeight: 700,
                      color: TEXT_DARK,
                      mb: 0.8,
                    }}
                  >
                    {loc.name}
                  </Typography>
                  <Box
                    component="a"
                    href={`tel:${loc.tel}`}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      color: TEXT_MUTED,
                      fontSize: '13px',
                      textDecoration: 'none',
                      transition: 'color 0.15s ease',
                      '&:hover': {
                        color: ACCENT_RED,
                      },
                    }}
                  >
                    <PhoneIconSvg />
                    <span>{loc.phone}</span>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

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

