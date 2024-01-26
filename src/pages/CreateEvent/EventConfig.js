import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profile from './../../assets/images/images/timg.png';

const EventConfig = () => {
  const [addArtist, setAddArtist] = useState(false);
  const [numberOfDays, setNumberOfDays] = useState([1]);
  const [isEditing, setIsEditing] = useState(false);
  const [newAddArtist, setNewAddArtist] = useState(false);
  const [addArtistForm, setAddArtistForm] = useState(false);
  const [newAddArtist2, setNewAddArtist2] = useState(false);
  const [venue, setVenue] = useState('');
  const [artist, setArtist] = useState('');

  useEffect(() => {
    window.localStorage.setItem('numberOfDays', numberOfDays);
  }, [numberOfDays]);

  const handleAddDays = () => {
    // Increment the number of days by 1
    setNumberOfDays((prevDays) => [...prevDays, prevDays.length + 1]);
  };

  const handleEditToggle = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  return (
    <>
      {/* <!-- Step 1 --> */}
      <div className="form_box_area_main event_information_form oflow-hd">
        <div className="form_title oflow-hd">
          <h2>Event Configuration</h2>
        </div>
        <div className="form_wrapper">
          <div className="row">
            <div className="col-12">
              <div className="single_input_box">
                <label htmlFor="#">Date and Time</label>
                <div className="multifieldrow_wrapper">
                  <div className="multifieldrow_wrapper_single">
                    <div className="row multifieldrow">
                      <div className="col-md-6">
                        <div className="single_input_box">
                          <input className="calendar" type="text" value="" placeholder="Date" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single_input_box">
                          <input className="time" type="text" value="" placeholder="Time" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="single_input_box">
                <label htmlFor="#">Location and Venue</label>
                <div className="multifieldrow_wrapper">
                  <div className="multifieldrow_wrapper_single">
                    <div className="row multifieldrow">
                      <div className="col-md-6">
                        <div className="single_input_box">
                          <input type="text" value="" placeholder="Location" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single_input_box">
                          <input type="text" value="" placeholder="Venue" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="single_input_box artist_table">
                <label htmlFor="#">Artist</label>
                <div className="dash_main_table_wrapper">
                  <div className="dash_main_main_table oflow-hd">
                    <table>
                      <tr>
                        <th>Name</th>
                        <th>Short Description</th>
                        <th>Profession</th>
                        <th>Organization</th>
                        <th>Action</th>
                      </tr>
                    </table>
                  </div>
                  <div className="dash_main_main_table_empty">No artist added yet</div>
                  <div className="dash_main_main_table_add oflow-hd">
                    {!addArtist && (
                      <ul>
                        <li>
                          <Link className="addMoreArtist" to="#!" onClick={() => setAddArtist(true)}>
                            Add Artist +
                          </Link>
                        </li>
                      </ul>
                    )}
                    {addArtist && (
                      <div className="dash_main_main_table_form oflow-hd">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="single_input_box">
                              <input type="text" value="" placeholder="Name" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="single_input_box">
                              <input type="text" value="" placeholder="URL" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="single_input_box">
                              <input type="text" value="" placeholder="Profession / Position" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="single_input_box">
                              <input type="text" value="" placeholder="Organization" />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="single_input_box">
                              <textarea placeholder="Short Description"></textarea>
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
                                    <Link to="#!" onClick={() => setAddArtist(false)}>
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
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Step 2 --> */}
      <form className="form_box_area_main event_information_form oflow-hd">
        <div className="form_title oflow-hd">
          <h2>Event Configuration</h2>
        </div>
        <div className="form_wrapper">
          <div className="row">
            <div className="col-12">
              <div className="single_input_box">
                <label htmlFor="#">Date and Time</label>
                <div className="multifieldrow_wrapper ec_daydatetimebox">
                  {numberOfDays.map((day, index) => (
                    <div key={index} className="multifieldrow_wrapper_single">
                      <div className="row multifieldrow">
                        <div className="col-md-4">
                          <div className="single_input_box single_input_box_canedit">
                            {isEditing ? (
                              <input className={`canedit`} type="text" placeholder="Day 1" />
                            ) : (
                              <input className={`canedit  disabled`} type="text" value={`Day ${day}`} placeholder={`Day ${day}`} />
                            )}
                            <svg
                              onClick={handleEditToggle}
                              width="18"
                              height="17"
                              viewBox="0 0 18 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.4966 6.09164L8.56075 12.0275C8.35533 12.2329 8.08616 12.3604 7.79575 12.3887L5.72033 12.58H5.64241C5.40866 12.58 5.182 12.4879 5.01908 12.3179C4.83491 12.1337 4.74283 11.8716 4.76408 11.6096L4.95533 9.53414C4.98366 9.24373 5.11116 8.97456 5.31658 8.76914L11.2382 2.83331L14.4966 6.09164ZM15.8707 1.96206L15.3678 1.45914C15.0018 1.09502 14.5064 0.890625 13.9901 0.890625C13.4738 0.890625 12.9785 1.09502 12.6124 1.45914L11.9891 2.08248L15.2474 5.34081L15.8707 4.71748C16.0522 4.53757 16.1962 4.32351 16.2945 4.08766C16.3928 3.8518 16.4434 3.59882 16.4434 3.34331C16.4434 3.0878 16.3928 2.83481 16.2945 2.59896C16.1962 2.3631 16.0522 2.14905 15.8707 1.96914V1.96206ZM15.0278 13.4654V9.34998C15.0278 9.05956 14.787 8.81873 14.4966 8.81873C14.2062 8.81873 13.9653 9.05956 13.9653 9.34998V13.4654C13.9653 14.3437 13.2499 15.0591 12.3716 15.0591H3.87158C2.99325 15.0591 2.27783 14.3437 2.27783 13.4654V4.95831C2.27783 4.07998 2.99325 3.36456 3.87158 3.36456H7.987C8.27741 3.36456 8.51825 3.12373 8.51825 2.83331C8.51825 2.54289 8.27741 2.30206 7.987 2.30206H3.87158C2.40533 2.30206 1.21533 3.49206 1.21533 4.95831V13.4583C1.21533 14.9246 2.40533 16.1146 3.87158 16.1146H12.3716C13.8378 16.1146 15.0278 14.9246 15.0278 13.4583V13.4654Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="single_input_box">
                            <input className="calendar" type="text" value="" placeholder="Date" />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="single_input_box">
                            <input className="time" type="text" value="" placeholder="Time" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="dash_main_main_table_add oflow-hd">
                <Link className="addDays" to="#!" onClick={handleAddDays}>
                  Add Days +
                </Link>
              </div>
            </div>
            <div className="col-12">
              <div className="single_input_box sameticketordifferent">
                <label htmlFor="#">Location and Venue will be same?</label>
                <div className="single_input_box_rado ec_locationvenusameornot">
                  <ul>
                    <li>
                      <input
                        type="radio"
                        name="ei_locationwilbbesame"
                        id="SingleVenue"
                        value="SingleVenue"
                        onClick={(e) => setVenue(e.target.value)}
                      />
                      <label htmlFor="SingleVenue">
                        Single Venue
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                            fill="white"
                          />
                        </svg>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="ei_locationwilbbesame"
                        id="MultipleVenue"
                        value="MultipleVenue"
                        onClick={(e) => setVenue(e.target.value)}
                      />
                      <label htmlFor="MultipleVenue">
                        Multiple Venue
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                            fill="white"
                          />
                        </svg>
                      </label>
                    </li>
                  </ul>
                </div>
                {venue === 'SingleVenue' && (
                  <div className="multifieldrow_wrapper ec_location_venue ec_location_venue1">
                    <div className="multifieldrow_wrapper_single">
                      <div className="row multifieldrow">
                        <div className="col-md-6">
                          <div className="single_input_box">
                            <input type="text" value="" placeholder="Location" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single_input_box">
                            <input type="text" value="" placeholder="Venue" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {venue === 'MultipleVenue' && (
                  <div className="multifieldrow_wrapper ec_location_venue ec_location_venue2">
                    {numberOfDays.map((day, index) => (
                      <div key={index} className="multifieldrow_wrapper_single">
                        <div className="row multifieldrow">
                          <div className="col-md-4">
                            <div className="single_input_box">
                              <input type="text" value={`Day ${day}`} placeholder={`Day ${day}`} />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="single_input_box">
                              <input type="text" value="" placeholder="Location" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="single_input_box">
                              <input type="text" value="" placeholder="Venue" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="col-12">
              <div className="single_input_box artist_table sameticketordifferent">
                <label htmlFor="#">Same Artist For All days?</label>
                <div className="single_input_box_rado ec_sameartisitornot">
                  <ul>
                    <li>
                      <input
                        type="radio"
                        name="ec_sameartisitornot"
                        id="YesSame"
                        value="YesSame"
                        onClick={(e) => setArtist(e.target.value)}
                      />
                      <label htmlFor="YesSame">
                        Yes, Same
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                            fill="white"
                          />
                        </svg>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="ec_sameartisitornot"
                        id="NoDifferent"
                        value="NoDifferent"
                        onClick={(e) => setArtist(e.target.value)}
                      />
                      <label htmlFor="NoDifferent">
                        No, Different
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.82918 8.72855C3.73373 8.82458 3.60348 8.87814 3.4682 8.87814C3.33293 8.87814 3.20268 8.82458 3.10723 8.72855L0.224383 5.84523C-0.0747943 5.54605 -0.0747943 5.06091 0.224383 4.76231L0.585358 4.40124C0.88463 4.10206 1.3692 4.10206 1.66838 4.40124L3.46823 6.20115L8.33157 1.33766C8.63085 1.03849 9.1159 1.03849 9.41459 1.33766L9.77557 1.69873C10.0747 1.99791 10.0747 2.48296 9.77557 2.78166L3.82918 8.72855Z"
                            fill="white"
                          />
                        </svg>
                      </label>
                    </li>
                  </ul>
                </div>
                {artist === 'YesSame' && (
                  <div className="artst_table artst_table1">
                    <div className="dash_main_table_wrapper">
                      <div className="dash_main_main_table oflow-hd">
                        <table>
                          <tr>
                            <th>Name</th>
                            <th>Short Description</th>
                            <th>Profession</th>
                            <th>Organization</th>
                            <th>Action</th>
                          </tr>
                        </table>
                      </div>
                      <div className="dash_main_main_table_empty">No artist added yet</div>
                      <div className="dash_main_main_table_add oflow-hd">
                        {!newAddArtist && (
                          <ul>
                            <li>
                              <Link className="addMoreArtist" to="#!" onClick={() => setNewAddArtist(true)}>
                                Add Artist +
                              </Link>
                            </li>
                          </ul>
                        )}
                        {newAddArtist && (
                          <div className="dash_main_main_table_form oflow-hd">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="single_input_box">
                                  <input type="text" value="" placeholder="Name" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="single_input_box">
                                  <input type="text" value="" placeholder="URL" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="single_input_box">
                                  <input type="text" value="" placeholder="Profession / Position" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="single_input_box">
                                  <input type="text" value="" placeholder="Organization" />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="single_input_box">
                                  <textarea placeholder="Short Description"></textarea>
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
                                      <Link to="#!" onClick={() => setNewAddArtist(false)}>
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
                {artist === 'NoDifferent' && (
                  <div className="artst_table artst_table2">
                    <div className="artst_table2_single">
                      <h2>Day 1</h2>
                      <div className="dash_main_table_wrapper">
                        <div className="dash_main_main_table oflow-hd">
                          <table>
                            <tr>
                              <th>Name</th>
                              <th>Short Description</th>
                              <th>Profession</th>
                              <th>Organization</th>
                              <th>Action</th>
                            </tr>
                            <tr>
                              <td>
                                <img src={profile} alt="img" />
                                <span>Fuad Hossain</span>
                              </td>
                              <td>
                                <p>Velit urna at feugiat volutpat quis vitae sit...</p>
                              </td>
                              <td>Musician</td>
                              <td>Coca Cola</td>
                              <td>
                                <Link to="#">Edit</Link>
                                <Link className="remove" to="#">
                                  Delete
                                </Link>
                              </td>
                            </tr>
                          </table>
                        </div>
                        <div className="dash_main_main_table_empty">No artist added yet</div>
                        <div className="dash_main_main_table_add oflow-hd">
                          {!newAddArtist && (
                            <ul>
                              <li>
                                <Link className="addMoreArtist" to="#!" onClick={() => setNewAddArtist(true)}>
                                  Add Artist +
                                </Link>
                              </li>
                            </ul>
                          )}
                          {newAddArtist && (
                            <div className="dash_main_main_table_form oflow-hd">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="single_input_box">
                                    <input type="text" value="" placeholder="Name" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="single_input_box">
                                    <input type="text" value="" placeholder="URL" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="single_input_box">
                                    <input type="text" value="" placeholder="Profession / Position" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="single_input_box">
                                    <input type="text" value="" placeholder="Organization" />
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="single_input_box">
                                    <textarea placeholder="Short Description"></textarea>
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
                                        <Link to="#!">Cancel</Link>
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
                    <div className="artst_table2_single">
                      <h2>Day 2</h2>
                      <div className="dash_main_table_wrapper">
                        <div className="dash_main_main_table oflow-hd">
                          <table>
                            <tr>
                              <th>Name</th>
                              <th>Short Description</th>
                              <th>Profession</th>
                              <th>Organization</th>
                              <th>Action</th>
                            </tr>
                          </table>
                        </div>
                        <div className="dash_main_main_table_empty">No artist added yet</div>
                        <div className="dash_main_main_table_add">
                          {!newAddArtist2 && (
                            <ul>
                              <li>
                                <Link className="addArtistFrom" to="#!" onClick={() => setAddArtistForm(true)}>
                                  Add From +
                                </Link>
                                {addArtistForm && (
                                  <ul>
                                    <li>
                                      <Link to="#" onClick={() => setAddArtistForm(false)}>
                                        Day 1
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" onClick={() => setAddArtistForm(false)}>
                                        Day 2
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" onClick={() => setAddArtistForm(false)}>
                                        Day 3
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" onClick={() => setAddArtistForm(false)}>
                                        Day 4
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </li>
                              <li>
                                <Link className="addMoreArtist" to="#!" onClick={() => setNewAddArtist2(true)}>
                                  Add Artist +
                                </Link>
                              </li>
                            </ul>
                          )}
                          {newAddArtist2 && (
                            <div className="dash_main_main_table_form oflow-hd">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="single_input_box">
                                    <input type="text" value="" placeholder="Name" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="single_input_box">
                                    <input type="text" value="" placeholder="URL" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="single_input_box">
                                    <input type="text" value="" placeholder="Profession / Position" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="single_input_box">
                                    <input type="text" value="" placeholder="Organization" />
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="single_input_box">
                                    <textarea placeholder="Short Description"></textarea>
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
                                        <Link to="#!" onClick={() => setNewAddArtist2(false)}>
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
      </form>
    </>
  );
};

export default EventConfig;
