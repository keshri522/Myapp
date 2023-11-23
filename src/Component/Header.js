import React from "react";
import "./Style.css";
import img1 from "../Images/image1.png";
import { Link } from "react-router-dom";

function Header() {
  var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
  (function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/5584dd8aea0398b656bd0724/default";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  })();

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img className="brand" src={img1} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/training" className="">
                  Training
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link
                  to="/training"
                  className=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Training
                </Link>
                {/* <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/option1">
                      Live Classes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/option2">
                      Offline classes
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/training">
                      Our Trainings
                    </a>
                  </li>
                </ul> */}
              {/* </li> */}
              <li className="nav-item">
                <Link to="/consulting" className="">
                  Counsulting
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Analytics" className="">
                  Analytics
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Support" className="">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <div class="d-md-flex">
              <p>
                <a type="button" className="btn" href="/globe">
                  <i className="fa-solid fa-globe fa-2xl"></i>
                </a>
              </p>
              <p>
                <Link to="/cart" className="btn">
                  <i className="fa-solid fa-cart-shopping fa-2xl"></i>
                  {/* {cartCount > 0 && (
                    <span className="cart-count"></span>
                  )} */}
                </Link>
              </p>
              <p>
                <a type="button" className="btn" href="/message">
                  <i className="fa-solid fa-message fa-2xl"></i>
                </a>
              </p>
              <p>
                <a type="button" className="btn" href="/user">
                  <Link to="/login">
                    <i className="fa-solid fa-user-plus fa-2xl"></i>
                  </Link>
                </a>
              </p>
              <p>
                <a type="button" className="btn" href="/menus">
                  <i className="fa-solid fa-bars fa-2xl"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </nav>
      <div className="Navbar_2">
        <div className="d-flex subnav justify-content-end">
          <li>
            <a href="/company">Company</a>
          </li>
          <li>
            <a href="/vision">Vision & Mission</a>
          </li>
          <li>
            <a href="Sas">Why SAS</a>
          </li>
        </div>
      </div>
    </>
  );
}

export default Header;
