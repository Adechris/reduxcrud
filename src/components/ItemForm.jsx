 
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/actions';
import { TextField, Button, Box } from '@mui/material';

const ItemForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) {
      alert('Please fill up the fields');
      return;
    }
    const newItem = {
      id: Date.now(),
      name,
      description,
    };
    dispatch(addItem(newItem));
    setName('');
    setDescription('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <h2>Add Item</h2>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </Box>
  );
};

export default ItemForm;
