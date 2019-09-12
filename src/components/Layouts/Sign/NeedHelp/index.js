import React from 'react';

import Styled from './styles';

const NeedHelp = () => (
  <Styled className="need-help">
    <div className="need-help__inner">
      Need help?
      {' '}
      <a
        href="https://www.rvos.com/contact-us"
        rel="noopener noreferrer"
        target="_blank"
      >
        Contact a Customer Service representative.
      </a>
    </div>
  </Styled>
);

export default NeedHelp;