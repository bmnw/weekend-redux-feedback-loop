import { useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Content = () => {

    const history = useHistory();

    const toSupport = () => {
        console.log('in toSupport');
        history.push('/support');
    } // end toSupport

    const theme = createTheme({
        palette: {
            primary: {
                main: '#008F8C'
            }
        }
    }); // end theme

    return  <div>
                <Breadcrumbs style={{display: 'flex', justifyContent: 'center'}}>
                    <Link href="/#/" underline="hover" color="text.secondary">
                        Feeling
                    </Link>
                    <Link href="/#/content" underline="hover" sx={{fontWeight: '500'}} color="text.primary">
                        Content
                    </Link>
                    <Link href="/#/support" underline="hover" color="text.secondary">
                        Support
                    </Link>
                    <Link href="/#/comments" underline="hover" color="text.secondary">
                        Comments
                    </Link>
                    <Link href="/#/review" underline="hover" color="text.secondary">
                        Review
                    </Link>
                </Breadcrumbs>
                <br />
                <Card
                    sx={{backgroundColor: "#FACFCE"}}
                    elevation="10"
                >
                    <CardContent>
                        <Typography variant="h5">How well are you understanding the content?</Typography>
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
                        <div style={{marginTop: 10}}>
                            <ThemeProvider theme={theme}>
                            <Button variant="contained" color="primary" onClick={toSupport}>Next</Button>
                            </ThemeProvider>
                        </div>
                        
                    </CardContent>
                </Card>
            </div>
}

export default Content;