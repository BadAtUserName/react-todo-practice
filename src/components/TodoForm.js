import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
  const [input, setInput] = useState('')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = event => {
    setInput(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('')
  };

    return (
      <form className='todo-form' onSubmit={handleSubmit}>
        <input 
        type='text' 
        placeholder='Add a ToDo item value' 
        value={input} 
        name='text' 
        className='todo-input'
        onChange={handleChange}
        ref={inputRef}
        />
        <button className='todo-button'>Add ToDo</button>
      </form>
    )
}

export default TodoForm