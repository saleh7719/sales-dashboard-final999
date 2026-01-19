import React from 'react';
import './App.css';

const CyberGridApp = () => {
  const projects = [
    { id: 'PX-1', name: 'Core_Neural_Scan', risk: 'Critical', status: '88%', health: 'Stable' },
    { id: 'PX-2', name: 'Auth_Protocol_V3', risk: 'Medium', status: '42%', health: 'Warning' },
    { id: 'PX-3', name: 'Database_Mirror', risk: 'Low', status: '100%', health: 'Optimal' },
  ];

  return (
    <div className="flex">
      {/* Slim Sidebar */}
      <nav className="sidebar-slim">
        <div className="my-8 text-blue-500 font-black text-2xl italic">G</div>
        <div className="nav-icon-box active">🏠</div>
        <div className="nav-icon-box">📊</div>
        <div className="nav-icon-box">🛡️</div>
        <div className="nav-icon-box mt-auto mb-8">⚙️</div>
      </nav>

      {/* Main Container */}
      <main className="content-area w-full">
        {/* Top Header */}
        <header className="flex justify-between items-center mb-16">
          <div>
            <h1 className="text-4xl font-light tracking-tighter">THE <span className="font-black text-blue-500">GRID</span></h1>
            <p className="text-slate-500 text-xs mt-1 uppercase tracking-widest">Autonomous Security Node v4.0</p>
          </div>
          <div className="glass-panel px-6 py-2 flex items-center gap-4">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-tighter">System ID: Admin-009</span>
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs">A</div>
          </div>
        </header>

        {/* Horizontal Stat Cards */}
        <div className="grid grid-cols-4 gap-6 mb-16">
          <StatItem label="Total Threads" value="12,042" />
          <StatItem label="Active Nodes" value="84" />
          <StatItem label="Uptime" value="99.99%" />
          <StatItem label="Risk Index" value="0.02" />
        </div>

        {/* Data Table Section */}
        <div className="glass-panel p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold italic">Active_Deployments</h2>
            <button className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-full text-xs font-bold transition">INITIATE SCAN</button>
          </div>

          <table className="cyber-table">
            <thead>
              <tr>
                <th>Identifier</th>
                <th>Security_Risk</th>
                <th>Integrity_Load</th>
                <th>Node_Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.id}>
                  <td className="font-black text-blue-400">{p.name}</td>
                  <td>
                    <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-full ${p.risk === 'Critical' ? 'bg-red-500/20 text-red-500' : 'bg-blue-500/20 text-blue-500'}`}>
                      {p.risk}
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-1 bg-slate-800 rounded-full">
                        <div style={{width: p.status}} className="h-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></div>
                      </div>
                      <span className="text-xs font-bold text-slate-500">{p.status}</span>
                    </div>
                  </td>
                  <td className="text-xs font-medium text-slate-300 italic">{p.health}</td>
                  <td className="text-slate-500">•••</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

// Stat Item Component
const StatItem = ({ label, value }) => (
  <div className="glass-panel metric-card">
    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">{label}</p>
    <p className="text-3xl font-black text-white">{value}</p>
  </div>
);

export default CyberGridApp;