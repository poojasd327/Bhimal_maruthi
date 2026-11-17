'use client';

import React from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { siteConfig } from '@/config/siteConfig';

const ACCENT_RED = '#e7210b';
const TEXT_DARK = '#111827';
const TEXT_MUTED = '#64748b';

export default function Footer() {
  const currentYear = 2026;

  const quickLinks = [
    { title: 'Home', path: '/' },
    { title: 'Arena Models', path: '/arena' },
    { title: 'Nexa Models', path: '/nexa' },
    { title: 'Commercial', path: '/commercial' },
    { title: 'Offers', path: '/offers' },
    { title: 'Service', path: '/service' },
  ];

  const moreServices = [
    { title: 'True Value', path: '/#true-value' },
    { title: 'Driving School', path: '/#driving-school' },
    { title: 'Accessories', path: '/#accessories' },
    { title: 'Locations', path: '/#locations' },
    { title: 'Contact', path: '/contact' },
  ];

  const companyLinks = [
    { title: 'About Us', path: '/about' },
    { title: 'Careers', path: '/#careers' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e5e7eb',
        pt: { xs: 6, md: 8 },
        pb: 5,
        mt: 'auto',
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: '1440px', px: { xs: 2.5, sm: 4, md: 6, lg: 8 } }}>
        <Grid container spacing={{ xs: 4, md: 5 }}>
          {/* Column 1: Brand & Bio */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ mb: 1.5 }}>
              <Typography
                sx={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 900,
                  fontSize: '2rem',
                  lineHeight: 1,
                  letterSpacing: '0.02em',
                  color: TEXT_DARK,
                }}
              >
                BIMAL
              </Typography>
              <Typography
                sx={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  color: TEXT_MUTED,
                  textTransform: 'uppercase',
                  mt: 0.3,
                }}
              >
                MARUTI SUZUKI
              </Typography>
            </Box>

            <Typography
              sx={{
                color: TEXT_MUTED,
                fontSize: '13.5px',
                lineHeight: 1.6,
                mb: 2.5,
                maxWidth: 320,
              }}
            >
              Authorized Maruti Suzuki dealer across Karnataka and Kerala. Trusted since 1984, serving 5,00,000+ happy families.
            </Typography>

            {/* Social Icons */}
            <Box sx={{ display: 'flex', gap: 1.2 }}>
              <IconButton
                aria-label="Facebook"
                size="small"
                component="a"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: TEXT_MUTED, p: 0.5, '&:hover': { color: ACCENT_RED } }}
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                size="small"
                component="a"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: TEXT_MUTED, p: 0.5, '&:hover': { color: ACCENT_RED } }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="YouTube"
                size="small"
                component="a"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: TEXT_MUTED, p: 0.5, '&:hover': { color: ACCENT_RED } }}
              >
                <YouTubeIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                size="small"
                component="a"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: TEXT_MUTED, p: 0.5, '&:hover': { color: ACCENT_RED } }}
              >
                <TwitterIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          {/* Column 2: QUICK LINKS */}
          <Grid size={{ xs: 6, sm: 4, md: 2.5 }}>
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: TEXT_DARK,
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              QUICK LINKS
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              {quickLinks.map((item) => (
                <Typography
                  key={item.title}
                  component={Link}
                  href={item.path}
                  sx={{
                    color: TEXT_MUTED,
                    fontSize: '13.5px',
                    textDecoration: 'none',
                    transition: 'color 0.15s ease',
                    '&:hover': {
                      color: ACCENT_RED,
                    },
                  }}
                >
                  {item.title}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Column 3: MORE SERVICES */}
          <Grid size={{ xs: 6, sm: 4, md: 2.5 }}>
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: TEXT_DARK,
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              MORE SERVICES
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              {moreServices.map((item) => (
                <Typography
                  key={item.title}
                  component={Link}
                  href={item.path}
                  sx={{
                    color: TEXT_MUTED,
                    fontSize: '13.5px',
                    textDecoration: 'none',
                    transition: 'color 0.15s ease',
                    '&:hover': {
                      color: ACCENT_RED,
                    },
                  }}
                >
                  {item.title}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Column 4: COMPANY */}
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: TEXT_DARK,
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              COMPANY
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              {companyLinks.map((item) => (
                <Typography
                  key={item.title}
                  component={Link}
                  href={item.path}
                  sx={{
                    color: TEXT_MUTED,
                    fontSize: '13.5px',
                    textDecoration: 'none',
                    transition: 'color 0.15s ease',
                    '&:hover': {
                      color: ACCENT_RED,
                    },
                  }}
                >
                  {item.title}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* CONTACT & HOURS bottom section */}
        <Box sx={{ mt: { xs: 5, md: 6 }, pt: 3, borderTop: '1px solid #f1f5f9' }}>
          <Typography
            sx={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: TEXT_DARK,
              textTransform: 'uppercase',
              mb: 0.8,
            }}
          >
            CONTACT &amp; HOURS
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, gap: 1 }}>
            <Typography
              component="a"
              href="tel:08030693069"
              sx={{
                fontSize: '14px',
                fontWeight: 600,
                color: TEXT_DARK,
                textDecoration: 'none',
                '&:hover': { color: ACCENT_RED },
              }}
            >
              080-3069 3069
            </Typography>
            <Typography sx={{ fontSize: '12.5px', color: TEXT_MUTED }}>
              © {currentYear} {siteConfig.name}. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
