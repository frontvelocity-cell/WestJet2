import React from 'react';

const Logo = () => {
  return (
    <div style={{
      width: '141px',
      height: '125px',
      position: 'relative'
    }}>
      {/* Main logo background */}
      <div style={{
        position: 'absolute',
        left: '15.19px',
        top: '0px',
        width: '125.81px',
        height: '125px',
        background: 'linear-gradient(135deg, #996133 0%, #b88a4d 14%, #d4b067 29%, #e5c778 42%, #ecd07e 49%, #ddbba9 59%, #cf9757 73%, #c69b4b 87%, #c49745 100%)',
        borderRadius: '50%'
      }} />
      
      {/* Crown element */}
      <div style={{
        position: 'absolute',
        left: '0px',
        top: '7.32px',
        width: '25.81px',
        height: '17.76px',
        backgroundColor: '#fff'
      }} />
      
      {/* Crown detail */}
      <div style={{
        position: 'absolute',
        left: '20.51px',
        top: '13.61px',
        width: '5.29px',
        height: '9.12px',
        backgroundColor: '#231f20'
      }} />
      
      {/* Crown top */}
      <div style={{
        position: 'absolute',
        left: '22.01px',
        top: '11.25px',
        width: '24.74px',
        height: '17.76px',
        backgroundColor: '#ffdf00'
      }} />
      
      {/* Bottom decorative element */}
      <div style={{
        position: 'absolute',
        left: '48.21px',
        top: '37.21px',
        width: '81.39px',
        height: '79.09px',
        background: 'linear-gradient(0deg, #976133 0%, #b2784f 5%, #cc905c 9%, #996133 19%, #9d6634 24%, #a9773f 30%, #bd924d 37%, #d9b76c 45%, #ecd07e 49%, #fcdc8f 55%, #dfbd6b 63%, #cba151 70%, #c49745 74%, #c69948 79%, #cea249 82%, #dcb15a 86%, #efcb69 88%, #fbd372 89%, #d4a856 95%, #d2aa52 98%, #d2ab50 99%)',
        borderRadius: '50%'
      }} />
      
      {/* Text elements */}
      <div style={{
        position: 'absolute',
        left: '84.71px',
        top: '80.19px',
        width: '32.02px',
        height: '8.87px',
        color: '#fff',
        fontSize: '8px',
        fontWeight: 'bold'
      }}>
        MAJLIS
      </div>
      
      <div style={{
        position: 'absolute',
        left: '44.49px',
        top: '94.97px',
        width: '72.92px',
        height: '22.72px',
        color: '#fff',
        fontSize: '10px'
      }}>
        AL MAJLIS
      </div>
    </div>
  );
};

export default Logo;