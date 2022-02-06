import { makeStyles } from '@mui/styles';
import { zIndex } from '@/styles/z-index';
import { MouseEventHandler } from 'react';

const useStyles = makeStyles({
  addBtn: {
    width: '64px',
    height: '64px',
    borderRadius: '32px',
    backgroundColor: 'pink',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: '5vh',
    right: '5vw',
    zIndex: zIndex.addBtn,
    cursor: 'pointer',
    boxShadow: 'initial',
    filter: 'drop-shadow(6px 6px 6px gray)'
  }
})

interface PropType {
  handleOnClick?: MouseEventHandler
}
export const AddButton = (props: PropType) => {
  const classes = useStyles()

  return (
    <div className={classes.addBtn} onClick={props.handleOnClick}>+</div>
  )
}