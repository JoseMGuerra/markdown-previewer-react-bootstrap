import React from 'react';

import './header.css';

function Header() {
  return (
    <div className="header container">
      <div className='row'>
        <div className='col text-center mx-auto'>
            <h1 className="badge text-align-center">
                   Markdown Previewer
            </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;