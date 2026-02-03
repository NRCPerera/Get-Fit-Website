import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gym from './pages/Gym';
import CoffeeBar from './pages/CoffeeBar';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RefundPolicy from './pages/RefundPolicy';
import './App.css';

// Admin imports
import { AuthProvider, useAuth } from './admin/context/AuthContext';
import Layout from './admin/components/layout/Layout';
import {
  Dashboard,
  Login as AdminLogin,
  Users,
  Exercises,
  AddExercise,
  EditExercise,
  Payments,
  Allocations,
  Analytics,
  Notifications,
  CreateNotification,
  EditNotification
} from './admin/pages';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Protected Route for Admin
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#121212'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '2px solid rgba(255,255,255,0.1)',
          borderTopColor: '#00D4FF',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

// Public route wrapper (redirects to dashboard if already logged in)
function PublicRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (user) {
    return <Navigate to="/admin" replace />;
  }

  return children;
}

// Admin Routes Component
function AdminRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="login" element={
          <PublicRoute>
            <AdminLogin />
          </PublicRoute>
        } />
        <Route path="/*" element={
          <ProtectedRoute>
            <Layout>
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path="users" element={<Users />} />
                <Route path="exercises" element={<Exercises />} />
                <Route path="exercises/new" element={<AddExercise />} />
                <Route path="exercises/edit/:id" element={<EditExercise />} />
                <Route path="payments" element={<Payments />} />
                <Route path="allocations" element={<Allocations />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="notifications/create" element={<CreateNotification />} />
                <Route path="notifications/edit/:id" element={<EditNotification />} />
              </Routes>
            </Layout>
          </ProtectedRoute>
        } />
      </Routes>
    </AuthProvider>
  );
}

// Main website layout wrapper
function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="app">
      <ScrollToTop />
      {isAdminRoute ? (
        <Routes>
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      ) : (
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gym" element={<Gym />} />
            <Route path="/coffee" element={<CoffeeBar />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/refunds" element={<RefundPolicy />} />
          </Routes>
        </MainLayout>
      )}
    </div>
  );
}

export default App;

