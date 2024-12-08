import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from '../component/TaskList';

const OtherTasksPage = () => {
  const [tasks, setTasks] = useState([]);

  const fetchOtherTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks/other');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching other tasks:', error);
    }
  };

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

  useEffect(() => {
    fetchOtherTasks();
  }, []);

  return (
    <div>
      
      <TaskList tasks={tasks} updateStatus={updateStatus} />
    </div>
  );
};

export default OtherTasksPage;
