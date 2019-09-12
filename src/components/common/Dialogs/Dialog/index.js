import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Styled from './styles';

import Modal from '../Modal';
import Close from 'app/components/Icons/Close';
import Divider from 'app/components/common/Divider';

const Dialog = ({
  modal = true,
  title,
  className,
  children,
  closeDialog
}) => (
  <>
    {
      modal
        ? <Modal onClick={closeDialog} />
        : null
    }

    <Styled
      className={
        classNames(
          'c-dialog',
          className
        )
      }
    >
      <Close
        width="24"
        height="24"
        onClick={closeDialog}
        className="c-dialog__close"
      />

      {
        title && (
          <div className="c-dialog__title-holder">
            <div className="c-dialog__title">
              {title}
            </div>
          </div>
        )
      }

      <Divider
        direction="horizontal"
        indents="30px 0"
      />

      <div className="c-dialog__content">
        {children}
      </div>
    </Styled>
  </>
);

Dialog.propTypes = {
  modal: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  closeDialog: PropTypes.func
};

export default Dialog;