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

const Content = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const content = useSelector(store => store.contentRating);
    const [contentRating, setContentRating] = useState(0);

    const updateContentFeedback = (event) => {
        // console.log('in updateContentFeedback', contentRating);
        // if(contentRating === ''){
        //     alert('The rating field cannot be left blank.');
        //     return;
        // }
        // dispatch({ type: 'update_content', payload: contentRating});
        // toSupport();
        console.log('in updateContentFeedback', event.target.value);
        dispatch({ type: 'update_content', payload: event.target.value }); // enter 'event' as function parameter
    } // end updateContentFeedback

    const toSupport = () => {
        console.log('in toSupport');
        if(content === ''){
            alert('The rating field cannot be left blank.'); 
            return;
        } else if (content > 5 || content < 1){
            alert('Please enter 1 - 5 rating only.');
            return;
        }
        history.push('/support');
    } // end toSupport

    const toFeeling = () => {
        console.log('in goBack');
        history.push('/');
    } // end goBack

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
                    elevation={10}
                >
                    <CardContent>
                        <Typography variant="h5">How well are you understanding the content?</Typography>
                        <Typography variant="h6">1: 😟  2: 😕  3: 😐  4: 🙂  5: 😃</Typography>
                        <br />
                        <form onSubmit={toSupport}>
                            <TextField 
                                variant="outlined" 
                                required 
                                size="small" 
                                sx={{backgroundColor: 'white'}} 
                                type="number" 
                                // onChange={(event) => setContentRating(event.target.value)} 
                                value={content}
                                onChange={updateContentFeedback}
                            />
                        </form>
                        <br />
                        {/* Remove h5. */}
                        {/* <h5>Current rating is: {content}</h5> */}
                        <div style={{marginTop: 10}}>
                            <ThemeProvider theme={theme}>
                            <Button style={{marginRight: 5}} variant="contained" color="primary" onClick={toFeeling}>Back</Button>
                            </ThemeProvider>
                            <ThemeProvider theme={theme}>
                            <Button style={{marginLeft: 5}} variant="contained" color="primary" onClick={toSupport}>Next</Button>
                            </ThemeProvider>
                        </div>
                        
                    </CardContent>
                </Card>
            </div>
}

export default Content;