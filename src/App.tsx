import React from 'react';
import { ArrowRight, ShoppingBag, Store, Building2, Globe, Fuel } from 'lucide-react';
import './index.css';

interface LinkItem {
  title: string;
  url: string;
  icon: React.ReactNode;
}

function App() {
  const links: LinkItem[] = [
    {
      title: 'Lama Wholesale',
      url: 'https://lamawholesale.com',
      icon: <ShoppingBag size={22} />,
    },
    {
      title: 'Lama Convenience',
      url: 'https://lamaconvenience.com',
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
    },
    {
      title: 'Lama Fuel',
      url: 'https://lamafuel.com',
      icon: <Fuel size={22} />,
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
