import { CircularProgress, Stack, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Snackbar } from '..';
import { SERVER_ROOT_URL } from '../../constants';
import { ApiError, useFetch } from '../../hooks/useFetch';
import { StyledButton, StyledVerticalContainer } from '../../styled';
import { MIN_GAME_PIN_LENGTH } from './constants';
import { GameData } from './types';

export const HomeSecondStep = () => {
  const [gamePinInputValue, setGamePinInputValue] = useState('');
  const [gamePinInputErrorText, setGamePinInputErrorText] = useState('');

  const onJoinGameSuccess = () => {
    setIsSnackbarOpen(true);
    setSnackbarText('Successfully joined a game!');
    setSnackbarIsError(false);
  };
  const onHostGameSuccess = () => {
    setIsSnackbarOpen(true);
    setSnackbarText('Successfully hosted a game!');
    setSnackbarIsError(false);
  };
  const onApiError = ({ msg }: ApiError) => {
    setIsSnackbarOpen(true);
    setSnackbarText(msg);
    setSnackbarIsError(true);
  };

  const {
    fetch: joinGame,
    isLoading: isLoadingJoinGame,
    // data: joinGameData,
  } = useFetch<GameData>(`${SERVER_ROOT_URL}/joinGame/${gamePinInputValue}`, {
    onSuccess: onJoinGameSuccess,
    onError: onApiError,
  });
  const {
    fetch: hostGame,
    isLoading: isLoadingHostGame,
    // data: hostGameData,
  } = useFetch<GameData>(`${SERVER_ROOT_URL}/hostGame`, {
    onSuccess: onHostGameSuccess,
    onError: onApiError,
  });
  const isGamePinValid = gamePinInputErrorText === '';

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarText, setSnackbarText] = useState('');
  const [snackbarIsError, setSnackbarIsError] = useState(false);

  useEffect(() => {
    if (gamePinInputValue === '') {
      setGamePinInputErrorText('');
      return;
    }
    const numbersOnlyRegex = /^\d+$/;
    if (!numbersOnlyRegex.test(gamePinInputValue)) {
      setGamePinInputErrorText(`Game pin must only be numerical values.`);
      return;
    }
    if (gamePinInputValue.length !== MIN_GAME_PIN_LENGTH) {
      setGamePinInputErrorText(`Game pin must be ${MIN_GAME_PIN_LENGTH} characters.`);
      return;
    }

    setGamePinInputErrorText('');
    return;
  }, [gamePinInputValue]);

  return (
    <>
      <StyledVerticalContainer spacing={4}>
        <Typography variant="h3">How Do You Want To Play?</Typography>
        {isLoadingJoinGame || isLoadingHostGame ? (
          <CircularProgress />
        ) : (
          <>
            <Stack direction="row" spacing={4}>
              <TextField
                label="Game Pin"
                variant="outlined"
                error={!isGamePinValid}
                helperText={gamePinInputErrorText}
                onChange={(event) => setGamePinInputValue(event.target.value)}
                value={gamePinInputValue}
              />
              <StyledButton
                variant="outlined"
                onClick={() => isGamePinValid && joinGame()}
                disabled={gamePinInputValue === '' || !isGamePinValid}
              >
                Join Game
              </StyledButton>
            </Stack>
            <StyledButton variant="outlined" onClick={hostGame}>
              Host Game
            </StyledButton>
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
