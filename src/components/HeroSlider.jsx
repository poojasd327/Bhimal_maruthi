'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Box, Container, Typography, Button, IconButton } from '@mui/material';

const slides = [
  {
    id: 1,
    subtitle: 'DARE TO GO GLAM',
    title: 'The New Baleno',
    ctaText: 'EXPLORE BALENO',
    ctaHref: '#range',
    ctaBg: '#1d68c9', // Signature Baleno Nexa blue
    image: '/images/hero-baleno.png',
    overlayOpacity: 0.4,
  },
  {
    id: 2,
    subtitle: 'CASH DISCOUNTS + EXCHANGE BONUS + 0% EMI',
    title: 'Exclusive Offers This Month',
    ctaText: 'VIEW OFFERS',
    ctaHref: '#offers',
    ctaBg: '#e7210b', // Bimal Red
    image: '/images/hero-nexa.webp',
    overlayOpacity: 0.45,
  },
  {
    id: 3,
    subtitle: 'MARUTI SUZUKI FRONX / BALENO',
    title: 'Drive the Future — Nexa Collection',
    ctaText: 'EXPLORE NEXA',
    ctaHref: '#range',
    ctaBg: '#1d68c9', // Nexa Blue
    image: '/images/hero-arena.webp',
    overlayOpacity: 0.4,
  },
  {
    id: 4,
    subtitle: 'PREMIUM MID-SIZE CROSSOVER',
    title: 'The New Victoris',
    ctaText: 'EXPLORE VICTORIS',
    ctaHref: '#range',
    ctaBg: '#e7210b', // Red
    image: '/images/hero-victoris.webp',
    overlayOpacity: 0.45,
  },
  {
    id: 5,
    subtitle: 'MARUTI SUZUKI E VITARA / GRAND VITARA',
    title: 'Go Electric. Go Nexa.',
    ctaText: 'EXPLORE NEXA',
    ctaHref: '#range',
    ctaBg: '#1d68c9', // Nexa Blue
    image: '/images/hero-evitara.webp',
    overlayOpacity: 0.45,
  },
  {
    id: 6,
    subtitle: 'LEAD EVERY PLAY',
    title: 'The New Brezza',
    ctaText: 'EXPLORE BREZZA',
    ctaHref: '#range',
    ctaBg: '#e7210b', // Red
    image: '/images/hero-brezza.png',
    overlayOpacity: 0.45,
  },
];

function ChevronLeftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const totalSlides = slides.length;

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const current = slides[currentSlide];

  return (
    <Box
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      sx={{
        position: 'relative',
        height: { xs: '56vh', sm: '58vh', md: '64vh' },
        minHeight: { xs: '390px', md: '500px' },
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#0a0a0a',
      }}
    >
      {/* Slides Background Images */}
      {slides.map((slide, index) => {
        const isVisible = index === currentSlide;
        return (
          <Box
            key={slide.id}
            sx={{
              position: 'absolute',
              inset: 0,
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
              pointerEvents: isVisible ? 'auto' : 'none',
              zIndex: isVisible ? 1 : 0,
            }}
          >
            {/* Dark Overlay */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                backgroundColor: `rgba(0, 0, 0, ${slide.overlayOpacity})`,
                zIndex: 10,
              }}
            />

            {/* Background Image */}
            <Box
              component="img"
              src={slide.image}
              alt={slide.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transform: isVisible ? 'scale(1)' : 'scale(1.03)',
                transition: 'transform 6s ease-out',
              }}
            />

            {/* Centered Content */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                zIndex: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <Container maxWidth="md" sx={{ px: { xs: 3, md: 4 } }}>
                <Box
                  sx={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
                  }}
                >
                  {/* Top Subtitle */}
                  <Typography
                    variant="body2"
                    sx={{
                      mb: { xs: 1.5, md: 2 },
                      fontSize: { xs: '0.78rem', sm: '0.875rem' },
                      fontWeight: 600,
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: 'rgba(255, 255, 255, 0.9)',
                      textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                    }}
                  >
                    {slide.subtitle}
                  </Typography>

                  {/* Main Headline */}
                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      mb: { xs: 2.5, md: 4 },
                      fontSize: { xs: '2.1rem', sm: '3.4rem', md: '5rem', lg: '5.4rem' },
                      fontWeight: 700,
                      letterSpacing: '-0.01em',
                      color: '#ffffff',
                      lineHeight: 1.05,
                      textShadow: '0 4px 20px rgba(0,0,0,0.8)',
                      fontFamily: '"Rajdhani", sans-serif',
                    }}
                  >
                    {slide.title}
                  </Typography>

                  {/* CTA Button */}
                  <Button
                    variant="contained"
                    component={Link}
                    href={slide.ctaHref}
                    sx={{
                      backgroundColor: slide.ctaBg,
                      color: '#ffffff',
                      px: { xs: 3.5, sm: 5 },
                      py: { xs: 1.1, sm: 1.6 },
                      fontSize: { xs: '0.85rem', sm: '1rem' },
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      borderRadius: '6px',
                      border: slide.ctaBg === '#1d68c9' ? '1px solid #1456a8' : '1px solid #c91804',
                      boxShadow: '0 4px 18px rgba(0,0,0,0.35)',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: slide.ctaBg,
                        filter: 'brightness(1.12)',
                        boxShadow: '0 6px 24px rgba(0,0,0,0.5)',
                        transform: 'translateY(-1px)',
                      },
                    }}
                  >
                    {slide.ctaText}
                  </Button>
                </Box>
              </Container>
            </Box>
          </Box>
        );
      })}

      {/* Previous Slide Button */}
      <IconButton
        onClick={handlePrev}
        aria-label="Previous slide"
        sx={{
          position: 'absolute',
          left: { xs: 6, sm: 18, md: 36 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 30,
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.35)',
          backdropFilter: 'blur(8px)',
          width: { xs: 36, sm: 44, md: 52 },
          height: { xs: 36, sm: 44, md: 52 },
          p: { xs: 0.5, sm: 1 },
          border: '1px solid rgba(255, 255, 255, 0.15)',
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            borderColor: 'rgba(255, 255, 255, 0.3)',
            transform: 'translateY(-50%) scale(1.05)',
          },
        }}
      >
        <ChevronLeftIcon />
      </IconButton>

      {/* Next Slide Button */}
      <IconButton
        onClick={handleNext}
        aria-label="Next slide"
        sx={{
          position: 'absolute',
          right: { xs: 6, sm: 18, md: 36 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 30,
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.35)',
          backdropFilter: 'blur(8px)',
          width: { xs: 36, sm: 44, md: 52 },
          height: { xs: 36, sm: 44, md: 52 },
          p: { xs: 0.5, sm: 1 },
          border: '1px solid rgba(255, 255, 255, 0.15)',
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            borderColor: 'rgba(255, 255, 255, 0.3)',
            transform: 'translateY(-50%) scale(1.05)',
          },
        }}
      >
        <ChevronRightIcon />
      </IconButton>

      {/* Bottom Pagination Indicators (Pills & Dots) */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 12, sm: 24 },
          left: 0,
          right: 0,
          zIndex: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1.2,
        }}
      >
        {slides.map((_, idx) => {
          const isActive = idx === currentSlide;
          return (
            <Box
              key={idx}
              component="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              sx={{
                p: 0,
                border: 'none',
                cursor: 'pointer',
                height: 8,
                width: isActive ? 32 : 8,
                borderRadius: 4,
                backgroundColor: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                outline: 'none',
                '&:hover': {
                  backgroundColor: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
                },
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
}

