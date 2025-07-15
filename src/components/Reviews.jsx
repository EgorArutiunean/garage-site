// src/components/Reviews.jsx
import React from 'react';
import { Box, Container, Typography, Paper, Rating } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const reviews = [
  {
    name: 'Иван Петров',
    text: 'Очень доволен сотрудничеством с "Гаражёнком". Всё прозрачно и удобно.',
    rating: 5
  },
  {
    name: 'Мария Соколова',
    text: 'Наконец-то появилась понятная информация о ГСК. Спасибо за работу!',
    rating: 4
  },
  {
    name: 'Александр Орлов',
    text: 'Быстро связались, подсказали по кооперативу в Одинцово. Рекомендую.',
    rating: 5
  }
];

function Reviews() {
  return (
    <Box id="reviews" sx={{ py: 8, backgroundColor: '#fff' }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Отзывы пользователей
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Мы ценим обратную связь и всегда стремимся делать проект полезнее.
        </Typography>
        <Carousel
          navButtonsAlwaysVisible
          indicatorContainerProps={{ style: { marginTop: '1rem' } }}
        >
          {reviews.map((review, i) => (
            <Paper key={i} elevation={3} sx={{ p: 4 }}>
              <Typography variant="h6" gutterBottom>
                {review.name}
              </Typography>
              <Rating value={review.rating} readOnly sx={{ mb: 1 }} />
              <Typography variant="body1" color="text.primary">
                {review.text}
              </Typography>
            </Paper>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}

export default Reviews;
