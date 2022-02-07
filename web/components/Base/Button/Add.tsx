import { MouseEventHandler } from 'react';
import styles from './BaseButtonAdd.module.scss'

interface PropType {
  handleOnClick?: MouseEventHandler
}
export const AddButton = (props: PropType) => {
  return (
    <div className={styles.btnAdd} onClick={props.handleOnClick}>+</div>
  )
}