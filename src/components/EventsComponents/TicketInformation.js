const TicketInformation = () => {
  return (
    <>
      <div className="form_box_area_main event_information_form oflow-hd">
        <div className="form_title oflow-hd">
          <h2>Ticket information</h2>
        </div>
        <div className="form_wrapper oflow-hd">
          <div className="row">
            <div className="col-md-6">
              <div className="single_input_box">
                <label htmlFor="#">Maximum Tickets at a Time (single checkout)</label>
                <input type="text" value="" placeholder="0" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="single_input_box">
                <label htmlFor="#">Maximum Tickets From an Account</label>
                <input type="text" value="" placeholder="0" />
              </div>
            </div>
            <div className="col-12">
              <div className="single_input_box prereg_form_exclusive">
                <label htmlFor="#">Can Audience Make Re-Entry Once They Leave The Event</label>
                <div className="single_input_box_rado">
                  <ul>
                    <li>
                      <input type="radio" name="reentryoncetheyleave" id="Yes" value="Yes" />
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
                      <input type="radio" name="reentryoncetheyleave" id="No" value="No" />
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
            <div className="col-12">
              <div className="single_input_box">
                <label htmlFor="#">Ticket Go Live at</label>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketInformation;
