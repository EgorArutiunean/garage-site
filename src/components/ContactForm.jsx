// src/components/ContactForm.jsx
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Alert,
  Paper
} from '@mui/material';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправка:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box id="contacts" sx={{ py: 8, backgroundColor: '#f4f6f8' }}>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom align="center">
          Связаться с нами
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph align="center">
          Заполните форму, и мы свяжемся с вами в ближайшее время.
        </Typography>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          {submitted && <Alert severity="success" sx={{ mb: 2 }}>Спасибо за сообщение!</Alert>}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Имя"
                  name="name"
                  fullWidth
                  required
                  size="medium"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Email"
                  name="email"
                  fullWidth
                  required
                  size="medium"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Сообщение"
                  name="message"
                  fullWidth
                  required
                  multiline
                  rows={4}
                  size="medium"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Box sx={{ mt: 4 }}>
              <Button type="submit" variant="contained" fullWidth size="large">
                Отправить
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}

export default ContactForm;
