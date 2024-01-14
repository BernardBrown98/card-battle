import { Snackbar as MUISnackbar, Slide, SnackbarCloseReason } from '@mui/material';
import { StyledAlert } from './styled';

interface SnackbarProps {
  text: string;
  isOpen: boolean;
  isError: boolean;
  onClose: () => void;
}

export const Snackbar = ({ text, isOpen, isError, onClose: onCloseProp }: SnackbarProps) => {
  const onClose = (_: unknown, reason?: SnackbarCloseReason | string) => {
    if (reason === 'clickaway') {
      return;
    }

    onCloseProp();
  };

  return (
    <MUISnackbar
      open={isOpen}
      autoHideDuration={4000}
      onClose={onClose}
      message={text}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      TransitionComponent={(props) => <Slide {...props} direction="up" />}
    >
      <StyledAlert variant="filled" severity={isError ? 'error' : 'success'} onClose={onClose}>
        {text}
      </StyledAlert>
    </MUISnackbar>
  );
};
