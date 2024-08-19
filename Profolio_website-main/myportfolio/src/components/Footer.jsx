import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-black text-light py-3 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 text-center">
          <p className="mylogo" >
        Fahad Shafiq
      </p>
          </div>
          <div className="col-sm-4 text-center">
            <h5>Section 2</h5>
            <p>Content for section 2</p>
          </div>
          <div className="col-sm-4 text-center">
            <h5>Section 3</h5>
            <p>Content for section 3</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <p> &copy; {
            new Date().getFullYear()} 
            Your Company. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
