import React from "react";
import UserIcon from "../../Assets/Icons/user_icon.png";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Styles from "./Navbar.module.css";

const NavbarHome = () => {
  return (
    <div className={Styles.homeContainer}>
      <div></div>
      <div>
        <h1>Test Sample App AL ESSA</h1>
      </div>
      <div className={Styles.administratorSet}>
        <div>
          <NavLink>
            <div>
              <img className={Styles.userIcon} src={UserIcon} alt="loginImg" />
            </div>
          </NavLink>
        </div>
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Administrator
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                LogOut
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarHome;
