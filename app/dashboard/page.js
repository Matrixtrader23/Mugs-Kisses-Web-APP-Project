"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push('/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <main className="dashboard-page flex-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2>Loading your dashboard...</h2>
        </main>
      </>
    );
  }

  const displayName = user?.displayName || user?.email?.split('@')[0] || 'Coffee Lover';

  return (
    <>
      <Header />
      <main className="dashboard-page">
        <div className="container">
          
          {/* 1. Welcome Section */}
          <div className="dashboard-header glass">
            <div className="user-info">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="Profile" className="avatar-placeholder" style={{ objectFit: 'cover' }} />
              ) : (
                <div className="avatar-placeholder">👤</div>
              )}
              <div>
                <h1 className="welcome-title">👋 Welcome back, {displayName}!</h1>
                <p className="welcome-subtitle">Ready for your next cozy coffee moment?</p>
              </div>
            </div>
            <button className="btn-outline" onClick={handleLogout}>Logout ⚙️</button>
          </div>

          {/* 2. Quick Actions */}
          <div className="quick-actions-grid">
            <Link href="/order" className="action-card glass">
              <span className="action-icon">☕</span>
              <h3>Order Now</h3>
              <p>Go to Order Page</p>
            </Link>
            <div className="action-card glass" onClick={() => setActiveTab('orders')}>
              <span className="action-icon">📦</span>
              <h3>My Orders</h3>
              <p>View order history</p>
            </div>
            <div className="action-card glass" onClick={() => setActiveTab('favorites')}>
              <span className="action-icon">❤️</span>
              <h3>Favorites</h3>
              <p>Saved items</p>
            </div>
            <div className="action-card glass" onClick={() => setActiveTab('profile')}>
              <span className="action-icon">👤</span>
              <h3>My Profile</h3>
              <p>Edit details</p>
            </div>
          </div>

          <div className="dashboard-content-grid">
            {/* Left Column */}
            <div className="dashboard-main-col">
              
              {/* 3. My Orders Section */}
              <section className="dashboard-section glass">
                <div className="section-header">
                  <h2>📦 Your Recent Orders</h2>
                  <Link href="/orders" className="text-link">View All</Link>
                </div>
                <div className="table-container">
                  <table className="orders-table">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#1023</td>
                        <td>Coffee + Cake</td>
                        <td>LKR 2000</td>
                        <td><span className="status-badge preparing">Preparing</span></td>
                        <td><button className="btn-small btn-outline">View Details</button></td>
                      </tr>
                      <tr>
                        <td>#1022</td>
                        <td>Latte</td>
                        <td>LKR 900</td>
                        <td><span className="status-badge delivered">Delivered</span></td>
                        <td><button className="btn-small btn-outline">View Details</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 4. Favorites Section */}
              <section className="dashboard-section glass">
                <h2>❤️ Your Favorites</h2>
                <div className="favorites-grid">
                  <div className="favorite-card">
                    <div className="fav-info">
                      <h4>Caramel Macchiato</h4>
                      <p>LKR 1200</p>
                    </div>
                    <div className="fav-actions">
                      <button className="btn-icon">❤️</button>
                      <button className="btn-primary btn-small">🛒 Add</button>
                    </div>
                  </div>
                  <div className="favorite-card">
                    <div className="fav-info">
                      <h4>Red Velvet Cake</h4>
                      <p>LKR 850</p>
                    </div>
                    <div className="fav-actions">
                      <button className="btn-icon">❤️</button>
                      <button className="btn-primary btn-small">🛒 Add</button>
                    </div>
                  </div>
                </div>
              </section>

            </div>

            {/* Right Column */}
            <div className="dashboard-side-col">
              
              {/* 5. Special Offers */}
              <section className="dashboard-section promo-section">
                <h2>🎁 Special Offers</h2>
                <div className="promo-card">
                  <h4>💖 Couple Combo Offer</h4>
                  <p>Get 10% OFF on 2 Coffees + 2 Pastries</p>
                </div>
                <div className="promo-card">
                  <h4>☕ Buy 2, Get 1 Free</h4>
                  <p>Applies to all Espresso based drinks</p>
                </div>
              </section>

              {/* 8. Notifications */}
              <section className="dashboard-section glass">
                <h2>🔔 Notifications</h2>
                <div className="notification-list">
                  <div className="notification-item unread">
                    <span className="notif-icon">🚚</span>
                    <p>Your order #1023 is on the way!</p>
                  </div>
                  <div className="notification-item">
                    <span className="notif-icon">💖</span>
                    <p>New Couple Combo offer available!</p>
                  </div>
                </div>
              </section>

              {/* 6. My Profile & 7. Saved Addresses */}
              <section className="dashboard-section glass">
                <h2>👤 Profile Summary</h2>
                <div className="profile-summary">
                  <p><strong>Name:</strong> {displayName}</p>
                  <p><strong>Email:</strong> {user?.email || 'Not provided'}</p>
                  <p><strong>Phone:</strong> {user?.phoneNumber || 'Not provided'}</p>
                  
                  <div className="address-block">
                    <strong>📍 Home Address:</strong>
                    <p>123 Coffee St, Colombo 03</p>
                  </div>
                  <div className="address-block">
                    <strong>📍 Work Address:</strong>
                    <p>45 Tech Park, Colombo 04</p>
                  </div>
                </div>
                
                {/* 9. Settings */}
                <div className="profile-actions">
                  <button className="btn-primary btn-small">Edit Profile</button>
                  <button className="btn-outline btn-small">⚙️ Settings</button>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
    </>
  );
}
