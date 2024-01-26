import { Link } from 'react-router-dom';
import banner from './../../assets/images/images/eventimg1.png';

const ManageEventHappeningAround = () => {
  return (
    <>
      <div className="dash_content_main oflow-hd">
        <div className="dash_content_main_head oflow-hd">
          <h2 className="text-capitalize">Manage Events on happening around</h2>
        </div>
        <div className="dash_content_main_center">
          <div className="dash_content_main_center_with_padding">
            <div className="dash_events_list_wrapper">
              <div className="row">
                {Array(6)
                  .fill()
                  .map((index) => (
                    <div key={index} className="col-md-6 col-lg-4">
                      <div className="dash_events_list_single oflow-hd">
                        <div className="dash_events_list_single_img oflow-hd">
                          <img src={banner} alt="img" />
                        </div>
                        <div className="dash_events_list_single_details oflow-hd">
                          <div className="dash_events_list_single_details_title oflow-hd">
                            <h2>Dameer & Fuad Presents SANJOY</h2>
                          </div>
                          <div className="dash_events_list_single_details_center_multi oflow-hd">
                            <div className="row">
                              <div className="col-6">
                                <div className="single_event_manage_details_box oflow-hd">
                                  <div className="single_event_manage_details oflow-hd">
                                    <span>Event Type:</span> Concert
                                  </div>
                                  <div className="single_event_manage_details oflow-hd">
                                    <span>Venue:</span> City light Cafe
                                  </div>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="single_event_manage_details_box single_event_manage_details_box_last oflow-hd">
                                  <div className="single_event_manage_details oflow-hd">
                                    <span>Date:</span> 20 July, 2023
                                  </div>
                                  <div className="single_event_manage_details oflow-hd">
                                    <span>Location:</span> Dhaka
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dash_events_list_single_details_action dash_events_list_single_details_action_ManageEvent oflow-hd">
                            <ul>
                              <li>
                                <Link to="#">Public Preview</Link>
                              </li>
                              <li>
                                <Link to="/single-event-on-happening-around">View</Link>
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

export default ManageEventHappeningAround;
