import React from 'react';
import { ArrowRight, ShoppingBag, Store, Building2, Globe, Download } from 'lucide-react';
import './index.css';

interface LinkItem {
  title: string;
  url: string;
  icon: React.ReactNode;
}

function App() {
  const path = window.location.pathname;

  if (path === '/qr') {
    return (
      <div className="container">
        <header className="header">
          <div className="logo-container">
            <img src="/logo.png" alt="LaMa Group Logo" className="header-logo" />
            <h1 className="logo-title">
              <span className="logo-orange">LaMa</span>
              <span className="logo-black">Group</span>
            </h1>
          </div>
          <p className="subtitle">Download our official QR code</p>
        </header>
        
        <main className="links-container" style={{ alignItems: 'center', textAlign: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1.5rem', marginBottom: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'center' }}>
            <img src="/lama_qr_accent.png" alt="QR Code" style={{ width: '100%', maxWidth: '300px', height: 'auto' }} />
          </div>
          <a
            href="/lama_qr_accent.png"
            download="lama_group_qr.png"
            className="link-card"
            style={{ justifyContent: 'center', backgroundColor: '#ff6600', color: 'white', border: 'none' }}
          >
            <div className="link-content" style={{ justifyContent: 'center', width: '100%' }}>
              <Download size={20} style={{ marginRight: '10px' }} />
              <span className="link-title" style={{ color: 'white' }}>Download QR Code</span>
            </div>
          </a>
          <a
            href="/"
            className="link-card"
            style={{ justifyContent: 'center', marginTop: '1rem', backgroundColor: 'transparent', boxShadow: 'none', border: '1px solid #e5e7eb' }}
          >
            <span className="link-title">Return Home</span>
          </a>
        </main>
      </div>
    );
  }

  const links: LinkItem[] = [
    {
      title: 'Lama Wholesale',
      url: 'https://lamawholesale.com',
      icon: <ShoppingBag size={22} />,
    },
    {
      title: 'Lama Convenience',
      url: 'https://lamaconvenience.org/',
      icon: <Store size={22} />,
    },
    {
      title: 'LaMa Group',
      url: 'https://www.lama.group',
      icon: <Building2 size={22} />,
    },
    {
      title: 'Pasang Lama',
      url: 'https://pasanglama.com',
      icon: <Globe size={22} />,
    }
  ];

  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <img src="/logo.png" alt="LaMa Group Logo" className="header-logo" />
          <h1 className="logo-title">
            <span className="logo-orange">LaMa</span>
            <span className="logo-black">Group</span>
          </h1>
        </div>
        <p className="subtitle">Select a destination below to visit our websites and discover our services.</p>
      </header>

      <main className="links-container">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-card"
          >
            <div className="link-content">
              <div className="link-icon">
                {link.icon}
              </div>
              <span className="link-title">{link.title}</span>
            </div>
            <ArrowRight size={20} className="link-arrow" />
          </a>
        ))}
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} <a href="https://www.lama.group" className="footer-link">LaMa Group</a>. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
