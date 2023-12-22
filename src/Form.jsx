import './Form.css'
import {useState} from 'react'

export default function Form() {
  const [comment, setComment] = useState('');
	const [listOfComments, setListOfComments] = useState([]);
   
  function addComment () {
    if(comment) {
    setListOfComments([checkSpam(comment), ...listOfComments])
    setComment('')
    }
  }
 
  function checkSpam(str) {
    str = str.replace(/viagra/gi, '***').replace(/xxx/gi, '***');
    return(str);
    }

  return (
        <form>
        <h1>chat</h1>
        <div className='comments__container'><div className='coments'> {listOfComments.map((comment, index) => <h4 key={index}> {comment} </h4>)}</div></div>
        <h2>your comment:</h2>
<input type='text' required value={comment} onChange={(e) => setComment(e.target.value)} className='comment__input' placeholder="your comment" name="comment"></input>
<button type='button' onClick={addComment}>send</button>
    </form>
    );
}
