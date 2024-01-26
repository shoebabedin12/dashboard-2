const CouponType = () => {
  return (
    <>
      <div className="form_box_area_main event_information_form oflow-hd">
        <div className="form_title oflow-hd">
          <h2>Create Promotion & Discount</h2>
        </div>
        <div className="form_wrapper oflow-hd">
          <div className="row">
            <div className="col-12">
              <div className="single_input_box prereg_form_exclusive">
                <label htmlFor="#">Type</label>
                <div className="single_input_box_rado">
                  <ul>
                    <li>
                      <input type="radio" name="promodiscounttype" id="Promotion" value="Promotion" />
                      <label htmlFor="Promotion">
                        Promotion
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                            fill="white"
                          />
                        </svg>
                      </label>
                    </li>
                    <li>
                      <input type="radio" name="promodiscounttype" id="Coupon" value="Coupon" />
                      <label htmlFor="Coupon">
                        Coupon
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                            fill="white"
                          />
                        </svg>
                      </label>
                    </li>
                    <li>
                      <input type="radio" name="promodiscounttype" id="PreRegistrationDiscount" value="Pre-Registration Discount" />
                      <label htmlFor="PreRegistrationDiscount">
                        Pre-Registration Discount
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
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponType;
