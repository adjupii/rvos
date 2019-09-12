import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { useApi } from 'app/hooks/api';

import { getClaimDetails } from 'app/api/claims';

import { getClaimStatus } from 'app/helpers/claim';
import {
  date,
  joinedText,
  period,
  zipCode
} from 'app/format';

import Styled from './styles';

import Loader from 'app/components/common/Loader';
import {
  Row,
  Col
} from 'app/components/common/Grid';
import Display from 'app/components/common/Display';
import TitleWithIcon from 'app/components/EntityDetails/TitleWithIcon';
import EntityDetailsInfo from 'app/components/EntityDetails/Info';
import EntityDetailsStatus from 'app/components/EntityDetails/Status';

const Details = ({
  id,
  idType
}) => {
  const
    api = useCallback(
      () => (
        getClaimDetails(
          id,
          { idType }
        )
      ),
      [ id, idType ]
    ),

    [ fetching, data ] = useApi(api);

  if (fetching) {
    return <Loader />;
  }

  if (data) {
    const {
      claim: {
        lossLocAddress: {
          state = {},
          ...lossLocAddress
        } = {},
        ...claim
      }
    } = data;

    const status = getClaimStatus(claim.claimStatus);

    return (
      <Styled className="claim-details">
        <TitleWithIcon
          iconName="ClaimInfo"
          value="Claim Info"
        >
          <Row>
            <Col className="col-12 col-m-6 col-xl-4">
              <Display className="d-none d-m-block">
                <EntityDetailsInfo
                  label="Claim Type"
                  value={claim.lossType}
                  className="claim-details-info"
                />
              </Display>
            </Col>

            <Col className="col-12 col-m-6 col-xl-4">
              <Display className="d-none d-m-block">
                <EntityDetailsInfo
                  label="Claim ID"
                  value={claim.claimNo || 'Pending'}
                  className="claim-details-info"
                />
              </Display>
            </Col>

            <Col className="col-12 col-m-6 col-xl-4">
              <EntityDetailsInfo
                label="Claim Status"
                value={(
                  <div className="claim-details__status-holder">
                    <div className="claim-details__status">
                      {claim.claimStatus}
                    </div>

                    <EntityDetailsStatus
                      status={status}
                      className="claim-details-status"
                    />
                  </div>
                )}
                className="claim-details-info"
              />
            </Col>

            <Col className="col-12 col-m-6 col-xl-4">
              <Display className="d-none d-m-block">
                <EntityDetailsInfo
                  label="Reported Date"
                  value={date(claim.reportedDate)}
                  className="claim-details-info"
                />
              </Display>
            </Col>

            <Col className="col-12 col-m-6 col-xl-4">
              <Display className="d-none d-m-block">
                <EntityDetailsInfo
                  label="Reported By"
                  value={claim.reportedBy}
                  className="claim-details-info"
                />
              </Display>
            </Col>

            <Col className="col-12 col-m-6 col-xl-4">
              <EntityDetailsInfo
                label="FNOL ID"
                value={claim.fnolId}
                className="claim-details-info"
              />
            </Col>

            <Col className="col-12 col-m-6 col-xl-4">
              <EntityDetailsInfo
                label="Date of loss"
                value={date(claim.dateOfLoss)}
                className="claim-details-info"
              />
            </Col>

            <Col className="col-12 col-m-6 col-xl-4">
              <EntityDetailsInfo
                label="Loss Location"
                value={
                  joinedText([
                    lossLocAddress.street,
                    lossLocAddress.city,
                    state.abbreviation,
                    zipCode(lossLocAddress.postalCode)
                  ])
                }
                className="claim-details-info"
              />
            </Col>

            <Col className="col-12">
              <EntityDetailsInfo
                label="Description"
                value={claim.description}
                className="claim-details-info"
              />
            </Col>
          </Row>
        </TitleWithIcon>

        <Display className="d-none d-m-block">
          <TitleWithIcon
            iconName="FileWithList"
            value="Policy Information"
          >
            <Row>
              <Col className="col-12 col-m-6 col-xl-4">
                <EntityDetailsInfo
                  label="Insured Name"
                  value={claim.insuredName}
                  className="claim-details-info"
                />
              </Col>

              <Col className="col-12 col-m-6 col-xl-4">
                <EntityDetailsInfo
                  label="Policy Number"
                  value={claim.policyNo}
                  className="claim-details-info"
                />
              </Col>

              <Col className="col-12 col-m-6 col-xl-4">
                <EntityDetailsInfo
                  label="Policy Period"
                  value={period(claim.policyBeginDate, claim.policyEndDate)}
                  className="claim-details-info"
                />
              </Col>
            </Row>
          </TitleWithIcon>
        </Display>
      </Styled>
    );
  }

  return null;
};

Details.propTypes = {
  id: PropTypes.string,
  idType: PropTypes.string
};

export default Details;