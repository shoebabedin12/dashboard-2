import { useState } from 'react';
import { Link } from 'react-router-dom';

const SettingsUser = () => {
  const [addUserRole, setAddUserRole] = useState(false);
  return (
    <>
      <div className="dash_content_main oflow-hd">
        <div className="dash_content_main_head dash_content_main_head_withlink oflow-hd">
          <h2>Users and Roles</h2>
          {!addUserRole && (
            <Link to="#" onClick={() => setAddUserRole(true)}>
              Add User
            </Link>
          )}
        </div>
        <div className="dash_content_main_center">
          {!addUserRole && (
            <div className="dash_content_main_center_with_padding">
              <div className="settings_ser_table oflow-hd">
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                  <tr>
                    <td>Fuad Hossain</td>
                    <td>saifuddin1283@gmail.com</td>
                    <td>Admin</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Tanim Khan</td>
                    <td>saifuddin1283@gmail.com</td>
                    <td>Moderator</td>
                    <td className="action">
                      <div className="single_bankaccountdetails_action oflow-hd">
                        <ul>
                          <li>
                            <a href="">
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
                            </a>
                          </li>
                          <li>
                            <a className="single_bankaccountdetails_action_remove" href="">
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M11.5938 1.75H9.1875V1.3125C9.1875 0.587617 8.59988 0 7.875 0H6.125C5.40012 0 4.8125 0.587617 4.8125 1.3125V1.75H2.40625C1.8022 1.75 1.3125 2.2397 1.3125 2.84375V3.71875C1.3125 3.96039 1.50836 4.15625 1.75 4.15625H12.25C12.4916 4.15625 12.6875 3.96039 12.6875 3.71875V2.84375C12.6875 2.2397 12.1978 1.75 11.5938 1.75ZM5.6875 1.3125C5.6875 1.07133 5.88383 0.875 6.125 0.875H7.875C8.11617 0.875 8.3125 1.07133 8.3125 1.3125V1.75H5.6875V1.3125ZM2.14277 5.03125C2.12426 5.03125 2.10596 5.03501 2.08895 5.04229C2.07194 5.04958 2.05659 5.06024 2.04382 5.07363C2.03106 5.08702 2.02114 5.10286 2.01467 5.12019C2.00821 5.13753 2.00533 5.156 2.00621 5.17448L2.36715 12.7498C2.40051 13.4509 2.97637 14 3.67801 14H10.322C11.0236 14 11.5995 13.4509 11.6329 12.7498L11.9938 5.17448C11.9947 5.156 11.9918 5.13753 11.9853 5.12019C11.9789 5.10286 11.9689 5.08702 11.9562 5.07363C11.9434 5.06024 11.9281 5.04958 11.9111 5.04229C11.894 5.03501 11.8757 5.03125 11.8572 5.03125H2.14277ZM8.75 6.125C8.75 5.88328 8.94578 5.6875 9.1875 5.6875C9.42922 5.6875 9.625 5.88328 9.625 6.125V11.8125C9.625 12.0542 9.42922 12.25 9.1875 12.25C8.94578 12.25 8.75 12.0542 8.75 11.8125V6.125ZM6.5625 6.125C6.5625 5.88328 6.75828 5.6875 7 5.6875C7.24172 5.6875 7.4375 5.88328 7.4375 6.125V11.8125C7.4375 12.0542 7.24172 12.25 7 12.25C6.75828 12.25 6.5625 12.0542 6.5625 11.8125V6.125ZM4.375 6.125C4.375 5.88328 4.57078 5.6875 4.8125 5.6875C5.05422 5.6875 5.25 5.88328 5.25 6.125V11.8125C5.25 12.0542 5.05422 12.25 4.8125 12.25C4.57078 12.25 4.375 12.0542 4.375 11.8125V6.125Z"
                                  fill="#FF0000"
                                />
                              </svg>
                              <span>Delete</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          )}
          {addUserRole && (
            <div className="dash_content_main_center_with_padding addnewuserpage">
              <div className="form_wrapper oflow-hd">
                <div className="row">
                  <div className="col-12">
                    <div className="single_input_box">
                      <label htmlFor="#">Name</label>
                      <input type="text" value="" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="single_input_box">
                      <label htmlFor="#">Email Address</label>
                      <input type="text" value="" placeholder="Email Address" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="single_input_box">
                      <label htmlFor="#">Role</label>
                      <select>
                        <option value="Moderator">Moderator</option>
                        <option value="Admin">Admin</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="addnewuserpage_btn oflow-hd">
                <Link to="#" onClick={() => setAddUserRole(false)}>
                  Add User
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SettingsUser;
