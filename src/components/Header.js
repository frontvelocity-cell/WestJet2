import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header style={{
      backgroundColor: '#000',
      height: '187px',
      position: 'relative',
      borderBottom: '1px solid #999'
    }}>
      <div className="container" style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '31px 20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <Logo />
          <div style={{ marginLeft: '177px', marginTop: '0px' }}>
            <h1 style={{
              color: '#bbbbbb',
              fontSize: '36px',
              lineHeight: '1.2',
              margin: 0,
              width: '608px'
            }}>
              Enjoy exclusive air travel with<br />
              DXB VIP Lounge service
            </h1>
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 'auto'
        }}>
          <nav style={{ display: 'flex', gap: '88px' }}>
            <Link 
              to="/" 
              style={{
                color: isActive('/') ? '#efa04f' : '#efa04f',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 'bold',
                borderBottom: isActive('/') ? '4px solid #efa04f' : 'none',
                paddingBottom: '4px'
              }}
            >
              HOME
            </Link>
            <Link 
              to="/packages" 
              style={{
                color: '#efa04f',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
            >
              PACKAGES
            </Link>
            <Link 
              to="/partners" 
              style={{
                color: '#efa04f',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
            >
              PARTNERS
            </Link>
            <Link 
              to="/faqs" 
              style={{
                color: isActive('/faqs') ? '#efa04f' : '#efa04f',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 'bold',
                borderBottom: isActive('/faqs') ? '4px solid #efa04f' : 'none',
                paddingBottom: '4px'
              }}
            >
              FAQS
            </Link>
            <Link 
              to="/contact" 
              style={{
                color: '#efa04f',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
            >
              CONTACT
            </Link>
            <span style={{
              color: '#efa04f',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              العربية
            </span>
          </nav>
          
          <button style={{
            backgroundColor: '#efa04f',
            color: '#000',
            border: 'none',
            padding: '15px 46px',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
            opacity: 0.99
          }}>
            BOOK NOW
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;