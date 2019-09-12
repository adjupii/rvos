import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { goToPage } from 'app/history';
import { date } from 'app/format';
import {
  getClaimStatus,
  getClaimLink
} from 'app/helpers/claim';

import Styled from './styles';

import ClaimIcon from 'app/components/Icons/Claim';
import ArrowRight from 'app/components/Icons/ArrowRight';
import Policies from 'app/components/Icons/Nav/Policies';
import ClaimStatusOpen from 'app/components/Icons/ClaimStatusOpen';
import ClaimStatusClosed from 'app/components/Icons/ClaimStatusClosed';
import Pending from './Pending';

const Claim = ({
  data,
  className
}) => {
  const status = getClaimStatus(data.status);

  return (
    <Styled
      onClick={goToPage(getClaimLink(data))}
      className={
        classNames(
          'claim',
          className
        )
      }
    >
      <div className={`claim__status claim__status--${status}`}>
        {
          status === 'active' ?
            (
              <ClaimStatusOpen
                width="24"
                height="24"
              />
            ) :
            (
              <ClaimStatusClosed
                width="24"
                height="24"
              />
            )
        }
      </div>

      <div className="claim__inner">
        <div className="claim__left-right">
          <div className="claim__type">
            {data.lossType}
          </div>

          <div className="claim__right">
            <div className="claim__numbers-holder">
              <div className="claim__number-holder claim__number-holder--claim">
                {
                  data.claimNumber
                    ? (
                      <Fragment>
                        <ClaimIcon
                          width="24"
                          height="24"
                          className="claim__number-holder-icon"
                        />

                        <div>
                          {data.claimNumber}
                        </div>
                      </Fragment>
                    )
                    : <Pending>Pending</Pending>
                }
              </div>

              <div className="claim__number-holder claim__number-holder--policy">
                <Policies
                  width="24"
                  height="24"
                  className="claim__number-holder-icon"
                />

                <div>
                  {data.policyNumber}
                </div>
              </div>
            </div>

            <div className="claim__loss-date">
              {date(data.lossDate)}
            </div>
          </div>
        </div>

        <div className="claim__arrow-holder">
          <ArrowRight
            width="24"
            height="24"
          />
        </div>
      </div>
    </Styled>
  );
};

Claim.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string
};

export default Claim;