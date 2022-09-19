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

const Support = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const support = useSelector(store => store.supportRating);

    const [supportRating, setSupportRating] = useState('');

    const updateSupportFeedback = (event) => {
        // console.log('in updateSupportFeedback', supportRating);
        // if(supportRating === ''){
        //     alert('The rating field cannot be left blank.');
        //     return;
        // }
        // dispatch({ type: 'update_support', payload: supportRating});
        // toComments();
        console.log('in updateSupportFeedback', event.target.value); // enter 'event' as function parameter
        dispatch({ type: 'update_support', payload: event.target.value });
    } // end updateSupportFeedback

    const toComments = () => {
        console.log('in toComments');
        if(support === ''){
            alert('The rating field cannot be left blank.'); 
            return;
        } else if (support > 5 || support < 1 || support.length > 1){
            alert('Please enter 1 - 5 rating only. No decimals please.');
            return;
        }
        history.push('/comments');
    } // end toComments

    const toContent = () => {
        console.log('in toContent');
        history.push('/content')
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
                    <Link href="/#/" underline="hover" color="text.secondary">
                        Feeling
                    </Link>
                    <Link href="/#/content" underline="hover" color="text.secondary">
                        Content
                    </Link>
                    <Link href="/#/support" underline="hover" sx={{fontWeight: '500'}} color="text.primary">
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
                        <Typography variant="h5">How well are you being supported?</Typography>
                        <Typography variant="h6">1: 😟  2: 😕  3: 😐  4: 🙂  5: 😃</Typography>
                        <br />
                        <form onSubmit={toComments}>
                            <TextField 
                                    variant="outlined" 
                                    required 
                                    size="small" 
                                    sx={{backgroundColor: 'white'}} 
                                    type="number" 
                                    // onChange={(event) => setSupportRating(event.target.value)}
                                    value = {support}
                                    onChange = {updateSupportFeedback}
                            />
                        </form>
                        <br />
                        {/* Remove h5. */}
                        {/* <h5>Current rating is: {support}</h5> */}
                        <div>
                            <ThemeProvider theme={theme}>
                                <Button style={{marginRight: 5}} variant="contained" color="primary" onClick={toContent}>Back</Button>
                            </ThemeProvider>
                            <ThemeProvider theme={theme}>
                                <Button style={{marginLeft: 5}} variant="contained" color="primary" onClick={toComments}>Next</Button>
                            </ThemeProvider>
                        </div>
                    </CardContent>
                </Card>
                

            </div>
}

export default Support;