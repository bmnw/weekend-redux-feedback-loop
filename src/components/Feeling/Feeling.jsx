import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Feeling = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const toContent = () => {
        console.log('in toContent');
        history.push('/content');
    } // end toContent

    const theme = createTheme({
        palette: {
            primary: {
                main: '#008F8C'
            }
        }
    });

    return  <div>
                <Breadcrumbs style={{display: 'flex', justifyContent: 'center'}}>
                    <Typography sx={{fontWeight: '500'}} color="text.primary">
                        Feeling
                    </Typography>
                    <Typography color="text.secondary">
                        Content
                    </Typography>
                    <Typography color="text.secondary">
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
                >
                    <CardContent>
                    <Typography variant="h5">How are you feeling today?</Typography>
                    <Typography variant="overline">1: feeling pretty bad. 5: feeling awesome!</Typography>
                    <form>
                        <TextField 
                            variant="outlined" 
                            required 
                            size="small" 
                            sx={{backgroundColor: 'white'}} 
                            onChange={(event) => dispatch({type: 'append'})} 
                            type="number" 
                        />
                    </form>
                    <div style={{marginTop: 10}}>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" color="primary" onClick={toContent}>Next</Button>
                        </ThemeProvider>
                    </div>
                    </CardContent>
                </Card>
            </div>
}

export default Feeling;