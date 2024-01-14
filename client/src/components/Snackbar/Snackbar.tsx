import { Alert, Snackbar as MUISnackbar, Slide, SnackbarCloseReason } from '@mui/material';
import { memo } from 'react';

interface SnackbarProps {
  text: string;
  isOpen: boolean;
  isError: boolean;
  onClose: () => void;
}

export const Snackbar = memo(({ text, isOpen, isError, onClose }: SnackbarProps) => (
  <MUISnackbar
    open={isOpen}
    autoHideDuration={4000}
    onClose={(_: unknown, reason: SnackbarCloseReason) => {
      if (reason === 'clickaway') {
        return;
      }

      onClose();
    }}
    message={text}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    TransitionComponent={(props) => <Slide {...props} direction="up" />}
  >
    <Alert severity={isError ? 'error' : 'success'} sx={{ width: '100%' }}>
      {text}
    </Alert>
  </MUISnackbar>
));
