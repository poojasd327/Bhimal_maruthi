'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Paper,
  Stack,
  useTheme,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ShieldIcon from '@mui/icons-material/Shield';
import SectionHeader from '@/components/SectionHeader';
import { aboutContent } from '@/data/content';

const valueIcons = [FavoriteIcon, WorkspacePremiumIcon, AutoAwesomeIcon, ShieldIcon];

export default function AboutPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <SectionHeader
          badge="Our Story &amp; Values"
          title={aboutContent.header.title}
          subtitle={aboutContent.header.subtitle}
        />

        {/* Mission & Vision Section */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 3,
            backgroundColor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            mb: 10,
          }}
        >
          <Grid container spacing={4} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="overline" color="primary" sx={{ fontWeight: 700, letterSpacing: '0.1em' }}>
                Why We Exist
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 2 }}>
                {aboutContent.mission.title}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={2.5}>
                {aboutContent.mission.paragraphs.map((p, i) => (
                  <Typography key={i} variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
                    {p}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Paper>

        {/* Core Values */}
        <Box sx={{ mb: 10 }}>
          <SectionHeader
            badge="Foundations"
            title="Core Values We Live By"
            subtitle="These guiding principles shape how we build products and collaborate with partners."
          />

          <Grid container spacing={3}>
            {aboutContent.values.map((val, idx) => {
              const Icon = valueIcons[idx % valueIcons.length];
              return (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                  <Card
                    sx={{
                      height: '100%',
                      p: 2,
                      '&:hover': {
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          backgroundColor: isDark ? 'rgba(96, 165, 250, 0.15)' : 'rgba(25, 118, 210, 0.08)',
                          color: 'primary.main',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                        }}
                      >
                        <Icon />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                        {val.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {val.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Meet the Team */}
        <Box>
          <SectionHeader
            badge="Leadership"
            title="Meet the Team"
            subtitle="Passionate builders and designers committed to exceptional craft."
          />

          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {aboutContent.team.map((member, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar
                    src={member.avatar}
                    alt={member.name}
                    sx={{
                      width: 100,
                      height: 100,
                      mb: 2.5,
                      border: '3px solid',
                      borderColor: 'primary.main',
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="primary" sx={{ fontWeight: 600, mb: 1.5 }}>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {member.bio}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

