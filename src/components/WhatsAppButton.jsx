'use client';

import React from 'react';
import { Box, Tooltip } from '@mui/material';

export default function WhatsAppButton() {
  const whatsappUrl = 'https://wa.me/918030693069?text=Hello%20Bimal%20Maruti,%20I%20am%20interested%20in%20knowing%20more%20about%20Maruti%20Suzuki%20cars.';

  return (
    <Tooltip title="Chat with Bimal Maruti on WhatsApp" placement="left" arrow>
      <Box
        component="a"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        sx={{
          position: 'fixed',
          bottom: { xs: 20, md: 28 },
          right: { xs: 20, md: 28 },
          zIndex: 1200,
          width: { xs: 48, md: 54 },
          height: { xs: 48, md: 54 },
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(37, 211, 102, 0.45), 0 2px 6px rgba(0,0,0,0.1)',
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
          '&:hover': {
            transform: 'translateY(-3px) scale(1.06)',
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.55), 0 4px 10px rgba(0,0,0,0.15)',
            backgroundColor: '#20ba59',
          },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: '60%', height: '60%' }}
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </Box>
    </Tooltip>
  );
}

