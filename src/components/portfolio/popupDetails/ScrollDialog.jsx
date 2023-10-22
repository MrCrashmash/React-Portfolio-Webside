import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import './Details.css'

import Details_Donut from './Details_Donut' 
import Details_HTML_Web from './Details_HTML_Web' 
import Details_React_Web from './Details_React_Web' 
import Details_MazeGame from './Details_MazeGame' 
import Details_Matraze from './Details_Matratze' 
import Details_VRLL from './Details_VRLL' 

export default function ScrollDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  function DetailsPopUp(){
    if(props.details_caller == 'donut'){
      return(<Details_Donut />)
    } 
    if(props.details_caller ==  'html-web') {
      return(<Details_HTML_Web />)
    }
    if(props.details_caller == 'matraze') {
      return(<Details_Matraze />)
    }
    if(props.details_caller == 'mazegame') {
      return(<Details_MazeGame />)
    }
    if(props.details_caller == 'vrll') {
      return(<Details_VRLL />)
    }
    if(props.details_caller == 'react-web') {
      return(<Details_React_Web />)
    }
  }

  return (
    <div>
      <a onClick={handleClickOpen('paper')} className='btn btn-primary' target='_blank'>Details</a>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="md"
      >
        <DialogTitle id="scroll-dialog-title" >{props.details_title} - Details</DialogTitle>
        <DialogContent dividers={scroll === 'paper'} >
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {/* ============ POPUP CONTANT =============*/}
            <DetailsPopUp/>
            

            {/* ============ POPUP CONTANT END =============*/}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <a href={props.details_github} className={props.details_className} target='_blank'>GitHub</a>
          <a onClick={handleClose} className='btn' target='_blank'>Schließen</a>
  
        </DialogActions>
      </Dialog>
    </div>
  );
}