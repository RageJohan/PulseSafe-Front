import React, { useState, useEffect } from 'react';
import SplashScreen from './screens/SplashScreenView';
import Navigation from './Navigation';

export default function App() {
    const [isShowSplash, setIsShowSplash] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsShowSplash(false);
        }, 2000); // Muestra el splash screen durante 2 segundos
    }, []);

    if (isShowSplash) {
        return <SplashScreen />;
    }

    return <Navigation />;
}