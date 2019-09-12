import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import getYear from 'date-fns/get_year';

import Styled from './styles';

import { Container } from 'app/components/common/Grid';

const Footer = ({ menu }) => (
  <Styled className="footer">
    <Container>
      <div className="footer__inner">
        <ul>
          {
            menu.map((item, i) => (
              <li key={i}>
                {
                  item.type === 'external'
                    ? (
                      <a
                        href={item.link}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {item.label}
                      </a>
                    )
                    : (
                      <Link to={item.link}>
                        {item.label}
                      </Link>
                    )
                }
              </li>
            ))
          }
        </ul>

        <div>
          &copy; {getYear(new Date())} RVOS Insurance
        </div>
      </div>
    </Container>
  </Styled>
);

Footer.propTypes = {
  menu: PropTypes.array
};

export default Footer;