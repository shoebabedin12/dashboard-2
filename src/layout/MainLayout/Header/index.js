import { Link } from 'react-router-dom';
import logo from './../../../assets/images/images/m-logo.svg';
import profile from './../../../assets/images/images/dp.png';
import { useState } from 'react';

// ==============================|| MAIN LAYOUT - HEADER ||============================== //

const Header = ({ setCustomOpen, customOpen }) => {
  const [navChildOpen, setNavChildOpen] = useState(false);
  return (
    <>
      <div className="dash_top_bar_area">
        <div className="dash_top_bar">
          <div className="dash_top_bar_mobile_logo floatleft oflow-hd">
            <Link to="#">
              <img src={logo} alt="img" />
            </Link>
          </div>
          <button
            className="header-mobile-menu-trigger floatright"
            id="header-mobile-menu-trigger-left"
            onClick={() => setCustomOpen(!customOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="dash_top_bar_btn floatleft oflow-hd">
            <Link to="/create-event">
              Create Event
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.550041 4.95H4.94997V0.549965C4.94997 0.246443 5.19641 0 5.50004 0C5.80356 0 6.05 0.246443 6.05 0.549965V4.95H10.45C10.7536 4.95 11 5.19644 11 5.49996C11 5.80359 10.7536 6.05003 10.45 6.05003H6.05V10.45C6.05 10.7536 5.80356 11 5.50004 11C5.19641 11 4.94997 10.7536 4.94997 10.45V6.05003H0.550041C0.246416 6.05003 -2.67029e-05 5.80359 -2.67029e-05 5.49996C-2.67029e-05 5.19644 0.246416 4.95 0.550041 4.95Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
          <div className="dash_top_bar_right floatright">
            <div className="dash_top_bar_right_user floatright">
              <Link to="#" onClick={() => setNavChildOpen(!navChildOpen)}>
                <img src={profile} alt="img" />
                <span>Hello, BDMusic</span>
              </Link>
              <ul style={navChildOpen ? { display: 'block' } : { display: 'none' }}>
                <li>
                  <Link to="#">Log Out</Link>
                </li>
              </ul>
            </div>
            <div className="dash_top_bar_right_menu floatright oflow-hd">
              <ul>
                <li>
                  <Link to="">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_414_443)">
                        <path
                          d="M17.8158 14.0942C17.1942 13.5697 16.6946 12.9157 16.3522 12.178C16.0097 11.4403 15.8327 10.6367 15.8333 9.82333V7.5C15.8333 4.5675 13.655 2.14 10.8333 1.73333V0.833333C10.8333 0.61232 10.7455 0.400358 10.5892 0.244078C10.433 0.0877974 10.221 0 9.99999 0C9.77898 0 9.56702 0.0877974 9.41074 0.244078C9.25446 0.400358 9.16666 0.61232 9.16666 0.833333V1.73333C6.34416 2.14 4.16666 4.5675 4.16666 7.5V9.82333C4.16698 10.6383 3.98902 11.4435 3.64525 12.1824C3.30149 12.9213 2.80024 13.5761 2.17666 14.1008C1.95129 14.2951 1.79066 14.5536 1.71628 14.8417C1.6419 15.1298 1.65731 15.4337 1.76047 15.7128C1.86362 15.9919 2.04958 16.2328 2.29345 16.4033C2.53732 16.5738 2.82745 16.6657 3.12499 16.6667H16.875C17.6792 16.6667 18.3333 16.0125 18.3333 15.2083C18.3333 14.7817 18.1475 14.3783 17.8158 14.0942ZM9.99999 20C10.72 19.999 11.4177 19.7498 11.9754 19.2944C12.5331 18.839 12.9167 18.2053 13.0617 17.5H6.93832C7.08325 18.2053 7.4669 18.839 8.02461 19.2944C8.58231 19.7498 9.27998 19.999 9.99999 20Z"
                          fill="black"
                          fillOpacity="0.2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_414_443">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_414_440)">
                        <path
                          d="M19.4007 12.1917L17.5624 10.7542C17.5857 10.5325 17.6057 10.2734 17.6057 9.99918C17.6057 9.725 17.5866 9.46586 17.5624 9.24418L19.4024 7.80586C19.7441 7.53586 19.8374 7.05668 19.6199 6.65754L17.7082 3.35C17.5041 2.97668 17.0566 2.785 16.6024 2.9525L14.4332 3.82332C14.0174 3.52332 13.5816 3.27 13.1307 3.0675L12.8007 0.76668C12.7466 0.33 12.3666 0 11.9174 0H8.0841C7.63492 0 7.25578 0.33 7.20242 0.76L6.8716 3.06918C6.43492 3.26586 6.00578 3.51586 5.5716 3.825L3.3966 2.95168C2.98906 2.79418 2.50156 2.97082 2.29906 3.3425L0.384917 6.65418C0.159097 7.03586 0.252418 7.53168 0.601597 7.80836L2.43992 9.24586C2.41074 9.52668 2.3966 9.77086 2.3966 10C2.3966 10.2292 2.41078 10.4734 2.43992 10.755L0.599917 12.1934C0.258238 12.4642 0.165738 12.9434 0.383238 13.3417L2.29492 16.6492C2.4991 17.0217 2.94242 17.215 3.40074 17.0467L5.56992 16.1759C5.98492 16.475 6.42074 16.7284 6.8716 16.9317L7.2016 19.2317C7.25574 19.67 7.63492 20 8.08492 20H11.9182C12.3674 20 12.7474 19.67 12.8007 19.24L13.1316 16.9317C13.5682 16.7342 13.9966 16.485 14.4316 16.175L16.6066 17.0483C16.7106 17.0891 16.8214 17.11 16.9332 17.11C17.2566 17.11 17.5541 16.9333 17.7041 16.6583L19.6241 13.3333C19.8374 12.9433 19.7441 12.4642 19.4007 12.1917ZM10.0007 13.3333C8.16242 13.3333 6.66742 11.8383 6.66742 10C6.66742 8.16168 8.16242 6.66668 10.0007 6.66668C11.8391 6.66668 13.3341 8.16168 13.3341 10C13.3341 11.8383 11.8391 13.3333 10.0007 13.3333Z"
                          fill="black"
                          fillOpacity="0.2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_414_440">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default Header;
