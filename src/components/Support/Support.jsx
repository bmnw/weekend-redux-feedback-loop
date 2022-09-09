import { useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Support = () => {

    const history = useHistory();

    const toComments = () => {
        console.log('in toComments');
        history.push('/comments');
    } // end toComments

    const theme = createTheme({
        palette: {
            primary: {
                main: '#008F8C'
            }
        }
    }); // end theme

    return  <div>
                <Breadcrumbs style={{display: 'flex', justifyContent: 'center'}}>
                    <Typography color="text.secondary">
                        Feeling
                    </Typography>
                    <Typography color="text.secondary">
                        Content
                    </Typography>
                    <Typography sx={{fontWeight: '500'}} color="text.primary">
                        Support
                    </Typography>
                    <Typography color="text.secondary">
                        Comments
                    </Typography>
                    <Typography color="text.secondary">
                        Review
                    </Typography>
                </Breadcrumbs>
                <br />
                <Card 
                    sx={{backgroundColor: "#FACFCE"}}
                    elevation="10"
                >
                    <CardContent>
                        <Typography variant="h5">How well are you being supported?</Typography>
                        <Typography variant="h6">1: 😟  2: 😕  3: 😐  4: 🙂  5: 😃</Typography>
                        <br />
                        <form>
                            <TextField 
                                    variant="outlined" 
                                    required 
                                    size="small" 
                                    sx={{backgroundColor: 'white'}} 
                                    type="number" 
                            />
                        </form>
                        <br />
                        <div>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="primary" onClick={toComments}>Next</Button>
                            </ThemeProvider>
                        </div>
                    </CardContent>
                </Card>
                

            </div>
}

export default Support;