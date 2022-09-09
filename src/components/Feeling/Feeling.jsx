import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

const Feeling = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const toContent = () => {
        console.log('in toContent');
        history.push('/content');
    } // end toContent

    return  <div>
                <Breadcrumbs style={{display: 'flex', justifyContent: 'center'}}>
                    <Typography sx={{fontWeight: '500'}} color="text.primary">
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
                    <Typography color="text.secondary">
                        Review
                    </Typography>
                </Breadcrumbs>
                <h2>How are you feeling today?</h2>
                <h3>On a scale of 1-5, let us know how you're feeling today.</h3>
                <h3>1: feeling pretty bad. 5: feeling awesome!</h3>
                <form>
                    <input onChange={(event) => dispatch({type: 'append'})} type="number" />
                </form>
                <br />
                <button onClick={toContent}>Next</button>
            </div>
}

export default Feeling;