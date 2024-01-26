import { Link } from 'react-router-dom';

const EventsPriviliege = ({ setAddTicket }) => {
  return (
    <>
      <div className="dash_content_main_center">
        <div className="dash_content_main_center_with_padding">
          <div className="backbtnwithtxt backbtnwithtxt_double oflow-hd">
            <Link to="/single-event">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.50004 12C8.4284 12.0001 8.35745 11.986 8.29127 11.9586C8.22509 11.9311 8.16499 11.8909 8.1144 11.8402L2.65987 6.38565C2.60919 6.33503 2.56898 6.27492 2.54155 6.20875C2.51412 6.14258 2.5 6.07165 2.5 6.00002C2.5 5.92839 2.51412 5.85746 2.54155 5.79129C2.56898 5.72512 2.60919 5.665 2.65987 5.61438L8.1144 0.159852C8.32754 -0.0532839 8.67267 -0.0532839 8.88567 0.159852C9.09867 0.372988 9.09881 0.718123 8.88567 0.931122L3.81678 6.00002L8.88567 11.0689C8.93635 11.1195 8.97656 11.1796 9.00399 11.2458C9.03142 11.312 9.04554 11.3829 9.04554 11.4545C9.04554 11.5262 9.03142 11.5971 9.00399 11.6633C8.97656 11.7294 8.93635 11.7896 8.88567 11.8402C8.83509 11.8909 8.77498 11.9311 8.7088 11.9586C8.64262 11.986 8.57167 12.0001 8.50004 12Z"
                  fill="black"
                />
              </svg>
              <span>Privilege Tickets</span>
            </Link>
            <Link className="add_priv_ticket" to="#" onClick={() => setAddTicket(true)}>
              Add Ticket
            </Link>
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

            <div className="preregistration_table_data_wrapper_table oflow-hd">
              <div className="settings_ser_table">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Day</th>
                      <th>Ticket Type</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Organization</th>
                      <th>Created On</th>
                    </tr>
                    <tr>
                      <th style={{ height: '1px', padding: '0px', background: 'rgba(0, 0, 0, 0.10)' }} colSpan="6"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                    <tr>
                      <td>Fuad Hossain</td>
                      <td>Day 1</td>
                      <td>Type 1</td>
                      <td>+880197635366</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>Dhaka</td>
                      <td>23 Jul, 12:30 AM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPriviliege;
