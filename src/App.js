import React, { useState } from 'react';
import './App.scss';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return(
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}
    className="todo">
    {todo.text}
    <div>
      <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => removeTodo(index)}>X</button>
    </div>
    </div>
  )
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} placeholder="What's on the agenda?" onChange={e => setValue(e.target.value)} />
    </form>
  )
}

function App () {
  const [todos, setTodos] = useState([
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
      <h1>React To-Do List</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo,index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}/>
        ))}
      </div>
    </div>
  )
}

export default App;