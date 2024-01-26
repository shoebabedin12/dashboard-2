import { Body, Cell, Header, HeaderCell, HeaderRow, Row, Table } from '@table-library/react-table-library';
import { useTheme } from '@table-library/react-table-library/theme';
import { useState } from 'react';
import img1 from './../../assets/images/images/timg.png';
const { Link } = require('react-router-dom');

const generateNodes = () => {
  const nodes = [];

  const today = new Date();

  for (let i = 0; i < 50; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + (i % 30)); // Use modulo to cycle through the 30 days

    nodes.push({
      ticketId: `00${i + 1}`,
      name: `Person ${i + 1}`,
      phone: `123-456-789${i + 1}`,
      email: `person${i + 1}@example.com`,
      nid: `ABC${i + 1}123`,
      gender: (i + 1) % 2 === 0 ? 'Male' : 'Female',
      dateOfBirth: `199${i + 1}-01-01`,
      day: `Day ${(i % 30) + 1}`, // Adjusted to cycle through the 30 days
      type: (i + 1) % 2 === 0 ? 'VIP' : 'Regular',
      quantity: ((i + 1) % 3) + 1,
      purchasedBy: (i + 1) % 2 === 0 ? 'Self' : 'Other',
      discount: (i + 1) % 3 === 0 ? 'Yes' : 'No',
      discountType: (i + 1) % 2 === 0 ? 'Percentage' : 'Fixed',
      discountAmount: (i + 1) % 3 === 0 ? 10 : 0,
      paymentAmount: 100 - (i + 1),
      paymentMethod: (i + 1) % 2 === 0 ? 'Credit Card' : 'Cash',
      ticketTimeAndDate: `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date
        .getDate()
        .toString()
        .padStart(2, '0')} 12:00 PM`
    });
  }

  return nodes;
};
const TicketDetails = () => {
  const [filter, setFilter] = useState(false);
  const data = { nodes: generateNodes(50) };
  const theme = useTheme({
    Table: `
        --data-table-library_grid-template-columns:  repeat(17, 200px);
        max-height: 500px;
      `,
    BaseCell: `
        &:nth-of-type(1) {
          left: 0px;
        }

        &:nth-of-type(2) {
          left: 200px;
        }
      `
  });

  return (
    <>
      <div className="dash_content_main oflow-hd">
        <div className="ticketDatashowMore_head oflow-hd">
          <div className="backbtnwithtxt oflow-hd">
            <Link to="/event-ticketing-registration">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.50004 12C8.4284 12.0001 8.35745 11.986 8.29127 11.9586C8.22509 11.9311 8.16499 11.8909 8.1144 11.8402L2.65987 6.38565C2.60919 6.33503 2.56898 6.27492 2.54155 6.20875C2.51412 6.14258 2.5 6.07165 2.5 6.00002C2.5 5.92839 2.51412 5.85746 2.54155 5.79129C2.56898 5.72512 2.60919 5.665 2.65987 5.61438L8.1144 0.159852C8.32754 -0.0532839 8.67267 -0.0532839 8.88567 0.159852C9.09867 0.372988 9.09881 0.718123 8.88567 0.931122L3.81678 6.00002L8.88567 11.0689C8.93635 11.1195 8.97656 11.1796 9.00399 11.2458C9.03142 11.312 9.04554 11.3829 9.04554 11.4545C9.04554 11.5262 9.03142 11.5971 9.00399 11.6633C8.97656 11.7294 8.93635 11.7896 8.88567 11.8402C8.83509 11.8909 8.77498 11.9311 8.7088 11.9586C8.64262 11.986 8.57167 12.0001 8.50004 12Z"
                  fill="black"
                />
              </svg>
              <span>Back</span>
            </Link>
          </div>
        </div>

        <div className="dash_content_main_center">
          <div className="dash_content_main_center_with_padding dash_content_main_center_with_paddingticketDatashowMore_head">
            <div className="preregistration_table_data_wrapper oflow-hd">
              <div className="ticketDatashowMore_title">
                <h2>Ticket Details</h2>
              </div>
              <div className="preregistration_table_data_wrapper_NOdata oflow-hd">
                <p>No data to show</p>
              </div>

              <div className="preregistration_table_data_wrapper_table_details oflow-hd preregistration_table_data_wrapper_table_details_largetable">
                <h2>Total Registration Till Now: 103</h2>
                <div className="preregistration_table_data_wrapper_table_details_filteraction">
                  <ul>
                    {filter && (
                      <li className={filter && 'active'}>
                        <Link to="#!" onClick={() => setFilter(false)}>
                          Cancel
                        </Link>
                      </li>
                    )}
                    {!filter && (
                      <li>
                        <Link to="#!" onClick={() => setFilter(true)}>
                          Filter
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
                {filter && (
                  <div className="preregistration_table_data_wrapper_bulksearch oflow-hd">
                    <div className="row">
                      <div className="col-6 col-md-4">
                        <div className="single_input_box">
                          <input type="text" value="" placeholder="Name/ Phone no / Email Address" />
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="single_input_box">
                          <select name="">
                            <option value="" disabled selected>
                              Day
                            </option>
                            <option value="">Day 1</option>
                            <option value="">Day 2</option>
                            <option value="">Day 3</option>
                            <option value="">Day 4</option>
                            <option value="">Day 5</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="single_input_box">
                          <input type="text" value="" placeholder="NID" />
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="single_input_box">
                          <select name="">
                            <option value="" disabled selected>
                              Geneder
                            </option>
                            <option value="">Male</option>
                            <option value="">Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="single_input_box">
                          <select name="">
                            <option value="" disabled selected>
                              Purchased By
                            </option>
                            <option value="">Self</option>
                            <option value="">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="single_input_box">
                          <select name="">
                            <option value="" disabled selected>
                              Discount
                            </option>
                            <option value="">Yes</option>
                            <option value="">No</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="single_input_box">
                          <select name="">
                            <option value="" disabled selected>
                              Discount Type
                            </option>
                            <option value="">Fixed</option>
                            <option value="">Percentage</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="single_input_box">
                          <input className="calendar" type="text" value="" placeholder="Date" />
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="single_input_box">
                          <input className="time" type="text" value="" placeholder="Time" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="preregistration_table_data_wrapper_table oflow-hd">
                <div className="dy_ser_table">
                  <Table data={data} theme={theme} layout={{ custom: true, horizontalScroll: true, fixedHeader: true }}>
                    {(tableList) => (
                      <>
                        <Header>
                          <HeaderRow>
                            <HeaderCell pinLeft>Ticket ID</HeaderCell>
                            <HeaderCell pinLeft>Name</HeaderCell>
                            <HeaderCell>Phone</HeaderCell>
                            <HeaderCell>Email</HeaderCell>
                            <HeaderCell>NID</HeaderCell>
                            <HeaderCell>Gender</HeaderCell>
                            <HeaderCell>Date of Birth</HeaderCell>
                            <HeaderCell>Day</HeaderCell>
                            <HeaderCell>Type</HeaderCell>
                            <HeaderCell>Quantity</HeaderCell>
                            <HeaderCell>Purchased by</HeaderCell>
                            <HeaderCell>Discount</HeaderCell>
                            <HeaderCell>Discount type</HeaderCell>
                            <HeaderCell>Discount Amount</HeaderCell>
                            <HeaderCell>Payment Amount</HeaderCell>
                            <HeaderCell>Payment Method</HeaderCell>
                            <HeaderCell>Ticket Time and Date</HeaderCell>
                          </HeaderRow>
                        </Header>

                        <Body>
                          {tableList.map((item, i) => (
                            <Row key={i} item={item}>
                              <Cell pinLeft>{item.ticketId}</Cell>
                              <Cell pinLeft>
                                <img src={img1} alt="" />
                                {item.name}
                              </Cell>
                              <Cell>{item.phone}</Cell>
                              <Cell>{item.email}</Cell>
                              <Cell>{item.nid}</Cell>
                              <Cell>{item.gender}</Cell>
                              <Cell>{item.dateOfBirth}</Cell>
                              <Cell>{item.day}</Cell>
                              <Cell>{item.type}</Cell>
                              <Cell>{item.quantity}</Cell>
                              <Cell>{item.purchasedBy}</Cell>
                              <Cell>{item.discount}</Cell>
                              <Cell>{item.discountType}</Cell>
                              <Cell>{item.discountAmount}</Cell>
                              <Cell>{item.paymentAmount}</Cell>
                              <Cell>{item.paymentMethod}</Cell>
                              <Cell>{item.ticketTimeAndDate}</Cell>
                            </Row>
                          ))}
                        </Body>
                      </>
                    )}
                  </Table>
                  <div className="large_table_bottom oflow-hd">
                    <div className="large_table_bottom_sr oflow-hd">
                      Total Filtered Result: <span>50</span>
                    </div>
                    <ul>
                      <li className="large_table_bottom_total_discount">
                        Total Discount Amount: <span>1,00,000</span>
                      </li>
                      <li className="large_table_bottom_total_earn">
                        Total Amount: <span>1,00,000</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketDetails;
