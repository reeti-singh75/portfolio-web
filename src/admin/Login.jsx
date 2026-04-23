import React, { useState, useEffect } from 'react';
import './admin.css';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // If already authenticated, redirect to /admin
  useEffect(() => {
    const unsub = auth.onAuthStateChanged?.((user) => {
      if (user) navigate('/admin', { replace: true });
    });
    return () => unsub && unsub();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // on success navigate to admin dashboard
      navigate('/admin', { replace: true });
    } catch (err) {
      console.error('Login error', err);
      setError(err.message || 'Failed to sign in');
      setLoading(false);
    }
  };

  return (
    <div className="admin-root">
      <div className="admin-card login-card">
        <h2 className="admin-title">Admin Sign In</h2>
        <p className="admin-sub">Enter your credentials to access messages</p>

        <form onSubmit={handleSubmit} className="admin-form">
          <input
            className="admin-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="admin-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="admin-btn" type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          {error && <div className="admin-error">{error}</div>}
        </form>

        <div className="admin-note">You will be redirected to the secure dashboard on success.</div>
      </div>
    </div>
  );
};

export default AdminLogin;
