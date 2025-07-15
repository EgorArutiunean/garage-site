// src/components/FAQ.jsx
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'Кто может пользоваться сайтом «Гаражёнок»?',
    answer: 'Любой владелец гаража, председатель ГСК или интересующийся деятельностью гаражных кооперативов.'
  },
  {
    question: 'Как отправить заявку или задать вопрос?',
    answer: 'Внизу сайта есть форма обратной связи, вы также можете связаться с нами через почту или соцсети.'
  },
  {
    question: 'Платно ли пользоваться сайтом?',
    answer: 'Нет, проект является информационным и открыт для всех пользователей бесплатно.'
  }
];

function FAQ() {
  return (
    <Box id="faq" sx={{ py: 8, backgroundColor: '#fff' }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Часто задаваемые вопросы
        </Typography>
        {faqs.map((item, index) => (
          <Accordion key={index} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}

export default FAQ;
