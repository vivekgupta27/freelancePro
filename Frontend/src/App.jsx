import { Routes, Route } from 'react-router-dom';
import { useState,useContext, useEffect } from 'react';

import MainLayout from './shared/layout/MainLayout';
import ProtectedRoute from './shared/layout/ProtectedRoute';
import AuthRoute from './shared/layout/AuthRoute';

import DashboardPage from './features/dashboard/DashboardPage';
import ClientPage from './features/clients/ClientPage';
import AddClient from './features/clients/AddClient';
import Edit from './features/clients/Edit';
import ProposalPage from './features/proposals/ProposalPage';
import SettingsPage from './features/settings/SettingsPage';

import Login from './features/auth/Login.jsx';
import SignUp from "./features/auth/Signup.jsx"
import {useSelector,useDispatch} from 'react-redux';
import LandingPage from './features/landing/LandingPage.jsx';
import {UserContext} from './shared/ClientRedux.jsx';

const App = () => {
   const {isLoggedIn}=useSelector((state)=>state.userState);

const { authenticated, setAuthenticated,loading}=useContext(UserContext);


if (loading) {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-violet-500"></div>
    </div>
  );
}
  return (
    <Routes>


   
      {/* Public Routes (Login, Signup, Landing) */}
      <Route
        path="/signin"
        element={
          <AuthRoute isAuthenticated={isLoggedIn}>
            <Login setAuthenticated={setAuthenticated} />
          </AuthRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <AuthRoute isAuthenticated={isLoggedIn}>
            <SignUp />
          </AuthRoute>
        }
      />
      <Route path="/" element={<LandingPage />} />

      {/* Protected Routes */}
      <Route
        path="/*"
        element={
          <ProtectedRoute isAuthenticated={isLoggedIn}>
            <MainLayout>
              <Routes>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/clients" element={<ClientPage />} />
                <Route path="/addClient" element={<AddClient />} />
                <Route path="/edit" element={<Edit />} />
                <Route path="/proposals" element={<ProposalPage />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Routes>
            </MainLayout>
          </ProtectedRoute>
        }
      />

    </Routes>
  );
};

export default App;
