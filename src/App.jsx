import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NameList from './components/NameList';
import LifecycleComponent from './components/LifecycleComponent';
import RegistrationForm from './components/RegistrationForm';

import { ThemeProvider } from './themeContext';
import withLogging from './components/withLogging';
import ThemePage from './components/ThemePage';

const LoggedLifecycleComponent = withLogging(LifecycleComponent);

const App = () => (
  <div className="text-center" style={{ margin: '50px', padding: '10px' }}>
        <h1 style={{ margin: '10px', padding: '10px' }}>PROJECT-TASK-2</h1>
  <ThemeProvider>
    <Router>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<h1 className="text-center">Welcome Home</h1>} />
          <Route path="/names" element={<NameList names={['Alice', 'Bob', 'Charlie']} />} />
          <Route path="/lifecycle" element={<LoggedLifecycleComponent />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/theme" element={<ThemePage />} /> {/* Add ThemePage route */}
        </Routes>
      
    </Router>
  </ThemeProvider>
  </div>
);

export default App;
