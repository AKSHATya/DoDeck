import React, { useState } from 'react';
import { Container, Typography, Button, TextField, MenuItem, Select, FormControl, InputLabel, Paper } from '@mui/material';
import axios from 'axios';

const Form = () => {
  // State variables
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [deadline, setDeadline] = useState('');

  // Function to handle task addition
  const addTask = async () => {
    const newTask = { title, description, category, deadline };

    try {
        const response = await axios.post('http://localhost:5000/api/addTask', newTask);

        console.log('Task added successfully:', response.data);
        setTitle('');
        setDescription('');
        setCategory('');
        setDeadline('');
    } catch (error) {
        console.error('Error adding task:', error.response ? error.response.data : error.message);
    }
};

  return (
    // <div className='form'>
      <Container maxWidth="md" className='form'>
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 4 }}>
        <Typography variant="h6">Add New Task</Typography>
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          multiline
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>Category</InputLabel>
          <Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <MenuItem value="Work">Work</MenuItem>
            <MenuItem value="Personal">Personal</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          type="datetime-local"
          label="Deadline"
          InputLabelProps={{ shrink: true }}
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="primary" onClick={addTask}>
          Add Task
        </Button>
      </Paper>
      </Container>
    // </div>
  );
};

export default Form;
