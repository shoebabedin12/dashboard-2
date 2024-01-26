import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import downArrow from './../../../assets/images/images/down-arrow.svg';
import logo from './../../../assets/images/images/logo.svg';

const MainDrawer = ({ customOpen, setCustomOpen }) => {
  const navigate = useLocation();

  // State for managing the open/closed state of each dropdown
  const [dropdownStates, setDropdownStates] = useState({
    createEvents: false,
    createFeatureEvents: false,
    ticketing: false,
    settingPrivacy: false
  });

  // Function to toggle the state of a specific dropdown
  const toggleDropdown = (dropdown) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown]
    }));
  };

  return (
    <>
      <div className={`dash_left_bar_area oflow-hd ${customOpen ? 'dash_left_bar_area_active' : ''}`}>
        <div className="dash_left_bar">
          <div className="dash_left_bar_logo oflow-hd">
            <Link to="#">
              <img src={logo} alt="img" />
            </Link>
            <button className="mobile_menu_close" onClick={() => setCustomOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_535_2)">
                  <path
                    d="M0.976745 20.0001C0.783573 20.0002 0.594729 19.9429 0.434101 19.8356C0.273472 19.7283 0.148276 19.5758 0.074347 19.3973C0.000418327 19.2188 -0.0189212 19.0225 0.0187748 18.833C0.0564707 18.6435 0.149509 18.4695 0.28612 18.3329L18.333 0.286066C18.5162 0.102901 18.7646 0 19.0236 0C19.2827 0 19.5311 0.102901 19.7142 0.286066C19.8974 0.469231 20.0003 0.717657 20.0003 0.976691C20.0003 1.23573 19.8974 1.48415 19.7142 1.66732L1.66737 19.7142C1.57676 19.805 1.4691 19.877 1.35058 19.9261C1.23207 19.9751 1.10502 20.0003 0.976745 20.0001Z"
                    fill="black"
                  />
                  <path
                    d="M19.0236 20.0001C18.8953 20.0003 18.7682 19.9751 18.6497 19.9261C18.5312 19.877 18.4236 19.805 18.3329 19.7142L0.286066 1.66732C0.102901 1.48415 0 1.23573 0 0.976691C0 0.717657 0.102901 0.469231 0.286066 0.286066C0.469231 0.102901 0.717657 0 0.976691 0C1.23573 0 1.48415 0.102901 1.66732 0.286066L19.7142 18.3329C19.8508 18.4695 19.9438 18.6435 19.9815 18.833C20.0192 19.0225 19.9999 19.2188 19.926 19.3973C19.852 19.5758 19.7268 19.7283 19.5662 19.8356C19.4056 19.9429 19.2167 20.0002 19.0236 20.0001Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_535_2">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <div className="dash_left_bar_menu oflow-hd">
            <ul>
              <li className={navigate.pathname === '/dashboard' && 'menu_active'}>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              {/* <li className="has_dropdown">
                <Link to="#" onClick={() => toggleDropdown('createEvents')}>
                  Create Featured Events
                  <img src={downArrow} alt="img" className={dropdownStates.createEvents ? 'menu-has-child-button-active' : ''} />
                </Link>
                <ul className={dropdownStates.createEvents ? 'menu-has-child-open' : ''}>
                  <li className={navigate.pathname === '/create-event' && 'menu_active'}>
                    <Link to="/create-event">Create Events</Link>
                  </li>
                  <li className={navigate.pathname === '/create-draft' && 'menu_active'}>
                    <Link to="/create-draft">Draft</Link>
                  </li>
                  <li className={navigate.pathname === '/create-submitted' && 'menu_active'}>
                    <Link to="/create-submitted">Submitted for Review</Link>
                  </li>
                </ul>
              </li> */}
              <li className="has_dropdown">
                <Link to="#" onClick={() => toggleDropdown('createFeatureEvents')}>
                  Create Events On Happening Around
                  <img src={downArrow} alt="img" className={dropdownStates.createFeatureEvents ? 'menu-has-child-button-active' : ''} />
                </Link>
                <ul className={dropdownStates.createFeatureEvents ? 'menu-has-child-open' : ''}>
                  <li className={navigate.pathname === '/create-event-on-happening-around' && 'menu_active'}>
                    <Link to="/create-event-on-happening-around">Create Events</Link>
                  </li>
                  <li className={navigate.pathname === '/create-draft-on-happening-around' && 'menu_active'}>
                    <Link to="/create-draft-on-happening-around">Draft</Link>
                  </li>
                  <li className={navigate.pathname === '/create-submitted-on-happening-around' && 'menu_active'}>
                    <Link to="/create-submitted-on-happening-around">Submitted for Review</Link>
                  </li>
                </ul>
              </li>
              {/* <li
                className={`${navigate.pathname === '/manage-featured-event' && 'menu_active'} ${
                  navigate.pathname === '/single-featured-event' && 'menu_active'
                } 
                ${navigate.pathname === '/pre-registration' && 'menu_active'}
                ${navigate.pathname === '/create-pre-registration' && 'menu_active'}`}
              >
                <Link to="/manage-featured-event">Manage Featured Events</Link>
              </li> */}
              <li
                className={`${navigate.pathname === '/manage-events-on-happening-around' && 'menu_active'} ${
                  navigate.pathname === '/single-featured-event' && 'menu_active'
                }`}
              >
                <Link to="/manage-events-on-happening-around">Manage Events On Happening Around</Link>
              </li>
              {/* <li className="has_dropdown">
                <Link to="#" onClick={() => toggleDropdown('tracking')}>
                  Ticketing & Registration
                  <img src={downArrow} alt="img" className={dropdownStates.tracking ? 'menu-has-child-button-active' : ''} />
                </Link>
                <ul className={dropdownStates.tracking ? 'menu-has-child-open' : ''}>
                 
                  <li className={navigate.pathname === '/ticket-and-registration/pre-registration' && 'menu_active'}>
                    <Link to="/ticket-and-registration/pre-registration">Pre-Registration</Link>
                  </li>
                  <li className={navigate.pathname === '/ticket-and-registration/tickets-registration' && 'menu_active'}>
                    <Link to="/ticket-and-registration/tickets-registration">Ticketing / Registration</Link>
                  </li>
                  <li className={navigate.pathname === '/ticket-and-registration/promotion-discount' && 'menu_active'}>
                    <Link to="/ticket-and-registration/promotion-discount">Promotion & Discount</Link>
                  </li>
                  <li className={navigate.pathname === '/ticket-and-registration/priviliege-tickets' && 'menu_active'}>
                    <Link to="/ticket-and-registration/priviliege-tickets">Privilege Tickets</Link>
                  </li>
                  <li className={navigate.pathname === '/ticket-and-registration/early-bird-tickets' && 'menu_active'}>
                    <Link to="/ticket-and-registration/early-bird-tickets">Early Bird Tickets</Link>
                  </li>
                </ul>
              </li> */}
              <li className={navigate.pathname === '/company-information' && 'menu_active'}>
                <Link to="/company-information">Company Information</Link>
              </li>
              <li className="has_dropdown">
                <Link to="#" onClick={() => toggleDropdown('settings')}>
                  Setting and Privacy
                  <img src={downArrow} alt="img" className={dropdownStates.settings ? 'menu-has-child-button-active' : ''} />
                </Link>
                <ul className={dropdownStates.settings ? 'menu-has-child-open' : ''}>
                  <li className={navigate.pathname === '/users-roles' && 'menu_active'}>
                    <Link to="/users-roles">Users and Roles</Link>
                  </li>
                  <li className={navigate.pathname === '/users-passwords' && 'menu_active'}>
                    <Link to="/users-passwords">Password</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDrawer;
