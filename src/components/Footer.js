import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#000',
      borderTop: '1px solid #999',
      height: '83px',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      }}>
        <div style={{
          display: 'flex',
          gap: '84px'
        }}>
          <a href="#" style={{
            color: '#efa04f',
            textDecoration: 'none',
            fontSize: '14px'
          }}>
            Terms & conditions
          </a>
          
          <a href="#" style={{
            color: '#efa04f',
            textDecoration: 'none',
            fontSize: '14px'
          }}>
            Privacy policy
          </a>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '38px',
          alignItems: 'center'
        }}>
          {/* Facebook Icon */}
          <div style={{
            width: '15px',
            height: '29px',
            backgroundColor: '#efa04f',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '8px',
              left: '6px',
              width: '3px',
              height: '13px',
              backgroundColor: '#000'
            }} />
          </div>
          
          {/* Twitter Icon */}
          <div style={{
            width: '29px',
            height: '29px',
            backgroundColor: '#efa04f',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{
              color: '#000',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              T
            </span>
          </div>
          
          {/* Instagram Icon */}
          <div style={{
            width: '29px',
            height: '29px',
            backgroundColor: '#efa04f',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{
              color: '#000',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              I
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;