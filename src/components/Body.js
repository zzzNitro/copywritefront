import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


export default function Body() {

    const texts = useSelector(state => state.texts);

    const reversedTexts = [...texts].reverse().map(e => { return e });

  return (
    <Box sx={{
        flexGrow: 1,
        width: '60vw',
        height: '100vh',
        paddingTop: '2vh',
        paddingLeft: '15vw',
    }}>
      <Paper
        elevation={0}
        sx={{ 
            width: '70vw',
            padding: '2vh',
            }}
      >
        <Typography variant='h4' sx={{paddingTop: '1vh', paddingLeft: '10px'}}>
            Results:
        </Typography>
        <List sx={{ paddingBottom: '20vh', marginLeft: '10vw' }}>
            {reversedTexts && reversedTexts.map(text => (
                <ListItem 
                    key={texts.indexOf(text)}
                    sx={{
                        border: '1px solid black',
                        borderRadius: '5px',
                        margin: '10px',
                        maxWidth: '40vw',
                    }}
                >
                    {text.text ?
                    <Typography variant='h5'>
                        {text.palindrome ?
                        'text: ' + text.text + ' is a palindrome' :
                        'text: ' + text.text + ' is not a palindrome'
                        }
                    </Typography>
                        :
                    <Typography variant='h5'>
                        error: {text.error}
                    </Typography>
                    }
                </ListItem>
            ))}
        </List>
      </Paper>
    </Box>
  );
}