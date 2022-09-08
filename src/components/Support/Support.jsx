import { useHistory } from 'react-router-dom';

const Support = () => {

    const history = useHistory();

    const toComments = () => {
        console.log('in toComments');
        history.push('/comments');
    } // end toComments

    return  <div>
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