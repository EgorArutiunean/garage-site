// src/components/Gallery.jsx
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const galleryImages = [
  {
    src={`${process.env.PUBLIC_URL}/images/garage1.jpg`},
    alt: 'Гаражный кооператив 1'
  },
  {
   src={`${process.env.PUBLIC_URL}/images/garage2.jpg`},
    alt: 'Гаражный кооператив 2'
  },
  {
    src={`${process.env.PUBLIC_URL}/images/garage3.jpg`},
    alt: 'Гаражный кооператив 3'
  }
];

function Gallery() {
  return (
    <Box id="gallery" sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Галерея объектов
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Здесь представлены типовые примеры благоустройства и охраняемых территорий гаражных кооперативов.
        </Typography>
        <Carousel
          navButtonsAlwaysVisible
          indicatorContainerProps={{ style: { marginTop: '1rem' } }}
        >
          {galleryImages.map((item, i) => (
            <Paper key={i} elevation={3}>
              <img
                src={item.src}
                alt={item.alt}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </Paper>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}

export default Gallery;
