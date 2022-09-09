import { useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

const Comments = () => {

    const history = useHistory();

    const toReview = () => {
        console.log('in toReview');
        history.push('/review');
    } // end toReview

    return  <div>
                <Breadcrumbs style={{display: 'flex', justifyContent: 'center'}}>
                    <Typography color="text.secondary">
                        Feeling
                    </Typography>
                    <Typography color="text.secondary">
                        Content
                    </Typography>
                    <Typography color="text.secondary">
                        Support
                    </Typography>
                    <Typography sx={{fontWeight: '500'}} color="text.primary">
                        Comments
                    </Typography>
                    <Typography color="text.secondary">
                        Review
                    </Typography>
                </Breadcrumbs>
                <h2>Any comments you want to leave?</h2>
                <form>
                    <input type="text" />
                </form>
                <br />
                <button onClick={toReview}>Next</button>
            </div>
}

export default Comments;