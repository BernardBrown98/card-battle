import { TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { StyledButton, StyledVerticalContainer } from '../../styled';
import { MIN_USERNAME_LENGTH } from './constants';

interface HomeFirstStepProps {
  onStepCompleted: () => void;
}

export const HomeFirstStep = ({ onStepCompleted }: HomeFirstStepProps) => {
  const [usernameInputValue, setUsernameInputValue] = useState('');
  const [usernameInputErrorText, setUsernameInputErrorText] = useState('');
  const isUsernameLengthValid = usernameInputValue.length >= MIN_USERNAME_LENGTH;

  useEffect(() => {
    if (usernameInputValue !== '' && !isUsernameLengthValid) {
      setUsernameInputErrorText('Your username must be at least 4 characters.');
      return;
    }

    setUsernameInputErrorText('');
    return;
  }, [usernameInputValue, isUsernameLengthValid]);

  return (
    <StyledVerticalContainer spacing={3}>
      <Typography variant="h3">Enter Username</Typography>
      <TextField
        required
        label="Username"
        variant="standard"
        error={usernameInputValue !== '' && !isUsernameLengthValid}
        helperText={usernameInputErrorText}
        onChange={(event) => setUsernameInputValue(event.target.value)}
      />
      <StyledButton
        variant="outlined"
        disabled={usernameInputValue === '' || !isUsernameLengthValid}
        onClick={onStepCompleted}
      >
        Next
      </StyledButton>
    </StyledVerticalContainer>
  );
};
