import { useState } from "react"
import { ITodo } from "../types/data"
import TodoList from "./TodoList";

const AddButton: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [inpValue, setInpValue] = useState('');

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

    enum paramObj {
        p1 = 1,
        p2,
        p3,
    }

    return (
        <div>
            <div>
                <input value={inpValue} onChange={e => {
                    console.log('e.target:', e.target);
                    console.log('e.target.value:', e.target.value);
                    setInpValue(e.target.value)
                    }}/>
                <button onClick={addTodos}>Add</button>
            </div>
            <TodoList items={todos} />
        </div>
    )
}

export default AddButton