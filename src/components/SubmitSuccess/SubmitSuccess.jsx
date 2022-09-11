import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';

const SubmitSuccess = () => {

    const history = useHistory();

    const theme = createTheme({
        palette: {
            primary: {
                main: '#008F8C'
            }
        }
    }); // end theme

    const newFeedback = () => {
        console.log('in newFeedback');
        history.push('/');
    } // end newFeedback

    return  <div>
                <Card 
                    sx={{backgroundColor: "#FACFCE"}}
                    elevation="10"
                >
                    <CardContent>
                        <Typography variant="h5">Thanks for your feedback!</Typography>
                        <br />
                        <div>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="primary" onClick={newFeedback}>Start New Feedback</Button>
                            </ThemeProvider>
                        </div>
                    </CardContent>
                </Card>

            </div>
}

export default SubmitSuccess;