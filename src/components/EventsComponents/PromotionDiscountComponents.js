import { Link } from 'react-router-dom';
import cupon from './../../assets/images/images/coupon.png';

const PromotionDiscountComponents = ({ setAddCupon }) => {
  return (
    <>
      <div className="dash_content_main_center">
        <div className="dash_content_main_center_with_padding promotionanddiscountwrapper">
          <div className="backbtnwithtxt backbtnwithtxt_double oflow-hd">
            <Link to="/single-event">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.50004 12C8.4284 12.0001 8.35745 11.986 8.29127 11.9586C8.22509 11.9311 8.16499 11.8909 8.1144 11.8402L2.65987 6.38565C2.60919 6.33503 2.56898 6.27492 2.54155 6.20875C2.51412 6.14258 2.5 6.07165 2.5 6.00002C2.5 5.92839 2.51412 5.85746 2.54155 5.79129C2.56898 5.72512 2.60919 5.665 2.65987 5.61438L8.1144 0.159852C8.32754 -0.0532839 8.67267 -0.0532839 8.88567 0.159852C9.09867 0.372988 9.09881 0.718123 8.88567 0.931122L3.81678 6.00002L8.88567 11.0689C8.93635 11.1195 8.97656 11.1796 9.00399 11.2458C9.03142 11.312 9.04554 11.3829 9.04554 11.4545C9.04554 11.5262 9.03142 11.5971 9.00399 11.6633C8.97656 11.7294 8.93635 11.7896 8.88567 11.8402C8.83509 11.8909 8.77498 11.9311 8.7088 11.9586C8.64262 11.986 8.57167 12.0001 8.50004 12Z"
                  fill="black"
                />
              </svg>
              <span>Promotion & Discount</span>
            </Link>
            <Link className="add_priv_ticket" to="#" onClick={() => setAddCupon(true)}>
              Add New
            </Link>
          </div>

          <div className="preregistration_table_data_wrapper_NOdata oflow-hd">
            <p>You didn’t create any coupon yet</p>
          </div>

          <div className="dhash_promotionDiscount_wrapper">
            <div className="dash_events_list_wrapper">
              <div className="row">
                {[...Array(3)].map((item, index) => (
                  <div key={index} className="col-md-6 col-lg-4">
                    <div className="dash_events_list_single oflow-hd">
                      <div className="dash_events_list_single_img oflow-hd">
                        <img src={cupon} alt="img" />
                      </div>
                      <div className="dash_events_list_single_details oflow-hd">
                        <div className="dash_events_list_single_details_title oflow-hd">
                          <h2>GetOff20</h2>
                        </div>
                        <div className="dash_events_list_single_details_center oflow-hd">
                          <span>Event:</span> Dameer & Fuad Presents SANJOY
                        </div>
                        <div className="dash_events_list_single_details_center_multi oflow-hd">
                          <div className="row">
                            <div className="col-6">
                              <div className="single_event_manage_details_box oflow-hd">
                                <div className="single_event_manage_details oflow-hd">
                                  <span>Type:</span> Coupon
                                </div>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="single_event_manage_details_box single_event_manage_details_box_last oflow-hd">
                                <div className="single_event_manage_details oflow-hd">
                                  <span>Discount:</span> 10% Flat
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="dash_events_list_single_details_action oflow-hd">
                          <ul>
                            <li>
                              <Link className="eventlist_remove_btn" to="#">
                                Delete
                              </Link>
                            </li>
                            <li>
                              <Link to="#">Edit</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromotionDiscountComponents;
