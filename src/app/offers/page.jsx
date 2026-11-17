'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

const ACCENT_RED = '#e7210b';
const TEXT_MUTED = '#64748b';
const TEXT_DARK = '#111827';
const CARD_BG = '#ffffff';

function WhatsAppIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ marginRight: 6 }}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function CalendarIconSvg() {
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
      style={{ marginRight: 5 }}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIconSvg() {
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
      style={{ marginRight: 5 }}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIconSvg() {
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
      style={{ marginRight: 6 }}
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
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ marginRight: 6 }}
    >
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  );
}

// 18 Model-Wise Offers matching Screenshots 2 to 7
const offersData = [
  {
    id: 'baleno',
    channel: 'Nexa',
    name: 'Maruti Suzuki Baleno',
    category: 'Premium Hatchback',
    image: '/images/nexa/baleno-no-bg.png',
    note: 'No October discount listed — contact us for current availability',
  },
  {
    id: 'fronx',
    channel: 'Nexa',
    name: 'Maruti Suzuki Fronx',
    category: 'Compact SUV-Coupe',
    image: '/images/nexa/fronx-no-bg.png',
    note: 'Sporty coupe-SUV with October exchange benefits',
    cashDiscount: 'Up to ₹5,000',
    exchangeBonus: 'Up to ₹10,000',
  },
  {
    id: 'grand-vitara',
    channel: 'Nexa',
    name: 'Maruti Suzuki Grand Vitara',
    category: 'Mid-Size Hybrid SUV',
    image: '/images/nexa/grand-vitara-no-bg.png',
    note: 'Hybrid power with October benefits',
    cashDiscount: 'Up to ₹75,000',
    exchangeBonus: '₹20,000 – ₹1,00,000',
    corporateBenefit: 'Up to ₹20,000',
  },
  {
    id: 'xl6',
    channel: 'Nexa',
    name: 'Maruti Suzuki XL6',
    category: 'Premium 6-Seater MPV',
    image: '/images/nexa/xl6-no-bg.png',
    note: 'Captain seats with captain-worthy October deals',
    cashDiscount: '₹15,000 – ₹20,000',
    exchangeBonus: '₹20,000',
  },
  {
    id: 'jimny',
    channel: 'Nexa',
    name: 'Maruti Suzuki Jimny',
    category: '4×4 Off-Road SUV',
    image: '/images/nexa/jimny-no-bg.png',
    note: 'Adventure-ready with direct October cash savings',
    cashDiscount: '₹40,000',
  },
  {
    id: 'invicto',
    channel: 'Nexa',
    name: 'Maruti Suzuki Invicto',
    category: 'Luxury 7/8 Seater Hybrid MPV',
    image: '/images/nexa/invicto-no-bg.png',
    note: 'Luxury MPV with October exchange benefits',
    exchangeBonus: '₹30,000 – ₹80,000',
    corporateBenefit: 'Up to ₹20,000',
  },
  {
    id: 'e-vitara',
    channel: 'Nexa',
    name: 'Maruti Suzuki e Vitara',
    category: 'Born-Electric SUV Flagship',
    image: '/images/nexa/e-vitara-no-bg.png',
    note: 'Go electric — EV with special October pricing',
    exchangeBonus: '₹30,000',
  },
  {
    id: 'alto-k10',
    channel: 'Arena',
    name: 'Maruti Suzuki Alto K10',
    category: 'Entry-Level Hatchback',
    image: '/images/arena/alto-k10.webp',
    note: "India's most affordable car with October savings",
    cashDiscount: '₹10,000 – ₹30,000',
    exchangeBonus: '₹10,000 – ₹25,000',
    corporateBenefit: '₹2,500',
  },
  {
    id: 's-presso',
    channel: 'Arena',
    name: 'Maruti Suzuki S-Presso',
    category: 'Micro-SUV Hatchback',
    image: '/images/arena/s-presso.webp',
    note: 'Stand tall with micro-SUV styling and October savings',
    cashDiscount: 'Up to ₹10,000',
    exchangeBonus: '₹10,000 – ₹25,000',
    corporateBenefit: '₹2,500',
  },
  {
    id: 'wagon-r',
    channel: 'Arena',
    name: 'Maruti Suzuki Wagon R',
    category: 'Tallboy Hatchback',
    image: '/images/arena/wagon-r.webp',
    note: "India's best-seller with unbeatable October value",
    cashDiscount: '₹25,000 – ₹30,000',
    exchangeBonus: '₹10,000 – ₹25,000',
    corporateBenefit: '₹2,500',
  },
  {
    id: 'celerio',
    channel: 'Arena',
    name: 'Maruti Suzuki Celerio',
    category: 'Compact Hatchback',
    image: '/images/arena/celerio.webp',
    note: 'Smart city car with AGS at amazing October prices',
    cashDiscount: '₹20,000 – ₹40,000',
    exchangeBonus: '₹10,000 – ₹25,000',
    corporateBenefit: '₹2,500',
  },
  {
    id: 'swift',
    channel: 'Arena',
    name: 'Maruti Suzuki Swift',
    category: 'Premium Hatchback',
    image: '/images/arena/swift.webp',
    note: 'The iconic Swift with exciting October offers',
    cashDiscount: 'Up to ₹10,000',
    exchangeBonus: '₹10,000 – ₹25,000',
    corporateBenefit: '₹5,000',
  },
  {
    id: 'brezza',
    channel: 'Arena',
    name: 'Maruti Suzuki Brezza',
    category: 'Compact SUV',
    image: '/images/arena/brezza.webp',
    note: 'No October discount listed — contact us for current availability',
  },
  {
    id: 'ertiga',
    channel: 'Arena',
    name: 'Maruti Suzuki Ertiga',
    category: '7-Seater Family MPV',
    image: '/images/arena/ertiga.webp',
    note: 'No October discount listed — contact us for current availability',
  },
  {
    id: 'eeco',
    channel: 'Arena',
    name: 'Maruti Suzuki Eeco',
    category: 'Multi-Utility Passenger Van',
    image: '/images/arena/eeco.webp',
    note: 'The most practical van with October benefits',
    cashDiscount: 'Up to ₹10,000',
    exchangeBonus: '₹10,000 – ₹25,000',
    corporateBenefit: '₹2,500',
  },
  {
    id: 'tour-s',
    channel: 'Commercial',
    name: 'Maruti Suzuki Tour S',
    category: 'Taxi Segment Sedan',
    image: '/images/commercial/tour-s.webp',
    note: 'Fleet-ready sedan with October exchange benefits',
    exchangeBonus: '₹10,000 – ₹25,000',
  },
  {
    id: 'victoris',
    channel: 'Arena',
    name: 'Maruti Suzuki Victoris',
    category: 'Premium Mid-Size Crossover',
    image: '/images/arena/victoris.webp',
    note: 'Premium crossover with October exchange benefits',
    cashDiscount: 'Up to ₹40,000',
    exchangeBonus: '₹15,000 – ₹1,25,000',
    corporateBenefit: 'Up to ₹15,000',
  },
  {
    id: 'super-carry',
    channel: 'Commercial',
    name: 'Maruti Suzuki Super Carry',
    category: "India's Best Mini Truck",
    image: '/images/commercial/super-carry.webp',
    note: 'Powerful mini truck with October commercial benefits',
    cashDiscount: '₹35,000',
    exchangeBonus: '₹10,000 – ₹34,000',
  },
];

// 7 FAQs matching Screenshot 9
const faqs = [
  {
    q: 'What are the latest Maruti offers in Bangalore for 2026?',
    a: 'Bimal Maruti brings exclusive October 2026 offers: cash discounts up to ₹75,000, exchange bonuses up to ₹1,25,000, and corporate benefits up to ₹20,000. Valid till 31 October 2026 at Bengaluru showrooms. Offers and prices applicable at the time of delivery will be applicable.',
  },
  {
    q: 'How does the exchange bonus work on Maruti cars?',
    a: 'You can bring in any old car of any make or model to any Bimal Maruti showroom. Our certified evaluators inspect the vehicle, determine the fair market value, and add the promotional exchange bonus (up to ₹1,25,000 depending on the model chosen) directly towards your new car down payment.',
  },
  {
    q: 'Are there special finance offers available for Maruti cars in Karnataka?',
    a: 'Yes! Bimal Maruti partners with leading banks (SBI, HDFC, ICICI, Axis, Bank of Baroda) to provide special interest rates starting at 8.5% p.a., up to 100% on-road funding, flexible repayment tenures up to 7 years, and zero pre-payment penalties on select loan schemes.',
  },
  {
    q: 'Do Kerala customers get the same offers as Bangalore customers?',
    a: 'Yes, Kerala customers at our Kozhikode, Kannur, Malappuram, and Wayanad branches enjoy matching consumer offers, corporate discounts, and state-specific festival bonanzas along with low-down-payment schemes.',
  },
  {
    q: 'Can I combine corporate discounts with other offers?',
    a: 'Yes! In most cases, corporate benefits (for eligible MNCs, IT employees, government officials, healthcare workers, and educators) can be clubbed with both cash discounts and exchange bonuses for maximum overall savings.',
  },
  {
    q: 'When do these Maruti offers expire?',
    a: 'Current offers are valid through 31 October 2026 or until stocks last at participating Bimal Maruti outlets. Early bookings are recommended to lock in current discount structures and price guarantees.',
  },
  {
    q: 'Which Maruti models have the best offers right now?',
    a: 'The Maruti Suzuki Victoris and Grand Vitara currently offer the highest total benefits up to ₹1,25,000 and ₹1,00,000 respectively, followed by high-value savings on Wagon R, Celerio, Jimny, and Super Carry commercial vehicles.',
  },
];

export default function OffersPage() {
  const [selectedChannel, setSelectedChannel] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  // Region state
  const [currentRegion, setCurrentRegion] = useState('Karnataka');
  const [regionModalOpen, setRegionModalOpen] = useState(false);

  // Lead modal state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(offersData[0]);

  // Toast feedback
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');

  const filteredOffers = useMemo(() => {
    if (selectedChannel === 'All') return offersData;
    return offersData.filter((item) => item.channel.toLowerCase() === selectedChannel.toLowerCase());
  }, [selectedChannel]);

  const handleWhatsAppClick = (car) => {
    const text = encodeURIComponent(
      `Hi Bimal Maruti, I am interested in the latest October offers for ${car.name}. Please share discount details and on-road quote.`
    );
    window.open(`https://wa.me/918030693069?text=${text}`, '_blank');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setDialogOpen(false);
    setSnackbarMsg(
      `Thank you! Your offer inquiry for ${selectedCar.name} has been received. Our sales advisor will share the maximum discount quotation with you shortly.`
    );
    setSnackbarOpen(true);
  };

  return (
    <Box sx={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* 1. Hero Section matching Screenshot 1 */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '380px', sm: '420px', md: '480px' },
          overflow: 'hidden',
          backgroundColor: '#0a0d14',
          backgroundImage: 'url(/images/hero-nexa.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: {
              xs: 'linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 100%)',
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
          {/* Validity Badge */}
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
            Valid till 31 October 2026
          </Box>

          {/* Heading */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: { xs: '2.2rem', sm: '3.2rem', md: '4.2rem' },
              color: '#ffffff',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              mb: 1.5,
              textShadow: '0 2px 10px rgba(0,0,0,0.4)',
            }}
          >
            Maruti Suzuki Offers in Bengaluru, Karnataka
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontSize: { xs: '0.95rem', sm: '1.1rem' },
              color: 'rgba(255, 255, 255, 0.88)',
              maxWidth: 680,
              lineHeight: 1.5,
              mb: 2.5,
              textShadow: '0 1px 4px rgba(0,0,0,0.5)',
            }}
          >
            Explore the best Maruti offers in Bengaluru, Karnataka — cash discounts, exchange bonus, finance schemes,
            and corporate benefits on all Maruti Suzuki models.
          </Typography>

          {/* Period & Updated Info */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: { xs: 1.5, sm: 3 },
              color: 'rgba(255, 255, 255, 0.75)',
              fontSize: '12px',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CalendarIconSvg />
              Offer period: 01 October – 31 October 2026
            </Box>
            <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
              •
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ClockIconSvg />
              Updated: 09 October 2026
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 2. Location Indicator & Intro Paragraphs (Screenshot 1) */}
      <Box sx={{ pt: { xs: 4, md: 5 }, pb: 2, backgroundColor: '#ffffff' }}>
        <Container
          maxWidth={false}
          sx={{
            maxWidth: '1440px',
            px: { xs: 3, md: 6, lg: 8 },
          }}
        >
          {/* Location Bar */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#fef2f2',
              border: '1px solid #fecaca',
              color: '#dc2626',
              px: 2,
              py: 0.6,
              borderRadius: 9999,
              fontSize: '13px',
              fontWeight: 600,
              mb: 4,
            }}
          >
            <MapPinIconSvg />
            Showing offers for: {currentRegion}
            <Box
              component="button"
              onClick={() => setRegionModalOpen(true)}
              sx={{
                ml: 1.5,
                background: 'none',
                border: 'none',
                color: '#374151',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '12.5px',
                p: 0,
                '&:hover': { color: ACCENT_RED },
              }}
            >
              Change
            </Box>
          </Box>

          {/* Intro Text Block */}
          <Box sx={{ maxWidth: 950, color: '#374151', fontSize: '14.5px', lineHeight: 1.7, spaceY: 2 }}>
            <Typography sx={{ fontSize: 'inherit', mb: 2 }}>
              Bimal Maruti brings you the most exciting{' '}
              <strong>Maruti offers in Bengaluru, Karnataka</strong>. Whether you are looking for a compact
              hatchback like the Swift or a premium SUV like the Grand Vitara, our latest{' '}
              <strong>Maruti Suzuki discounts</strong> make owning your dream car more affordable than ever.
            </Typography>
            <Typography sx={{ fontSize: 'inherit', mb: 2 }}>
              Our current promotions include generous <strong>exchange bonus</strong> offers of up to ₹1,25,000,
              attractive <strong>cash discounts</strong> of up to ₹75,000, and exclusive{' '}
              <strong>corporate benefits</strong> of up to ₹20,000 for eligible buyers.
            </Typography>
            <Typography sx={{ fontSize: 'inherit', mb: 4 }}>
              Every offer is backed by Maruti Suzuki&apos;s trusted quality and Bimal Maruti&apos;s 42+ years of
              customer service excellence.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* 3. "What You Can Save Right Now" 4 Cards (Screenshot 2) */}
      <Box sx={{ py: 4, backgroundColor: '#ffffff' }}>
        <Container
          maxWidth={false}
          sx={{
            maxWidth: '1440px',
            px: { xs: 3, md: 6, lg: 8 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: { xs: '1.75rem', sm: '2.25rem' },
              color: TEXT_DARK,
              lineHeight: 1.2,
              mb: 3.5,
            }}
          >
            What You Can Save Right Now
          </Typography>

          <Grid container spacing={{ xs: 2.5, md: 3 }}>
            {/* 1. Exchange Bonus */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: '1px solid #e5e7eb',
                  backgroundColor: '#ffffff',
                  height: '100%',
                }}
              >
                <Typography sx={{ fontSize: '1.75rem', color: ACCENT_RED, fontWeight: 800, mb: 1.5, lineHeight: 1 }}>
                  %
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: TEXT_DARK, mb: 0.5 }}>
                  Exchange Bonus
                </Typography>
                <Typography sx={{ fontSize: '13px', color: TEXT_MUTED }}>
                  Up to ₹1,25,000 on select models
                </Typography>
              </Box>
            </Grid>

            {/* 2. Cash Discount */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: '1px solid #e5e7eb',
                  backgroundColor: '#ffffff',
                  height: '100%',
                }}
              >
                <Typography sx={{ fontSize: '1.75rem', color: '#1d68c9', fontWeight: 800, mb: 1.5, lineHeight: 1 }}>
                  🎁
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: TEXT_DARK, mb: 0.5 }}>
                  Cash Discount
                </Typography>
                <Typography sx={{ fontSize: '13px', color: TEXT_MUTED }}>
                  Up to ₹75,000 direct savings
                </Typography>
              </Box>
            </Grid>

            {/* 3. Corporate Benefit */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: '1px solid #e5e7eb',
                  backgroundColor: '#ffffff',
                  height: '100%',
                }}
              >
                <Typography sx={{ fontSize: '1.75rem', color: '#16a34a', fontWeight: 800, mb: 1.5, lineHeight: 1 }}>
                  📅
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: TEXT_DARK, mb: 0.5 }}>
                  Corporate Benefit
                </Typography>
                <Typography sx={{ fontSize: '13px', color: TEXT_MUTED }}>
                  Up to ₹20,000 for eligible buyers
                </Typography>
              </Box>
            </Grid>

            {/* 4. Finance Options */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: '1px solid #e5e7eb',
                  backgroundColor: '#ffffff',
                  height: '100%',
                }}
              >
                <Typography sx={{ fontSize: '1.75rem', color: '#ea580c', fontWeight: 800, mb: 1.5, lineHeight: 1 }}>
                  🏷️
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: TEXT_DARK, mb: 0.5 }}>
                  Finance Options
                </Typography>
                <Typography sx={{ fontSize: '13px', color: TEXT_MUTED }}>
                  Customized EMI plans available
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 4. Model-Wise Offers Section with Tabs (Screenshot 2 to 7) */}
      <Box sx={{ py: 6, backgroundColor: '#ffffff' }}>
        <Container
          maxWidth={false}
          sx={{
            maxWidth: '1440px',
            px: { xs: 3, md: 6, lg: 8 },
          }}
        >
          {/* Header & Tabs */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              justifyContent: 'space-between',
              gap: 2,
              mb: 4,
            }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: '1.75rem', sm: '2.25rem' },
                  color: TEXT_DARK,
                  lineHeight: 1.2,
                  mb: 0.5,
                }}
              >
                Model-Wise Offers
              </Typography>
              <Typography sx={{ fontSize: '13.5px', color: TEXT_MUTED }}>
                Choose your favourite Maruti Suzuki and see the latest deals
              </Typography>
            </Box>

            {/* Channel Tabs: All | Arena | Nexa | Commercial */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#f1f5f9',
                p: 0.5,
                borderRadius: 9999,
                border: '1px solid #e2e8f0',
              }}
            >
              {['All', 'Arena', 'Nexa', 'Commercial'].map((channel) => {
                const isActive = selectedChannel.toLowerCase() === channel.toLowerCase();
                return (
                  <Box
                    key={channel}
                    component="button"
                    onClick={() => setSelectedChannel(channel)}
                    sx={{
                      background: isActive ? ACCENT_RED : 'transparent',
                      color: isActive ? '#ffffff' : '#475569',
                      border: 'none',
                      borderRadius: 9999,
                      px: { xs: 1.8, sm: 2.2 },
                      py: 0.6,
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: isActive ? '#ffffff' : TEXT_DARK,
                      },
                    }}
                  >
                    {channel}
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* Cards Grid */}
          <Grid container spacing={{ xs: 3, md: 3.5, lg: 4 }}>
            {filteredOffers.map((car) => {
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
                      borderColor: isHovered ? 'rgba(231, 33, 11, 0.45)' : '#e5e7eb',
                      boxShadow: isHovered
                        ? '0 10px 28px rgba(231, 33, 11, 0.08), 0 4px 12px rgba(0,0,0,0.04)'
                        : '0 2px 8px rgba(0,0,0,0.02)',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    {/* Top Image Container */}
                    <Box
                      sx={{
                        position: 'relative',
                        height: 230,
                        backgroundColor: '#f8fafc',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 3,
                        overflow: 'hidden',
                      }}
                    >
                      {/* Red Channel Pill (Top Left) */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 14,
                          left: 14,
                          zIndex: 2,
                          backgroundColor: ACCENT_RED,
                          color: '#ffffff',
                          fontSize: '10.5px',
                          fontWeight: 700,
                          px: 1.2,
                          py: 0.3,
                          borderRadius: '4px',
                        }}
                      >
                        {car.channel}
                      </Box>

                      {/* Image */}
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

                    {/* Bottom Details Content */}
                    <Box
                      sx={{
                        p: { xs: 2.5, md: 3 },
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                      }}
                    >
                      {/* Title */}
                      <Typography
                        variant="h3"
                        sx={{
                          fontFamily: "'Rajdhani', sans-serif",
                          fontWeight: 700,
                          fontSize: { xs: '1.35rem', sm: '1.45rem' },
                          color: TEXT_DARK,
                          mb: 0.3,
                          lineHeight: 1.2,
                        }}
                      >
                        {car.name}
                      </Typography>

                      {/* Category */}
                      <Typography sx={{ fontSize: '12px', color: TEXT_MUTED, mb: 1.5 }}>
                        {car.category}
                      </Typography>

                      {/* Promo note */}
                      <Typography sx={{ fontSize: '13px', color: '#374151', lineHeight: 1.4, mb: 2 }}>
                        {car.note}
                      </Typography>

                      {/* Offer Breakdown Table if discounts exist */}
                      {(car.cashDiscount || car.exchangeBonus || car.corporateBenefit) && (
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8, mb: 2.5 }}>
                          {car.cashDiscount && (
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                              <Typography sx={{ color: TEXT_MUTED, fontSize: 'inherit' }}>Cash Discount</Typography>
                              <Typography sx={{ fontWeight: 700, color: TEXT_DARK, fontSize: 'inherit' }}>
                                {car.cashDiscount}
                              </Typography>
                            </Box>
                          )}
                          {car.exchangeBonus && (
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                              <Typography sx={{ color: TEXT_MUTED, fontSize: 'inherit' }}>Exchange Bonus</Typography>
                              <Typography sx={{ fontWeight: 700, color: ACCENT_RED, fontSize: 'inherit' }}>
                                {car.exchangeBonus}
                              </Typography>
                            </Box>
                          )}
                          {car.corporateBenefit && (
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                              <Typography sx={{ color: TEXT_MUTED, fontSize: 'inherit' }}>Corporate Benefit</Typography>
                              <Typography sx={{ fontWeight: 700, color: TEXT_DARK, fontSize: 'inherit' }}>
                                {car.corporateBenefit}
                              </Typography>
                            </Box>
                          )}
                        </Box>
                      )}

                      {/* Green WhatsApp Us Button */}
                      <Button
                        variant="contained"
                        onClick={() => handleWhatsAppClick(car)}
                        sx={{
                          mt: 'auto',
                          backgroundColor: '#22c55e',
                          color: '#ffffff',
                          fontWeight: 600,
                          fontSize: '0.85rem',
                          textTransform: 'none',
                          py: 0.9,
                          borderRadius: '6px',
                          boxShadow: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          '&:hover': {
                            backgroundColor: '#16a34a',
                            boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)',
                          },
                        }}
                      >
                        <WhatsAppIconSvg />
                        WhatsApp Us
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          {/* Disclaimer Text (Screenshot 7) */}
          <Typography sx={{ fontSize: '11px', color: TEXT_MUTED, lineHeight: 1.6, mt: 4, mb: 8 }}>
            *Offers valid from 1 October through 31 October 2026. Offers and prices applicable at the time of delivery
            will be applicable. T&C apply. Exchange bonus subject to vehicle condition and RTO evaluation. Finance
            offers subject to bank approval. Prices may vary by location and stock.
          </Typography>

          {/* 5. Regional Offers in Karnataka & Kerala (Screenshot 7 & 8) */}
          <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: 10 }}>
            {/* Karnataka */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  border: '1px solid #e5e7eb',
                  backgroundColor: '#ffffff',
                  height: '100%',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', color: ACCENT_RED, mb: 1.5 }}>
                  <MapPinIconSvg />
                  <Typography sx={{ fontWeight: 700, fontSize: '1.15rem', color: TEXT_DARK }}>
                    Maruti Offers in Karnataka
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.6, mb: 2 }}>
                  Karnataka customers enjoy the widest range of Maruti Suzuki offers at Bimal Maruti. With 25+
                  showrooms across Karnataka covering Arena, Nexa, Commercial, True Value, and Service outlets, you
                  are never far from the best deal.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8, mb: 2.5, fontSize: '13px', color: '#334155' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: ACCENT_RED }} />
                    9 Arena models with active offers
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: ACCENT_RED }} />
                    7 Nexa models with premium deals
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: ACCENT_RED }} />
                    2 Commercial vehicles with fleet benefits
                  </Box>
                </Box>
                <Typography sx={{ fontSize: '12px', color: TEXT_MUTED, lineHeight: 1.5 }}>
                  Visit any showroom: Mahadevpura, Yelahanka, Varthur, Banashankari, Domlur, Hoskote, Devanahalli,
                  Chikkaballapura and more.
                </Typography>
              </Box>
            </Grid>

            {/* Kerala */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  border: '1px solid #e5e7eb',
                  backgroundColor: '#ffffff',
                  height: '100%',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', color: '#1d68c9', mb: 1.5 }}>
                  <MapPinIconSvg />
                  <Typography sx={{ fontWeight: 700, fontSize: '1.15rem', color: TEXT_DARK }}>
                    Maruti Offers in Kerala
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.6, mb: 2 }}>
                  Kerala customers can enjoy exclusive Bimal Maruti deals at our Kozhikode, Kannur, Malappuram, and
                  Wayanad outlets. With new showroom openings and special inaugural pricing, now is the best time to
                  buy a Maruti in Kerala.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8, mb: 2.5, fontSize: '13px', color: '#334155' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#1d68c9' }} />
                    10 Arena showrooms across North Kerala
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#1d68c9' }} />
                    3 Nexa showrooms in Kozhikode & Malappuram
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#1d68c9' }} />
                    5 dedicated workshops for service
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#1d68c9' }} />
                    True Value outlet in Vengalam
                  </Box>
                </Box>
                <Typography sx={{ fontSize: '12px', color: TEXT_MUTED, lineHeight: 1.5 }}>
                  Key locations: Vengali, Kunnamangalam, Ramanattukara, Mattannur, Meppayur, Vadakara, Chemmad, Kannur,
                  Thaliparamba, Wayanad.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* 6. Frequently Asked Questions (Screenshot 9) */}
          <Box sx={{ mb: 10 }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                fontSize: { xs: '1.75rem', sm: '2.25rem' },
                color: TEXT_DARK,
                lineHeight: 1.2,
                mb: 0.5,
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography sx={{ fontSize: '13.5px', color: TEXT_MUTED, mb: 4 }}>
              Common questions about Maruti Suzuki offers in Bengaluru, Karnataka
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {faqs.map((faq, idx) => (
                <Accordion
                  key={idx}
                  defaultExpanded={idx === 0}
                  elevation={0}
                  sx={{
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px !important',
                    '&:before': { display: 'none' },
                    overflow: 'hidden',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#64748b' }} />}
                    sx={{ px: 2.5, py: 1 }}
                  >
                    <Typography sx={{ fontWeight: 600, fontSize: '14.5px', color: TEXT_DARK }}>
                      {faq.q}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 2.5, pt: 0, pb: 2.5 }}>
                    <Typography sx={{ fontSize: '13.5px', color: TEXT_MUTED, lineHeight: 1.65 }}>
                      {faq.a}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Box>

          {/* 7. Get Your Best Maruti Deal Today (Screenshot 10 Red Banner) */}
          <Box
            sx={{
              backgroundColor: ACCENT_RED,
              borderRadius: 4,
              p: { xs: 4, sm: 6, md: 8 },
              textAlign: 'center',
              color: '#ffffff',
              mb: 8,
              boxShadow: '0 12px 36px rgba(231, 33, 11, 0.25)',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '2.75rem', md: '3.25rem' },
                color: '#ffffff',
                lineHeight: 1.15,
                mb: 2,
              }}
            >
              Get Your Best Maruti Deal Today
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                color: 'rgba(255, 255, 255, 0.92)',
                maxWidth: 680,
                mx: 'auto',
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              Visit your nearest Bimal Maruti showroom in Bengaluru, Karnataka or call us to confirm the latest offers
              before they expire.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                flexWrap: 'wrap',
              }}
            >
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                sx={{
                  backgroundColor: '#ffffff',
                  color: '#111827',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textTransform: 'none',
                  px: 3.5,
                  py: 1.2,
                  borderRadius: '6px',
                  boxShadow: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  '&:hover': {
                    backgroundColor: '#f8fafc',
                  },
                }}
              >
                <PhoneIconSvg />
                Contact Us
              </Button>

              <Button
                component={Link}
                href="/#locations"
                variant="outlined"
                sx={{
                  borderColor: 'rgba(255, 255, 255, 0.7)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textTransform: 'none',
                  px: 3.5,
                  py: 1.2,
                  borderRadius: '6px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  '&:hover': {
                    borderColor: '#ffffff',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <MapPinIconSvg />
                Find Showroom
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Region Selector Modal */}
      <Dialog
        open={regionModalOpen}
        onClose={() => setRegionModalOpen(false)}
        maxWidth="xs"
        fullWidth
        slotProps={{ paper: { sx: { borderRadius: 3, p: 1 } } }}
      >
        <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: TEXT_DARK }}>
            Select Your State / Region
          </Typography>
          <IconButton onClick={() => setRegionModalOpen(false)} size="small" aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 2 }}>
          {['Karnataka', 'Kerala', 'Bengaluru Urban', 'Bengaluru Rural'].map((reg) => (
            <Button
              key={reg}
              fullWidth
              variant={currentRegion === reg ? 'contained' : 'outlined'}
              onClick={() => {
                setCurrentRegion(reg);
                setRegionModalOpen(false);
              }}
              sx={{
                mb: 1,
                py: 1.2,
                justifyContent: 'flex-start',
                backgroundColor: currentRegion === reg ? ACCENT_RED : 'transparent',
                borderColor: currentRegion === reg ? ACCENT_RED : '#e2e8f0',
                color: currentRegion === reg ? '#ffffff' : TEXT_DARK,
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: currentRegion === reg ? '#dc2626' : '#f8fafc',
                },
              }}
            >
              <MapPinIconSvg />
              {reg}
            </Button>
          ))}
        </DialogContent>
      </Dialog>

      {/* Lead Inquiry Modal */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        maxWidth="sm"
        fullWidth
        slotProps={{ paper: { sx: { borderRadius: 3, p: 1 } } }}
      >
        <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: TEXT_DARK }}>
            Claim Offer: {selectedCar.name}
          </Typography>
          <IconButton onClick={() => setDialogOpen(false)} size="small" aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <Box component="form" onSubmit={handleFormSubmit}>
          <DialogContent dividers sx={{ p: 3 }}>
            <Typography variant="body2" sx={{ color: TEXT_MUTED, mb: 3 }}>
              Enter your details to lock in current discount structures and exclusive festive benefits.
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
                  <MenuItem value="Bangalore - Mahadevapura">Bangalore - Mahadevapura</MenuItem>
                  <MenuItem value="Mysore - Hunsur Road">Mysore - Hunsur Road</MenuItem>
                  <MenuItem value="Kozhikode - Vengali">Kozhikode - Vengali</MenuItem>
                </TextField>
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
              Get Best Deal
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
