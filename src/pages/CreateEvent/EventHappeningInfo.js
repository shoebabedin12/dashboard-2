
const EventHappeningInfo = ({ selectedValue, handleDropdownChange }) => {
  return (
    <>
      <div className="form_box_area_main event_information_form oflow-hd">
        <div className="form_title oflow-hd">
          <h2>Event Information</h2>
        </div>
        <div className="form_wrapper oflow-hd">
          <div className="row">
            <div className="col-md-6">
              <div className="single_input_box">
                <label htmlFor="event_title">Event Title</label>
                <input type="text" value="" id="event_title" placeholder="Event Title" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="single_input_box">
                <label htmlFor="event_organizer">Event Organizer</label>
                <input type="text" value="" id="event_organizer" placeholder="Event Organizer" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="single_input_box">
                <label htmlFor="event_type">Event Type</label>
                <select name="ei_eventtype" id="event_type">
                  <option value="#">Concert</option>
                  <option value="#">Concert</option>
                  <option value="#">Concert</option>
                  <option value="#">Concert</option>
                  <option value="#">Concert</option>
                  <option value="#">Concert</option>
                  <option value="#">Concert</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single_input_box">
                <label htmlFor="age_restriction">Age Restriction</label>
                <input type="text" value="" id="age_restriction" placeholder="None" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="single_input_box single_input_box_duration">
                <label htmlFor="ei_duration">
                  Duration
                  <span className="tooltips">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_696_109)">
                        <path
                          d="M10.243 1.75729C7.89986 -0.585632 4.10073 -0.585893 1.75729 1.75729C-0.585893 4.10047 -0.585632 7.8996 1.75729 10.243C4.10047 12.5857 7.8996 12.586 10.243 10.243C12.586 7.8996 12.5857 4.10073 10.243 1.75729ZM6.78253 8.60892C6.78253 8.81648 6.70007 9.01554 6.5533 9.16232C6.40653 9.30909 6.20747 9.39154 5.9999 9.39154C5.79234 9.39154 5.59327 9.30909 5.4465 9.16232C5.29973 9.01554 5.21728 8.81648 5.21728 8.60892V5.47841C5.21728 5.27085 5.29973 5.07178 5.4465 4.92501C5.59327 4.77824 5.79234 4.69579 5.9999 4.69579C6.20747 4.69579 6.40653 4.77824 6.5533 4.92501C6.70007 5.07178 6.78253 5.27085 6.78253 5.47841V8.60892ZM5.98608 4.14064C5.53528 4.14064 5.23476 3.82133 5.24415 3.42715C5.23476 3.01392 5.53528 2.70427 5.99521 2.70427C6.45539 2.70427 6.74653 3.01419 6.75618 3.42715C6.75592 3.82133 6.45565 4.14064 5.98608 4.14064Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_696_109">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </label>
                <select id="ei_duration" name="ei_duration" value={selectedValue} onChange={handleDropdownChange}>
                  <option value="1">Day 1</option>
                  <option value="2">Day 2</option>
                  <option value="3">Day 3</option>
                  <option value="4">Day 4</option>
                  <option value="5">Day 5</option>
                </select>
                {selectedValue > 1 && (
                  <div className="single_input_box_duration_extra">
                    <div className="single_input_box_rado">
                      <ul>
                        <li>
                          <input type="radio" name="ei_duration" id="Continuous" value="Continuous" />
                          <label htmlFor="Continuous">
                            Continuous
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                                fill="white"
                              />
                            </svg>
                          </label>
                        </li>
                        <li>
                          <input type="radio" name="ei_duration" id="Random" value="Random" />
                          <label htmlFor="Random">
                            Random
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventHappeningInfo;
