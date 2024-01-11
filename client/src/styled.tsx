import styled from '@emotion/styled';
import { Button, Stack } from '@mui/material';

export const StyledButton = styled(Button)`
  height: 56px;
  width: 200px;
  color: black;
  border-color: black;
  border-width: 4px;

  :hover {
    transform: translateY(-4px);
    border-width: 4px;
  }
`;

export const StyledVerticalContainer = styled(Stack)`
  margin-top: 100px;
  align-items: center;
`;
