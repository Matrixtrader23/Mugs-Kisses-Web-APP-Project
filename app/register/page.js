"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import { auth, database } from '@/lib/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, set } from 'firebase/database';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Update display name
      await updateProfile(user, { displayName: name });
      
      // Save to database
      await set(ref(database, 'users/' + user.uid), {
        fullName: name,
        email: email,
        createdAt: new Date().toISOString()
      });

      router.push('/dashboard');
    } catch (err) {
      setError('Failed to create account. ' + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="auth-page">
        <div className="container auth-container">
          <div className="auth-card glass">
            <h1 className="auth-title">Create Account</h1>
            <p className="auth-subtitle">Join us to order your favorite coffee and treats.</p>
            
            {error && <div style={{ color: 'red', marginBottom: '16px', textAlign: 'center', fontSize: '14px', background: '#ffe6e6', padding: '10px', borderRadius: '8px' }}>{error}</div>}

            <form className="auth-form" onSubmit={handleRegister}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Enter your full name" 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  placeholder="Create a password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <button type="submit" className="btn-primary-large auth-btn" disabled={loading}>
                {loading ? 'Creating Account...' : 'Sign Up'}
              </button>
            </form>
            
            <div className="auth-footer">
              <p>Already have an account? <Link href="/login">Sign in</Link></p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
