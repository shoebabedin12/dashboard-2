import { Link } from 'react-router-dom';
import banner from './../../assets/images/images/eventimg1.png';

const CreateDraftOnHappeningAround = () => {
  return (
    <>
      <div className="dash_content_main oflow-hd">
        <div className="dash_content_main_head oflow-hd">
          <h2>Draft Events on happening around</h2>
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
                          <div className="dash_events_list_single_details_center oflow-hd">
                            <span>Created:</span> 10 July 2023
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

export default CreateDraftOnHappeningAround;
