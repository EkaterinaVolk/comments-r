import './Form.css'
import {useState} from 'react'
let listOfComments = []

export default function Form() {
	const [items, setItems] = useState("comment", []);
 
  const handleItems = () => {
    setItems(items => listOfComments.push(checkSpam(items)))
    setItems('')

	}
 
  function checkSpam(str) {
    str = str.replace(/viagra/gi, '***').replace(/xxx/gi, '***');
    return(str);
    }

  return (
        <form>
        <h1>chat</h1>
        <div className='comments'><ul> {listOfComments.map((comment) => {return <li>{comment} </li>})}</ul></div>
        <h2>your comment</h2>
<input type='text' required value={items} onChange={(e) => setItems(e.target.value)} className='comment__input' placeholder="your comment" name="comment"></input>
<button type='button' onClick={handleItems}>send</button>
    </form>
    );
}
