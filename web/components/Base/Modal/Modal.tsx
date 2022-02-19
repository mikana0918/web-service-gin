
import ModalUnstyled from '@mui/base/ModalUnstyled';
import React from 'react';
import styles from './Modal.module.scss'

interface PropType {
  children: JSX.Element; // 適当
  open: boolean;
  handleClose(): void;
}
export const BaseModal = (props: PropType) => {
  return (
    <ModalUnstyled
      open={props.open}
      className={styles.modal}
    > 
      <div
        className={styles.modalInner}
      >
        {props.children}
      </div>
    </ModalUnstyled>
  )
}

export default BaseModal