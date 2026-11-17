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

const ACCENT_BLUE = '#1d68c9';
const ACCENT_BLUE_HOVER = '#1856a6';
const TEXT_DARK = '#111827';
const TEXT_MUTED = '#64748b';
const CARD_BG = '#ffffff';
const BORDER_COLOR = '#e5e7eb';

// Custom SVG Icons matching exact screenshot
function GraduationCapBlueSvg() {
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
      aria-hidden="true"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function ClockBlueSvg() {
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
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ShieldBlueSvg() {
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
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function AwardIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_BLUE}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function DualBrakeIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_BLUE}
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

function InstructorIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_BLUE}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CertificateIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_BLUE}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CalendarIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT_BLUE}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

const courses = [
  {
    id: 'basic',
    title: 'Basic Driving Course',
    recommended: true,
    duration: '15 Days',
    description:
      'For first-time drivers. Controls, road rules, parking, and city driving — both manual and automatic.',
    price: '₹4,500 onwards',
    icon: <GraduationCapBlueSvg />,
  },
  {
    id: 'refresher',
    title: 'Refresher Course',
    recommended: false,
    duration: '5 Days',
    description: 'Regain confidence, update road knowledge, or prepare for a new car type.',
    price: '₹2,000 onwards',
    icon: <ClockBlueSvg />,
  },
  {
    id: 'defensive',
    title: 'Defensive Driving',
    recommended: false,
    duration: '2 Days',
    description:
      'Advanced techniques — collision avoidance, night driving, highway safety, emergency response.',
    price: '₹3,000 onwards',
    icon: <ShieldBlueSvg />,
  },
];

const featurePills = [
  { label: 'RTO Certified', icon: <AwardIconSvg /> },
  { label: 'Dual Brake Control Cars', icon: <DualBrakeIconSvg /> },
  { label: 'Lady Instructors Available', icon: <InstructorIconSvg /> },
  { label: 'Certificate on Completion', icon: <CertificateIconSvg /> },
  { label: 'Flexible Timings', icon: <CalendarIconSvg /> },
];

const availableCenters = ['Mahadevpura', 'Yelahanka', 'Banashankari'];

const courseOptions = [
  'Basic Driving Course (15 Days)',
  'Refresher Course (5 Days)',
  'Defensive Driving (2 Days)',
];

export default function DrivingSchoolPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    course: '',
    center: '',
    message: '',
  });

  const [selectedCenter, setSelectedCenter] = useState('Mahadevpura');

  // Toast Snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSelectCourse = (courseTitle) => {
    setFormData((prev) => ({
      ...prev,
      course: courseTitle.includes('(') ? courseTitle : `${courseTitle} (${courses.find((c) => c.title === courseTitle)?.duration || ''})`,
    }));
    const enrollSec = document.getElementById('enroll-now');
    if (enrollSec) {
      enrollSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCenterClick = (center) => {
    setSelectedCenter(center);
    setFormData((prev) => ({ ...prev, center }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      setSnackbarMessage('Please fill in your Name and Phone Number');
      setSnackbarOpen(true);
      return;
    }

    setSnackbarMessage(
      `Thank you, ${formData.fullName}! Your enrollment request for ${formData.course || 'Maruti Driving School'} at ${formData.center || selectedCenter} has been received. Our team will get in touch within 24 hours.`
    );
    setSnackbarOpen(true);

    setFormData({
      fullName: '',
      phone: '',
      course: '',
      center: '',
      message: '',
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
          backgroundImage: 'url(/images/hero-driving-school.jpg)',
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
              backgroundColor: 'rgba(29, 78, 216, 0.85)',
              border: '1px solid rgba(96, 165, 250, 0.4)',
              color: '#ffffff',
              fontSize: '11.5px',
              fontWeight: 700,
              letterSpacing: '0.04em',
              mb: 2,
            }}
          >
            Certified Driving Training
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
            Maruti Driving School
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
            Learn to drive with confidence — RTO certified, factory-trained instructors.
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
        {/* 2. ABOUT MARUTI DRIVING SCHOOL SECTION */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
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
            About Maruti Driving School
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '0.95rem', sm: '1.025rem' },
              color: TEXT_MUTED,
              lineHeight: 1.7,
              maxWidth: 840,
            }}
          >
            Maruti Driving School (MDS) is one of India&apos;s largest certified driving training programmes with over 5
            lakh students trained nationally. Bimal Maruti operates MDS centres at select Bangalore locations — equipped
            with dual-brake simulator cars, certified instructors, and structured curricula.
          </Typography>
        </Box>

        {/* 3. OUR COURSES SECTION */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
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
            Our Courses
          </Typography>

          <Grid container spacing={{ xs: 2.5, sm: 3, md: 3.5 }}>
            {courses.map((course) => (
              <Grid size={{ xs: 12, md: 4 }} key={course.id}>
                <Box
                  onClick={() => handleSelectCourse(course.title)}
                  sx={{
                    backgroundColor: CARD_BG,
                    borderRadius: '16px',
                    border: course.recommended ? '1.5px solid #93c5fd' : '1px solid #e5e7eb',
                    p: { xs: 2.8, sm: 3.5 },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    boxShadow: course.recommended
                      ? '0 4px 18px rgba(29, 104, 201, 0.08)'
                      : '0 1px 3px rgba(0,0,0,0.02)',
                    transition: 'all 0.25s ease',
                    position: 'relative',
                    '&:hover': {
                      borderColor: '#60a5fa',
                      boxShadow: '0 8px 24px rgba(29, 104, 201, 0.12)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <Box>
                    {/* Recommended Pill on top for Basic Driving Course */}
                    {course.recommended && (
                      <Box sx={{ mb: 2 }}>
                        <Box
                          sx={{
                            display: 'inline-block',
                            px: 1.5,
                            py: 0.35,
                            borderRadius: '6px',
                            backgroundColor: '#eff6ff',
                            border: '1px solid #bfdbfe',
                            color: ACCENT_BLUE,
                            fontSize: '11.5px',
                            fontWeight: 700,
                          }}
                        >
                          Recommended
                        </Box>
                      </Box>
                    )}

                    {/* Icon */}
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        mb: 1.5,
                      }}
                    >
                      {course.icon}
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: '1.15rem', sm: '1.25rem' },
                        fontWeight: 700,
                        color: TEXT_DARK,
                        mb: 1.2,
                      }}
                    >
                      {course.title}
                    </Typography>

                    {/* Duration Tag */}
                    <Box sx={{ mb: 2 }}>
                      <Box
                        sx={{
                          display: 'inline-block',
                          px: 1.4,
                          py: 0.3,
                          borderRadius: '6px',
                          backgroundColor: '#f3f4f6',
                          color: '#4b5563',
                          fontSize: '12px',
                          fontWeight: 600,
                        }}
                      >
                        {course.duration}
                      </Box>
                    </Box>

                    {/* Description */}
                    <Typography
                      sx={{
                        fontSize: { xs: '0.88rem', sm: '0.94rem' },
                        color: TEXT_MUTED,
                        lineHeight: 1.55,
                        mb: 2.5,
                      }}
                    >
                      {course.description}
                    </Typography>
                  </Box>

                  {/* Price */}
                  <Typography
                    sx={{
                      fontSize: { xs: '1.05rem', sm: '1.15rem' },
                      fontWeight: 700,
                      color: ACCENT_BLUE,
                    }}
                  >
                    {course.price}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 4. FEATURE BADGES & AVAILABLE AT SECTION */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          {/* Feature Badges Row */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1.5,
              mb: 5,
              alignItems: 'center',
            }}
          >
            {featurePills.map((feat) => (
              <Box
                key={feat.label}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 1,
                  borderRadius: 9999,
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  color: TEXT_DARK,
                  fontSize: { xs: '12px', sm: '13px' },
                  fontWeight: 600,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                }}
              >
                {feat.icon}
                <span>{feat.label}</span>
              </Box>
            ))}
          </Box>

          {/* Available At */}
          <Box sx={{ mb: 2 }}>
            <Typography
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.2rem' },
                fontWeight: 700,
                color: TEXT_DARK,
                mb: 1.5,
              }}
            >
              Available At
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              {availableCenters.map((center) => {
                const isSelected = selectedCenter === center;
                return (
                  <Box
                    key={center}
                    onClick={() => handleCenterClick(center)}
                    sx={{
                      px: 2.2,
                      py: 0.9,
                      borderRadius: '8px',
                      backgroundColor: isSelected ? '#eff6ff' : '#ffffff',
                      border: isSelected ? `1.5px solid ${ACCENT_BLUE}` : '1px solid #e5e7eb',
                      color: isSelected ? ACCENT_BLUE : TEXT_DARK,
                      fontSize: '13.5px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      '&:hover': {
                        borderColor: ACCENT_BLUE,
                      },
                    }}
                  >
                    {center}
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>

        {/* 5. ENROLL NOW SECTION */}
        <Box
          id="enroll-now"
          sx={{
            mb: 4,
            scrollMarginTop: '100px',
          }}
        >
          {/* Section Heading */}
          <Box sx={{ mb: { xs: 3, sm: 3.5 } }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: { xs: '1.85rem', sm: '2.3rem', md: '2.6rem' },
                fontWeight: 700,
                color: TEXT_DARK,
                letterSpacing: '-0.01em',
                mb: 0.8,
              }}
            >
              Enroll Now
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.92rem', sm: '1rem' },
                color: TEXT_MUTED,
              }}
            >
              Fill in the form and our team will get in touch within 24 hours.
            </Typography>
          </Box>

          {/* Form Container Card */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              maxWidth: '820px',
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
                  onChange={(e) => setFormData((p) => ({ ...p, fullName: e.target.value }))}
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
                        borderColor: ACCENT_BLUE,
                      },
                    },
                  }}
                />
              </Grid>

              {/* Phone */}
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
                  Phone *
                </Typography>
                <TextField
                  id="phone-input"
                  fullWidth
                  required
                  placeholder="10-digit number"
                  value={formData.phone}
                  onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
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
                        borderColor: ACCENT_BLUE,
                      },
                    },
                  }}
                />
              </Grid>

              {/* Course */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography
                  component="label"
                  htmlFor="course-select-input"
                  sx={{
                    display: 'block',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: TEXT_DARK,
                    mb: 0.8,
                  }}
                >
                  Course *
                </Typography>
                <TextField
                  id="course-select-input"
                  select
                  fullWidth
                  value={formData.course}
                  onChange={(e) => setFormData((p) => ({ ...p, course: e.target.value }))}
                  size="small"
                  slotProps={{
                    select: {
                      displayEmpty: true,
                      renderValue: (val) => (!val ? <span style={{ color: '#9ca3af' }}>Select course</span> : val),
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
                        borderColor: ACCENT_BLUE,
                      },
                    },
                  }}
                >
                  <MenuItem value="" disabled sx={{ fontSize: '14px', color: '#9ca3af' }}>
                    Select course
                  </MenuItem>
                  {courseOptions.map((opt) => (
                    <MenuItem key={opt} value={opt} sx={{ fontSize: '14px' }}>
                      {opt}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* Preferred Center */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography
                  component="label"
                  htmlFor="center-select-input"
                  sx={{
                    display: 'block',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: TEXT_DARK,
                    mb: 0.8,
                  }}
                >
                  Preferred Center *
                </Typography>
                <TextField
                  id="center-select-input"
                  select
                  fullWidth
                  value={formData.center || selectedCenter}
                  onChange={(e) => {
                    setFormData((p) => ({ ...p, center: e.target.value }));
                    setSelectedCenter(e.target.value);
                  }}
                  size="small"
                  slotProps={{
                    select: {
                      displayEmpty: true,
                      renderValue: (val) => (!val ? <span style={{ color: '#9ca3af' }}>Select center</span> : val),
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
                        borderColor: ACCENT_BLUE,
                      },
                    },
                  }}
                >
                  <MenuItem value="" disabled sx={{ fontSize: '14px', color: '#9ca3af' }}>
                    Select center
                  </MenuItem>
                  {availableCenters.map((c) => (
                    <MenuItem key={c} value={c} sx={{ fontSize: '14px' }}>
                      {c}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* Message (Optional) */}
              <Grid size={{ xs: 12 }}>
                <Typography
                  component="label"
                  htmlFor="message-input"
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
                  id="message-input"
                  fullWidth
                  multiline
                  rows={3}
                  placeholder="Any specific schedule preference?"
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
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
                        borderColor: ACCENT_BLUE,
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>

            {/* Submit Button */}
            <Box sx={{ mt: 3.5, display: 'flex', justifyContent: 'flex-start' }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: ACCENT_BLUE,
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '14.5px',
                  textTransform: 'none',
                  borderRadius: '8px',
                  px: 4.5,
                  py: 1.3,
                  width: { xs: '100%', sm: 'auto' },
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: ACCENT_BLUE_HOVER,
                    boxShadow: '0 4px 14px rgba(29, 104, 201, 0.35)',
                  },
                }}
              >
                Enroll Now
              </Button>
            </Box>
          </Box>
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
