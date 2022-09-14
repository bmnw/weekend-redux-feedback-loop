import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const Review = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const feeling = useSelector(store => store.feelingRating);
    const content = useSelector(store => store.contentRating);
    const support = useSelector(store => store.supportRating);
    const comments = useSelector(store => store.comments);

    const submitFeedback = () => {
        console.log('in submitFeedback');
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feeling,
                understanding: content,
                support: support,
                comments: comments
            }
        }).then(response => {
            dispatch({type: 'clear_rating'});
            history.push('/submit-success');
        }).catch(error => {
            console.log(error);
            alert('Something went wrong in submitFeedback');
        });
    } // end submitFeedback

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
                <Breadcrumbs>
                    <Link href="/#/" underline="hover" color="text.secondary">
                        Feeling
                    </Link>
                    <Link href="/#/" underline="hover" color="text.secondary">
                        Content
                    </Link>
                    <Link href="/#/support" underline="hover" color="text.secondary">
                        Support
                    </Link>
                    <Link href="/#/comments" underline="hover" color="text.secondary">
                        Comments
                    </Link>
                    <Link href="/#/review" underline="hover" sx={{fontWeight: '500'}} color="text.primary">
                        Review
                    </Link>
                </Breadcrumbs>
                <br />
                <Card 
                    sx={{backgroundColor: "#FACFCE"}}
                    elevation={10}
                >
                    <CardContent>
                        <Typography variant="h5">Review Your Feedback</Typography>
                        <br />
                        <Grid container spacing="6">
                            <Grid item xs={12}>
                                <Typography variant="h6">Feeling: {feeling} </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">Content Understanding: {content} </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">Support: {support}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">Comments: {comments} </Typography>
                            </Grid>
                        </Grid>
                        <br />
                        <div>
                        <ThemeProvider theme={theme}>
                                <Button style={{marginRight: 5}} variant="contained" color="primary" onClick={toComments}>Back</Button>
                            </ThemeProvider>
                            <ThemeProvider theme={theme}>
                                <Button style={{marginLeft: 5}} variant="contained" color="primary" onClick={submitFeedback}>Submit</Button>
                            </ThemeProvider>
                        </div>
                    </CardContent>
                </Card>   
                
            </div>
}

export default Review;