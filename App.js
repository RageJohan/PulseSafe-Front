import React, { useState, useEffect } from 'react';
import SplashScreen from './screens/SplashScreenView';
import Navigation from './Navigation';
import AuthProvider from './context/AuthContext';


export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    // Muestra el splash screen durante 2 segundos
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isShowSplash) {
    return <SplashScreen />;
  }

  // Envuelve toda la navegación dentro del AuthProvider
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
