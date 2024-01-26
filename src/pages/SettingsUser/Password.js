const Password = () => {
  return (
    <>
      <div className="dash_content_main oflow-hd">
        <div className="dash_content_main_head dash_content_main_head_withlink oflow-hd">
          <h2>Change Password</h2>
        </div>
        <div className="dash_content_main_center">
          <div className="dash_content_main_center_with_padding addnewuserpage">
            <div className="form_wrapper oflow-hd">
              <div className="row">
                <div className="col-12">
                  <div className="single_input_box">
                    <label htmlFor="#">Current Password</label>
                    <input type="text" value="" placeholder="Current Password" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="single_input_box">
                    <label htmlFor="#">New Password</label>
                    <input type="text" value="" placeholder="New Password" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="single_input_box">
                    <label htmlFor="#">Confirm Password</label>
                    <input type="text" value="" placeholder="Confirm Password" />
                  </div>
                </div>
              </div>
            </div>
            <div className="addnewuserpage_btn oflow-hd">
              <a href="">Save</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
