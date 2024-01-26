import { Link } from 'react-router-dom';

const EditPreRegistration = () => {
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
              <Link to="/event-pre-registration">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.50004 12C8.4284 12.0001 8.35745 11.986 8.29127 11.9586C8.22509 11.9311 8.16499 11.8909 8.1144 11.8402L2.65987 6.38565C2.60919 6.33503 2.56898 6.27492 2.54155 6.20875C2.51412 6.14258 2.5 6.07165 2.5 6.00002C2.5 5.92839 2.51412 5.85746 2.54155 5.79129C2.56898 5.72512 2.60919 5.665 2.65987 5.61438L8.1144 0.159852C8.32754 -0.0532839 8.67267 -0.0532839 8.88567 0.159852C9.09867 0.372988 9.09881 0.718123 8.88567 0.931122L3.81678 6.00002L8.88567 11.0689C8.93635 11.1195 8.97656 11.1796 9.00399 11.2458C9.03142 11.312 9.04554 11.3829 9.04554 11.4545C9.04554 11.5262 9.03142 11.5971 9.00399 11.6633C8.97656 11.7294 8.93635 11.7896 8.88567 11.8402C8.83509 11.8909 8.77498 11.9311 8.7088 11.9586C8.64262 11.986 8.57167 12.0001 8.50004 12Z"
                    fill="black"
                  />
                </svg>
                <span>Pre-Registration</span>
              </Link>
            </div>
            <div className="pre_reg_from_wrapper oflow-hd">
              <div className="pre_reg_from_main oflow-hd">
                <div className="pre_reg_from_main_single oflow-hd">
                  <div className="pre_reg_from_wrapper_title oflow-hd">
                    <h2>Registration Configuration</h2>
                  </div>
                  <div className="form_wrapper oflow-hd">
                    <div className="row">
                      <div className="col-12">
                        <div className="single_input_box">
                          <label htmlFor="#">Pre registration will start at</label>
                          <div className="multifieldrow_wrapper">
                            <div className="multifieldrow_wrapper_single">
                              <div className="row multifieldrow">
                                <div className="col-md-6">
                                  <div className="single_input_box">
                                    <input className="calendar" type="text" value="" placeholder="Date" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="single_input_box">
                                    <input className="time" type="text" value="" placeholder="Time" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="single_input_box">
                          <label htmlFor="#">Pre registration will stop at</label>
                          <div className="multifieldrow_wrapper">
                            <div className="multifieldrow_wrapper_single">
                              <div className="row multifieldrow">
                                <div className="col-md-6">
                                  <div className="single_input_box">
                                    <input className="calendar" type="text" value="" placeholder="Date" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="single_input_box">
                                    <input className="time" type="text" value="" placeholder="Time" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="single_input_box prereg_form_exclusive">
                          <label htmlFor="#">Will pre-registrar audience get any exclusive ticket purchase right?</label>
                          <div className="single_input_box_rado">
                            <ul>
                              <li>
                                <input type="radio" name="ei_entry_fee" id="Yes" value="Yes" />
                                <label htmlFor="Yes">
                                  Yes
                                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                                      fill="white"
                                    />
                                  </svg>
                                </label>
                              </li>
                              <li>
                                <input type="radio" name="ei_entry_fee" id="No" value="No" />
                                <label htmlFor="No">
                                  No
                                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                                      fill="white"
                                    />
                                  </svg>
                                </label>
                              </li>
                            </ul>
                          </div>
                          <div className="single_input_double_label">
                            <label htmlFor="#">For First</label>
                            <input type="text" placeholder="2"></input>
                            <label htmlFor="#">Hours</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ms_show_box">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_939_1312)">
                      <path
                        d="M15.3646 2.63593C11.8498 -0.878449 6.1511 -0.87884 2.63593 2.63593C-0.87884 6.15071 -0.878449 11.8494 2.63593 15.3646C6.15071 18.8785 11.8494 18.8789 15.3646 15.3646C18.8789 11.8494 18.8785 6.1511 15.3646 2.63593ZM10.1738 12.9134C10.1738 13.2247 10.0501 13.5233 9.82996 13.7435C9.6098 13.9636 9.3112 14.0873 8.99986 14.0873C8.68851 14.0873 8.38991 13.9636 8.16975 13.7435C7.9496 13.5233 7.82592 13.2247 7.82592 12.9134V8.21762C7.82592 7.90627 7.9496 7.60768 8.16975 7.38752C8.38991 7.16736 8.68851 7.04368 8.99986 7.04368C9.3112 7.04368 9.6098 7.16736 9.82996 7.38752C10.0501 7.60768 10.1738 7.90627 10.1738 8.21762V12.9134ZM8.97911 6.21097C8.30293 6.21097 7.85213 5.732 7.86622 5.14073C7.85213 4.52089 8.30293 4.0564 8.99281 4.0564C9.68309 4.0564 10.1198 4.52128 10.1343 5.14073C10.1339 5.732 9.68348 6.21097 8.97911 6.21097Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_939_1312">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>To update Audience Information, please contact with the system admin.</p>
                </div>

                <div className="addnewuserpage_btn oflow-hd">
                  <Link to="#">Submit for Review</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPreRegistration;
