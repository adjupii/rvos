import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Styled from './styles';

import H3 from 'app/components/Layouts/App/H3';

const QuickLinks = ({
  quickLinks,
  pageName
}) => (
  <Styled
    billet={`entity-${pageName}`}
    className="c-quick-licks"
  >
    <div className="c-quick-licks__inner">
      <H3>
        Quick Links
      </H3>

      <ul>
        {
          quickLinks.map((ql, i) => (
            <li key={i}>
              <Link to={ql.url}>
                {ql.label}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  </Styled>
);

QuickLinks.propTypes = {
  pageName: PropTypes.string,
  quickLinks: PropTypes.arrayOf(PropTypes.object)
};

export default QuickLinks;