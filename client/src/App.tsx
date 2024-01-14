import { createTheme, ThemeProvider } from '@mui/material';
import { Sockets } from './components/SocketsTest/Sockets';
import { Home } from './pages/Home/Home';

function App() {
  // const [data, setData] = useState<Data>({});
  // useEffect(() => {
  //   fetch("http://localhost:3000/test")
  //     .then((res) => {
  //       console.log(res);
  //       return res.json();
  //     })
  //     .then((data) => setData(data));
  // }, []);

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
