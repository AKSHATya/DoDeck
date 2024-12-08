import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../component/Form.jsx';
import TaskList from '../component/TaskList.jsx';

const AddTaskPage = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch all tasks from the API
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data); // Assuming the API returns an array of tasks
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Add a new task and refresh the task list
  const addTask = async (newTask) => {
    try {
      await axios.post('http://localhost:5000/api/tasks', newTask);
      fetchTasks(); // Refresh tasks after adding a new one
    } catch (error) {
      console.error('Error adding new task:', error);
    }
  };

  // Update the status of a task
  const updateStatus = async (taskId, newStatus) => {
    try {
      await axios.patch(`http://localhost:5000/api/tasks/${taskId}`, {
        status: newStatus,
      });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, status: newStatus } : task
        )
      );
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  // Fetch tasks when the component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      
      
      <Form addTask={addTask} />
      
      <TaskList tasks={tasks} updateStatus={updateStatus} />
      
    </div>
  );
};

export default AddTaskPage;
