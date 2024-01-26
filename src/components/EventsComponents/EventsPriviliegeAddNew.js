import { useState } from 'react';
import { Link } from 'react-router-dom';

const EventsPriviliegeAddNew = ({ setAddTicket }) => {
  const [ticket, setTicket] = useState(false);
  const [ticketType, setTicketType] = useState('1');
  return (
    <>
      <div className="dash_content_main_center privilege_ticket_add">
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
                  <span>Privilege Tickets</span>
                </Link>
              </div>
              <div className="form_left_col_des oflow-hd">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Accumsan nulla vitae et pulvinar viverra ornare vitae. Gravida aliquet iaculis
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="form_box_area_main event_information_form oflow-hd">
              <div className="form_title oflow-hd">
                <h2>Create Privilege Tickets</h2>
              </div>
              <div className="form_wrapper oflow-hd">
                <div className="row">
                  <div className="col-md-6">
                    <div className="single_input_box">
                      <label htmlFor="#">Name</label>
                      <input type="text" value="" placeholder="Name" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="single_input_box">
                      <label htmlFor="#">Phone Number</label>
                      <input type="text" value="" placeholder="Phone Number" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="single_input_box">
                      <label htmlFor="#">Email Address</label>
                      <input type="text" value="" placeholder="Email Address" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="single_input_box">
                      <label htmlFor="#">Organization</label>
                      <input type="text" value="" placeholder="Organization" />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="single_input_box prereg_form_exclusive">
                      <label htmlFor="#">Ticket for</label>
                      <div className="single_input_box_rado">
                        <ul>
                          <li>
                            <input type="radio" name="pri_ticket_for" id="AllDaysandTypes" value="All Days and Types" />
                            <label htmlFor="AllDaysandTypes">
                              All Days and Types
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                                  fill="white"
                                />
                              </svg>
                            </label>
                          </li>
                          <li>
                            <input type="radio" name="pri_ticket_for" id="Customize" value="Customize" onClick={() => setTicket(true)} />
                            <label htmlFor="Customize">
                              Customize
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

                      {ticket && (
                        <div className="form_inside_tabs_wrapper">
                          <div className="form_inside_tabs">
                            <ul>
                              <li className={`${ticketType === '1' && 'TabOpen'}`} data-tab="day1">
                                <button onClick={() => setTicketType('1')}>Day 1</button>
                              </li>
                              <li className={`${ticketType === '2' && 'TabOpen'}`} data-tab="day2">
                                <button onClick={() => setTicketType('2')}>Day 2</button>
                              </li>
                              <li className={`${ticketType === '3' && 'TabOpen'}`} data-tab="day3">
                                <button onClick={() => setTicketType('3')}>Day 3</button>
                              </li>
                            </ul>
                          </div>

                          <div className={`checkbox_fields day1 ${ticketType === '1' && 'TabShow'}`}>
                            <h2>Select Ticket Type</h2>
                            <div className="checkbox_fields_wrapper">
                              <div className="row">
                                <div className="col-6">
                                  <div className="single_checkbox_box oflow-hd">
                                    <input type="checkbox" id="AllTypes" name="All Types" value="All Types" />
                                    <label htmlFor="AllTypes">
                                      <span>All Types</span>
                                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                                          fill="white"
                                        ></path>
                                      </svg>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="single_checkbox_box oflow-hd">
                                    <input type="checkbox" id="Type1" name="All Types" value="Type 1" />
                                    <label htmlFor="Type1">
                                      <span>Type 1</span>
                                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                                          fill="white"
                                        ></path>
                                      </svg>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="single_checkbox_box oflow-hd">
                                    <input type="checkbox" id="Type2" name="All Types" value="Type 2" />
                                    <label htmlFor="Type2">
                                      <span>Type 2</span>
                                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                                          fill="white"
                                        ></path>
                                      </svg>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="single_checkbox_box oflow-hd">
                                    <input type="checkbox" id="Type3" name="All Types" value="Type 3" />
                                    <label htmlFor="Type3">
                                      <span>Type 3</span>
                                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                                          fill="white"
                                        ></path>
                                      </svg>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className={`checkbox_fields day2 ${ticketType === '2' && 'TabShow'}`}>
                            <h2>Select Ticket Type</h2>
                            <div className="checkbox_fields_wrapper">
                              <div className="row">
                                <div className="col-6">
                                  <div className="single_checkbox_box oflow-hd">
                                    <input type="checkbox" id="AllTypes1" name="All Types" value="All Types" />
                                    <label htmlFor="AllTypes1">
                                      <span>All Types</span>
                                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                                          fill="white"
                                        ></path>
                                      </svg>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="single_checkbox_box oflow-hd">
                                    <input type="checkbox" id="Type11" name="All Types" value="Type 1" />
                                    <label htmlFor="Type11">
                                      <span>Type 1</span>
                                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                                          fill="white"
                                        ></path>
                                      </svg>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="single_checkbox_box oflow-hd">
                                    <input type="checkbox" id="Type21" name="All Types" value="Type 2" />
                                    <label htmlFor="Type21">
                                      <span>Type 2</span>
                                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                                          fill="white"
                                        ></path>
                                      </svg>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="single_checkbox_box oflow-hd">
                                    <input type="checkbox" id="Type31" name="All Types" value="Type 3" />
                                    <label htmlFor="Type31">
                                      <span>Type 3</span>
                                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                                          fill="white"
                                        ></path>
                                      </svg>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="single_checkbox_box oflow-hd">
                                    <input type="checkbox" id="Type41" name="All Types" value="Type 4" />
                                    <label htmlFor="Type41">
                                      <span>Type 4</span>
                                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                                          fill="white"
                                        ></path>
                                      </svg>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="single_checkbox_box oflow-hd">
                                    <input type="checkbox" id="Type51" name="All Types" value="Type 5" />
                                    <label htmlFor="Type51">
                                      <span>Type 5</span>
                                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                                          fill="white"
                                        ></path>
                                      </svg>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className={`checkbox_fields day3 ${ticketType === '3' && 'TabShow'}`}>
                            <h2>Select Ticket Type</h2>
                            <div className="checkbox_fields_wrapper">
                              <div className="row">
                                <div className="col-6">
                                  <div className="single_checkbox_box oflow-hd">
                                    <input type="checkbox" id="AllTypes2" name="All Types" value="All Types" />
                                    <label htmlFor="AllTypes2">
                                      <span>All Types</span>
                                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                                          fill="white"
                                        ></path>
                                      </svg>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="single_checkbox_box oflow-hd">
                                    <input type="checkbox" id="Type12" name="All Types" value="Type 1" />
                                    <label htmlFor="Type12">
                                      <span>Type 1</span>
                                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                                          fill="white"
                                        ></path>
                                      </svg>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="single_checkbox_box oflow-hd">
                                    <input type="checkbox" id="Type22" name="All Types" value="Type 2" />
                                    <label htmlFor="Type22">
                                      <span>Type 2</span>
                                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                                          fill="white"
                                        ></path>
                                      </svg>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="single_checkbox_box oflow-hd">
                                    <input type="checkbox" id="Type32" name="All Types" value="Type 3" />
                                    <label htmlFor="Type32">
                                      <span>Type 3</span>
                                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                                          fill="white"
                                        ></path>
                                      </svg>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="single_checkbox_box oflow-hd">
                                    <input type="checkbox" id="Type42" name="All Types" value="Type 4" />
                                    <label htmlFor="Type42">
                                      <span>Type 4</span>
                                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                                          fill="white"
                                        ></path>
                                      </svg>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dash_content_main_bottom_process dash_content_main_bottom_inside oflow-hd">
              <Link to="#" onClick={() => setAddTicket(false)}>
                Save
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPriviliegeAddNew;
