import GetManagementTable from 'components/EventsComponents/GetManagementTable';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const GateManagement = () => {
  const [tableTitle, setTabTitle] = useState('1');
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
          <div className="row">
            <div className="col-md-5">
              <div className="form_left_col form_left_col_wthback oflow-hd">
                <div className="backbtnwithtxt oflow-hd">
                  <Link to="/single-event">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.50004 12C8.4284 12.0001 8.35745 11.986 8.29127 11.9586C8.22509 11.9311 8.16499 11.8909 8.1144 11.8402L2.65987 6.38565C2.60919 6.33503 2.56898 6.27492 2.54155 6.20875C2.51412 6.14258 2.5 6.07165 2.5 6.00002C2.5 5.92839 2.51412 5.85746 2.54155 5.79129C2.56898 5.72512 2.60919 5.665 2.65987 5.61438L8.1144 0.159852C8.32754 -0.0532839 8.67267 -0.0532839 8.88567 0.159852C9.09867 0.372988 9.09881 0.718123 8.88567 0.931122L3.81678 6.00002L8.88567 11.0689C8.93635 11.1195 8.97656 11.1796 9.00399 11.2458C9.03142 11.312 9.04554 11.3829 9.04554 11.4545C9.04554 11.5262 9.03142 11.5971 9.00399 11.6633C8.97656 11.7294 8.93635 11.7896 8.88567 11.8402C8.83509 11.8909 8.77498 11.9311 8.7088 11.9586C8.64262 11.986 8.57167 12.0001 8.50004 12Z"
                        fill="black"
                      />
                    </svg>
                    <span>Gate Management</span>
                  </Link>
                </div>
                <div className="form_left_col_des oflow-hd">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Accumsan nulla vitae et pulvinar viverra ornare vitae. Gravida aliquet iaculis
                  </p>
                </div>
                <div className="form_left_col_anchor oflow-hd">
                  <ul>
                    <li className={tableTitle === '1' && 'current'}>
                      <Link to="#" onClick={() => setTabTitle('1')}>
                        Day 1 / Day Name
                      </Link>
                    </li>
                    <li className={tableTitle === '2' && 'current'}>
                      <Link to="#" onClick={() => setTabTitle('2')}>
                        Day 2 / Day Name
                      </Link>
                    </li>
                    <li className={tableTitle === '3' && 'current'}>
                      <Link to="#" onClick={() => setTabTitle('3')}>
                        Day 3 / Day Name
                      </Link>
                    </li>
                    <li className={tableTitle === '4' && 'current'}>
                      <Link to="#" onClick={() => setTabTitle('4')}>
                        Day 4 / Day Name
                      </Link>
                    </li>
                    <li className={tableTitle === '5' && 'current'}>
                      <Link to="#" onClick={() => setTabTitle('5')}>
                        Day 5 / Day Name
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="form_box_area_main event_information_form oflow-hd">
                <div className="form_title oflow-hd">
                  <h2>Day {tableTitle} / Day Name</h2>
                </div>
                <div className="form_wrapper oflow-hd">
                  <div className="row">
                    <div className="col-12">
                      <div className="single_input_box prereg_form_exclusive">
                        <label htmlFor="#">Can Audience Make Re-Entry Once They Leave The Event</label>
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
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="single_input_box">
                        <label htmlFor="#">Gate will open at</label>
                        <input className="time" type="text" value="" placeholder="Gate will open at" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="single_input_box">
                        <label htmlFor="#">Gate will close at</label>
                        <input type="text" value="" placeholder="Gate will close at" />
                      </div>
                    </div>
                  </div>
                </div>

                <GetManagementTable data={tableTitle} />
              </div>
              <div className="dash_content_main_bottom_process dash_content_main_bottom_inside oflow-hd">
                <Link to="#">Save</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GateManagement;
