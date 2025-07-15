import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import MapSection from './components/MapSection';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
  Button,
  createTheme,
} from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f9a825',
    },
    background: {
      default: '#f4f6f8',
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: ['"Roboto"', 'sans-serif'].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      
      <About />
     <Gallery />
     <Reviews />
     <MapSection />
     <FAQ />
     <ContactForm />
     <Footer />
    </ThemeProvider>
  );
}

export default App;

