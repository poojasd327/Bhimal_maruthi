'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  TextField,
  Button,
  Divider,
  Snackbar,
  Alert,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { siteConfig } from '@/config/siteConfig';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = 2026;

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        pt: 8,
        pb: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1: Brand & Bio */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: 1.5,
                  backgroundColor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: 18,
                }}
              >
                {siteConfig.name.charAt(0)}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {siteConfig.name}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.7 }}>
              {siteConfig.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                aria-label="GitHub"
                component="a"
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{ border: '1px solid', borderColor: 'divider' }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                component="a"
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{ border: '1px solid', borderColor: 'divider' }}
              >
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                component="a"
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{ border: '1px solid', borderColor: 'divider' }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                component="a"
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{ border: '1px solid', borderColor: 'divider' }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          {/* Column 2: Navigation Links */}
          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              Navigation
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              {siteConfig.navLinks.map((item) => (
                <Typography
                  key={item.path}
                  component={Link}
                  href={item.path}
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {item.title}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Column 3: Contact Info */}
          <Grid size={{ xs: 6, sm: 4, md: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              Contact
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon fontSize="small" color="primary" />
                <Typography variant="body2" color="text.secondary">
                  {siteConfig.contact.email}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon fontSize="small" color="primary" />
                <Typography variant="body2" color="text.secondary">
                  {siteConfig.contact.phone}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <LocationOnIcon fontSize="small" color="primary" sx={{ mt: 0.3 }} />
                <Typography variant="body2" color="text.secondary">
                  {siteConfig.contact.address}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Column 4: Newsletter */}
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
              Stay Updated
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Subscribe to get product updates and web insights delivered to your inbox.
            </Typography>
            <Box component="form" onSubmit={handleSubscribe} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <TextField
                placeholder="Enter your email"
                variant="outlined"
                size="small"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
              />
              <Button type="submit" variant="contained" color="primary" size="medium">
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Built with <strong>Next.js</strong> &amp; <strong>Material UI (MUI)</strong>
          </Typography>
        </Box>
      </Container>

      <Snackbar
        open={subscribed}
        autoHideDuration={4000}
        onClose={() => setSubscribed(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={() => setSubscribed(false)} variant="filled">
          Thank you for subscribing!
        </Alert>
      </Snackbar>
    </Box>
  );
}
