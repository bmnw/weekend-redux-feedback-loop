import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

const Review = () => {
    return  <div>
                <Breadcrumbs>
                    <Typography color="text.secondary">
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
                    <Typography sx={{fontWeight: '500'}} color="text.primary">
                        Review
                    </Typography>
                </Breadcrumbs>
                <h2>Review Your Feedback</h2>
                <br />
                <button>Submit</button>
            </div>
}

export default Review;