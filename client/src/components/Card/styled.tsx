import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";

export const StyledGameCard = styled(Card)`
  max-width: 200px;
  background-color: darkgrey;
  box-shadow: -3px 0 0 0 black, 3px 0 0 0 black, 0 -3px 0 0 black, 0 3px 0 0 black;
`;

export const StyledGameCardStat = styled(Typography)`
  margin-bottom: 7px;
  line-height: 17px;
`;

export const StyledGameCardDescription = styled(Typography)`
  margin-top: 20px;
`;