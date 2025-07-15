// src/components/AboutSection.jsx
import React from 'react';
import { Box, Container, Typography, Paper, Stack } from '@mui/material';

function AboutSection() {
  return (
    <Box id="about" sx={{ py: 10, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom textAlign="center">
          О проекте «Гаражёнок»
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center" paragraph>
          «Гаражёнок» — это информационная платформа о деятельности гаражных кооперативов и управляющих компаний в Московской области. Мы создаём единое информационное поле, чтобы автомобилисты могли получать актуальные данные, делиться опытом и находить надёжные решения.
        </Typography>

        <Box
          sx={{
            mt: 6,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
          }}
        >
          {/* Левая колонка с карточками */}
          <Box sx={{ flex: 1 }}>
            <Stack spacing={3}>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
                <Typography variant="h6" gutterBottom>
                  📍 Более 80 объектов на карте
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Собираем данные о десятках кооперативов в Подмосковье. Каждое объединение — часть большой экосистемы.
                </Typography>
              </Paper>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
                <Typography variant="h6" gutterBottom>
                  🔒 Прозрачное управление
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Открытость в документах, решениях и взаимодействии между УК и владельцами гаражей.
                </Typography>
              </Paper>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
                <Typography variant="h6" gutterBottom>
                  💬 Обратная связь и поддержка
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Вопросы, жалобы, предложения — мы создаём удобную форму общения между участниками.
                </Typography>
              </Paper>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
                <Typography variant="h6" gutterBottom>
                  ⚙️ Информационное сопровождение
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Telegram, YouTube, ВКонтакте и другие площадки — мы рассказываем, анализируем и развиваем тему.
                </Typography>
              </Paper>
            </Stack>
          </Box>

          {/* Правая колонка с фото */}
          <Box
            sx={{
              flex: 1,
              display: { xs: 'none', md: 'block' },
              borderRadius: 4,
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              src="/images/parking.jpg"
              alt="Парковка гаражного кооператива"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                minHeight: 500,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutSection;
