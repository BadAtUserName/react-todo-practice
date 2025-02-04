import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
  //setting state below
  const[todos, setTodos] = useState([])
  
  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    const newTodos = [todo, ...todos]

    setTodos(newTodos)
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
      return 
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))  
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) { //toggles between true and false
        todo.isComplete = !todo.isComplete
      }
      return todo
    });
    setTodos(updatedTodos);
  }

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr);
  }


  return (
    <div>
      <h1>What DO we need To Do Today</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completetodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default TodoList