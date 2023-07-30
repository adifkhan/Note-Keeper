import React, { Dispatch, FC, SetStateAction } from 'react';
import { Todo } from './Model';
import SingleTodo from './SingleTodo';
import './Style.css'

type Props = {
    todos: Todo[];
    setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const TodoList: FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className='todos'>
            {
                todos.map(todo => (
                    <SingleTodo
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos} />
                ))
            }
        </div>
    );
};

export default TodoList;