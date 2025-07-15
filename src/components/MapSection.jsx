import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function MapSection() {
  return (
    <Box id="map" sx={{ py: 8, backgroundColor: '#f4f6f8' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          Карта объектов
        </Typography>
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            paddingBottom: '56.25%', // 16:9
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.618423%2C55.751244&z=9"
            title="Карта Московской области"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0,
            }}
            allowFullScreen
          />
        </Box>
      </Container>
    </Box>
  );
}

export default MapSection;
