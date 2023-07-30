import { FC, FormEvent, useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import { Todo } from './components/Model';
import TodoList from './components/TodoList';

const App: FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('')
    }
  }
  console.log(todos)

  return (
    <div className="App">
      <h1 className='heading'>Taskify ToDo</h1>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd} />
      <TodoList
        todos={todos}
        setTodos={setTodos} />
    </div>
  )
}

export default App
