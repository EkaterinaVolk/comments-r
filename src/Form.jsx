import React from 'react'

export default function Form() {




  return (
    <form>
        <h1>chat</h1>
        <h2>your comment</h2>
<input type='text' required value={comment} onChange={(e) => setComment(e.target.value)} className='comment__input' placeholder="your comment" name="comment"></input>
    </form>
  )
}
