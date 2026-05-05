import React from 'react';

const Packages = () => {
  const packages = [
    {
      name: "Premium Lounge Access",
      price: "$150",
      features: [
        "Access to VIP lounge",
        "Complimentary refreshments",
        "Wi-Fi access",
        "Comfortable seating"
      ]
    },
    {
      name: "Deluxe Experience",
      price: "$250",
      features: [
        "All Premium features",
        "Personal concierge service",
        "Priority boarding assistance",
        "Spa services"
      ]
    },
    {
      name: "Royal Treatment",
      price: "$400",
      features: [
        "All Deluxe features",
        "Private suite access",
        "Gourmet dining",
        "Chauffeur service"
      ]
    }
  ];

  return (
    <div style={{
      backgroundColor: '#000',
      minHeight: 'calc(100vh - 270px)',
      padding: '80px 0'
    }}>
      <div className="container">
        <h1 className="section-title">Our Packages</h1>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          marginTop: '60px'
        }}>
          {packages.map((pkg, index) => (
            <div key={index} style={{
              backgroundColor: '#111',
              border: '1px solid #333',
              padding: '40px 30px',
              textAlign: 'center',
              borderRadius: '8px'
            }}>
              <h3 style={{
                color: '#efa04f',
                fontSize: '24px',
                marginBottom: '20px'
              }}>
                {pkg.name}
              </h3>
              
              <div style={{
                color: '#fff',
                fontSize: '36px',
                fontWeight: 'bold',
                marginBottom: '30px'
              }}>
                {pkg.price}
              </div>
              
              <ul style={{
                listStyle: 'none',
                padding: 0,
                marginBottom: '30px'
              }}>
                {pkg.features.map((feature, idx) => (
                  <li key={idx} style={{
                    color: '#bbbbbb',
                    fontSize: '16px',
                    marginBottom: '10px',
                    padding: '5px 0'
                  }}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              
              <button className="btn-golden">
                SELECT PACKAGE
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;