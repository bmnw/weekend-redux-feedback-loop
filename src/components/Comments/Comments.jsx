import { useHistory } from 'react-router-dom';

const Comments = () => {

    const history = useHistory();

    const toReview = () => {
        console.log('in toReview');
        history.push('/review');
    } // end toReview

    return  <div>
                <h2>Any comments you want to leave?</h2>
                <form>
                    <input type="text" />
                </form>
                <br />
                <button onClick={toReview}>Next</button>
            </div>
}

export default Comments;