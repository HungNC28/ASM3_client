import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import LoginLink from "../../Authentication/LoginLink";
import LogoutLink from "../../Authentication/LogoutLink";
import Name from "../../Authentication/Name";

function Header(props) {
  const [active, setActive] = useState("Home");
  const [loginUser, setLoginUser] = useState(false);
  const [nameUser, setNameUser] = useState(false);
  const [hideCartIcon, setHideCartIcon] = useState(false);

  const idUser = useSelector((state) => state.user.userId);

  useEffect(() => {
    if (!idUser) {
      setLoginUser(false);
      setNameUser(false);
      setHideCartIcon(false);
    } else {
      setLoginUser(true);
      setNameUser(true);
      setHideCartIcon(true);
    }
  }, [idUser]);

  const handlerActive = (value) => {
    setActive(value);
    console.log(value);
  };

  return (
    <div className="container px-0 px-lg-3">
      <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
        <Link className="navbar-brand" to={`/`}>
          <span className="font-weight-bold text-uppercase text-dark">
            Boutique
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item" onClick={() => handlerActive("Home")}>
              <Link
                className="nav-link"
                to={`/`}
                style={
                  active === "Home" ? { color: "#dcb14a" } : { color: "black" }
                }
              >
                Home
              </Link>
            </li>
            <li className="nav-item" onClick={() => handlerActive("Shop")}>
              <Link
                className="nav-link"
                to={`/shop`}
                style={
                  active === "Shop" ? { color: "#dcb14a" } : { color: "black" }
                }
              >
                Shop
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {hideCartIcon ? (
              <li className="nav-item">
                <Link className="nav-link" to={`/cart`}>
                  <i className="fas fa-dolly-flatbed mr-1 text-gray"></i>
                  Cart
                </Link>
              </li>
            ) : (
              <></>
            )}
            {nameUser ? <Name /> : ""}
            {loginUser ? <LoginLink /> : <LogoutLink />}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
