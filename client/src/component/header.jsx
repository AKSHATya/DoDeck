import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the navigation hook
import WorkIcon from '@mui/icons-material/Work';
import AddTaskIcon from '@mui/icons-material/AddTask';
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Header = () => {
  const [toggle, settoggle] = useState("light");
  const navigate = useNavigate(); // Initialize the navigation hook

  return (
    <nav className="nav">
      <ul className='navLinks'>
        <li onClick={() => navigate('/Add-task')}> {/* Navigate to Add Task Page */}
          <AddTaskIcon color="primary" sx={{ fontSize: 30, color: 'white' }} />
          Add Tasks
        </li>
        <li onClick={() => navigate('/Personal-tasks')}> {/* Navigate to Personal Tasks Page */}
          <PersonIcon color="primary" sx={{ fontSize: 30, color: 'white' }} />
          Personal
        </li>
        <li onClick={() => navigate('/Work-tasks')}> {/* Navigate to Work Tasks Page */}
          <WorkIcon color="primary" sx={{ fontSize: 30, color: 'white' }} />
          Work
        </li>
        <li onClick={() => navigate('/Other-tasks')}> {/* Navigate to Other Tasks Page */}
          <ListIcon color="primary" sx={{ fontSize: 30, color: 'white' }} />
          Other
        </li>
      </ul>
      <div className='darkmode'>
        <button>
          <DarkModeIcon color="primary" sx={{ fontSize: 30, color: 'white', flex: "end" }} />
        </button>
      </div>
    </nav>
  );
}

export default Header;
