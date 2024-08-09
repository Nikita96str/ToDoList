import React, { useEffect, useRef, useState } from "react"
import { ITodo } from "../types/data"
import TodoList from "./TodoList";
import { log } from "console";

const AddTodoItem: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [inpValue, setInpValue] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, [])
    function addTodos() {
        if (inpValue) {
            setTodos([...todos, {
                id: Date.now(),
                title: inpValue,
                complete: false,
            }])
            setInpValue('')
        } else {
            // Можно реализовать всплывающее окно с сообщением
            console.log('Заполните поле для ввода.')
        }
    }

    const handlerChange: React.ChangeEventHandler<HTMLInputElement>  = e => {
        console.log('e.target:', e.target);
        console.log('e.target.value:', e.target.value);
        setInpValue(e.target.value)
    }

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;
            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }

    return (
        <div>
            <div>
                <input 
                value={inpValue} 
                onKeyDown={e => {
                    if (e.key === 'Enter') 
                        addTodos()
                }} 
                onChange={handlerChange}
                ref={inputRef}
                />
                <button onClick={addTodos}> Add</button>
            </div>
            <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </div>
    )
}

export default AddTodoItem