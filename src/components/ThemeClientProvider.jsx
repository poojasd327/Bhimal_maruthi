'use client';

import React, { createContext, useContext, useMemo, useSyncExternalStore } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme } from '@/theme/theme';

const ColorModeContext = createContext({
  mode: 'light',
  toggleColorMode: () => {},
});

export const useColorMode = () => useContext(ColorModeContext);

function subscribe(callback) {
  window.addEventListener('storage', callback);
  window.addEventListener('theme-change', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('theme-change', callback);
  };
}

function getSnapshot() {
  const saved = localStorage.getItem('theme-mode');
  if (saved === 'light' || saved === 'dark') return saved;
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

function getServerSnapshot() {
  return 'light';
}

export default function ThemeClientProvider({ children }) {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        const nextMode = mode === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme-mode', nextMode);
        window.dispatchEvent(new Event('theme-change'));
      },
    }),
    [mode]
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
