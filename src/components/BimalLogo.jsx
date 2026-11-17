'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';

export default function BimalLogo({ height = 40 }) {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <Box
        component="img"
        src="/logo.png"
        alt="Bimal Maruti"
        onError={() => setImgError(true)}
        sx={{
          height: height,
          width: 'auto',
          maxWidth: 160,
          objectFit: 'contain',
          display: 'block',
        }}
      />
    );
  }

  // Exact vector reproduction matching Bimal Maruti emblem and bold typography
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <svg width="34" height="34" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="17" height="6" rx="3" transform="skewX(-20)" fill="#E52B20" />
        <rect x="8" y="15" width="21" height="6" rx="3" transform="skewX(-20)" fill="#E52B20" />
        <rect x="4" y="24" width="18" height="6" rx="3" transform="skewX(-20)" fill="#E52B20" />
      </svg>
      <Box
        component="span"
        sx={{
          fontWeight: 900,
          fontSize: '1.45rem',
          letterSpacing: '-0.02em',
          color: 'text.primary',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        BIMAL
      </Box>
    </Box>
  );
}
