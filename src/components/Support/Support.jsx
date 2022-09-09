import { useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

const Support = () => {

    const history = useHistory();

    const toComments = () => {
        console.log('in toComments');
        history.push('/comments');
    } // end toComments

    return  <div>
                <Breadcrumbs>
                    <Typography color="text.secondary">
                        Feeling
                    </Typography>
                    <Typography color="text.secondary">
                        Content
                    </Typography>
                    <Typography sx={{fontWeight: '500'}} color="text.primary">
                        Support
                    </Typography>
                    <Typography color="text.secondary">
                        Comments
                    </Typography>
                    <Typography color="text.secondary">
                        Review
                    </Typography>
                </Breadcrumbs>
                <h2>How well are you being supported?</h2>
                <h3>On a scale of 1-5, let us know!</h3>
                <h3>1: not at all. 5: very supported!</h3>
                <form>
                    <input type="number" />
                </form>
                <br />
                <button onClick={toComments}>Next</button>
            </div>
}

export default Support;