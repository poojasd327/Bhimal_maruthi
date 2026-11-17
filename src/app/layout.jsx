import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import ThemeClientProvider from '@/components/ThemeClientProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import './globals.css';
import { siteConfig } from '@/config/siteConfig';

export const metadata = {
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ key: 'mui' }}>
          <ThemeClientProvider>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Navbar />
              <main style={{ flexGrow: 1 }}>
                {children}
              </main>
              <Footer />
              <WhatsAppButton />
            </div>
          </ThemeClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

