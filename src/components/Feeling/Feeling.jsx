import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Feeling = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const toContent = () => {
        console.log('in toContent');
        history.push('/content');
    } // end toContent

    return  <div>
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