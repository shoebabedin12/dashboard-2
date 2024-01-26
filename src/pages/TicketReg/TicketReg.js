import { useState } from 'react';
import { useLocation } from 'react-router';

const TicketReg = () => {
  const slug = useLocation();
  const pathname = slug.pathname.split('/')[2];
  const [selectedEvent, setSelectedEvent] = useState('');

  const handleProceed = (event) => {
    event.preventDefault();
    if (pathname === 'pre-registration') {
      const redirectUrl = '/event-pre-registration';
      window.location.href = redirectUrl;
    }
    if (pathname === 'tickets-registration') {
      const redirectUrl = '/event-ticketing-registration';
      window.location.href = redirectUrl;
    }
    if (pathname === 'promotion-discount') {
      const redirectUrl = '/event-promotions-discount';
      window.location.href = redirectUrl;
    }

    if (pathname === 'priviliege-tickets') {
      const redirectUrl = '/event-priviliege-ticket';
      window.location.href = redirectUrl;
    }
    if (pathname === 'early-bird-tickets') {
      const redirectUrl = '/event-early-bird-tickets';
      window.location.href = redirectUrl;
    }
    // Construct the URL based on the selected value

    // Redirect to the new URL
  };

  return (
    <>
      <div className="dash_content_main oflow-hd">
        <div className="dash_content_main_head oflow-hd">
          <h2>
            {pathname === 'pre-registration' && 'Pre-Registration'}
            {pathname === 'tickets-registration' && 'Ticketing / Registration'}
            {pathname === 'promotion-discount' && 'Promotion & Discount'}
            {pathname === 'priviliege-tickets' && 'Privilege Tickets'}
            {pathname === 'early-bird-tickets' && 'Early Bird Tickets'}
          </h2>
        </div>
        <div className="dash_content_main_center">
          <div className="dash_content_main_center_with_padding">
            <div className="select_event_wrapper oflow-hd">
              <div className="row">
                <form className="col-12">
                  <div className="single_input_box">
                    <label htmlFor="#">Select Event</label>
                    <select name="" value={selectedEvent} onChange={(e) => setSelectedEvent(e.target.value)}>
                      <option value="">Dameer & Fuad Presents SANJOY</option>
                      <option value="">Dameer & Fuad Presents SANJOY</option>
                      <option value="">Dameer & Fuad Presents SANJOY</option>
                      <option value="">Dameer & Fuad Presents SANJOY</option>
                      <option value="">Dameer & Fuad Presents SANJOY</option>
                    </select>
                  </div>
                  <div className="single_input_box_proceed">
                    <input type="submit" value="Proceed" onClick={handleProceed} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketReg;
