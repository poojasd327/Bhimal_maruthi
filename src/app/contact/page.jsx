'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
  Switch,
} from '@mui/material';

const ACCENT_RED = '#e7210b';
const ACCENT_RED_HOVER = '#cf1904';
const TEXT_DARK = '#111827';
const TEXT_MUTED = '#6b7280';
const BORDER_COLOR = '#e5e7eb';

// Custom SVG Icons matching exact screenshot
function PhoneBadgeIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_RED}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailBadgeIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_RED}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LocationBadgeIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_RED}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const carModels = [
  'Maruti Suzuki Swift',
  'Maruti Suzuki Brezza',
  'Maruti Suzuki Baleno',
  'Maruti Suzuki Fronx',
  'Maruti Suzuki Grand Vitara',
  'Maruti Suzuki e Vitara',
  'Maruti Suzuki Dzire',
  'Maruti Suzuki Ertiga',
  'Maruti Suzuki XL6',
  'Maruti Suzuki Invicto',
  'Maruti Suzuki Jimny',
  'Maruti Suzuki Wagon R',
  'Maruti Suzuki Alto K10',
  'Maruti Suzuki Celerio',
  'Maruti Suzuki S-Presso',
  'Maruti Suzuki Eeco',
  'Maruti Suzuki Super Carry',
];

const showrooms = [
  'Bimal Maruti Mahadevpura (Whitefield Road)',
  'Bimal Maruti Domlur (Koramangala Link Rd)',
  'Bimal Maruti Yelahanka (International Airport Rd)',
  'Bimal Maruti Varthur (Gunjur)',
  'Bimal Maruti Banashankari (100ft Ring Rd)',
  'Bimal Maruti Hoskote (Old Madras Rd)',
  'Bimal Maruti Devanahalli (Near Airport)',
  'Bimal Maruti Chikkaballapura',
  'Bimal Maruti Electronic City',
  'Bimal Nexa Mahadevpura',
  'Bimal Nexa Yelahanka',
];

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState('test-drive'); // 'test-drive' | 'get-quote'
  const [loading, setLoading] = useState(false);
  const [hasTradeIn, setHasTradeIn] = useState(false);
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    setMinDate(new Date().toISOString().split('T')[0]);
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    model: '',
    showroom: '',
    variant: '',
    tradeInCar: '',
    tradeInKm: '',
    message: '',
  });

  // Snackbar Toast
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const isTestDrive = activeTab === 'test-drive';
      const requestType = isTestDrive ? 'test drive appointment' : 'quotation request';
      const carText = formData.model ? ` for the ${formData.model}` : '';

      setSnackbar({
        open: true,
        message: `Thank you, ${formData.fullName || 'valued customer'}! Your ${requestType}${carText} has been received. Our relationship manager will reach out shortly.`,
        severity: 'success',
      });

      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        date: '',
        model: '',
        showroom: '',
        variant: '',
        tradeInCar: '',
        tradeInKm: '',
        message: '',
      });
      setHasTradeIn(false);
    }, 700);
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* 1. Hero Banner matching screenshot media_1794919100387_895ea8fd.jpg */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '260px', sm: '300px', md: '340px' },
          overflow: 'hidden',
          backgroundColor: '#0a0d14',
          backgroundImage: 'url(/images/hero-contact.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: { xs: 'center right', md: 'center center' },
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark Gradient Overlay for optimal contrast */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: {
              xs: 'linear-gradient(to right, rgba(10,13,20,0.92) 0%, rgba(10,13,20,0.78) 55%, rgba(10,13,20,0.35) 100%)',
              md: 'linear-gradient(to right, #0a0d14 0%, #0a0d14 36%, rgba(10,13,20,0.7) 60%, rgba(10,13,20,0.2) 100%)',
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
          {/* Hero Heading */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.8rem', md: '3.6rem' },
              color: '#ffffff',
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              mb: 1.2,
              textShadow: '0 2px 10px rgba(0,0,0,0.4)',
            }}
          >
            Book a Test Drive / Get a Quote
          </Typography>

          {/* Hero Subtitle */}
          <Typography
            sx={{
              fontSize: { xs: '0.92rem', sm: '1.05rem', md: '1.15rem' },
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '680px',
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            Experience the thrill or get the best price for your next Maruti Suzuki.
          </Typography>
        </Container>
      </Box>

      {/* 2. Main Form & Tab Container */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 4, sm: 5, md: 6 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {/* Tab Switcher: Test Drive | Get a Quote */}
        <Box
          sx={{
            maxWidth: { xs: '100%', sm: '580px' },
            mx: 'auto',
            mb: { xs: 3, md: 4 },
            p: 0.6,
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            display: 'flex',
            gap: 1,
          }}
        >
          {/* Tab 1: Test Drive */}
          <Box
            component="button"
            type="button"
            onClick={() => setActiveTab('test-drive')}
            sx={{
              flex: 1,
              py: 1.4,
              px: 2,
              fontSize: { xs: '14px', sm: '15px' },
              fontWeight: activeTab === 'test-drive' ? 700 : 500,
              color: activeTab === 'test-drive' ? TEXT_DARK : TEXT_MUTED,
              backgroundColor: '#ffffff',
              border: activeTab === 'test-drive' ? `2px solid ${ACCENT_RED}` : '2px solid transparent',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              textAlign: 'center',
              outline: 'none',
              '&:hover': {
                color: TEXT_DARK,
                borderColor: activeTab === 'test-drive' ? ACCENT_RED : '#d1d5db',
              },
            }}
          >
            Test Drive
          </Box>

          {/* Tab 2: Get a Quote */}
          <Box
            component="button"
            type="button"
            onClick={() => setActiveTab('get-quote')}
            sx={{
              flex: 1,
              py: 1.4,
              px: 2,
              fontSize: { xs: '14px', sm: '15px' },
              fontWeight: activeTab === 'get-quote' ? 700 : 500,
              color: activeTab === 'get-quote' ? TEXT_DARK : TEXT_MUTED,
              backgroundColor: '#ffffff',
              border: activeTab === 'get-quote' ? `2px solid ${ACCENT_RED}` : '2px solid transparent',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              textAlign: 'center',
              outline: 'none',
              '&:hover': {
                color: TEXT_DARK,
                borderColor: activeTab === 'get-quote' ? ACCENT_RED : '#d1d5db',
              },
            }}
          >
            Get a Quote
          </Box>
        </Box>

        {/* 3. Form Card Container matching screenshots */}
        <Box
          sx={{
            maxWidth: '820px',
            mx: 'auto',
            backgroundColor: '#ffffff',
            border: `1px solid ${BORDER_COLOR}`,
            borderRadius: { xs: '12px', sm: '16px' },
            p: { xs: 2.5, sm: 4, md: 5 },
            boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
          }}
        >
          {/* Form Heading */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: { xs: '1.5rem', sm: '1.9rem', md: '2.1rem' },
              color: TEXT_DARK,
              textAlign: 'center',
              letterSpacing: '-0.01em',
              mb: 0.6,
            }}
          >
            Book a Test Drive / Get a Quote
          </Typography>

          {/* Form Subtitle */}
          <Typography
            sx={{
              fontSize: { xs: '0.86rem', sm: '0.94rem' },
              color: TEXT_MUTED,
              textAlign: 'center',
              mb: { xs: 3.5, md: 4.5 },
            }}
          >
            {activeTab === 'test-drive'
              ? 'Experience the thrill behind the wheel. Schedule your visit today.'
              : 'Get the best price quotation for your new Maruti Suzuki.'}
          </Typography>

          {/* Form Body */}
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Grid container spacing={{ xs: 2.2, sm: 2.8 }}>
              {/* Row 1: Full Name & Phone Number */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography
                  component="label"
                  htmlFor="fullName"
                  sx={{
                    display: 'block',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: TEXT_DARK,
                    mb: 0.8,
                  }}
                >
                  Full Name <span style={{ color: ACCENT_RED }}>*</span>
                </Typography>
                <TextField
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  fullWidth
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  size="medium"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      backgroundColor: '#ffffff',
                      '& fieldset': { borderColor: BORDER_COLOR },
                      '&:hover fieldset': { borderColor: '#cbd5e1' },
                      '&.Mui-focused fieldset': { borderColor: ACCENT_RED },
                    },
                    '& .MuiInputBase-input': {
                      fontSize: '14px',
                      py: 1.5,
                      '&::placeholder': { color: '#9ca3af', opacity: 1 },
                    },
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography
                  component="label"
                  htmlFor="phone"
                  sx={{
                    display: 'block',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: TEXT_DARK,
                    mb: 0.8,
                  }}
                >
                  Phone Number <span style={{ color: ACCENT_RED }}>*</span>
                </Typography>
                <TextField
                  id="phone"
                  name="phone"
                  placeholder="9876543210"
                  type="tel"
                  fullWidth
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  size="medium"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      backgroundColor: '#ffffff',
                      '& fieldset': { borderColor: BORDER_COLOR },
                      '&:hover fieldset': { borderColor: '#cbd5e1' },
                      '&.Mui-focused fieldset': { borderColor: ACCENT_RED },
                    },
                    '& .MuiInputBase-input': {
                      fontSize: '14px',
                      py: 1.5,
                      '&::placeholder': { color: '#9ca3af', opacity: 1 },
                    },
                  }}
                />
              </Grid>

              {/* Row 2: Email Address (Optional) & Preferred Date (Test Drive) or Select Model (Quote) */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography
                  component="label"
                  htmlFor="email"
                  sx={{
                    display: 'block',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: TEXT_DARK,
                    mb: 0.8,
                  }}
                >
                  Email Address (Optional)
                </Typography>
                <TextField
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  type="email"
                  fullWidth
                  value={formData.email}
                  onChange={handleInputChange}
                  size="medium"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      backgroundColor: '#ffffff',
                      '& fieldset': { borderColor: BORDER_COLOR },
                      '&:hover fieldset': { borderColor: '#cbd5e1' },
                      '&.Mui-focused fieldset': { borderColor: ACCENT_RED },
                    },
                    '& .MuiInputBase-input': {
                      fontSize: '14px',
                      py: 1.5,
                      '&::placeholder': { color: '#9ca3af', opacity: 1 },
                    },
                  }}
                />
              </Grid>

              {activeTab === 'test-drive' ? (
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography
                    component="label"
                    htmlFor="date"
                    sx={{
                      display: 'block',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      color: TEXT_DARK,
                      mb: 0.8,
                    }}
                  >
                    Preferred Date <span style={{ color: ACCENT_RED }}>*</span>
                  </Typography>
                  <TextField
                    id="date"
                    name="date"
                    type="date"
                    fullWidth
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    size="medium"
                    slotProps={{
                      htmlInput: {
                        min: minDate,
                      },
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        backgroundColor: '#ffffff',
                        '& fieldset': { borderColor: BORDER_COLOR },
                        '&:hover fieldset': { borderColor: '#cbd5e1' },
                        '&.Mui-focused fieldset': { borderColor: ACCENT_RED },
                      },
                      '& .MuiInputBase-input': {
                        fontSize: '14px',
                        py: 1.5,
                        color: formData.date ? TEXT_DARK : '#9ca3af',
                      },
                    }}
                  />
                </Grid>
              ) : (
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography
                    component="label"
                    htmlFor="quote-model"
                    sx={{
                      display: 'block',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      color: TEXT_DARK,
                      mb: 0.8,
                    }}
                  >
                    Select Model <span style={{ color: ACCENT_RED }}>*</span>
                  </Typography>
                  <TextField
                    id="quote-model"
                    name="model"
                    select
                    fullWidth
                    required
                    value={formData.model}
                    onChange={handleInputChange}
                    size="medium"
                    slotProps={{
                      select: {
                        displayEmpty: true,
                      },
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        backgroundColor: '#ffffff',
                        '& fieldset': { borderColor: BORDER_COLOR },
                        '&:hover fieldset': { borderColor: '#cbd5e1' },
                        '&.Mui-focused fieldset': { borderColor: ACCENT_RED },
                      },
                      '& .MuiSelect-select': {
                        fontSize: '14px',
                        py: 1.5,
                        color: formData.model ? TEXT_DARK : '#9ca3af',
                      },
                    }}
                  >
                    <MenuItem value="" disabled>
                      Choose a car model
                    </MenuItem>
                    {carModels.map((m) => (
                      <MenuItem key={m} value={m}>
                        {m}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              )}

              {/* Row 3: Select Model & Preferred Showroom (Test Drive) OR Variant & Preferred Showroom (Quote) */}
              {activeTab === 'test-drive' ? (
                <>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography
                      component="label"
                      htmlFor="td-model"
                      sx={{
                        display: 'block',
                        fontSize: '13.5px',
                        fontWeight: 600,
                        color: TEXT_DARK,
                        mb: 0.8,
                      }}
                    >
                      Select Model <span style={{ color: ACCENT_RED }}>*</span>
                    </Typography>
                    <TextField
                      id="td-model"
                      name="model"
                      select
                      fullWidth
                      required
                      value={formData.model}
                      onChange={handleInputChange}
                      size="medium"
                      slotProps={{
                        select: {
                          displayEmpty: true,
                        },
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                          backgroundColor: '#ffffff',
                          '& fieldset': { borderColor: BORDER_COLOR },
                          '&:hover fieldset': { borderColor: '#cbd5e1' },
                          '&.Mui-focused fieldset': { borderColor: ACCENT_RED },
                        },
                        '& .MuiSelect-select': {
                          fontSize: '14px',
                          py: 1.5,
                          color: formData.model ? TEXT_DARK : '#9ca3af',
                        },
                      }}
                    >
                      <MenuItem value="" disabled>
                        Choose a car model
                      </MenuItem>
                      {carModels.map((m) => (
                        <MenuItem key={m} value={m}>
                          {m}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography
                      component="label"
                      htmlFor="td-showroom"
                      sx={{
                        display: 'block',
                        fontSize: '13.5px',
                        fontWeight: 600,
                        color: TEXT_DARK,
                        mb: 0.8,
                      }}
                    >
                      Preferred Showroom <span style={{ color: ACCENT_RED }}>*</span>
                    </Typography>
                    <TextField
                      id="td-showroom"
                      name="showroom"
                      select
                      fullWidth
                      required
                      value={formData.showroom}
                      onChange={handleInputChange}
                      size="medium"
                      slotProps={{
                        select: {
                          displayEmpty: true,
                        },
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                          backgroundColor: '#ffffff',
                          '& fieldset': { borderColor: BORDER_COLOR },
                          '&:hover fieldset': { borderColor: '#cbd5e1' },
                          '&.Mui-focused fieldset': { borderColor: ACCENT_RED },
                        },
                        '& .MuiSelect-select': {
                          fontSize: '14px',
                          py: 1.5,
                          color: formData.showroom ? TEXT_DARK : '#9ca3af',
                        },
                      }}
                    >
                      <MenuItem value="" disabled>
                        Choose a location
                      </MenuItem>
                      {showrooms.map((s) => (
                        <MenuItem key={s} value={s}>
                          {s}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography
                      component="label"
                      htmlFor="quote-variant"
                      sx={{
                        display: 'block',
                        fontSize: '13.5px',
                        fontWeight: 600,
                        color: TEXT_DARK,
                        mb: 0.8,
                      }}
                    >
                      Select Variant / Fuel Type
                    </Typography>
                    <TextField
                      id="quote-variant"
                      name="variant"
                      placeholder="e.g. ZXi+ / Petrol or CNG"
                      fullWidth
                      value={formData.variant}
                      onChange={handleInputChange}
                      size="medium"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                          backgroundColor: '#ffffff',
                          '& fieldset': { borderColor: BORDER_COLOR },
                          '&:hover fieldset': { borderColor: '#cbd5e1' },
                          '&.Mui-focused fieldset': { borderColor: ACCENT_RED },
                        },
                        '& .MuiInputBase-input': {
                          fontSize: '14px',
                          py: 1.5,
                          '&::placeholder': { color: '#9ca3af', opacity: 1 },
                        },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography
                      component="label"
                      htmlFor="quote-showroom"
                      sx={{
                        display: 'block',
                        fontSize: '13.5px',
                        fontWeight: 600,
                        color: TEXT_DARK,
                        mb: 0.8,
                      }}
                    >
                      Preferred Showroom <span style={{ color: ACCENT_RED }}>*</span>
                    </Typography>
                    <TextField
                      id="quote-showroom"
                      name="showroom"
                      select
                      fullWidth
                      required
                      value={formData.showroom}
                      onChange={handleInputChange}
                      size="medium"
                      slotProps={{
                        select: {
                          displayEmpty: true,
                        },
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                          backgroundColor: '#ffffff',
                          '& fieldset': { borderColor: BORDER_COLOR },
                          '&:hover fieldset': { borderColor: '#cbd5e1' },
                          '&.Mui-focused fieldset': { borderColor: ACCENT_RED },
                        },
                        '& .MuiSelect-select': {
                          fontSize: '14px',
                          py: 1.5,
                          color: formData.showroom ? TEXT_DARK : '#9ca3af',
                        },
                      }}
                    >
                      <MenuItem value="" disabled>
                        Choose a location
                      </MenuItem>
                      {showrooms.map((s) => (
                        <MenuItem key={s} value={s}>
                          {s}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  {/* Trade-in Vehicle Section matching screenshot media_1794919134881_8d28b0ab.jpg */}
                  <Grid size={{ xs: 12 }}>
                    <Box
                      sx={{
                        p: { xs: 2, sm: 2.5 },
                        backgroundColor: '#f9fafb',
                        border: `1px solid ${BORDER_COLOR}`,
                        borderRadius: '8px',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: 2,
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontSize: '14px',
                              fontWeight: 600,
                              color: TEXT_DARK,
                            }}
                          >
                            Trade-in Vehicle
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '12.5px',
                              color: TEXT_MUTED,
                            }}
                          >
                            Do you have an old car to exchange?
                          </Typography>
                        </Box>
                        <Switch
                          checked={hasTradeIn}
                          onChange={(e) => setHasTradeIn(e.target.checked)}
                          sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': {
                              color: ACCENT_RED,
                            },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                              backgroundColor: ACCENT_RED,
                            },
                          }}
                        />
                      </Box>

                      {hasTradeIn && (
                        <Grid container spacing={2} sx={{ mt: 1.5 }}>
                          <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                              name="tradeInCar"
                              placeholder="Current Car (e.g. 2018 Swift VXi)"
                              fullWidth
                              value={formData.tradeInCar}
                              onChange={handleInputChange}
                              size="small"
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: '6px',
                                  backgroundColor: '#ffffff',
                                  '& fieldset': { borderColor: BORDER_COLOR },
                                },
                              }}
                            />
                          </Grid>
                          <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                              name="tradeInKm"
                              placeholder="Approx. Odometer (e.g. 45,000 km)"
                              fullWidth
                              value={formData.tradeInKm}
                              onChange={handleInputChange}
                              size="small"
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: '6px',
                                  backgroundColor: '#ffffff',
                                  '& fieldset': { borderColor: BORDER_COLOR },
                                },
                              }}
                            />
                          </Grid>
                        </Grid>
                      )}
                    </Box>
                  </Grid>
                </>
              )}

              {/* Message (Optional) */}
              <Grid size={{ xs: 12 }}>
                <Typography
                  component="label"
                  htmlFor="message"
                  sx={{
                    display: 'block',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: TEXT_DARK,
                    mb: 0.8,
                  }}
                >
                  Message (Optional)
                </Typography>
                <TextField
                  id="message"
                  name="message"
                  placeholder={
                    activeTab === 'test-drive'
                      ? 'Any specific variant or color in mind?'
                      : 'Any specific questions, financing needs, or accessories required?'
                  }
                  fullWidth
                  multiline
                  minRows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      backgroundColor: '#ffffff',
                      '& fieldset': { borderColor: BORDER_COLOR },
                      '&:hover fieldset': { borderColor: '#cbd5e1' },
                      '&.Mui-focused fieldset': { borderColor: ACCENT_RED },
                    },
                    '& .MuiInputBase-input': {
                      fontSize: '14px',
                      '&::placeholder': { color: '#9ca3af', opacity: 1 },
                    },
                  }}
                />
              </Grid>

              {/* Submit Button */}
              <Grid size={{ xs: 12 }}>
                <Button
                  type="submit"
                  disabled={loading}
                  variant="contained"
                  sx={{
                    backgroundColor: ACCENT_RED,
                    '&:hover': {
                      backgroundColor: ACCENT_RED_HOVER,
                    },
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '14.5px',
                    textTransform: 'none',
                    borderRadius: '8px',
                    py: 1.3,
                    px: { xs: 3.5, sm: 4 },
                    boxShadow: 'none',
                  }}
                >
                  {loading ? (
                    <CircularProgress size={22} sx={{ color: '#ffffff' }} />
                  ) : activeTab === 'test-drive' ? (
                    'Request Test Drive'
                  ) : (
                    'Get My Quote'
                  )}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* 4. Three Contact Cards matching screenshot media_1794919123297_9705dcac.png */}
        <Box sx={{ maxWidth: '820px', mx: 'auto', mt: { xs: 4, sm: 5, md: 6 } }}>
          <Grid container spacing={3}>
            {/* Phone Card */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  height: '100%',
                  p: { xs: 3, md: 3.5 },
                  backgroundColor: '#ffffff',
                  border: `1px solid ${BORDER_COLOR}`,
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    boxShadow: '0 6px 16px rgba(0,0,0,0.05)',
                    borderColor: '#cbd5e1',
                  },
                }}
              >
                {/* Circular Coral Badge */}
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: '#fef2f2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 1.8,
                  }}
                >
                  <PhoneBadgeIconSvg />
                </Box>

                <Typography
                  sx={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: TEXT_DARK,
                    mb: 0.6,
                  }}
                >
                  Phone
                </Typography>

                <Box
                  component="a"
                  href="tel:08030693069"
                  sx={{
                    fontSize: '13.5px',
                    color: TEXT_MUTED,
                    textDecoration: 'none',
                    transition: 'color 0.15s ease',
                    '&:hover': {
                      color: ACCENT_RED,
                    },
                  }}
                >
                  080-3069 3069
                </Box>
              </Box>
            </Grid>

            {/* Email Card */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  height: '100%',
                  p: { xs: 3, md: 3.5 },
                  backgroundColor: '#ffffff',
                  border: `1px solid ${BORDER_COLOR}`,
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    boxShadow: '0 6px 16px rgba(0,0,0,0.05)',
                    borderColor: '#cbd5e1',
                  },
                }}
              >
                {/* Circular Coral Badge */}
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: '#fef2f2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 1.8,
                  }}
                >
                  <EmailBadgeIconSvg />
                </Box>

                <Typography
                  sx={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: TEXT_DARK,
                    mb: 0.6,
                  }}
                >
                  Email
                </Typography>

                <Box
                  component="a"
                  href="mailto:contactus@bimalmaruti.com"
                  sx={{
                    fontSize: '13.5px',
                    color: TEXT_MUTED,
                    textDecoration: 'none',
                    transition: 'color 0.15s ease',
                    wordBreak: 'break-all',
                    '&:hover': {
                      color: ACCENT_RED,
                    },
                  }}
                >
                  contactus@bimalmaruti.com
                </Box>
              </Box>
            </Grid>

            {/* Head Office Card */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  height: '100%',
                  p: { xs: 3, md: 3.5 },
                  backgroundColor: '#ffffff',
                  border: `1px solid ${BORDER_COLOR}`,
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    boxShadow: '0 6px 16px rgba(0,0,0,0.05)',
                    borderColor: '#cbd5e1',
                  },
                }}
              >
                {/* Circular Coral Badge */}
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: '#fef2f2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 1.8,
                  }}
                >
                  <LocationBadgeIconSvg />
                </Box>

                <Typography
                  sx={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: TEXT_DARK,
                    mb: 0.6,
                  }}
                >
                  Head Office
                </Typography>

                <Typography
                  sx={{
                    fontSize: '13.5px',
                    color: TEXT_MUTED,
                    lineHeight: 1.45,
                  }}
                >
                  Whitefield Road, Mahadevpura
                  <br />
                  Bangalore 560048
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Snackbar feedback notification */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%', borderRadius: '8px' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
