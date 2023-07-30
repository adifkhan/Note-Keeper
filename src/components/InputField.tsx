import React, { Dispatch, FC, FormEvent, SetStateAction, useRef } from 'react';
import './Style.css';

type Props = {
    todo: string;
    setTodo: Dispatch<SetStateAction<string>>;
    handleAdd: (e: FormEvent) => void;
}
const InputField: FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form
            className='input'
            onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
            }}>
            <input
                ref={inputRef}
                className='input__box'
                type="input"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder='Enter a task' />
            <button className='input__submit' type='submit'>Go</button>
        </form>
    );
};

export default InputField;