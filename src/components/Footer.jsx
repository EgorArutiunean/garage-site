// src/components/Footer.jsx
import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
} from '@mui/material';
import { YouTube, Telegram, Instagram } from '@mui/icons-material';

// Кастомные SVG-иконки (добавь их отдельно)
import { ReactComponent as VkIcon } from './icons/vk.svg';
import { ReactComponent as RutubeIcon } from './icons/rutube.svg';


function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, backgroundColor: '#e0e0e0' }}>
      <Container maxWidth="md">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Гаражёнок — информационный портал о гаражных кооперативах в МО.
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
          <IconButton href="https://vk.com" target="_blank" aria-label="ВКонтакте">
            <VkIcon width={24} height={24} />
          </IconButton>
          <IconButton href="https://t.me" target="_blank" aria-label="Telegram">
            <Telegram />
          </IconButton>
          <IconButton href="https://youtube.com" target="_blank" aria-label="YouTube">
            <YouTube />
          </IconButton>
          <IconButton href="https://rutube.ru" target="_blank" aria-label="Rutube">
            <RutubeIcon width={24} height={24} />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" aria-label="Instagram">
            <Instagram />
          </IconButton>
        </Stack>

        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
          Email: garageonok@yandex.ru
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
