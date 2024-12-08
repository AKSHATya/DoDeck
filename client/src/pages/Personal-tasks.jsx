import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from '../component/TaskList';

const PersonalTasksPage = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch personal tasks from the API
  const fetchPersonalTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks/personal');
      setTasks(response.data); // Assuming the API returns an array of tasks
    } catch (error) {
      console.error('Error fetching personal tasks:', error);
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

  // Fetch personal tasks when the component mounts
  useEffect(() => {
    fetchPersonalTasks();
  }, []);

  return (
    <div>
      
      <TaskList tasks={tasks} updateStatus={updateStatus} />
    
    </div>
  );
};

export default PersonalTasksPage;
