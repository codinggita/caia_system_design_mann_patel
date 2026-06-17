import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from './features/auth/authSlice';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const dispatch = useDispatch();
  const { isInitialized, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token && !isInitialized) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, token, isInitialized]);

  if (!isInitialized) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'var(--color-snow, #f8fafc)' }}>
        <div className="spinner" style={{ width: '40px', height: '40px', border: '3px solid rgba(0,0,0,0.1)', borderTopColor: '#3B82F6', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Toaster position="top-right" />
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
