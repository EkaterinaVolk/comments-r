import { useState } from 'react'

export default function Form() {
  let comments =[]
  const [comment, setComment] = useState('')

  function addComment() {
    comments.push(comment);
    console.log(comments)
    setComment('')
    return comments;
  }


  return (
    <form>
        <h1>chat</h1>
        <div>{comment}</div>
        <h2>your comment</h2>
<input type='text' required value={comment} onChange={(e) => setComment(e.target.value)} className='comment__input' placeholder="your comment" name="comment"></input>
<button type='button' onClick={addComment}>send</button>
    </form>
  )
}
