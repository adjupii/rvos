import React from 'react';
import PropTypes from 'prop-types';

import { notifications } from 'app/components/common/Notifications';

import Card from '../Card';
import H3 from 'app/components/Layouts/App/H3';
import Info from 'app/components/EntityDetails/Info';
import ChangeUsernameForm from 'app/components/Forms/ChangeUsername';
import ChangePasswordForm from 'app/components/Forms/ChangePassword';

const Login = ({
  user,
  handleOpenDialog,
  handleCloseDialog,
  setUserParam
}) => (
  <Card className="profile-card">
    <H3>
      Login
    </H3>

    <Info
      label="Username"
      value={
        <div className="entity-details-info__change-holder">
          <div>
            {user.username}
          </div>

          <div
            onClick={handleOpenDialog(
              'change-username',
              {
                title: 'Change Username',
                className: 'c-dialog--with-form',
                children: (
                  <ChangeUsernameForm
                    callback={handleCloseDialog('change-username')}
                    notify={notifications.create({
                      message: 'Username successfully updated',
                      type: 'success'
                    })}
                    setUserParam={setUserParam}
                  />
                )
              }
            )}
            className="entity-details-info__change-link"
          >
            Change
          </div>
        </div>
      }
    />

    <div className="profile-card__info-holder">
      <Info
        label="Password"
        value={
          <div className="entity-details-info__change-holder">
            <div>
              ******
            </div>

            <div
              onClick={handleOpenDialog(
                'change-password',
                {
                  title: 'Change Password',
                  className: 'c-dialog--with-form',
                  children: (
                    <ChangePasswordForm
                      callback={handleCloseDialog('change-password')}
                      notify={notifications.create({
                        message: 'Password successfully updated',
                        type: 'success'
                      })}
                    />
                  )
                }
              )}
              className="entity-details-info__change-link"
            >
              Change
            </div>
          </div>
        }
      />
    </div>
  </Card>
);

Login.propTypes = {
  user: PropTypes.object,
  handleOpenDialog: PropTypes.func,
  handleCloseDialog: PropTypes.func,
  setUserParam: PropTypes.func
};

export default Login;