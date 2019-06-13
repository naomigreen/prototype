import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import About from "../pages/About";
import Products from "../pages/Products";
import Footer from "../footer/Footer";
import "./styles.css";

function Main(props) {
  const { data } = props;
  const [account, setAccount] = useState([]);

  function changeAccount(value) {
    const filteredAccounted =
      data && data.companies
        ? data.companies.filter(account => account.name === value)
        : null;

    setAccount(filteredAccounted[0]);
  }

  if (data && data.companies) {
    const companies = data.companies;
    const setCompany = account;
    const defaultCompany = data.companies[0];

    return (
      <div id="main" style={{ background: setCompany.bg || defaultCompany.bg }}>
        <div id="content">
          <Router>
            <div
              id="nav-bar"
              style={{
                background: setCompany.nav || defaultCompany.nav,
                borderColor: setCompany.border || defaultCompany.border
              }}
            >
              <div id="logo">
                <img src={setCompany.logo || defaultCompany.logo} alt="" />
              </div>
              <div id="nav">
                <NavLink
                  activeClassName="active-link"
                  className="header-link"
                  to="/products"
                >
                  Products
                </NavLink>
                <NavLink
                  activeClassName="active-link"
                  className="header-link"
                  to="/about"
                >
                  About
                </NavLink>
              </div>
              <div id="style-controls">
                {companies.map(company => (
                  <button
                    key={company.id}
                    onClick={() => changeAccount(company.name)}
                  >
                    {company.name}
                  </button>
                ))}
              </div>
            </div>
            <Route
              path="/products"
              render={props => (
                <Products
                  {...props}
                  setCompany={setCompany}
                  defaultCompany={defaultCompany}
                />
              )}
            />
            <Route
              path="/about"
              render={props => (
                <About
                  {...props}
                  setCompany={setCompany}
                  defaultCompany={defaultCompany}
                />
              )}
            />
          </Router>
        </div>
        <Footer />
      </div>
    );
  } else {
    return null;
  }
}

export default Main;
