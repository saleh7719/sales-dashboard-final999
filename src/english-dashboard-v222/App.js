import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <nav className="side-nav">
        <div className="brand">
          <div className="brand-box">S</div>
          <span>SOLO TECH</span>
        </div>
        
        <div className="nav-section">
          <p className="section-title">OVERVIEW</p>
          <div className="nav-link active">📊 Analytics</div>
          <div className="nav-link">🚀 Projects</div>
          <div className="nav-link">🛡️ Security Scan</div>
        </div>

        <div className="nav-section">
          <p className="section-title">ADMINISTRATION</p>
          <div className="nav-link">👥 Team Members</div>
          <div className="nav-link">⚙️ System Settings</div>
        </div>

        <button className="logout-action">Sign Out</button>
      </nav>

      {/* Main Dashboard Content */}
      <main className="main-viewport">
        <header className="main-header">
          <div className="header-info">
            <h1>System Overview</h1>
            <p>Welcome back, Admin. Here's what's happening today.</p>
          </div>
          <div className="header-search">
            <input type="text" placeholder="Search assets..." />
          </div>
        </header>

        {/* Dynamic Metric Cards */}
        <section className="metrics-row">
          <div className="metric-card">
            <span className="label">Active Projects</span>
            <h2 className="value">08</h2>
            <div className="trend up">+12% vs last month</div>
          </div>
          <div className="metric-card">
            <span className="label">Critical Issues</span>
            <h2 className="value red">34</h2>
            <div className="trend down">-5% resolution rate</div>
          </div>
          <div className="metric-card">
            <span className="label">Scanning Now</span>
            <h2 className="value blue">02</h2>
            <div className="trend">Real-time monitoring</div>
          </div>
        </section>

        {/* Project Tracking Table */}
        <section className="data-table-container">
          <div className="table-top">
            <h3>Recent Scans</h3>
            <button className="btn-primary">New Scan</button>
          </div>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Risk Level</th>
                <th>Vulnerabilities</th>
                <th>Last Update</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Payment-Gateway-API</td>
                <td><span className="badge high">High Risk</span></td>
                <td>12H | 04M</td>
                <td>2026-01-14</td>
                <td><span className="status-dot online"></span> Running</td>
              </tr>
              <tr>
                <td>User-Auth-Module</td>
                <td><span className="badge low">Low Risk</span></td>
                <td>00H | 02M</td>
                <td>2026-01-12</td>
                <td><span className="status-dot idle"></span> Idle</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default App;