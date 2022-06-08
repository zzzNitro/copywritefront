import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getText } from '../redux/actions';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';


export default function NavBar() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getText(text));
    setText('');
  }

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
            backgroundColor: 'error.dark',
            paddingLeft: '25vw',
            
        }}
    >
        <Toolbar>
        <FormControl sx={{ width: '40vw' }}>
            <OutlinedInput
            id="component-outlined"
            placeholder='Insert text...'
            value={text}
            onChange={handleInputChange}
            sx={{
                backgroundColor: 'common.white',
                width: '100%',
                height: '3vh'
            }}
            />
        </FormControl>
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                  marginLeft: '15px',
                  backgroundColor: '#4901FF',
                  }}
            >
            Send
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}