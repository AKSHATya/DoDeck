import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
// import Form from './component/Form';
import TaskList from './component/TaskList';
import PersonalTasksPage from './pages/Personal-tasks.jsx'
import WorkTasksPage from './pages/Work-tasks.jsx'; // New component for work tasks
import OtherTasksPage from './pages/Other-tasks.jsx'; // New component for other tasks
import AddTaskPage from './pages/Add-task.jsx'; // New component for add task
import axios from 'axios';

function App() {

  return (
    <Router>
      <div className="outerBox">
        <Header />
        <div className="dodeck" style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#083769' }}>DODECK</h1>
        </div>
        <Routes>
          <Route path="/" element={<TaskList />} /> {/* Default task list */}
          <Route path="/add-task" element={<AddTaskPage />} /> {/* Add Task Page */}
          <Route path="/personal-tasks" element={<PersonalTasksPage />} /> {/* Personal Tasks */}
          <Route path="/work-tasks" element={<WorkTasksPage />} /> {/* Work Tasks */}
          <Route path="/other-tasks" element={<OtherTasksPage />} /> {/* Other Tasks */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
