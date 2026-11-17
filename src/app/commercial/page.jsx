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
import VehicleModal from '@/components/VehicleModal';
import { getBrochureUrl } from '@/config/brochures';
import { siteConfig } from '@/config/siteConfig';

const ACCENT_RED = '#e7210b';
const TEXT_MUTED = '#64748b';
const TEXT_DARK = '#111827';
const CARD_BG = '#ffffff';
const IMG_CONTAINER_BG = '#f3f4f6';

function ZapIconRedSvg() {
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
      style={{ marginBottom: 8 }}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function TrendingUpRedSvg() {
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
      style={{ marginBottom: 8 }}
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function GlobeRedSvg() {
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
      style={{ marginBottom: 8 }}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function WrenchRedSvg() {
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
      style={{ marginBottom: 8 }}
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
    </svg>
  );
}

function PhoneIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  );
}

function TagIconSvg() {
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
      style={{ marginRight: 6 }}
      aria-hidden="true"
    >
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  );
}

// 7 Official Maruti Suzuki Commercial Vehicles matching screenshots
const commercialModels = [
  {
    id: 'super-carry',
    name: 'Maruti Suzuki Super Carry',
    category: "India's Best Mini Truck",
    price: 'From ₹5.34 Lakh',
    basePriceNum: 534000,
    image: '/images/commercial/super-carry.webp',
    description:
      'Engineered for urban and semi-urban businesses. The Super Carry combines a powerful 1.2L engine with a large cargo deck — perfect for FMCG, e-commerce, and local deliveries.',
    pills: ['740 kg Payload', '1.2L Petrol/CNG Engine', 'Modern Cab Design', 'Large Loading Area'],
  },
  {
    id: 'tour-s',
    name: 'Maruti Suzuki Tour S',
    category: 'Taxi Segment Sedan',
    price: 'From ₹6.23 Lakh',
    basePriceNum: 623000,
    image: '/images/commercial/tour-s.webp',
    description:
      "Purpose-built for taxi aggregators and fleet operators. The Tour S is India's most deployed commercial sedan — reliable, efficient, and CNG-ready.",
    pills: ['Based on Dzire', 'Approved for Commercial Use', 'Fleet Pricing', 'High Resale Value'],
  },
  {
    id: 'tour-h1',
    name: 'Maruti Suzuki Tour H1',
    category: 'Fleet Segment Hatchback',
    price: 'From ₹3.99 Lakh',
    basePriceNum: 399000,
    image: '/images/commercial/tour-h1.webp',
    description:
      'The most affordable way to start a fleet. Based on the Alto K10, the Tour H1 offers unbeatable mileage and low maintenance.',
    pills: ['Based on Alto K10', 'Entry-Level Fleet', 'Low Running Cost', 'CNG Option'],
  },
  {
    id: 'tour-h3',
    name: 'Maruti Suzuki Tour H3',
    category: 'Fleet Segment Hatchback',
    price: 'From ₹5.80 Lakh',
    basePriceNum: 580000,
    image: '/images/commercial/tour-h3.webp',
    description:
      'Built on the trusted Wagon R platform. The Tour H3 offers a spacious cabin, easy ingress/egress, and excellent CNG economy for fleet operators.',
    pills: ['Based on Wagon R', 'Tallboy Design', 'Spacious Cabin', 'CNG Option'],
  },
  {
    id: 'tour-m',
    name: 'Maruti Suzuki Tour M',
    category: 'Commercial MPV',
    price: 'From ₹8.50 Lakh',
    basePriceNum: 850000,
    image: '/images/commercial/tour-m.webp',
    description:
      'The ideal commercial MPV for shuttle services, tours, and corporate transport. Based on the Ertiga, the Tour M seats 7 in comfort.',
    pills: ['Based on Ertiga', '7-Seater', 'Fleet & Shuttle', 'CNG Option'],
  },
  {
    id: 'tour-v',
    name: 'Maruti Suzuki Tour V',
    category: 'Commercial Passenger Van',
    price: 'From ₹5.50 Lakh',
    basePriceNum: 550000,
    image: '/images/commercial/tour-v.webp',
    description:
      'The commercial variant of the versatile Eeco. The Tour V is the go-to choice for intra-city transport, school vans, and utility fleets.',
    pills: ['Based on Eeco', '5-Seater Layout', 'CNG Option', 'Utility Focus'],
  },
  {
    id: 'eeco-cargo',
    name: 'Maruti Suzuki Eeco Cargo',
    category: 'Cargo Delivery Van',
    price: 'From ₹5.50 Lakh',
    basePriceNum: 550000,
    image: '/images/commercial/eeco-cargo.webp',
    description:
      'Purpose-built for last-mile delivery and small cargo transport. The Eeco Cargo offers a spacious loading bay with a 600 kg payload capacity, perfect for e-commerce and courier fleets.',
    pills: ['Payload 600 kg', '2-Seater Layout', 'CNG Option', 'Compact Delivery'],
  },
];

export default function CommercialPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Dialog State
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogAction, setDialogAction] = useState('Test Drive');
  const [activeCar, setActiveCar] = useState(commercialModels[0]);

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
      `Thank you! Your ${dialogAction.toLowerCase()} request for ${activeCar.name} has been received. Our Bimal Maruti commercial fleet specialist will contact you shortly.`
    );
    setSnackbarOpen(true);
  };

  const calculateEMI = () => {
    const P = activeCar.basePriceNum * 0.85;
    const r = interestRate / 12 / 100;
    const n = loanTenure * 12;
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi).toLocaleString('en-IN');
  };

  return (
    <Box sx={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* 1. Commercial Hero Banner matching Screenshots */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '380px', sm: '420px', md: '480px' },
          overflow: 'hidden',
          backgroundColor: '#0a0d14',
          backgroundImage: 'url(/images/commercial/super-carry.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark Gradient Overlay for optimal readability */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: {
              xs: 'linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.35) 100%)',
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
            Commercial Vehicles
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
            Power Your Business.
            <br />
            Maruti Commercial.
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
            Mini trucks to fleet taxis — trusted by over 10 lakh businesses across India.
          </Typography>
        </Container>
      </Box>

      {/* 2. Main Content Container */}
      <Box sx={{ py: { xs: 5, md: 8 }, backgroundColor: '#ffffff' }}>
        <Container
          maxWidth={false}
          sx={{
            maxWidth: '1440px',
            px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
          }}
        >
          {/* Section Header */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: { xs: '1.5rem', sm: '2.25rem', md: '2.6rem' },
              color: TEXT_DARK,
              lineHeight: 1.2,
              mb: { xs: 3.5, md: 5 },
            }}
          >
            Our Commercial Range
          </Typography>

          {/* Horizontal Vehicle Cards List matching screenshots */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 }, mb: { xs: 8, md: 10 } }}>
            {commercialModels.map((car) => {
              const isHovered = hoveredCard === car.id;

              return (
                <Box
                  key={car.id}
                  onMouseEnter={() => setHoveredCard(car.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    backgroundColor: CARD_BG,
                    borderRadius: 4, // rounded-2xl
                    overflow: 'hidden',
                    border: '1px solid',
                    borderColor: isHovered ? 'rgba(231, 33, 11, 0.45)' : '#e5e7eb',
                    boxShadow: isHovered
                      ? '0 10px 28px rgba(231, 33, 11, 0.08), 0 4px 12px rgba(0,0,0,0.04)'
                      : '0 2px 8px rgba(0,0,0,0.02)',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {/* Left: Image Container */}
                  <Box
                    sx={{
                      width: { xs: '100%', md: '360px', lg: '380px' },
                      height: { xs: '230px', md: 'auto' },
                      minHeight: { md: '250px' },
                      backgroundColor: IMG_CONTAINER_BG,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: 0,
                      flexShrink: 0,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
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

                  {/* Right: Vehicle Details */}
                  <Box
                    sx={{
                      flexGrow: 1,
                      p: { xs: 2.5, sm: 3, md: 3.5 },
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Top Row: Category Pill & Price */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 2,
                        mb: 1,
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: '#f3f4f6',
                          border: '1px solid #e5e7eb',
                          px: 1.5,
                          py: 0.4,
                          borderRadius: 9999,
                          fontSize: '11px',
                          fontWeight: 600,
                          color: '#374151',
                        }}
                      >
                        {car.category}
                      </Box>

                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: '1.15rem',
                          color: ACCENT_RED,
                        }}
                      >
                        {car.price}
                      </Typography>
                    </Box>

                    {/* Car Name */}
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: "'Rajdhani', sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: '1.4rem', sm: '1.55rem' },
                        color: TEXT_DARK,
                        mb: 1,
                        lineHeight: 1.2,
                      }}
                    >
                      {car.name}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        fontSize: '13.5px',
                        color: TEXT_MUTED,
                        lineHeight: 1.55,
                        mb: 2,
                      }}
                    >
                      {car.description}
                    </Typography>

                    {/* Specification / Feature Pills */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        mb: 2.5,
                      }}
                    >
                      {car.pills.map((pill, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            backgroundColor: '#f1f5f9',
                            border: '1px solid #e2e8f0',
                            px: 1.5,
                            py: 0.4,
                            borderRadius: 9999,
                            fontSize: '11px',
                            fontWeight: 500,
                            color: '#475569',
                          }}
                        >
                          {pill}
                        </Box>
                      ))}
                    </Box>

                    {/* Bottom Action Row: Links + Phone Icon */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 2,
                        mt: 'auto',
                        pt: 1.8,
                        borderTop: '1px solid #f1f5f9',
                      }}
                    >
                      {/* Action Links */}
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

                      {/* Phone icon button on right */}
                      <Box
                        component="a"
                        href="tel:08030693069"
                        aria-label={`Call about ${car.name}`}
                        sx={{
                          width: 36,
                          height: 36,
                          borderRadius: '50%',
                          border: '1px solid #e2e8f0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#64748b',
                          textDecoration: 'none',
                          flexShrink: 0,
                          transition: 'all 0.15s ease',
                          '&:hover': {
                            color: ACCENT_RED,
                            borderColor: ACCENT_RED,
                            backgroundColor: 'rgba(231, 33, 11, 0.05)',
                          },
                        }}
                      >
                        <PhoneIconSvg />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>

          {/* 3. Why Choose Maruti Commercial? (Screenshot 5) */}
          <Box sx={{ mb: { xs: 8, md: 10 } }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                fontSize: { xs: '1.75rem', sm: '2.25rem' },
                color: TEXT_DARK,
                lineHeight: 1.2,
                mb: 4,
              }}
            >
              Why Choose Maruti Commercial?
            </Typography>

            <Grid container spacing={{ xs: 4, sm: 3, md: 4 }}>
              {/* Feature 1 */}
              <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <ZapIconRedSvg />
                  <Typography sx={{ fontWeight: 700, fontSize: '0.98rem', color: TEXT_DARK, mb: 0.6 }}>
                    Low Running Cost
                  </Typography>
                  <Typography sx={{ fontSize: '13px', color: TEXT_MUTED, lineHeight: 1.5 }}>
                    CNG variants available across models for significantly lower fuel expenditure.
                  </Typography>
                </Box>
              </Grid>

              {/* Feature 2 */}
              <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <TrendingUpRedSvg />
                  <Typography sx={{ fontWeight: 700, fontSize: '0.98rem', color: TEXT_DARK, mb: 0.6 }}>
                    High Resale Value
                  </Typography>
                  <Typography sx={{ fontSize: '13px', color: TEXT_MUTED, lineHeight: 1.5 }}>
                    Maruti commercial vehicles retain their value better than any competitor.
                  </Typography>
                </Box>
              </Grid>

              {/* Feature 3 */}
              <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <GlobeRedSvg />
                  <Typography sx={{ fontWeight: 700, fontSize: '0.98rem', color: TEXT_DARK, mb: 0.6 }}>
                    Wide Service Network
                  </Typography>
                  <Typography sx={{ fontSize: '13px', color: TEXT_MUTED, lineHeight: 1.5 }}>
                    4,000+ Maruti service centres nationwide — never far from a certified workshop.
                  </Typography>
                </Box>
              </Grid>

              {/* Feature 4 */}
              <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <WrenchRedSvg />
                  <Typography sx={{ fontWeight: 700, fontSize: '0.98rem', color: TEXT_DARK, mb: 0.6 }}>
                    Extended Warranty
                  </Typography>
                  <Typography sx={{ fontSize: '13px', color: TEXT_MUTED, lineHeight: 1.5 }}>
                    Fleet customers get dedicated warranty packages and priority service slots.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* 4. Fleet Purchase Programme Card (Screenshot 5) */}
          <Box
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              border: '1px solid #e5e7eb',
              backgroundColor: '#ffffff',
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', lg: 'center' },
              gap: 3,
              mb: 6,
            }}
          >
            <Box sx={{ maxWidth: 700 }}>
              <Typography
                sx={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.3rem',
                  color: TEXT_DARK,
                  mb: 0.8,
                }}
              >
                Fleet Purchase Programme
              </Typography>
              <Typography sx={{ fontSize: '13.5px', color: TEXT_MUTED, lineHeight: 1.55 }}>
                Buying 3 or more vehicles? Ask about our exclusive Fleet Purchase Programme — special pricing,
                extended warranty, dedicated account manager, and priority service slots.
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                flexWrap: 'wrap',
                width: { xs: '100%', sm: 'auto' },
                alignSelf: { xs: 'stretch', sm: 'flex-start', lg: 'center' },
              }}
            >
              <Button
                component={Link}
                href="/offers"
                variant="contained"
                sx={{
                  backgroundColor: ACCENT_RED,
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  textTransform: 'none',
                  px: 2.8,
                  py: 1,
                  borderRadius: '6px',
                  boxShadow: 'none',
                  width: { xs: '100%', sm: 'auto' },
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    backgroundColor: '#dc2626',
                    boxShadow: '0 4px 12px rgba(231, 33, 11, 0.25)',
                  },
                }}
              >
                <TagIconSvg />
                View Commercial Offers
              </Button>

              <Button
                variant="outlined"
                component="a"
                href={siteConfig.phoneTel || 'tel:08030693069'}
                sx={{
                  borderColor: '#d1d5db',
                  color: '#374151',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  textTransform: 'none',
                  textDecoration: 'none',
                  px: 2.8,
                  py: 1,
                  borderRadius: '6px',
                  width: { xs: '100%', sm: 'auto' },
                  justifyContent: 'center',
                  '&:hover': {
                    borderColor: '#9ca3af',
                    backgroundColor: '#f9fafb',
                  },
                }}
              >
                Book a Demo
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Interactive Modal matching Screenshots (Book Test Drive / Get Price / EMI Calculator) */}
      <VehicleModal
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        action={dialogAction}
        vehicleName={activeCar?.name || 'Maruti Suzuki Super Carry'}
        onSuccess={(data) => {
          const type = data.action === 'Book Test Drive' ? 'Commercial Demo/Test Drive request' : 'Commercial Price quote request';
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

