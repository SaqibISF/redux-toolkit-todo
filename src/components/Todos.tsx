import { todoStateType } from "@/store/todoSlice"
import { useSelector } from "react-redux"
import TodoItem from "./TodoItem"

const Todos: React.FC = () => {
    const state = useSelector((state: todoStateType) => state.todosState)
    return (
        <ul className="list-none">
            {state.todos.map((todo, index) => (
                <li key={todo.id}>
                    <TodoItem todo={todo} index={index} editIndex={state.editIndex} />
                </li>
            ))}
        </ul>
    )
}

export default Todos