import { CardActionArea, CardContent, Typography } from '@mui/material';
import { StyledGameCard, StyledGameCardDescription, StyledGameCardStat } from './styled';

interface CardProps {
  title: string;
  attack: number;
  health: number;
}

export const GameCard = ({ title, attack, health }: CardProps) => {
  return (
    <StyledGameCard onClick={() => console.log(`Clicked ${title} card.`)}>
      <CardActionArea>
        <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          { title }
        </Typography>
        <StyledGameCardStat gutterBottom variant="h6">
            Attack: { attack }
        </StyledGameCardStat>
        <StyledGameCardStat gutterBottom variant="h6">
            Health: { health }/{ health }
        </StyledGameCardStat>
        <StyledGameCardDescription variant="body2" color="text.secondary">
          This card will knock your opponent out! Make sure you use it at the right time to surprise your foe!
        </StyledGameCardDescription>
        </CardContent>
      </CardActionArea>
    </StyledGameCard>
  );
};
