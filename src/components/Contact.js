import React from 'react';

const Contact = () => {
  return (
    <div style={{
      backgroundColor: '#000',
      minHeight: 'calc(100vh - 270px)',
      padding: '80px 0'
    }}>
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        
        <div style={{
          maxWidth: '600px',
          margin: '60px auto 0',
          backgroundColor: '#111',
          border: '1px solid #333',
          padding: '40px',
          borderRadius: '8px'
        }}>
          <div style={{
            marginBottom: '30px'
          }}>
            <h3 style={{
              color: '#efa04f',
              fontSize: '18px',
              marginBottom: '10px'
            }}>
              Phone
            </h3>
            <p style={{
              color: '#bbbbbb',
              fontSize: '16px'
            }}>
              +971 4 224 5555
            </p>
          </div>
          
          <div style={{
            marginBottom: '30px'
          }}>
            <h3 style={{
              color: '#efa04f',
              fontSize: '18px',
              marginBottom: '10px'
            }}>
              Email
            </h3>
            <p style={{
              color: '#bbbbbb',
              fontSize: '16px'
            }}>
              info@almajlisvip.com
            </p>
          </div>
          
          <div style={{
            marginBottom: '30px'
          }}>
            <h3 style={{
              color: '#efa04f',
              fontSize: '18px',
              marginBottom: '10px'
            }}>
              Address
            </h3>
            <p style={{
              color: '#bbbbbb',
              fontSize: '16px'
            }}>
              Dubai International Airport<br />
              Terminal 3, Concourse A<br />
              Dubai, UAE
            </p>
          </div>
          
          <div>
            <h3 style={{
              color: '#efa04f',
              fontSize: '18px',
              marginBottom: '10px'
            }}>
              Operating Hours
            </h3>
            <p style={{
              color: '#bbbbbb',
              fontSize: '16px'
            }}>
              24/7 Service Available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;