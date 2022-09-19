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

    const feeling = useSelector(store => store.feelingRating);

    const [feelingRating, setFeelingRating] = useState('');

    const updateFeelingFeedback = (event) => {
        // console.log('in updateFeelingFeedback', feelingRating);
        // if(feelingRating === ''){
        //     alert('The rating field cannot be left blank.');
        //     return;
        // }
        // dispatch({ type: 'update_feeling', payload: feelingRating});
        // toContent(); 
        console.log('in udpateFeelingFeedback', event.target.value);
        dispatch({ type: 'update_feeling', payload: event.target.value}); // if used, enter 'event' as function parameter
    } // end updateFeelingFeedback

    const toContent = () => {
        console.log('in toContent');
        if (feeling === ''){
            alert('The rating field cannot be left blank.'); 
            return;
        } else if (feeling > 5 || feeling < 1 || feeling.length > 1){
            alert('Please enter 1 - 5 rating only. No decimals please.');
            return;
        }
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
                        <form onSubmit={toContent}>
                            <TextField 
                                variant="outlined" 
                                required 
                                size="small" 
                                sx={{backgroundColor: 'white'}} 
                                // onChange={(event) => setFeelingRating(event.target.value)} 
                                type="number" 
                                value={feeling}
                                onChange={updateFeelingFeedback}
                            />
                        </form>
                        <br />
                        {/* Remove h5 below if dispatching per lecture. The value should remain in the TextField. */}
                        {/* <h5>Current rating is: {feeling}</h5>  */}
                        <div>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="primary" onClick={toContent}>Next</Button>
                            </ThemeProvider>
                        </div>
                    </CardContent>
                </Card>
            </div>
}

export default Feeling;