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
    image: '/images/hero-baleno.jpg',
    overlayOpacity: 0.45,
  },
  {
    id: 2,
    subtitle: 'CASH DISCOUNTS + EXCHANGE BONUS + 0% EMI',
    title: 'Exclusive Offers This Month',
    ctaText: 'VIEW OFFERS',
    ctaHref: '#offers',
    ctaBg: '#e7210b',
    image: '/images/hero-nexa.webp',
    overlayOpacity: 0.55,
  },
  {
    id: 3,
    subtitle: 'MARUTI SUZUKI E VITARA / GRAND VITARA',
    title: 'Go Electric. Go Nexa.',
    ctaText: 'EXPLORE NEXA',
    ctaHref: '#range',
    ctaBg: '#1d68c9',
    image: '/images/e-vitara.webp',
    overlayOpacity: 0.55,
  },
  {
    id: 4,
    subtitle: 'HOT & TECHY CITY SUV',
    title: 'Maruti Suzuki Brezza',
    ctaText: 'EXPLORE ARENA',
    ctaHref: '#range',
    ctaBg: '#e7210b',
    image: '/images/brezza.webp',
    overlayOpacity: 0.45,
  },
  {
    id: 5,
    subtitle: 'PREMIUM MID-SIZE CROSSOVER',
    title: 'Maruti Suzuki Victoris',
    ctaText: 'VIEW OFFERS',
    ctaHref: '#offers',
    ctaBg: '#e7210b',
    image: '/images/victoris.webp',
    overlayOpacity: 0.45,
  },
  {
    id: 6,
    subtitle: 'RULE EVERY ROAD — INTELLIGENT HYBRID',
    title: 'Grand Vitara Intelligent Hybrid',
    ctaText: 'EXPLORE NEXA',
    ctaHref: '#range',
    ctaBg: '#1d68c9',
    image: '/images/grand-vitara-no-bg.png',
    overlayOpacity: 0.5,
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

  const current = slides[currentSlide];

  return (
    <Box
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      sx={{
        position: 'relative',
        height: { xs: '52vh', sm: '58vh', md: '64vh' },
        minHeight: { xs: '420px', md: '500px' },
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
                      mb: 1.5,
                      fontSize: { xs: '0.75rem', sm: '0.875rem' },
                      fontWeight: 700,
                      letterSpacing: '0.2em',
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
                      mb: { xs: 3, md: 4 },
                      fontSize: { xs: '2.4rem', sm: '3.6rem', md: '4.8rem' },
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      color: '#ffffff',
                      lineHeight: 1.1,
                      textShadow: '0 4px 16px rgba(0,0,0,0.7)',
                      fontFamily: '"Rajdhani", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
                      px: { xs: 4, sm: 5 },
                      py: { xs: 1.2, sm: 1.6 },
                      fontSize: { xs: '0.9rem', sm: '1.05rem' },
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      borderRadius: '6px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
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
          left: { xs: 12, sm: 24, md: 36 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 30,
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(8px)',
          width: { xs: 44, md: 52 },
          height: { xs: 44, md: 52 },
          border: '1px solid rgba(255, 255, 255, 0.15)',
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
          right: { xs: 12, sm: 24, md: 36 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 30,
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(8px)',
          width: { xs: 44, md: 52 },
          height: { xs: 44, md: 52 },
          border: '1px solid rgba(255, 255, 255, 0.15)',
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
          bottom: { xs: 16, sm: 28 },
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

