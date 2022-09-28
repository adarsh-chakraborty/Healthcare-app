import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { setGlobalState, useGlobalState } from './state';
const Navbar = () => {
  const isloggedIn = useGlobalState('LoggedIn')[0];
  const userRole = useGlobalState('token')[0]['role'];
  console.log(isloggedIn);
  return (
    <>
      <nav
        style={{ backgroundColor: 'white', fontSize: '13px' }}
        class="navbar navbar-expand-md  "
      >
        <Link style={{ color: 'black' }} class="nav-link" to="/">
          Home
        </Link>

        <button
          class="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <img
            className="navbar-toggler-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          />
        </button>

        <div class="collapse navbar-collapse " id="collapsibleNavbar">
          <ul
            class="navbar-nav"
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            {isloggedIn && (
              <li className="nav-item">
                <Link
                  style={{ color: 'black' }}
                  className="nav-link"
                  to="/symptoms"
                >
                  Treatment and Symptom Report
                </Link>
              </li>
            )}

            {isloggedIn && (
              <li class="nav-item">
                <Link style={{ color: 'black' }} class="nav-link" to="/chronic">
                  Chronic Disease Detection
                </Link>
              </li>
            )}

            {isloggedIn ? (
              <Link style={{ color: 'black' }} class="nav-link" to="/">
                Logout
              </Link>
            ) : (
              <div>
                <li
                  class="nav-item"
                  className="afterLogin d-flex justify-content-center align-items-center flex-row"
                >
                  <Link
                    style={{ color: 'black' }}
                    class="nav-link"
                    to="/LoginUi"
                  >
                    Login
                  </Link>
                  <Link
                    style={{ color: 'black' }}
                    class="nav-link"
                    to="/UserRegistration"
                  >
                    Register
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
