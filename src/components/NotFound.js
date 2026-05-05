import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
      backgroundColor: '#000',
      minHeight: 'calc(100vh - 270px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '600px',
        padding: '40px'
      }}>
        <h1 style={{
          color: '#efa04f',
          fontSize: '72px',
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          404
        </h1>
        
        <h2 style={{
          color: '#bbbbbb',
          fontSize: '32px',
          marginBottom: '20px',
          fontWeight: 'normal'
        }}>
          Page Not Found
        </h2>
        
        <p style={{
          color: '#bbbbbb',
          fontSize: '18px',
          marginBottom: '40px',
          lineHeight: '1.6'
        }}>
          Sorry, the page you are looking for doesn't exist. 
          Please check the URL or navigate back to our homepage.
        </p>
        
        <Link to="/">
          <button className="btn-golden">
            GO TO HOMEPAGE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;