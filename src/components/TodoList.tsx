import { ITodo } from "../types/data";
import TodoItem from "./TodoItem";

interface ITodoListProps {
    items: ITodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
    const {items, toggleTodo, removeTodo} = props;

    return <div>
        {
            props.items.map(todo => 
            <TodoItem 
            key={todo.id} 
            {...todo} 
            removeTodo={removeTodo} 
            toggleTodo={toggleTodo}
            />)
        }
    </div>
}

export default TodoList