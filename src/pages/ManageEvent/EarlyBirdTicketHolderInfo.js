import { useState } from 'react';
import { Link } from 'react-router-dom';

const EarlyBirdTicketHolderInfo = () => {
  const [addMore, setAddMore] = useState(false);
  const [addMore2, setAddMore2] = useState(false);
  const [ticketHolder, setTicketHolder] = useState('');
  return (
    <>
      <div className="form_box_area_main event_information_form oflow-hd">
        <div className="form_title oflow-hd">
          <h2>Customer/Ticket Holder’s Information</h2>
        </div>
        <div className="form_wrapper oflow-hd">
          <div className="row">
            <div className="col-12">
              <div className="single_input_box prereg_form_exclusive">
                <label htmlFor="#">Do you want ticket holders informations for each tickets?</label>
                <div className="single_input_box_rado">
                  <ul>
                    <li>
                      <input type="radio" name="reentryoncetheyleave" id="Yes" value="Yes" onClick={() => setTicketHolder('Yes')} />
                      <label htmlFor="Yes">
                        Yes
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                            fill="white"
                          ></path>
                        </svg>
                      </label>
                    </li>
                    <li>
                      <input type="radio" name="reentryoncetheyleave" id="No" value="No" onClick={() => setTicketHolder('No')} />
                      <label htmlFor="No">
                        No, one customer information for multiple ticket is allowed
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                            fill="white"
                          ></path>
                        </svg>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {ticketHolder === 'Yes' && (
              <div className="col-12">
                <div className="single_input_box prereg_form_exclusive">
                  <label htmlFor="#">
                    Ticket Holder’s Infromation
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
                  <div className="checkbox_fields">
                    <div className="checkbox_fields_wrapper">
                      <div className="row">
                        <div className="col-6">
                          <div className="single_checkbox_box oflow-hd">
                            <input type="checkbox" id="Name" name="Name1" value="Name" />
                            <label htmlFor="Name">
                              <span>Name</span>
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
                            <input type="checkbox" id="Email" name="Name1" value="Email" />
                            <label htmlFor="Email">
                              <span>Email</span>
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
                            <input type="checkbox" id="PhoneNumber" name="Name1" value="Phone Number" />
                            <label htmlFor="PhoneNumber">
                              <span>Phone Number</span>
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
                            <input type="checkbox" id="DateofBirth" name="Name1" value="Date of Birth" />
                            <label htmlFor="DateofBirth">
                              <span>Date of Birth</span>
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
                            <input type="checkbox" id="Gender" name="Name1" value="Gender" />
                            <label htmlFor="Gender">
                              <span>Gender</span>
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
                            <input type="checkbox" id="NationalID" name="Name1" value="National ID" />
                            <label htmlFor="NationalID">
                              <span>National ID</span>
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
                            <input type="checkbox" id="Photo" name="Name1" value="Photo" />
                            <label htmlFor="Photo">
                              <span>Photo</span>
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
                    <div className="dash_main_main_table_add oflow-hd">
                      {!addMore && (
                        <ul>
                          <li>
                            <Link className="addMoreArtist" to="#!" onClick={() => setAddMore(true)}>
                              Add More
                            </Link>
                          </li>
                        </ul>
                      )}
                      {addMore && (
                        <div className="dash_main_main_table_form oflow-hd">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="single_input_box">
                                <input type="text" value="" placeholder="Name" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="single_input_box">
                                <select>
                                  <option value="" disabled="" selected="">
                                    Type
                                  </option>
                                  <option value="Text">Text</option>
                                  <option value="Textarea">Textarea</option>
                                  <option value="fileup">File Upload</option>
                                </select>
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="dash_main_main_table_form_action">
                                <ul>
                                  <ul>
                                    <li>
                                      <Link to="#!" onClick={() => setAddMore(false)}>
                                        Cancel
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#!">Add</Link>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {ticketHolder === 'No' && (
              <div className="col-12">
                <div className="single_input_box prereg_form_exclusive">
                  <label htmlFor="#">
                    Customer Information
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
                  <div className="checkbox_fields">
                    <div className="checkbox_fields_wrapper">
                      <div className="row">
                        <div className="col-6">
                          <div className="single_checkbox_box oflow-hd">
                            <input type="checkbox" id="Name" name="Name2" value="Name" disabled="disabled" checked="checked" />
                            <label htmlFor="Name">
                              <span>Name</span>
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
                            <input type="checkbox" id="Email" name="Name2" value="Email" disabled="disabled" checked="checked" />
                            <label htmlFor="Email">
                              <span>Email</span>
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
                            <input
                              type="checkbox"
                              id="PhoneNumber"
                              name="Name2"
                              value="Phone Number"
                              disabled="disabled"
                              checked="checked"
                            />
                            <label htmlFor="PhoneNumber">
                              <span>Phone Number</span>
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
                            <input type="checkbox" id="DateofBirth" name="Name2" value="Date of Birth" />
                            <label htmlFor="DateofBirth">
                              <span>Date of Birth</span>
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
                    <div className="dash_main_main_table_add oflow-hd">
                      {!addMore2 && (
                        <ul>
                          <li>
                            <Link className="addMoreArtist" to="#!" onClick={() => setAddMore2(true)}>
                              Add More
                            </Link>
                          </li>
                        </ul>
                      )}
                      {addMore2 && (
                        <div className="dash_main_main_table_form oflow-hd">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="single_input_box">
                                <input type="text" value="" placeholder="Name" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="single_input_box">
                                <select>
                                  <option value="" disabled="" selected="">
                                    Type
                                  </option>
                                  <option value="Text">Text</option>
                                  <option value="Textarea">Textarea</option>
                                  <option value="fileup">File Upload</option>
                                </select>
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="dash_main_main_table_form_action">
                                <ul>
                                  <ul>
                                    <li>
                                      <Link to="#!" onClick={() => setAddMore2(false)}>
                                        Cancel
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#!">Add</Link>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EarlyBirdTicketHolderInfo;
