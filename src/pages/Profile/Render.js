import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import useDialog from 'app/hooks/useDialog';

import {
  Row,
  Col
} from 'app/components/common/Grid';
import H2 from 'app/components/Layouts/App/H2';
import Insured from './Insured';
import Contact from './Contact';
import Login from './Login';

const Profile = ({
  uploadAvatar,
  user,
  isLoadingAvatar,
  setUserParam,
}) => {
  const
    {
      openDialog,
      closeDialog
    } = useDialog(),

    handleOpenDialog = useCallback(
      (id, options) => () => {
        openDialog(
          id,
          options
        );
      },
      [ openDialog ]
    ),

    handleCloseDialog = useCallback(
      id => () => {
        closeDialog(id);
      },
      [ closeDialog ]
    );

  return (
    <>
      <H2 className="c-app-h2--profile">
        My Profile
      </H2>

      <Row>
        <Col className="col-12 col-m-6 col-l-4">
          <Insured
            uploadAvatar={uploadAvatar}
            user={user}
            isLoadingAvatar={isLoadingAvatar}
          />
        </Col>

        <Col className="col-12 col-m-6 col-l-8">

          <Row>
            <Col className="col-12 col-xl-6">
              <Contact
                user={user}
                handleOpenDialog={handleOpenDialog}
                handleCloseDialog={handleCloseDialog}
              />
            </Col>

            <Col className="col-12 col-xl-6">
              <Login
                user={user}
                handleOpenDialog={handleOpenDialog}
                handleCloseDialog={handleCloseDialog}
                setUserParam={setUserParam}
              />
            </Col>
          </Row>

        </Col>
      </Row>
    </>
  );
};

Profile.propTypes = {
  uploadAvatar: PropTypes.func,
  user: PropTypes.object,
  isLoadingAvatar: PropTypes.bool,
  setUserParam: PropTypes.func,
};

export default Profile;