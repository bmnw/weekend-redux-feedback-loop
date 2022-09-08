import { useHistory } from 'react-router-dom';

const Content = () => {

    const history = useHistory();

    const toSupport = () => {
        console.log('in toSupport');
        history.push('/support');
    } // end toSupport

    return  <div>
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