
import ModalUnstyled from '@mui/base/ModalUnstyled';
import React, { MouseEventHandler, ReactElement } from 'react';
import { makeStyles } from "@mui/styles";
import styles from './Modal.module.scss'

interface PropType {
  children: ReactElement; // 適当
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