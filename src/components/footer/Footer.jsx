import React from 'react';

const footerStyle = {
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  padding:"2rem",
  marginTop:"3rem",
  backgroundColor:"var(--color-footer)",
  color:"var(--color-subtext)",
}


function Footer() {
  return (
    <div className="footer" style={footerStyle}>
      <p>Developed by JoseMG for educational purpose only.</p>
    </div>
  );
}

export default Footer;