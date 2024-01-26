import { useState } from 'react';

const CouponInformation = () => {
  const [addPromotion, setAddPromotion] = useState(false);
  const [addCoupon, setAddCoupon] = useState(false);
  const [ticketType, setTicketType] = useState('1');
  const [ticketType2, setTicketType2] = useState('1');
  return (
    <>
      <div className="form_box_area_main oflow-hd">
        <div className="form_title oflow-hd">
          <h2>Add Promotion</h2>
        </div>
        <div className="form_wrapper oflow-hd">
          <div className="row">
            <div className="col-md-6">
              <div className="single_input_box">
                <label htmlFor="#">Promotion Start at</label>
                <input className="calendar" type="text" value="" placeholder="Date" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="single_input_box">
                <label htmlFor="#">Promotion End at</label>
                <input className="calendar" type="text" value="" placeholder="Date" />
              </div>
            </div>
            <div className="col-12">
              <div className="single_input_box">
                <label htmlFor="#">Discount</label>
                <div className="multifieldrow_wrapper">
                  <div className="multifieldrow_wrapper_single">
                    <div className="row multifieldrow">
                      <div className="col-md-8">
                        <div className="single_input_box">
                          <input type="text" value="" placeholder="Amoount" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single_input_box">
                          <select name="">
                            <option value="">Percentages</option>
                            <option value="">Fixed (BDT)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="single_input_box prereg_form_exclusive">
                <label htmlFor="#">Ticket for</label>
                <div className="single_input_box_rado">
                  <ul>
                    <li>
                      <input
                        type="radio"
                        name="pri_ticket_for"
                        id="AllDaysandTypes"
                        value="All Days and Types"
                        onClick={() => setAddPromotion(false)}
                      />
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
                      <input type="radio" name="pri_ticket_for" id="Customize" value="Customize" onClick={() => setAddPromotion(true)} />
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

                {addPromotion && (
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

                    <div className={`checkbox_fields day1 ${ticketType === '2' && 'TabShow'}`}>
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
                          <div className="col-6">
                            <div className="single_checkbox_box oflow-hd">
                              <input type="checkbox" id="Type4" name="All Types" value="Type 4" />
                              <label htmlFor="Type4">
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
                              <input type="checkbox" id="Type5" name="All Types" value="Type 5" />
                              <label htmlFor="Type5">
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

                    <div className={`checkbox_fields day1 ${ticketType === '3' && 'TabShow'}`}>
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
                          <div className="col-6">
                            <div className="single_checkbox_box oflow-hd">
                              <input type="checkbox" id="Type4" name="All Types" value="Type 4" />
                              <label htmlFor="Type4">
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

      <div className="form_box_area_main oflow-hd">
        <div className="form_title oflow-hd">
          <h2>Add Coupon</h2>
        </div>
        <div className="form_wrapper oflow-hd">
          <div className="row">
            <div className="col-12">
              <div className="single_input_box">
                <label htmlFor="#">Discount</label>
                <div className="multifieldrow_wrapper">
                  <div className="multifieldrow_wrapper_single">
                    <div className="row multifieldrow">
                      <div className="col-md-4">
                        <div className="single_input_box">
                          <input type="text" value="" placeholder="Coupon Code" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single_input_box">
                          <input type="text" value="" placeholder="Amoount" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single_input_box">
                          <select name="">
                            <option value="">Percentages</option>
                            <option value="">Fixed (BDT)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="single_input_box prereg_form_exclusive">
                <label htmlFor="#">
                  Coupon Apply
                  <span className="tooltips">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_696_109)">
                        <path
                          d="M10.243 1.75729C7.89986 -0.585632 4.10073 -0.585893 1.75729 1.75729C-0.585893 4.10047 -0.585632 7.8996 1.75729 10.243C4.10047 12.5857 7.8996 12.586 10.243 10.243C12.586 7.8996 12.5857 4.10073 10.243 1.75729ZM6.78253 8.60892C6.78253 8.81648 6.70007 9.01554 6.5533 9.16232C6.40653 9.30909 6.20747 9.39154 5.9999 9.39154C5.79234 9.39154 5.59327 9.30909 5.4465 9.16232C5.29973 9.01554 5.21728 8.81648 5.21728 8.60892V5.47841C5.21728 5.27085 5.29973 5.07178 5.4465 4.92501C5.59327 4.77824 5.79234 4.69579 5.9999 4.69579C6.20747 4.69579 6.40653 4.77824 6.5533 4.92501C6.70007 5.07178 6.78253 5.27085 6.78253 5.47841V8.60892ZM5.98608 4.14064C5.53528 4.14064 5.23476 3.82133 5.24415 3.42715C5.23476 3.01392 5.53528 2.70427 5.99521 2.70427C6.45539 2.70427 6.74653 3.01419 6.75618 3.42715C6.75592 3.82133 6.45565 4.14064 5.98608 4.14064Z"
                          fill="black"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_696_109">
                          <rect width="12" height="12" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <span></span>
                  </span>
                </label>
                <div className="single_input_box_rado">
                  <ul>
                    <li>
                      <input type="radio" name="couponapplyon" id="OnTotalPrice" value="On Total Price" />
                      <label htmlFor="OnTotalPrice">
                        On Total Price
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                            fill="white"
                          />
                        </svg>
                      </label>
                    </li>
                    <li>
                      <input type="radio" name="couponapplyon" id="OnEachTicket" value="On Each Ticket" />
                      <label htmlFor="OnEachTicket">
                        On Each Ticket
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
                <label htmlFor="#">How Many Time One User Can Apply This Coupon?</label>
                <input type="text" value="" placeholder="0" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="single_input_box">
                <label htmlFor="#">How Many Time This Coupon can Be Applied in Total?</label>
                <input type="text" value="" placeholder="0" />
              </div>
            </div>

            <div className="col-12">
              <div className="single_input_box prereg_form_exclusive">
                <label htmlFor="#">Ticket for</label>
                <div className="single_input_box_rado">
                  <ul>
                    <li>
                      <input
                        type="radio"
                        name="pri_ticket_for"
                        id="AllDaysandTypes1"
                        value="All Days and Types"
                        onClick={() => setAddCoupon(false)}
                      />
                      <label htmlFor="AllDaysandTypes1">
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
                      <input type="radio" name="pri_ticket_for" id="Customize1" value="Customize" onClick={() => setAddCoupon(true)} />
                      <label htmlFor="Customize1">
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

                {addCoupon && (
                  <div className="form_inside_tabs_wrapper">
                    <div className="form_inside_tabs">
                      <ul>
                        <li className={`${ticketType2 === '1' && 'TabOpen'}`} data-tab="day1">
                          <button onClick={() => setTicketType2('1')}>Day 1</button>
                        </li>
                        <li className={`${ticketType2 === '2' && 'TabOpen'}`} data-tab="day2">
                          <button onClick={() => setTicketType2('2')}>Day 2</button>
                        </li>
                        <li className={`${ticketType2 === '3' && 'TabOpen'}`} data-tab="day3">
                          <button onClick={() => setTicketType2('3')}>Day 3</button>
                        </li>
                      </ul>
                    </div>

                    <div className={`checkbox_fields day1 ${ticketType2 === '1' && 'TabShow'}`}>
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
                        </div>
                      </div>
                    </div>

                    <div className={`checkbox_fields day1 ${ticketType2 === '2' && 'TabShow'}`}>
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
                          <div className="col-6">
                            <div className="single_checkbox_box oflow-hd">
                              <input type="checkbox" id="Type52" name="All Types" value="Type 5" />
                              <label htmlFor="Type52">
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

                    <div className={`checkbox_fields day1 ${ticketType2 === '3' && 'TabShow'}`}>
                      <h2>Select Ticket Type</h2>
                      <div className="checkbox_fields_wrapper">
                        <div className="row">
                          <div className="col-6">
                            <div className="single_checkbox_box oflow-hd">
                              <input type="checkbox" id="AllTypes3" name="All Types" value="All Types" />
                              <label htmlFor="AllTypes3">
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
                              <input type="checkbox" id="Type13" name="All Types" value="Type 1" />
                              <label htmlFor="Type13">
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
                              <input type="checkbox" id="Type23" name="All Types" value="Type 2" />
                              <label htmlFor="Type23">
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
                              <input type="checkbox" id="Type33" name="All Types" value="Type 3" />
                              <label htmlFor="Type33">
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
                              <input type="checkbox" id="Type43" name="All Types" value="Type 4" />
                              <label htmlFor="Type43">
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

      <div className="form_box_area_main oflow-hd">
        <div className="form_title oflow-hd">
          <h2>Pre-Registration</h2>
        </div>
        <div className="form_wrapper oflow-hd">
          <div className="row">
            <div className="col-12">
              <div className="single_input_box">
                <label htmlFor="#">Discount</label>
                <div className="multifieldrow_wrapper">
                  <div className="multifieldrow_wrapper_single">
                    <div className="row multifieldrow">
                      <div className="col-md-8">
                        <div className="single_input_box">
                          <input type="text" value="" placeholder="Amoount" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single_input_box">
                          <select name="">
                            <option value="">Percentages</option>
                            <option value="">Fixed (BDT)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponInformation;
