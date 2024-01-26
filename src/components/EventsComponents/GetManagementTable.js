const GetManagementTable = () => {
  return (
    <>
      <div className="preregistration_table_data_wrapper preregistration_table_data_gate_manage oflow-hd">
        <div className="preregistration_table_data_wrapper_NOdata oflow-hd">
          <p>No data to show</p>
        </div>

        <div className="preregistration_table_data_wrapper_table_details oflow-hd">
          <h2>Total Entry: 103</h2>
          <div className="preregistration_table_data_wrapper_table_details_filter oflow-hd">
            <span>Filter By</span>
            <div className="preregistration_table_data_wrapper_table_details_filter_box oflow-hd">
              <input className="largesearch" type="text" placeholder="Name/ Phone no / Email Address" />
            </div>
            <span className="searchrslttotal">Total Filtered Result: 50</span>
          </div>
        </div>

        <div className="preregistration_table_data_wrapper_table oflow-hd">
          <div className="settings_ser_table">
            <table>
              <thead>
                <tr>
                  <th>Ticket ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Entry Time</th>
                </tr>
                <tr>
                  <th style={{ height: '1px', padding: '0px', background: 'rgba(0, 0, 0, 0.10)' }} colSpan="6"></th>
                </tr>
              </thead>
              <tbody>
                {Array(60)
                  .fill()
                  .map((index) => (
                    <tr key={index}>
                      <td>190982</td>
                      <td>Fuad Hossain</td>
                      <td>saifuddin1283@gmail.com</td>
                      <td>+880197635366</td>
                      <td>12:30 AM</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetManagementTable;
