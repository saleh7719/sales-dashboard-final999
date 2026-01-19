import React from 'react';
import './App.css';

function App() {
  return (
    <div className="security-app">
      {/* Sidebar القائمة الجانبية */}
      <aside className="nav-sidebar">
        <div className="brand">🛡️ SAFE-CORE</div>
        <nav>
          <div className="menu-link active">Live Monitor</div>
          <div className="menu-link">Network Map</div>
          <div className="menu-link">Threat Intelligence</div>
          <div className="menu-link">Settings</div>
        </nav>
      </aside>

      {/* Main Content المحتوى الرئيسي */}
      <main className="content-area">
        <header className="top-bar">
          <h2>Network Status: <span className="status-online">Protected</span></h2>
          <div className="user-info">Operator: Saleh</div>
        </header>

        {/* Action Cards كروت المراقبة */}
        <div className="monitor-grid">
          <div className="monitor-card alert">
            <h4>Critical Threats</h4>
            <p className="value">02</p>
          </div>
          <div className="monitor-card safe">
            <h4>Active Connections</h4>
            <p className="value">1,420</p>
          </div>
          <div className="monitor-card warning">
            <h4>Blocked Attacks</h4>
            <p className="value">89</p>
          </div>
        </div>

        {/* Live Logs جدول السجلات الحية */}
        <div className="logs-panel">
          <h3>Real-time Security Logs</h3>
          <table className="log-table">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Source IP</th>
                <th>Event Type</th>
                <th>Risk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>08:14:22</td>
                <td>172.16.254.1</td>
                <td>IP Spoofing Attempt</td>
                <td><span className="badge-red">High</span></td>
              </tr>
              <tr>
                <td>08:12:05</td>
                <td>10.0.0.52</td>
                <td>Unauthorized Login</td>
                <td><span className="badge-orange">Medium</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;