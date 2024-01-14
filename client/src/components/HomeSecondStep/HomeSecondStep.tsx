import { CircularProgress, Typography } from '@mui/material';
import { useState } from 'react';
import { Snackbar } from '..';
import { ApiError } from '../../hooks/useFetch';
import { StyledVerticalContainer } from '../../styled';
import { HostGame, JoinGame } from './components';

export const HomeSecondStep = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarText, setSnackbarText] = useState('');
  const [snackbarIsError, setSnackbarIsError] = useState(false);

  const onJoinOrHostButtonClick = () => setIsLoading(true);
  const onRequestSuccess = (isHosting: boolean) => {
    setIsSnackbarOpen(true);
    setSnackbarText(`Successfully ${isHosting ? 'hosted' : 'joined'} a game!`);
    setSnackbarIsError(false);
    setIsLoading(false);
  };
  const onApiError = ({ msg }: ApiError) => {
    setIsSnackbarOpen(true);
    setSnackbarText(msg);
    setSnackbarIsError(true);
    setIsLoading(false);
  };

  return (
    <>
      <StyledVerticalContainer spacing={4}>
        <Typography variant="h3">How Do You Want To Play?</Typography>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <JoinGame onClick={onJoinOrHostButtonClick} onSuccess={() => onRequestSuccess(false)} onFail={onApiError} />
            <HostGame onClick={onJoinOrHostButtonClick} onSuccess={() => onRequestSuccess(true)} onFail={onApiError} />
          </>
        )}
      </StyledVerticalContainer>
      <Snackbar
        isOpen={isSnackbarOpen}
        text={snackbarText}
        isError={snackbarIsError}
        onClose={() => setIsSnackbarOpen(false)}
      />
    </>
  );
};
