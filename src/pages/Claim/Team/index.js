import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import {
  phone,
  joinedText,
  zipCode
} from 'app/format';

import { getClaimAdjusters } from 'app/api/claims';

import { useApi } from 'app/hooks/api';

import {
  Row,
  Col
} from 'app/components/common/Grid';
import TitleWithIcon from 'app/components/EntityDetails/TitleWithIcon';
import TableList from 'app/components/TableList';
import Loader from 'app/components/common/Loader';
import EntityDetailsInfo from 'app/components/EntityDetails/Info';

const Team = ({
  id,
  columns
}) => {
  const
    api = useCallback(
      () => getClaimAdjusters(id),
      [ id ]
    ),

    [ fetching, data ] = useApi(api),

    {
      rvos_insurance_mailing_address: {
        fields: mailingAddress = {}
      } = {},
      customer_service_phone = {},
      customer_service_fax = {}
    } = useSelector(state => state.user.data.settings);

  return (
    <>
      <TitleWithIcon
        iconName="ClaimTeam"
        value="Claim Team"
        className="title-with-icon--claim-team"
      >
        {
          fetching
            ? <Loader />
            : data
              ? data.length
                ? (
                  <TableList
                    columns={columns}
                    data={data}
                  />
                )
                : 'No adjusters found'
              : null
        }
      </TitleWithIcon>

      <TitleWithIcon
        iconName="MailingAddress"
        value="Contact Information"
      >
        <Row>
          <Col className="col-12 col-m-6 col-l-12 col-xl-5">
            <EntityDetailsInfo
              label="Mailing Address"
              value={joinedText([
                mailingAddress.street,
                mailingAddress.additional,
                mailingAddress.city,
                mailingAddress.state,
                zipCode(mailingAddress.zip)
              ])}
              className="claim-contact-info"
            />
          </Col>

          <Col className="col-6 col-m-3 col-l-6 col-xl-3">
            <EntityDetailsInfo
              label="Phone"
              value={customer_service_phone.value}
              className="claim-contact-info"
            />
          </Col>

          <Col className="col-6 col-m-3 col-l-6 col-xl-3">
            <EntityDetailsInfo
              label="Fax"
              value={customer_service_fax.value}
              className="claim-contact-info"
            />
          </Col>
        </Row>
      </TitleWithIcon>
    </>
  );
};

Team.defaultProps = {
  columns: [
    {
      title: 'Name',
      getValue: ({ name }) => name,
      className: 'td--color-lightgray',
    },
    {
      title: 'Role',
      getValue: ({ role }) => role,
      className: 'td--color-lightgray',
    },
    {
      title: 'Phone Number',
      getValue: ({ phone: phoneNumber }) => phone(phoneNumber),
      className: 'td--color-lightgray'
    },
    {
      title: 'Email',
      getValue: ({ email }) => email || '-',
      className: 'td--color-lightgray',
    }
  ]
};

Team.propTypes = {
  id: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object)
};

export default Team;