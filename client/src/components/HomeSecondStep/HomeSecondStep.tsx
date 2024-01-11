import { Stack, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { StyledButton, StyledVerticalContainer } from '../../styled';
import { MIN_GAME_PIN_LENGTH } from './constants';

export const HomeSecondStep = () => {
  const [gamePinInputValue, setGamePinInputValue] = useState('');
  const [gamePinInputErrorText, setGamePinInputErrorText] = useState('');

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
    <StyledVerticalContainer spacing={4}>
      <Typography variant="h3">How Do You Want To Play?</Typography>
      <Stack direction="row" spacing={4}>
        <TextField
          label="Game Pin"
          variant="outlined"
          error={gamePinInputErrorText !== ''}
          helperText={gamePinInputErrorText}
          onChange={(event) => setGamePinInputValue(event.target.value)}
        />
        <StyledButton variant="outlined" onClick={() => console.log('Join game button button clicked')}>
          Join Game
        </StyledButton>
      </Stack>
      <StyledButton variant="outlined" onClick={() => console.log('Host game button button clicked')}>
        Host Game
      </StyledButton>
    </StyledVerticalContainer>
  );
};
