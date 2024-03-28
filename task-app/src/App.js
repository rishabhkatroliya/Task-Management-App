import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProtectedRoute from './Route/ProtectedRoute';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import UpdateTask from './components/UpdateTask';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  return (
    
      <div className="App">
        <Routes>
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route
        path="/"
        element={
          <ProtectedRoute>
            <TaskList />
          </ProtectedRoute>
        }
      />
        <Route
        path="/add"
        element={
          <ProtectedRoute>
            <AddTask />
          </ProtectedRoute>
        }
      />
        <Route
        path="/update/:id"
        element={
          <ProtectedRoute>
            <UpdateTask />
          </ProtectedRoute>
        }
      />
         <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      
                   </Routes>
      </div>
    
  );
}

export default App;