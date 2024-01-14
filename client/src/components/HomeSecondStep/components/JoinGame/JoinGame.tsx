import { Stack, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { GameData } from '../..';
import { SERVER_ROOT_URL } from '../../../../constants';
import { ApiError, useFetch } from '../../../../hooks';
import { StyledButton } from '../../../../styled';
import { MIN_GAME_PIN_LENGTH } from '../../constants';

interface JoinGameProps {
  onClick: () => void;
  onSuccess: () => void;
  onFail: (error: ApiError) => void;
}

export const JoinGame = ({ onClick, onSuccess, onFail }: JoinGameProps) => {
  const [gamePinInputValue, setGamePinInputValue] = useState('');
  const [gamePinInputErrorText, setGamePinInputErrorText] = useState('');
  const isGamePinValid = gamePinInputErrorText === '';
  const { fetch: doFetch } = useFetch<GameData>(`${SERVER_ROOT_URL}/joinGame/${gamePinInputValue}`, {
    onSuccess: onSuccess,
    onError: onFail,
  });

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
        onClick={() => {
          if (!isGamePinValid) {
            return;
          }

          doFetch();
          onClick();
        }}
        disabled={gamePinInputValue === '' || !isGamePinValid}
      >
        Join Game
      </StyledButton>
    </Stack>
  );
};
