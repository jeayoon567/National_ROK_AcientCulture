import React, { useState } from 'react';
import LoginView from './components/LoginView';
import LoadingView from './components/LoadingView';
import IntranetDashboard from './components/IntranetDashboard';
import './App.css';

export default function App() {
  // Navigation View State: 'login' | 'loading' | 'main'
  const [viewState, setViewState] = useState('login');

  const handleLoginSuccess = () => {
    setViewState('loading');
  };

  const handleLoadingComplete = () => {
    setViewState('main');
  };

  const handleLogout = () => {
    setViewState('login');
  };

  return (
    <>
      {viewState === 'login' && (
        <LoginView onLoginSuccess={handleLoginSuccess} />
      )}

      {viewState === 'loading' && (
        <LoadingView onComplete={handleLoadingComplete} />
      )}

      {viewState === 'main' && (
        <IntranetDashboard onLogout={handleLogout} />
      )}
    </>
  );
}
