 
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, updateItem } from '../redux/actions';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const ItemList = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const handleEdit = (item) => {
    setItemToEdit(item);
    setName(item.name);
    setDescription(item.description);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setItemToEdit(null);
    setName('');
    setDescription('');
  };

  const handleUpdate = () => {
    const updatedItem = {
      id: itemToEdit.id,
      name,
      description,
    };
    dispatch(updateItem(updatedItem));
    handleClose();
  };

  return (
    <div>
      <h2>Item List</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>
                  <IconButton
                    aria-label="edit"
                    onClick={() => handleEdit(item)}
                    color="primary"
                    variant="outlined"
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDelete(item.id)}
                    color="error"
                    variant="outlined"
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Item</DialogTitle>
        <DialogContent>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ItemList;
