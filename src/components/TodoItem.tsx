import { ITodo } from "../types/data";

interface ITodoItem extends ITodo {}

const TodoItem: React.FC<ITodoItem> = (props) => {
    const {id, title, complete} = props;
    
    function removeItem() {
        console.log('props:', id, title, complete)
        
    }

    return <div>
        <input type="checkbox" checked={complete} />
        {title}
        <button onClick={removeItem}> x</button>
    </div>
}

export default TodoItem