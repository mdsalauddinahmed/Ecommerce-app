import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
 

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Hidden brand</a>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
      <NavLink className="nav-link active" aria-current="page" href="#">Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/register" className="nav-link" href="#">Register</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/login" className="nav-link" href="#">Login</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/cart" className="nav-link" href="#">cart(0)</NavLink>
    </li>
      </ul>
       
    </div>
  </div>
</nav>


        </>
    );
}

export default Header;
