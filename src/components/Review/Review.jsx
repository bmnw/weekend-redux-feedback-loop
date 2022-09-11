import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const Review = () => {

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
                    elevation="10"
                >
                    <CardContent>
                        <Typography variant="h5">Review Your Feedback</Typography>
                        <br />
                        <Grid container spacing="6">
                            <Grid item xs={12}>
                                <Typography variant="h6">Feeling: </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">Content Understanding: </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">Support: </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">Comments: </Typography>
                            </Grid>
                        </Grid>
                        <br />
                        <div>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="primary">Submit</Button>
                            </ThemeProvider>
                        </div>
                    </CardContent>
                </Card>   
                
            </div>
}

export default Review;