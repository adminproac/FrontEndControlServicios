import React from 'react';

export const Navbar = ({ branch }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-dark" href="#!">
          {branch}
        </a>
      </div>
    </nav>
  );
};
