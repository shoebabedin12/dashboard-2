import { useState } from 'react';
import { Link } from 'react-router-dom';
import CouponInformation from './CouponInformation';
import CouponType from './CouponType';

const PromotionDiscountAddComponents = ({ setAddCupon }) => {
  const [step, setStep] = useState(1);

  const handleClick = (event) => {
    event.preventDefault(); // Prevents the default behavior (page reload) of the link
    setAddCupon(false);
    // Add any other logic you want to perform when the link is clicked without reloading the page
  };
  return (
    <>
      <div className="dash_content_main_center">
        <div className="row">
          <div className="col-md-5">
            <div className="form_left_col form_left_col_wthback oflow-hd">
              <div className="backbtnwithtxt oflow-hd">
                <Link to="#" onClick={handleClick}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.50004 12C8.4284 12.0001 8.35745 11.986 8.29127 11.9586C8.22509 11.9311 8.16499 11.8909 8.1144 11.8402L2.65987 6.38565C2.60919 6.33503 2.56898 6.27492 2.54155 6.20875C2.51412 6.14258 2.5 6.07165 2.5 6.00002C2.5 5.92839 2.51412 5.85746 2.54155 5.79129C2.56898 5.72512 2.60919 5.665 2.65987 5.61438L8.1144 0.159852C8.32754 -0.0532839 8.67267 -0.0532839 8.88567 0.159852C9.09867 0.372988 9.09881 0.718123 8.88567 0.931122L3.81678 6.00002L8.88567 11.0689C8.93635 11.1195 8.97656 11.1796 9.00399 11.2458C9.03142 11.312 9.04554 11.3829 9.04554 11.4545C9.04554 11.5262 9.03142 11.5971 9.00399 11.6633C8.97656 11.7294 8.93635 11.7896 8.88567 11.8402C8.83509 11.8909 8.77498 11.9311 8.7088 11.9586C8.64262 11.986 8.57167 12.0001 8.50004 12Z"
                      fill="black"
                    />
                  </svg>
                  <span>Create Promotion & Discount</span>
                </Link>
              </div>
              <div className="form_left_col_des oflow-hd">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Accumsan nulla vitae et pulvinar viverra ornare vitae. Gravida aliquet iaculis
                </p>
              </div>
              <div className="form_left_col_progress oflow-hd">
                <ul>
                  <li className={(step === 1 && 'current') || (step >= 1 && 'checked')}>
                    <Link to="#">
                      <div>
                        <span>01</span>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.82918 8.72843C3.73373 8.82445 3.60348 8.87802 3.4682 8.87802C3.33293 8.87802 3.20268 8.82445 3.10723 8.72843L0.224383 5.84511C-0.0747942 5.54593 -0.0747942 5.06079 0.224383 4.76218L0.585358 4.40111C0.88463 4.10194 1.3692 4.10194 1.66838 4.40111L3.46823 6.20103L8.33157 1.33754C8.63085 1.03836 9.1159 1.03836 9.41459 1.33754L9.77557 1.69861C10.0747 1.99779 10.0747 2.48284 9.77557 2.78154L3.82918 8.72843Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <p>Type</p>
                    </Link>
                  </li>
                  <li className={(step === 2 && 'current') || (step >= 2 && 'checked')}>
                    <Link to="#">
                      <div>
                        <span>02</span>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.82918 8.72843C3.73373 8.82445 3.60348 8.87802 3.4682 8.87802C3.33293 8.87802 3.20268 8.82445 3.10723 8.72843L0.224383 5.84511C-0.0747942 5.54593 -0.0747942 5.06079 0.224383 4.76218L0.585358 4.40111C0.88463 4.10194 1.3692 4.10194 1.66838 4.40111L3.46823 6.20103L8.33157 1.33754C8.63085 1.03836 9.1159 1.03836 9.41459 1.33754L9.77557 1.69861C10.0747 1.99779 10.0747 2.48284 9.77557 2.78154L3.82918 8.72843Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <p>Information</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            {step === 1 && <CouponType />}
            {step === 2 && <CouponInformation />}
          </div>
        </div>
      </div>
      <div className="dash_content_main_bottom_process oflow-hd">
        {step < 2 ? (
          <Link to="#" type="button" onClick={() => setStep(step + 1)}>
            Proceed
          </Link>
        ) : (
          <Link to="#" type="submit">
            Proceed
          </Link>
        )}
      </div>
    </>
  );
};

export default PromotionDiscountAddComponents;
