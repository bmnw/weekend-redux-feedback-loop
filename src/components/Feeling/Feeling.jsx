import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Feeling = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const currentFeeling = useSelector(store => store.feelingRating);

    const [feelingRating, setFeelingRating] = useState('');

    const updateFeelingFeedback = () => {
        console.log('in updateFeelingFeedback', feelingRating);
        if(feelingRating === ''){
            alert('The rating field cannot be left blank.');
            return;
        }
        dispatch({ type: 'update_feeling', payload: feelingRating});
        toContent();
    } // end updateFeelingFeedback

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
    }); // end theme

    return  <div>
                <Breadcrumbs style={{display: 'flex', justifyContent: 'center'}}>
                    <Link href="/#/" underline="hover" sx={{fontWeight: '500'}} color="text.primary">
                        Feeling
                    </Link>
                    <Link href="/#/content" underline="hover" color="text.secondary">
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
                    elevation={10}
                >
                    <CardContent>
                        <Typography variant="h5">How are you feeling today?</Typography>
                        <Typography variant="h6">1: 😟  2: 😕  3: 😐  4: 🙂  5: 😃</Typography>
                        <br />
                        <form onSubmit={updateFeelingFeedback}>
                            <TextField 
                                variant="outlined" 
                                required 
                                size="small" 
                                sx={{backgroundColor: 'white'}} 
                                onChange={(event) => setFeelingRating(event.target.value)} 
                                type="number" 
                            />
                        </form>
                        <h5>Current rating is: {currentFeeling}</h5>
                        <div>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="primary" onClick={updateFeelingFeedback}>Next</Button>
                            </ThemeProvider>
                        </div>
                    </CardContent>
                </Card>
            </div>
}

export default Feeling;