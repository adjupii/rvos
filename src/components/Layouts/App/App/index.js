import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { useItemsForHeaderProfile } from '../Logic';

import { Container } from 'app/components/common/Grid';
import Main from '../Main';
import Header from '../../Header';
import Nav from '../Nav';
import NavMobile from '../NavMobile';
import Footer from '../../Footer';
import ToggleNavIcon from 'app/components/Icons/ToggleNav';
import DropdownMenu from 'app/components/common/DropdownMenu';
import HeaderProfile from '../HeaderProfile';
import Logo from 'app/components/Logo';
import Display from 'app/components/common/Display';

const LayoutApp = ({
  user,
  toggleNavMobile,
  navMobileIsOpen,
  children
}) => {
  const
    dispatch = useDispatch(),

    headerProfileItems = useItemsForHeaderProfile(dispatch);

  return (
    <>
      <Header>
        <Display className="d-block d-l-none">
          <ToggleNavIcon
            width="17"
            height="16"
            onClick={toggleNavMobile}
            className="header__toggle-nav"
          />
        </Display>

        <Display className="d-none d-s-block">
          <Logo />
        </Display>

        <Display className="d-none d-l-block">
          <Nav />
        </Display>

        <DropdownMenu
          renderIcon={({ isOpen }) => (
            <HeaderProfile
              avatar={user.avatar}
              isOpen={isOpen}
            />
          )}
          items={headerProfileItems}
          className="c-dropdown-menu--header-profile"
          dropdownClassName="c-dropdown--header-profile"
        />
      </Header>

      <Display className="d-block d-l-none">
        <NavMobile
          navIsOpen={navMobileIsOpen}
          toggleNav={toggleNavMobile}
        />
      </Display>

      <Main>
        <Container>
          {children}
        </Container>
      </Main>

      <Footer
        menu={[
          { type: 'internal', label: 'Privacy Policy', link: '/app/privacy-policy' },
          { type: 'internal', label: 'Terms of use', link: '/app/terms-use' },
          { type: 'internal', label: 'Contact us', link: '/app/contact-us' }
        ]}
      />
    </>
  );
};

LayoutApp.propTypes = {
  user: PropTypes.object,
  toggleNavMobile: PropTypes.func,
  navMobileIsOpen: PropTypes.bool,
  children: PropTypes.node
};

export default LayoutApp;