import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Styled from './styles';

import Card from 'app/components/common/Card';
import H2 from 'app/components/Layouts/App/H2';
import Image from 'app/components/new/Image';

const QuickLinks = ({
  quickLinks
}) => (
  <Styled>
    <H2>
      Quick Links
    </H2>

    <Card>
      <ul>
        {
          quickLinks.map((ql, i) => (
            <li key={i}>
              <Image
                src={ql.imageLink}
                alt={ql.label}
              />

              <Link to={ql.url}>
                {ql.label}
              </Link>
            </li>
          ))
        }
      </ul>
    </Card>
  </Styled>
);

QuickLinks.propTypes = {
  quickLinks: PropTypes.arrayOf(PropTypes.object)
};

export default QuickLinks;