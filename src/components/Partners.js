import React from 'react';

const Partners = () => {
  const partners = [
    { name: "Emirates Airlines", description: "Official airline partner" },
    { name: "Dubai Airports", description: "Airport services partner" },
    { name: "Luxury Hotels Group", description: "Accommodation partner" },
    { name: "Premium Car Rentals", description: "Transportation partner" }
  ];

  return (
    <div style={{
      backgroundColor: '#000',
      minHeight: 'calc(100vh - 270px)',
      padding: '80px 0'
    }}>
      <div className="container">
        <h1 className="section-title">Our Partners</h1>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          marginTop: '60px'
        }}>
          {partners.map((partner, index) => (
            <div key={index} style={{
              backgroundColor: '#111',
              border: '1px solid #333',
              padding: '30px 20px',
              textAlign: 'center',
              borderRadius: '8px'
            }}>
              <h3 style={{
                color: '#efa04f',
                fontSize: '20px',
                marginBottom: '15px'
              }}>
                {partner.name}
              </h3>
              
              <p style={{
                color: '#bbbbbb',
                fontSize: '14px'
              }}>
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;