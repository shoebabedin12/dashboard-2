const PreRegistrationTable = ({ profile }) => {
  return (
    <>
      <div className="preregistration_table_data_wrapper_table oflow-hd">
        <div className="settings_ser_table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Day</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Location</th>
                <th>Date & Time</th>
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
                    <td>
                      <img src={profile} alt="img" />
                      Fuad Hossain
                    </td>
                    <td>Day 1</td>
                    <td>+880197635366</td>
                    <td>saifuddin1283@gmail.com</td>
                    <td>Dhaka</td>
                    <td>23 Jul, 12:30 AM</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PreRegistrationTable;
