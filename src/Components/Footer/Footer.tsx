import React from 'react';
import { Typography, Container } from '@mui/material';

export default function MyFooter() {
  return (
    <footer>
      <Container maxWidth="md">
        <Typography variant="body2" color="textSecondary" align="center">
          Texte 1 - Tous droits réservés © 2024
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Texte 2 - Politique de confidentialité
        </Typography>
      </Container>
    </footer>
  );
}
