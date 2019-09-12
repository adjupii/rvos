import React from 'react';
import PropTypes from 'prop-types';

import useScrollToTop from 'app/hooks/useScrollToTop';

import {
  Container,
  Row,
  Col
} from 'app/components/common/Grid';
import Header from '../Header';
import Logo from 'app/components/Logo';
import NavContainer from './NavContainer';
import Main from './Main';
import Content from './Content';
import Footer from '../Footer';
import NeedHelp from './NeedHelp';

const PAGES_WITHOUT_NEED_HELP = [
  'sign-in-log-in'
];

const Layout = ({
  children,
  page,
  location: {
    pathname
  }
}) => {
  const showNeedHelp = !PAGES_WITHOUT_NEED_HELP.includes(page);

  useScrollToTop(pathname);

  return (
    <>
      <Header>
        <Logo />

        {
          pathname === '/sign/in' && (
            <NavContainer />
          )
        }
      </Header>

      <Main showNeedHelp={showNeedHelp}>
        <Container>
          <Row className="row-center">
            <Col className="col-12 col-s-8 col-m-6 col-l-4">
              <Content>
                {children}
              </Content>
            </Col>
          </Row>
        </Container>
      </Main>

      {
        showNeedHelp && (
          <NeedHelp />
        )
      }

      <Footer
        menu={[
          { type: 'external', label: 'Privacy Policy', link: 'https://www.rvos.com/privacy-policy' },
          { type: 'external', label: 'Terms of use', link: 'https://www.rvos.com/terms-use' },
          { type: 'external', label: 'Contact us', link: 'https://www.rvos.com/contact-us' }
        ]}
      />
    </>
  );
};

Layout.propTypes = {
  page: PropTypes.string,
  children: PropTypes.node,
  location: PropTypes.object
};

export default Layout;