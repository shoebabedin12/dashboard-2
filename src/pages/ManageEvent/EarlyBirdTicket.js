import EarlyBirdTicketEmpty from 'components/EventsComponents/EarlyBirdTicketEmpty';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import EarlyBirdTicketCreate from './EarlyBirdTicketCreate';

const EarlyBirdTicket = () => {
  const [createTicket, setCreateTicket] = useState(false);
  return (
    <>
      <div className="dash_content_main oflow-hd">
        <div className="dash_content_main_event_head oflow-hd">
          <div className="dash_content_main_event_head_box oflow-hd">
            <h2>Dameer & Fuad Presents SANJOY</h2>
          </div>
          <div className="dash_content_main_event_head_attr oflow-hd">
            <ul>
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.19046 13.8252C7.39635 14.0316 7.64092 14.1953 7.91017 14.307C8.17942 14.4187 8.46806 14.4762 8.75956 14.4762C9.05106 14.4762 9.3397 14.4187 9.60895 14.307C9.87819 14.1953 10.1228 14.0316 10.3287 13.8252L13.8248 10.329C14.0312 10.1231 14.1949 9.87856 14.3066 9.60932C14.4183 9.34007 14.4758 9.05143 14.4758 8.75993C14.4758 8.46843 14.4183 8.17979 14.3066 7.91054C14.1949 7.64129 14.0312 7.39672 13.8248 7.19083L9.16326 2.52925C8.846 2.20989 8.46859 1.9566 8.05283 1.78402C7.63707 1.61144 7.19122 1.523 6.74106 1.52381H3.20679C2.27752 1.52381 1.52344 2.27789 1.52344 3.20716V6.74143C1.52344 7.65547 1.88144 8.51619 2.52888 9.16363L7.19046 13.8252ZM3.80853 3.0472C4.22746 3.0472 4.57023 3.38997 4.57023 3.8089C4.57023 4.22783 4.22746 4.5706 3.80853 4.5706C3.3896 4.5706 3.04683 4.22783 3.04683 3.8089C3.04683 3.38997 3.3896 3.0472 3.80853 3.0472Z"
                    fill="#999999"
                  />
                </svg>

                <span>Concert</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.79823 0.800049C4.82114 0.800049 2.39844 3.23955 2.39844 6.23884C2.39844 10.5005 7.29065 14.9007 7.49884 15.0855C7.58113 15.1592 7.68767 15.1999 7.79811 15.2001C7.90856 15.2002 8.01518 15.1596 8.09762 15.0861C8.30581 14.9007 13.198 10.5005 13.198 6.23884C13.198 3.23955 10.7753 0.800049 7.79823 0.800049ZM7.79823 9.19972C6.14409 9.19972 4.79834 7.85398 4.79834 6.19984C4.79834 4.5457 6.14409 3.19996 7.79823 3.19996C9.45236 3.19996 10.7981 4.5457 10.7981 6.19984C10.7981 7.85398 9.45236 9.19972 7.79823 9.19972Z"
                    fill="#999999"
                  />
                </svg>

                <span>Dhaka</span>
              </li>
              <li>
                <span>City Park Int, Dhanmondi</span>
              </li>
              <li>
                <span>Wednesday, 25 Aug, 2023</span>
              </li>
            </ul>
          </div>
          <div className="dash_content_main_event_head_action oflow-hd">
            <ul>
              <li>
                <Link to="">Edit Event Details</Link>
              </li>
              <li>
                <Link to="">Event Settings</Link>
              </li>
              <li>
                <Link to="">Public Preview</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="dash_content_main_event_status oflow-hd">
          <ul>
            <li className="text_status-Live">
              Event Status: <span>Live</span>
            </li>
            <li>
              Interested Audience: <span>4</span>
            </li>
            <li>
              Number of Pre-Reg: <span>30</span>
            </li>
            <li className="text_status-Live">
              Ticketing Status: <span>Live</span>
            </li>
            <li>
              Total Collection: <span>5,000 BDT</span>
            </li>
          </ul>
        </div>

        {!createTicket && <EarlyBirdTicketEmpty setCreateTicket={setCreateTicket} />}
        {createTicket && <EarlyBirdTicketCreate setCreateTicket={setCreateTicket} />}
      </div>
    </>
  );
};

export default EarlyBirdTicket;
