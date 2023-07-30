import React, { Dispatch, FC, FormEvent, SetStateAction, useEffect, useRef, useState } from 'react';
import { Todo } from './Model';
import './Style.css'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';


type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const SingleTodo: FC<Props> = ({ todo, todos, setTodos }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])

    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const handleDone = (id: number) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    }
    const handleEdit = (e: FormEvent, id: number) => {
        e.preventDefault();

        setTodos(todos.map(todo => (
            todo.id === id ? { ...todo, todo: editTodo } : todo
        )))
        setEdit(false);
    }

    return (
        <form
            className='todo__box'
            onSubmit={(e) => handleEdit(e, todo.id)}>
            {
                edit ? (
                    <input
                        ref={inputRef}
                        className='edit__todo--input'
                        onChange={(e) => setEditTodo(e.target.value)}
                        value={editTodo} type="text" />
                ) : todo.isDone ? (
                    < s className='todos__single--text'>{todo.todo}</s>
                ) : (

                    <span className='todos__single--text'>{todo.todo}</span>
                )
            }
            <div className='action__box'>
                <span className='icon' onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit)
                    }
                }
                }><AiFillEdit /></span>
                <span className='icon' onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
                <span className='icon' onClick={() => handleDone(todo.id)}><TiTick /></span>
            </div>
        </form >
    );
};

export default SingleTodo;