import { Link } from 'react-router-dom';

const Information = () => {
  return (
    <>
      <div className="form_box_area_main event_information_form oflow-hd">
        <div className="form_title oflow-hd">
          <h2>Information</h2>
        </div>
        <div className="form_wrapper oflow-hd">
          <div className="row">
            <div className="col-12">
              <div className="dash_main_main_table_form_up">
                <input type="file" id="avatar" name="cf_photo" accept="image/png, image/jpeg" />
              </div>
              <div className="single_input_box_des oflow-hd">
                <p>The size should be 400x400 PX</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single_input_box">
                <label htmlFor="#">Company Name</label>
                <input type="text" value="BDMusic" placeholder="Company Name" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="single_input_box">
                <label htmlFor="#">Email Address</label>
                <input type="text" value="info@bdmusic.com" placeholder="Email Address" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="single_input_box">
                <label htmlFor="#">Address</label>
                <input type="text" value="" placeholder="Address" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="single_input_box">
                <label htmlFor="#">Phone Number</label>
                <input type="text" value="+88018273535" placeholder="Phone Number" />
              </div>
            </div>
            <div className="col-12">
              <div className="single_input_box single_input_box_withupload">
                <label htmlFor="#">Trade Licensee No</label>
                <input type="text" value="" placeholder="Trade Licensee No" />
                <div className="dash_main_main_table_form_up">
                  <input type="file" id="avatar" name="cf_photo" accept="image/png, image/jpeg" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="single_input_box single_input_box_withupload">
                <label htmlFor="#">Tin No</label>
                <input type="text" value="" placeholder="Tin No" />
                <div className="dash_main_main_table_form_up">
                  <input type="file" id="avatar" name="cf_photo" accept="image/png, image/jpeg" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="single_input_box single_input_box_withupload">
                <label htmlFor="#">Bin No</label>
                <input type="text" value="" placeholder="Bin No" />
                <div className="dash_main_main_table_form_up">
                  <input type="file" id="avatar" name="cf_photo" accept="image/png, image/jpeg" />
                </div>
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

export default Information;
