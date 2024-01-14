import { createTheme, ThemeProvider } from '@mui/material';
import { Sockets } from './components';
import { Home } from './pages/Home/Home';

function App() {
  const theme = createTheme({
    typography: { h1: { fontSize: '125px' }, h2: { fontSize: '90px' }, fontFamily: ['VT323', 'monospace'].join(',') },
    palette: { background: { default: 'darkgrey' } },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home />
      <Sockets />
    </ThemeProvider>
  );
}

export default App;
