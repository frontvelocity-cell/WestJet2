import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{
      backgroundColor: '#000',
      minHeight: 'calc(100vh - 270px)',
      padding: '80px 0'
    }}>
      <div className="container">
        <div style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 style={{
            color: '#bbbbbb',
            fontSize: '48px',
            marginBottom: '30px',
            fontWeight: 'normal'
          }}>
            Welcome to <span style={{ color: '#efa04f' }}>Al Majlis</span>
          </h1>
          
          <p style={{
            color: '#bbbbbb',
            fontSize: '18px',
            lineHeight: '1.6',
            marginBottom: '50px'
          }}>
            Experience the ultimate in luxury travel with our exclusive VIP lounge services at Dubai International Airport. 
            Enjoy premium amenities, personalized service, and unparalleled comfort.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '30px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/packages">
              <button className="btn-golden">
                VIEW PACKAGES
              </button>
            </Link>
            
            <Link to="/faqs">
              <button style={{
                backgroundColor: 'transparent',
                color: '#efa04f',
                border: '2px solid #efa04f',
                padding: '12px 24px',
                borderRadius: '4px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}>
                VIEW FAQS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;