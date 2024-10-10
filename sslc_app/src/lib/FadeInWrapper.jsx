import { useEffect, useState } from 'react';

const FadeInWrapper = ({ children }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100); // adjust timing as needed
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`fade-in ${loaded ? 'loaded' : ''}`}>
            {children}
        </div>
    );
};

export default FadeInWrapper;