'use client';

import React from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Paper,
  Stack,
  useTheme,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SpeedIcon from '@mui/icons-material/Speed';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import HubIcon from '@mui/icons-material/Hub';
import DevicesIcon from '@mui/icons-material/Devices';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import SectionHeader from '@/components/SectionHeader';
import { homeContent } from '@/data/content';
import { siteConfig } from '@/config/siteConfig';

const iconMap = {
  Speed: SpeedIcon,
  DesignServices: DesignServicesIcon,
  Hub: HubIcon,
  Devices: DevicesIcon,
};

export default function HomePage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 14 },
          position: 'relative',
          overflow: 'hidden',
          background: isDark
            ? 'radial-gradient(ellipse at 50% 20%, rgba(30, 58, 138, 0.25) 0%, rgba(15, 23, 42, 0) 70%)'
            : 'radial-gradient(ellipse at 50% 20%, rgba(219, 234, 254, 0.7) 0%, rgba(248, 250, 252, 0) 70%)',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 860, mx: 'auto' }}>
            <Chip
              label={homeContent.hero.badge}
              color="primary"
              variant="outlined"
              size="medium"
              sx={{
                mb: 3,
                fontWeight: 600,
                px: 1,
                borderRadius: '16px',
                borderColor: 'primary.main',
              }}
            />
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.2rem' },
                lineHeight: 1.15,
                mb: 3,
                fontWeight: 800,
              }}
            >
              Innovate, Build &amp;{' '}
              <Box
                component="span"
                sx={{
                  background: isDark
                    ? 'linear-gradient(90deg, #60a5fa 0%, #c084fc 100%)'
                    : 'linear-gradient(90deg, #1976d2 0%, #9c27b0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Scale Your Vision
              </Box>
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                maxWidth: 700,
                mx: 'auto',
                mb: 5,
                lineHeight: 1.6,
                fontWeight: 400,
                fontSize: { xs: '1.05rem', sm: '1.25rem' },
              }}
            >
              {homeContent.hero.subtitle}
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                href={homeContent.hero.primaryCta.href}
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
              >
                {homeContent.hero.primaryCta.label}
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                component={Link}
                href={homeContent.hero.secondaryCta.href}
                sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
              >
                {homeContent.hero.secondaryCta.label}
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Stats Bar */}
      <Container maxWidth="lg" sx={{ mt: -4, mb: 10, position: 'relative', zIndex: 2 }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            backgroundColor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: isDark
              ? '0 10px 30px rgba(0,0,0,0.5)'
              : '0 10px 30px rgba(0,0,0,0.06)',
          }}
        >
          <Grid container spacing={3} alignItems="center">
            {homeContent.stats.map((stat, index) => (
              <Grid size={{ xs: 6, md: 3 }} key={index} sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: 'primary.main',
                    mb: 0.5,
                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <SectionHeader
          badge="Features &amp; Strengths"
          title="Engineered for Performance &amp; Scalability"
          subtitle="Everything you need to launch a high-impact digital presence with full responsiveness and clean maintainable code."
        />

        <Grid container spacing={3}>
          {homeContent.features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || SpeedIcon;
            return (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    p: 2,
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: isDark
                        ? '0 12px 30px rgba(0,0,0,0.7)'
                        : '0 12px 30px rgba(25, 118, 210, 0.12)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 2 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 2.5,
                        backgroundColor: isDark ? 'rgba(96, 165, 250, 0.15)' : 'rgba(25, 118, 210, 0.08)',
                        color: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2.5,
                      }}
                    >
                      <IconComponent fontSize="medium" />
                    </Box>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 1.5 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Quick Architecture Highlights */}
      <Box sx={{ py: 10, backgroundColor: isDark ? 'rgba(30, 41, 59, 0.5)' : '#f1f5f9' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Chip
                label="Developer Friendly"
                color="secondary"
                size="small"
                sx={{ mb: 2, fontWeight: 600 }}
              />
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
                Modular Components &amp; Clean Content Separation
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                This setup is purposefully configured so you can drop your own content, brand name, and images anytime. All data lives in structured, predictable files.
              </Typography>

              <Stack spacing={2}>
                {[
                  'Customizable theme tokens in src/theme/theme.js',
                  'Centralized text content in src/data/content.js',
                  'Ready-made pages for About, Services, Portfolio, and Contact',
                  'Client-side theme toggle with automatic OS preference detection',
                ].map((item, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <CheckCircleOutlinedIcon color="primary" fontSize="small" />
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  backgroundColor: 'background.paper',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                }}
              >
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>
                  {`// Project structure overview`}
                </Typography>
                <Box component="pre" sx={{ m: 0, overflowX: 'auto', color: 'primary.main' }}>
{`src/
├── app/
│   ├── page.jsx        # Home Page
│   ├── about/          # About Page
│   ├── services/       # Services & Solutions
│   ├── portfolio/      # Projects Showcase
│   ├── contact/        # Interactive Contact Form
│   └── layout.jsx      # Theme & App Router Cache
├── components/         # Reusable MUI Components
├── config/             # Site metadata & navigation
├── data/               # Centralized page content
└── theme/              # MUI Palette & Styles`}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Banner */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 8 },
            borderRadius: 4,
            textAlign: 'center',
            background: isDark
              ? 'linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%)'
              : 'linear-gradient(135deg, #1976d2 0%, #7b1fa2 100%)',
            color: '#ffffff',
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '1.8rem', md: '2.5rem' } }}
          >
            {homeContent.ctaBanner.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 650,
              mx: 'auto',
              mb: 4,
              opacity: 0.9,
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.2rem' },
            }}
          >
            {homeContent.ctaBanner.subtitle}
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            href={homeContent.ctaBanner.buttonHref}
            sx={{
              backgroundColor: '#ffffff',
              color: 'primary.main',
              fontWeight: 700,
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            {homeContent.ctaBanner.buttonLabel}
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
