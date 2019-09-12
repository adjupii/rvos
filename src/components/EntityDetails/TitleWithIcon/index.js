import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Styled from './styles';

import House from 'app/components/Icons/House';
import ClaimInfo from 'app/components/Icons/ClaimInfo';
import Underwriting from 'app/components/Icons/Underwriting';
import Roof from 'app/components/Icons/Roof';
import AttachedStructures from 'app/components/Icons/AttachedStructures';
import Insured from 'app/components/Icons/Insured';
import ClaimPayment from 'app/components/Icons/ClaimPayment';
import AccountPolicies from 'app/components/Icons/AccountPolicies';
import ClaimTeam from 'app/components/Icons/ClaimTeam';
import MailingAddress from 'app/components/Icons/MailingAddress';
import Mortgagee from 'app/components/Icons/Mortgagee';
import HouseLocation from 'app/components/Icons/HouseLocation';
import Files from 'app/components/Icons/Files';
import FileWithList from 'app/components/Icons/FileWithList';
import FileUpload from 'app/components/Icons/FileUpload';
import People from 'app/components/new/Icons/People';

const Icons = {
  House,
  ClaimInfo,
  Underwriting,
  Roof,
  AttachedStructures,
  Insured,
  ClaimPayment,
  AccountPolicies,
  Mortgagee,
  ClaimTeam,
  MailingAddress,
  HouseLocation,
  Files,
  FileWithList,
  FileUpload,
  People
};

const TitleWithIcon = ({
  iconName,
  value,
  children,
  className
}) => {
  const Icon = Icons[iconName];

  return (
    <Styled
      className={
        classNames(
          'title-with-icon',
          className
        )
      }
    >
      <div className="title-with-icon__title">
        <Icon
          width="48"
          height="48"
          className="title-with-icon__icon"
        />

        <div className="title-with-icon__text">
          {value}
        </div>
      </div>

      <div className="title-with-icon__box">
        {children}
      </div>
    </Styled>
  );
};

TitleWithIcon.propTypes = {
  iconName: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

export default TitleWithIcon;