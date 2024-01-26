import { Link } from 'react-router-dom';

const CompanyInformationRepresentative = () => {
  return (
    <>
      <div className="form_box_area_main event_information_form oflow-hd">
        <div className="form_title oflow-hd">
          <h2>Company Representative</h2>
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
                <label htmlFor="#">Email Address</label>
                <input type="text" value="" placeholder="Email Address" />
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
                <label htmlFor="#">Position in Organisation</label>
                <input type="text" value="" placeholder="Position in Organisation" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dash_content_main_bottom_process dash_content_main_bottom_inside oflow-hd">
        <Link to="#">Save</Link>
      </div>
    </>
  );
};

export default CompanyInformationRepresentative;
