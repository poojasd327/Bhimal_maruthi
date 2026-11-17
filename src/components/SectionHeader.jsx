'use client';

import React from 'react';
import { Box, Typography, Chip } from '@mui/material';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  maxWidth = '750px',
  sx = {},
}) {
  const isCenter = align === 'center';

  return (
    <Box
      sx={{
        textAlign: align,
        maxWidth: isCenter ? maxWidth : '100%',
        mx: isCenter ? 'auto' : 0,
        mb: { xs: 4, md: 6 },
        ...sx,
      }}
    >
      {badge && (
        <Chip
          label={badge}
          color="primary"
          variant="outlined"
          size="small"
          sx={{
            mb: 2,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontSize: '0.75rem',
          }}
        />
      )}
      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontWeight: 800,
          letterSpacing: '-0.02em',
          mb: 2,
          fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          sx={{
            fontWeight: 400,
            lineHeight: 1.6,
            fontSize: { xs: '1rem', sm: '1.125rem' },
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

