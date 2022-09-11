import { useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Comments = () => {

    const history = useHistory();

    const toReview = () => {
        console.log('in toReview');
        history.push('/review');
    } // end toReview

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
                    <Link href="/#/" underline="hover" color="text.secondary">
                        Content
                    </Link>
                    <Link href="/#/support" underline="hover" color="text.secondary">
                        Support
                    </Link>
                    <Link href="/#/comments" underline="hover" sx={{fontWeight: '500'}} color="text.primary">
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
                        <Typography variant="h5">Any comments?</Typography>
                        <br />
                        <form>
                            <TextField 
                                    variant="outlined" 
                                    multiline
                                    size="small" 
                                    sx={{backgroundColor: 'white'}} 
                                    type="text" 
                            />
                        </form>
                        <br />
                        <div>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="primary" onClick={toReview}>Next</Button>
                            </ThemeProvider>
                        </div>

                    </CardContent>
                </Card>
                
            </div>
}

export default Comments;