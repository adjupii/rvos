import React, { Fragment } from 'react';

import Title from 'app/components/Layouts/App/Title';
import InfoCard from 'app/components/InfoCard';
import FormText from 'app/components/Layouts/FormText';

const PrivacyPolicy = () => (
  <Fragment>
    <Title
      title="Privacy Policy"
      iconName="prev"
      back
    />

    <InfoCard title="RVOS Insurance Group of Companies">
      <p>
        RVOS Farm Mutual Insurance Company<br />Priority One Insurance Company<br />New Century Insurance<br />RVOS General Agency, Inc.
      </p>
    </InfoCard>

    <InfoCard title="Notice of Privacy Policy">
      <p>
        Your privacy is of utmost importance to us and it is our
        responsibility to inform you of how we gather the information
        and how we use that information. You will receive notice of
        our privacy policy the first time that we do business with you
        and every year thereafter.
      </p>

      <ul>
        <li>
          We do share information among our group companies including name,
          address, and transaction experience.
        </li>

        <li>
          We do not sell customer information to non-affiliated parties
        </li>

        <li>
          We do not provide customer information to outside parties who
          may use this information for their own purposes.
        </li>

        <li>
          We maintain physical, electronic, and procedural safeguards to
          protect your nonpublic personal information.
        </li>

        <li>
          We do not share any medical or health information among our family
          of companies or with third parties except to process transactions
          or to provide services you have requested or initiated.
        </li>

        <li>
          We do not disclose any non-public personal information about our customers
          or former customers to anyone, except as permitted by law.
        </li>
      </ul>
    </InfoCard>

    <InfoCard title="What Information Do We Collect">
      <p>
        The information that we collect from you and about you is obtained
        so that we may service your insurance needs and provide you with
        insurance coverage that you require.
      </p>

      <ul>
        <li>
          You provide to us on your application for insurance your address,
          telephone number, occupation, prior insurance carrier, and mortgage
          information.
        </li>

        <li>
          We collect prior claims history from a third party.
        </li>

        <li>
          We collect information on your credit history from a third party.
        </li>

        <li>
          We collect information on driving record from a third party.
        </li>

        <li>
          We collect information on your medical records in case of a
          bodily injury claim.
        </li>

        <li>
          Your transactions provide payment history, underwriting,
          and claims information.
        </li>
      </ul>

      <p>
        This information is only provided to our employees, agents
        or contractual partners who are directly involved in the business
        activity (i.e. underwriting, claims, accounting, reinsurance)
        which they are involved in.
      </p>
    </InfoCard>

    <InfoCard title="How Do We Use Information">
      <ul>
        <li>
          We use this information to underwrite your policy, process your claims,
          and ensure proper billing addresses for you or your mortgage in
          service to you as valued members of the RVOS Insurance Group.
        </li>

        <li>
          We disclose nonpublic personal information with a third party that
          performs claims services on our behalf. The information shared is
          information that is relevant to perform their services.
        </li>

        <li>
          Your personal information is shared within the RVOS Insurance Group
          of Companies in order for us to provide all of your insurance needs.
        </li>

        <li>
          We may also disclose non-public personal information about you
          to non-affiliated third parties as applicable as permitted by law.
        </li>
      </ul>
    </InfoCard>

    <InfoCard title="Changes to this Privacy Policy Statement">
      <p>
        We reserve the right to amend, change, modify or supplement this
        Privacy Policy at any time. If we make material amendments, changes,
        modifications or supplements to this Privacy Policy, we will provide
        our current customers with a revised notice evidencing such action.
      </p>
    </InfoCard>

    <InfoCard title="Reporting Information">
      <p>
        If you have any questions regarding any of the personal information
        that the RVOS Insurance Group has in its files, you may submit a
        request in writing identifying he policy(s) in question and what
        information you would like verified. If you have any questions
        about privacy, please contact us in writing at RVOS Farm Mutual
        Insurance Company, P.O. Box 6106, Temple, Texas 76503. Within 30
        days we will respond and a nominal fee will be charged if copies
        are required. If you believe any information we have about you or
        your relationship with us is incorrect, please notify us at once.
        We will take prompt action in making the appropriate corrections.
      </p>
    </InfoCard>

    <InfoCard title="Contractual Partners">
      <p>
        RVOS may allow the following entities access to your confidential
        information for business reasons:
      </p>

      <p>R+V Versicherung AG</p>

      <p>
        With regard to the processing of your Personal Data as defined
        by the European General Data Protection Regulation (GDPR) by
        our European reinsurers, please find further information to the
        respective reinsurer in accordance with Art. 14 GDPR under:
      </p>

      <p>
        For R+V Versicherung AG please access <a href="http://www.gdpr.ruv.de">http://www.gdpr.ruv.de</a>
      </p>
    </InfoCard>

    <FormText color="grey-6">
      Revised and updated January 2019.
    </FormText>
  </Fragment>
);

export default PrivacyPolicy;