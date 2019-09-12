import React from 'react';
import PropTypes from 'prop-types';

import { notifications } from 'app/components/common/Notifications';
import { phone } from 'app/format';

import Card from '../Card';
import H3 from 'app/components/Layouts/App/H3';
import Info from 'app/components/EntityDetails/Info';
import ChangeEmailForm from 'app/components/Forms/ChangeEmail';

const Contact = ({
  user: {
    customer = {}
  },
  handleOpenDialog,
  handleCloseDialog,
}) => (
  <Card className="profile-card">
    <H3>
      Contact
    </H3>

    <Info
      label= "Phone"
      value={phone(customer.phone)}
    />

    <div className="profile-card__info-holder">
      <Info
        label= "Alternate Phone"
        value={phone(customer.altPhone)}
      />
    </div>

    <div className="profile-card__info-holder">
      <Info
        label="Email"
        value={
          <div className="entity-details-info__change-holder">
            <div>
              {customer.email}
            </div>

            <div
              onClick={handleOpenDialog(
                'change-email',
                {
                  title: 'Change Email',
                  className: 'c-dialog--with-form',
                  children: (
                    <ChangeEmailForm
                      callback={handleCloseDialog('change-email')}
                      notify={notifications.create({
                        message: 'An email has been sent to the new address with a link to verify this change.'
                      })}
                    />
                  )
                }
              )}
              className="entity-details-info__change-link"
            >
              Change
            </div>
          </div>
        }
      />
    </div>
  </Card>
);

Contact.propTypes = {
  user: PropTypes.object,
  handleOpenDialog: PropTypes.func,
  handleCloseDialog: PropTypes.func,
};

export default Contact;