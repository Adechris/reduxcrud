import React from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import { Container, Typography } from '@mui/material';

const App = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        CRUD App
      </Typography>
      <ItemForm />
      <ItemList />
    </Container>
  );
};

export default App;
