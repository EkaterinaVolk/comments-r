import './Form.css'
import {useState} from 'react'

// не смогла придумать, как сделать новый комент другого цвета... даже идей нет, куда двигаться

export default function Form() {
  const [comment, setComment] = useState('');
	const [listOfComments, setListOfComments] = useState([]);
   
  function addComment () {
    setListOfComments([checkSpam(comment), ...listOfComments])
    setComment('')
  }
 
  function checkSpam(str) {
    str = str.replace(/viagra/gi, '***').replace(/xxx/gi, '***');
    return(str);
    }

  return (
        <form>
        <h1>chat</h1>
        <div className='comments'><div> {listOfComments.map((comment) => <div> {comment} </div>)}</div></div>
        <h2>your comment:</h2>
<input type='text' required value={comment} onChange={(e) => setComment(e.target.value)} className='comment__input' placeholder="your comment" name="comment"></input>
<button type='button' onClick={addComment}>send</button>
    </form>
    );
}
