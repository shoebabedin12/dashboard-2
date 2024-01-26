const { Link } = require('react-router-dom');
import PreRegistrationTable from 'components/EventsComponents/PreRegistrationTable';
import profile from './../../assets/images/images/timg.png';

const PreRegistration = () => {
  return (
    <>
      <div className="dash_content_main oflow-hd">
        <div className="dash_content_main_event_head oflow-hd">
          <div className="dash_content_main_event_head_box oflow-hd">
            <h2>Dameer & Fuad Presents SANJOY</h2>
          </div>
          <div className="dash_content_main_event_head_attr oflow-hd">
            <ul>
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.19046 13.8252C7.39635 14.0316 7.64092 14.1953 7.91017 14.307C8.17942 14.4187 8.46806 14.4762 8.75956 14.4762C9.05106 14.4762 9.3397 14.4187 9.60895 14.307C9.87819 14.1953 10.1228 14.0316 10.3287 13.8252L13.8248 10.329C14.0312 10.1231 14.1949 9.87856 14.3066 9.60932C14.4183 9.34007 14.4758 9.05143 14.4758 8.75993C14.4758 8.46843 14.4183 8.17979 14.3066 7.91054C14.1949 7.64129 14.0312 7.39672 13.8248 7.19083L9.16326 2.52925C8.846 2.20989 8.46859 1.9566 8.05283 1.78402C7.63707 1.61144 7.19122 1.523 6.74106 1.52381H3.20679C2.27752 1.52381 1.52344 2.27789 1.52344 3.20716V6.74143C1.52344 7.65547 1.88144 8.51619 2.52888 9.16363L7.19046 13.8252ZM3.80853 3.0472C4.22746 3.0472 4.57023 3.38997 4.57023 3.8089C4.57023 4.22783 4.22746 4.5706 3.80853 4.5706C3.3896 4.5706 3.04683 4.22783 3.04683 3.8089C3.04683 3.38997 3.3896 3.0472 3.80853 3.0472Z"
                    fill="#999999"
                  />
                </svg>

                <span>Concert</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.79823 0.800049C4.82114 0.800049 2.39844 3.23955 2.39844 6.23884C2.39844 10.5005 7.29065 14.9007 7.49884 15.0855C7.58113 15.1592 7.68767 15.1999 7.79811 15.2001C7.90856 15.2002 8.01518 15.1596 8.09762 15.0861C8.30581 14.9007 13.198 10.5005 13.198 6.23884C13.198 3.23955 10.7753 0.800049 7.79823 0.800049ZM7.79823 9.19972C6.14409 9.19972 4.79834 7.85398 4.79834 6.19984C4.79834 4.5457 6.14409 3.19996 7.79823 3.19996C9.45236 3.19996 10.7981 4.5457 10.7981 6.19984C10.7981 7.85398 9.45236 9.19972 7.79823 9.19972Z"
                    fill="#999999"
                  />
                </svg>

                <span>Dhaka</span>
              </li>
              <li>
                <span>City Park Int, Dhanmondi</span>
              </li>
              <li>
                <span>Wednesday, 25 Aug, 2023</span>
              </li>
            </ul>
          </div>
          <div className="dash_content_main_event_head_action oflow-hd">
            <ul>
              <li>
                <Link to="#">Edit Event Details</Link>
              </li>
              <li>
                <Link to="#">Event Settings</Link>
              </li>
              <li>
                <Link to="#">Public Preview</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="dash_content_main_event_status oflow-hd">
          <ul>
            <li className="text_status-Live">
              Event Status: <span>Live</span>
            </li>
            <li>
              Interested Audience: <span>4</span>
            </li>
            <li>
              Number of Pre-Reg: <span>30</span>
            </li>
            <li className="text_status-Live">
              Ticketing Status: <span>Live</span>
            </li>
            <li>
              Total Collection: <span>5,000 BDT</span>
            </li>
          </ul>
        </div>
        <div className="dash_content_main_center">
          <div className="dash_content_main_center_with_padding">
            <div className="backbtnwithtxt oflow-hd">
              <Link to="/single-event">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.50004 12C8.4284 12.0001 8.35745 11.986 8.29127 11.9586C8.22509 11.9311 8.16499 11.8909 8.1144 11.8402L2.65987 6.38565C2.60919 6.33503 2.56898 6.27492 2.54155 6.20875C2.51412 6.14258 2.5 6.07165 2.5 6.00002C2.5 5.92839 2.51412 5.85746 2.54155 5.79129C2.56898 5.72512 2.60919 5.665 2.65987 5.61438L8.1144 0.159852C8.32754 -0.0532839 8.67267 -0.0532839 8.88567 0.159852C9.09867 0.372988 9.09881 0.718123 8.88567 0.931122L3.81678 6.00002L8.88567 11.0689C8.93635 11.1195 8.97656 11.1796 9.00399 11.2458C9.03142 11.312 9.04554 11.3829 9.04554 11.4545C9.04554 11.5262 9.03142 11.5971 9.00399 11.6633C8.97656 11.7294 8.93635 11.7896 8.88567 11.8402C8.83509 11.8909 8.77498 11.9311 8.7088 11.9586C8.64262 11.986 8.57167 12.0001 8.50004 12Z"
                    fill="black"
                  />
                </svg>
                <span>Pre-Registration</span>
              </Link>
            </div>
            <div className="noitememptybox oflow-hd">
              <p>No pre-registration</p>
              <Link to="/create-pre-registration">Create Pre-Registration</Link>
            </div>
            <div className="pregistration_box oflow-hd">
              <div className="pregistration_box_title oflow-hd">
                <h2>Pre-Registration</h2>
              </div>
              <div className="pregistration_box_attr oflow-hd">
                Status: <span>Under Review</span>
              </div>
              <div className="pregistration_box_attr oflow-hd">
                Will Start At: <span>31 July, 2023 | 10:30 AM</span>
              </div>
              <div className="pregistration_box_action oflow-hd">
                <div className="single_bankaccountdetails_action oflow-hd">
                  <ul>
                    <li>
                      <Link to="/edit-pre-registration">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_1051_1449)">
                            <path
                              d="M12.2135 4.78288L6.75488 10.2415C6.56598 10.4304 6.31845 10.5477 6.05138 10.5737L4.14282 10.7496H4.07117C3.85621 10.7496 3.64776 10.6649 3.49795 10.5086C3.32859 10.3392 3.24391 10.0982 3.26345 9.85718L3.43932 7.94862C3.46538 7.68155 3.58263 7.43402 3.77153 7.24512L9.21712 1.7865L12.2135 4.78288ZM13.4772 0.985296L13.0147 0.522811C12.6781 0.187965 12.2226 0 11.7478 0C11.2729 0 10.8174 0.187965 10.4808 0.522811L9.90759 1.09603L12.904 4.09241L13.4772 3.51919C13.644 3.35375 13.7765 3.1569 13.8669 2.94001C13.9572 2.72311 14.0038 2.49047 14.0038 2.2555C14.0038 2.02053 13.9572 1.78789 13.8669 1.57099C13.7765 1.3541 13.644 1.15725 13.4772 0.99181V0.985296ZM12.702 11.5638V7.77926C12.702 7.51219 12.4806 7.29072 12.2135 7.29072C11.9464 7.29072 11.725 7.51219 11.725 7.77926V11.5638C11.725 12.3715 11.0671 13.0294 10.2593 13.0294H2.4427C1.63498 13.0294 0.97708 12.3715 0.97708 11.5638V3.74066C0.97708 2.93294 1.63498 2.27504 2.4427 2.27504H6.22726C6.49432 2.27504 6.7158 2.05357 6.7158 1.7865C6.7158 1.51943 6.49432 1.29796 6.22726 1.29796H2.4427C1.09433 1.29796 0 2.39229 0 3.74066V11.5573C0 12.9057 1.09433 14 2.4427 14H10.2593C11.6077 14 12.702 12.9057 12.702 11.5573V11.5638Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1051_1449">
                              <rect width="14" height="14" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>Edit</span>
                      </Link>
                    </li>
                    <li>
                      <Link class="single_bankaccountdetails_action_remove" to="#">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M11.5938 1.75H9.1875V1.3125C9.1875 0.587617 8.59988 0 7.875 0H6.125C5.40012 0 4.8125 0.587617 4.8125 1.3125V1.75H2.40625C1.8022 1.75 1.3125 2.2397 1.3125 2.84375V3.71875C1.3125 3.96039 1.50836 4.15625 1.75 4.15625H12.25C12.4916 4.15625 12.6875 3.96039 12.6875 3.71875V2.84375C12.6875 2.2397 12.1978 1.75 11.5938 1.75ZM5.6875 1.3125C5.6875 1.07133 5.88383 0.875 6.125 0.875H7.875C8.11617 0.875 8.3125 1.07133 8.3125 1.3125V1.75H5.6875V1.3125ZM2.14277 5.03125C2.12426 5.03125 2.10596 5.03501 2.08895 5.04229C2.07194 5.04958 2.05659 5.06024 2.04382 5.07363C2.03106 5.08702 2.02114 5.10286 2.01467 5.12019C2.00821 5.13753 2.00533 5.156 2.00621 5.17448L2.36715 12.7498C2.40051 13.4509 2.97637 14 3.67801 14H10.322C11.0236 14 11.5995 13.4509 11.6329 12.7498L11.9938 5.17448C11.9947 5.156 11.9918 5.13753 11.9853 5.12019C11.9789 5.10286 11.9689 5.08702 11.9562 5.07363C11.9434 5.06024 11.9281 5.04958 11.9111 5.04229C11.894 5.03501 11.8757 5.03125 11.8572 5.03125H2.14277ZM8.75 6.125C8.75 5.88328 8.94578 5.6875 9.1875 5.6875C9.42922 5.6875 9.625 5.88328 9.625 6.125V11.8125C9.625 12.0542 9.42922 12.25 9.1875 12.25C8.94578 12.25 8.75 12.0542 8.75 11.8125V6.125ZM6.5625 6.125C6.5625 5.88328 6.75828 5.6875 7 5.6875C7.24172 5.6875 7.4375 5.88328 7.4375 6.125V11.8125C7.4375 12.0542 7.24172 12.25 7 12.25C6.75828 12.25 6.5625 12.0542 6.5625 11.8125V6.125ZM4.375 6.125C4.375 5.88328 4.57078 5.6875 4.8125 5.6875C5.05422 5.6875 5.25 5.88328 5.25 6.125V11.8125C5.25 12.0542 5.05422 12.25 4.8125 12.25C4.57078 12.25 4.375 12.0542 4.375 11.8125V6.125Z"
                            fill="#FF0000"
                          />
                        </svg>
                        <span>Delete</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="preregistration_table_data_wrapper oflow-hd">
              <div className="preregistration_table_data_wrapper_NOdata oflow-hd">
                <p>No pre-registration data to show</p>
              </div>

              <div className="preregistration_table_data_wrapper_table_details oflow-hd">
                <h2>Total Registration Till Now: 103</h2>
                <div className="preregistration_table_data_wrapper_table_details_filter oflow-hd">
                  <span>Filter By</span>
                  <div className="preregistration_table_data_wrapper_table_details_filter_box oflow-hd">
                    <input className="largesearch" type="text" placeholder="Name/ Phone no / Email Address" />
                    <select name="">
                      <option value="" disabled selected>
                        Day
                      </option>
                      <option value="">Day 1</option>
                      <option value="">Day 2</option>
                      <option value="">Day 3</option>
                      <option value="">Day 4</option>
                      <option value="">Day 5</option>
                    </select>
                    <input className="calendar" type="text" value="" placeholder="Date" />
                    <input className="time" type="text" value="" placeholder="Time" />
                  </div>
                  <span className="searchrslttotal">Total Filtered Result: 50</span>
                </div>
              </div>

              <PreRegistrationTable profile={profile} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreRegistration;
