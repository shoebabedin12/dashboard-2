import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BankAccountDetails from './BankAccountDetails';
import CompanyInformationRepresentative from './CompanyInformationRepresentative';
import Information from './Information';

const CompanyInformation = () => {
  const [tabTitle, setTabTitle] = useState('information');
  const [title, setTitle] = useState();

  useEffect(() => {
    window.localStorage.setItem('tabTitle', tabTitle);
    const newTitle = window.localStorage.getItem('tabTitle');
    setTitle(newTitle);
  }, [tabTitle]);

  return (
    <>
      <div className="dash_content_main oflow-hd">
        <div className="dash_content_main_head oflow-hd">
          <h2>Company Information</h2>
        </div>
        <div className="dash_content_main_center">
          <div className="row">
            <div className="col-md-5">
              <div className="form_left_col oflow-hd">
                <div className="form_left_col_des oflow-hd">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Accumsan nulla vitae et pulvinar viverra ornare vitae. Gravida aliquet iaculis
                  </p>
                </div>
                <div className="form_left_col_anchor oflow-hd">
                  <ul>
                    <li className={title === 'information' && 'current'}>
                      <Link to="#" role="button" onClick={() => setTabTitle('information')}>
                        Information
                      </Link>
                    </li>
                    <li className={title === 'bankAccount' && 'current'}>
                      <Link to="#" role="button" onClick={() => setTabTitle('bankAccount')}>
                        Bank Account Details
                      </Link>
                    </li>
                    <li className={title === 'CompanyRepresentative' && 'current'}>
                      <Link to="#" role="button" onClick={() => setTabTitle('CompanyRepresentative')}>
                        Company Representative
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              {title === 'information' && <Information />}
              {title === 'bankAccount' && <BankAccountDetails />}
              {title === 'CompanyRepresentative' && <CompanyInformationRepresentative />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyInformation;
