import React from 'react';
import {
  Container,
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';

const TaskList = ({ tasks = [], updateStatus }) => {
  return (
    <Container maxWidth="md" className="tasklist">
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h6" gutterBottom>
          Task List
        </Typography>
        {tasks.length === 0 ? (
          <Typography variant="body1">
            No tasks available. Add a new task to get started!
          </Typography>
        ) : (
          <List>
            {tasks.map((task) => (
              <ListItem key={task.id} sx={{ marginBottom: 2 }}>
                <Paper
                  elevation={2}
                  sx={{
                    width: '100%',
                    padding: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <ListItemText
                    primary={task.title}
                    secondary={`Description: ${task.description} | Category: ${task.category} | Deadline: ${new Date(task.deadline).toLocaleString()} | Status: ${task.status}`}
                  />
                  <Box>
                    <Button
                      onClick={() => updateStatus(task.id, 'In Progress')}
                      sx={{ marginRight: 1 }}
                      color="warning"
                    >
                      In Progress
                    </Button>
                    <Button
                      onClick={() => updateStatus(task.id, 'Completed')}
                      color="success"
                    >
                      Completed
                    </Button>
                  </Box>
                </Paper>
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    </Container>
  );
};

export default TaskList;
