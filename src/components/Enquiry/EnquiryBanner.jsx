import React from 'react';

function EnquiryBanner() {
  return (
    <div
      className="w-full h-[300px] bg-[#f5f5f5] flex justify-center items-center flex-col bg-cover bg-center"
      style={{ backgroundImage: 'url("/enquiry/Frame 35.png")' }}
    >
      <h1 className="text-3xl font-bold text-center">Get in Touch</h1>
      <p>Reach out to discuss your event requirement or request a custom quote</p>
    </div>
  );
}

export default EnquiryBanner;
