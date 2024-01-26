import { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from './../../assets/images/images/eventimg1.png';
const TicketConfig = () => {
  const [addTicket, setAddTicket] = useState(false);
  const [addTicket2, setAddTicket2] = useState(false);
  const [addForm, setAddForm] = useState(false);
  const [differentTicket, setDifferentTicket] = useState(false);
  return (
    <>
      <div className="form_box_area_main event_information_form oflow-hd">
        <div className="form_title oflow-hd">
          <h2>Ticket Configuration</h2>
        </div>
        <div className="form_wrapper oflow-hd">
          <div className="row">
            <div className="col-12">
              <div className="single_input_box artist_table sameticketordifferent">
                <label htmlFor="#">Audience will Need</label>
                <div className="single_input_box_rado ec_sameartisitornot">
                  <ul>
                    <li>
                      <input
                        type="radio"
                        name="ec_sameartisitornot"
                        id="YesSame"
                        value="YesSame"
                        onClick={() => setDifferentTicket('SameTicket')}
                      />
                      <label htmlFor="YesSame">
                        Same ticket for all event days
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                            fill="white"
                          ></path>
                        </svg>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="ec_sameartisitornot"
                        id="NoDifferent"
                        value="NoDifferent"
                        onClick={() => setDifferentTicket('DifferentTicket')}
                      />
                      <label htmlFor="NoDifferent">
                        Different tickets for each days
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                            fill="white"
                          ></path>
                        </svg>
                      </label>
                    </li>
                  </ul>
                </div>
                {differentTicket === 'SameTicket' && (
                  <div className="artst_table artst_table1">
                    <div className="dash_main_table_wrapper">
                      <div className="dash_main_main_table oflow-hd">
                        <table>
                          <tbody>
                            <tr>
                              <th>Ticket Image</th>
                              <th>Name of Ticket/Type</th>
                              <th>Quantity</th>
                              <th>Price</th>
                              <th>Action</th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="dash_main_main_table_empty">No ticket added yet</div>
                      <div className="dash_main_main_table_add oflow-hd">
                        {!addTicket && (
                          <ul>
                            <li>
                              <Link className="addMoreArtist" to="#!" onClick={() => setAddTicket(true)}>
                                Add Ticket +
                              </Link>
                            </li>
                          </ul>
                        )}
                        {addTicket && (
                          <div className="dash_main_main_table_form oflow-hd">
                            <div className="row">
                              <div className="col-12">
                                <div className="single_input_box">
                                  <input type="text" value="" placeholder="Name of TIcket/Type" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="single_input_box">
                                  <input type="text" value="" placeholder="Quantity" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="single_input_box">
                                  <input type="text" value="" placeholder="Price" />
                                </div>
                              </div>

                              <div className="col-12">
                                <div className="dash_main_main_table_form_up">
                                  <input type="file" id="avatar" name="cf_photo" accept="image/png, image/jpeg" />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="dash_main_main_table_form_action">
                                  <ul>
                                    <li>
                                      <Link to="#!" onClick={() => setAddTicket(false)}>
                                        Cancel
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#!">Add</Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {differentTicket === 'DifferentTicket' && (
                  <div className="artst_table artst_table2">
                    <div className="artst_table2_single">
                      <h2>
                        <ul>
                          <li>Day 1</li>
                          <li>Dhaka</li>
                          <li>City Park International</li>
                        </ul>
                      </h2>
                      <div className="dash_main_table_wrapper">
                        <div className="dash_main_main_table oflow-hd">
                          <table>
                            <tbody>
                              <tr>
                                <th>Ticket Image</th>
                                <th>Name of Ticket/Type</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                              </tr>

                              <tr>
                                <td>
                                  <img src={img1} alt="img" />
                                </td>
                                <td>Level One</td>
                                <td>10</td>
                                <td>BDT 500</td>
                                <td>
                                  <Link to="">Edit</Link>
                                  <Link className="remove" to="">
                                    Delete
                                  </Link>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <img src={img1} alt="img" />
                                </td>
                                <td>Level One</td>
                                <td>10</td>
                                <td>BDT 500</td>
                                <td>
                                  <Link to="">Edit</Link>
                                  <Link className="remove" to="">
                                    Delete
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="dash_main_main_table_empty">No ticket added yet</div>
                        <div className="dash_main_main_table_add oflow-hd">
                          {!addTicket && (
                            <ul>
                              <li>
                                <Link className="addMoreArtist" to="#!" onClick={() => setAddTicket(true)}>
                                  Add Ticket +
                                </Link>
                              </li>
                            </ul>
                          )}
                          {addTicket && (
                            <div className="dash_main_main_table_form oflow-hd">
                              <div className="row">
                                <div className="col-12">
                                  <div className="single_input_box">
                                    <input type="text" value="" placeholder="Name of TIcket/Type" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="single_input_box">
                                    <input type="text" value="" placeholder="Quantity" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="single_input_box">
                                    <input type="text" value="" placeholder="Price" />
                                  </div>
                                </div>

                                <div className="col-12">
                                  <div className="dash_main_main_table_form_up">
                                    <input type="file" id="avatar" name="cf_photo" accept="image/png, image/jpeg" />
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="dash_main_main_table_form_action">
                                    <ul>
                                      <ul>
                                        <li>
                                          <Link to="#!" onClick={() => setAddTicket(false)}>
                                            Cancel
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#!">Add</Link>
                                        </li>
                                      </ul>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="artst_table2_single">
                      <h2>
                        <ul>
                          <li>Day 2</li>
                          <li>Khulna</li>
                          <li>City Park International</li>
                        </ul>
                      </h2>
                      <div className="dash_main_table_wrapper">
                        <div className="dash_main_main_table oflow-hd">
                          <table>
                            <tbody>
                              <tr>
                                <th>Name</th>
                                <th>Short Description</th>
                                <th>Profession</th>
                                <th>Organization</th>
                                <th>Action</th>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="dash_main_main_table_empty">No ticket added yet</div>
                        <div className="dash_main_main_table_add">
                          {!addTicket2 && (
                            <ul>
                              <li>
                                <Link className="addArtistFrom" to="#!" onClick={() => setAddForm(true)}>
                                  Add From +
                                </Link>
                                {addForm && (
                                  <ul>
                                    <li>
                                      <Link to="" onClick={() => setAddForm(false)}>
                                        Day 1
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="" onClick={() => setAddForm(false)}>
                                        Day 2
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="" onClick={() => setAddForm(false)}>
                                        Day 3
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="" onClick={() => setAddForm(false)}>
                                        Day 4
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </li>
                              <li>
                                <Link className="addMoreArtist" to="#!" onClick={() => setAddTicket2(true)}>
                                  Add Ticket +
                                </Link>
                              </li>
                            </ul>
                          )}
                          {addTicket2 && (
                            <div className="dash_main_main_table_form oflow-hd">
                              <div className="row">
                                <div className="col-12">
                                  <div className="single_input_box">
                                    <input type="text" value="" placeholder="Name of TIcket/Type" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="single_input_box">
                                    <input type="text" value="" placeholder="Quantity" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="single_input_box">
                                    <input type="text" value="" placeholder="Price" />
                                  </div>
                                </div>

                                <div className="col-12">
                                  <div className="dash_main_main_table_form_up">
                                    <input type="file" id="avatar" name="cf_photo" accept="image/png, image/jpeg" />
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="dash_main_main_table_form_action">
                                    <ul>
                                      <li>
                                        <Link to="#!" onClick={() => setAddTicket2(false)}>
                                          Cancel
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#!">Add</Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketConfig;
