import { useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

const Content = () => {

    const history = useHistory();

    const toSupport = () => {
        console.log('in toSupport');
        history.push('/support');
    } // end toSupport

    return  <div>
                <Breadcrumbs>
                    <Typography color="text.secondary">
                        Feeling
                    </Typography>
                    <Typography sx={{fontWeight: '500'}} color="text.primary">
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
                <h2>How well are you understanding the content?</h2>
                <h3>On a scale of 1-5, let us know!</h3>
                <h3>1: not at all. 5: got it! this is feeling good.</h3>
                <form>
                    <input type="number" />
                </form>
                <br />
                <button onClick={toSupport}>Next</button>
            </div>
}

export default Content;