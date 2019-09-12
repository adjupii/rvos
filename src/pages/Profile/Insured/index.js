import React from 'react';
import PropTypes from 'prop-types';

import {
  date,
  taxId,
  joinedText,
  zipCode
} from 'app/format';

import Card from '../Card';
import H3 from 'app/components/Layouts/App/H3';
import Info from 'app/components/EntityDetails/Info';
import Avatar from './Avatar';

const Insured = ({
  uploadAvatar,
  user,
  isLoadingAvatar
}) => {
  const {
    avatar,
    customer: {
      address: {
        state = {},
        ...adress
      },
      ...customer
    } = {}
  } = user;

  return (
    <Card className="profile-card">
      <H3>
        Insured
      </H3>
  
      <Avatar
        uploadAvatar={uploadAvatar}
        avatar={avatar}
        isLoading={isLoadingAvatar}
      />
  
      <Info
        label="Insured Name"
        value={customer.fullName}
      />

      <div className="profile-card__info-holder">
        <Info
          label="Date of Birth"
          value={date(customer.dateOfBirth)}
        />
      </div>

      <div className="profile-card__info-holder">
        <Info
          label="Tax ID"
          value={taxId(customer.taxId, customer.taxIdType) || 'N/A'}
        />
      </div>
     
      <div className="profile-card__info-holder">
        <Info
          label="Address"
          value={
            <>
              <div>
                {adress.street}
              </div>

              <div>
                {
                  joinedText([
                    adress.city,
                    state.abbreviation,
                    zipCode(adress.postalCode)
                  ])
                }
              </div>
            </>
          }
        />
      </div>

      {
        customer.dbaName && (
          <div className="profile-card__info-holder">
            <Info
              label="DBA / In Care Of"
              value={customer.dbaName}
            />
          </div>
        )
      }
    </Card>
  );
};

Insured.propTypes = {
  uploadAvatar: PropTypes.func,
  user: PropTypes.object,
  isLoadingAvatar: PropTypes.bool
};

export default Insured;