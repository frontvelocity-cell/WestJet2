import React, { useState } from 'react';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqData = [
    {
      question: "Does making a booking with Al Majlis guarantee that the service will be provided?",
      answer: "Yes, booking with Al Majlis guarantees that the premium lounge service will be provided as per your reservation details."
    },
    {
      question: "Why is there a need for the passenger to pre-register for the Al Majlis service?",
      answer: "Pre-registration is required to ensure availability and proper preparation of your VIP lounge experience."
    },
    {
      question: "Does booking Al Majlis service entitle the passenger to airline benefits such as upgrades and excess baggage allowances?",
      answer: "Al Majlis service is separate from airline benefits. Please check with your airline for specific upgrade and baggage policies."
    },
    {
      question: "Why is there a need to submit credit card details when booking?",
      answer: "Credit card details are required for secure payment processing and to guarantee your reservation."
    },
    {
      question: "Can passengers that report late for a flight, and refused by the airline, request for a refund?",
      answer: "Refund policies for late passengers depend on the specific circumstances and our terms and conditions."
    },
    {
      question: "Can no-show passenger request for a refund?",
      answer: "No-show passengers may be eligible for partial refunds based on our cancellation policy and timing."
    },
    {
      question: "Can passengers that advise cancellation, prior to 24 hours of the flight, opt to hold the payment with us?",
      answer: "Yes, passengers who cancel 24 hours before their flight may have options to hold payment for future bookings."
    }
  ];

  const toggleExpansion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div style={{
      backgroundColor: '#000',
      minHeight: 'calc(100vh - 270px)',
      padding: '64px 0 86px'
    }}>
      <div className="container">
        <h2 style={{
          color: '#bbbbbb',
          fontSize: '24px',
          textAlign: 'center',
          marginBottom: '77px',
          fontWeight: 'normal'
        }}>
          Questions we often get from our customers
        </h2>
        
        <div style={{
          maxWidth: '1157px',
          margin: '0 auto'
        }}>
          {faqData.map((faq, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: '#000',
                border: '1px solid #333',
                marginBottom: '44px',
                position: 'relative'
              }}
            >
              <div 
                onClick={() => toggleExpansion(index)}
                style={{
                  padding: '33px 62px 33px 29px',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  minHeight: '86px'
                }}
              >
                <span style={{
                  color: '#bbbbbb',
                  fontSize: '16px',
                  lineHeight: '1.2',
                  flex: 1
                }}>
                  {faq.question}
                </span>
                
                <div style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#efa04f',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: '20px',
                  flexShrink: 0
                }}>
                  <span style={{
                    color: '#000',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    transform: expandedIndex === index ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.3s'
                  }}>
                    +
                  </span>
                </div>
              </div>
              
              {expandedIndex === index && (
                <div style={{
                  padding: '0 29px 33px',
                  borderTop: '1px solid #333'
                }}>
                  <p style={{
                    color: '#bbbbbb',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    marginTop: '20px'
                  }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;