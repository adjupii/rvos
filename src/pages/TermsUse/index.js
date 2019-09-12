import React, { Fragment } from 'react';

import Title from 'app/components/Layouts/App/Title';
import InfoCard from 'app/components/InfoCard';

const TermsUse = () => (
  <Fragment>
    <Title
      title="Terms of use"
      iconName="prev"
      back
    />

    <InfoCard>
      <p>
        RVOS Farm Mutual Insurance Company (RVOS) and its affiliates welcome you
        to this website. By viewing the pages of this website, you acknowledge
        that you have read and accepted these disclaimers.
      </p>

      <p>
        RVOS does not accept any liability for any loss or damage, which may
        directly or indirectly result from any information or omission, whether
        negligent or otherwise, contained on this site. The information
        provided in this site is not to be considered legal advice or the
        basis for any contract, nor does the information in this site constitute
        professional advice or a substitute, change or summary of any contract.
        Failure to accommodate or implement any information in this site is not
        to be considered as an admission of any liability nor the setting or
        benchmarking of any standards in any suit or action brought by or
        against any member or RVOS.
      </p>

      <p>
        Changes or updates to the content of this site may occur without notice.
      </p>
    </InfoCard>
  </Fragment>
);

export default TermsUse;