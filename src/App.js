import Box from '@mui/material/Box';
import Body from './components/Body';
import NavBar from "./components/NavBar";

function App() {
  return (
    <Box sx={{ backgroundColor: '#E5E5E5' }}>
      <NavBar />
      <Body />
    </Box>
  );
}

export default App;
