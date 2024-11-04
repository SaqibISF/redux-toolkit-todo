import { addTodo } from "@/store/todoSlice"
import { FormEvent, useId, useState } from "react"
import { useDispatch } from "react-redux"

const AddTodo: React.FC = () => {
    const dispatch = useDispatch()


    const [text, setText] = useState<string>("")

    const [isValidTodo, setIsValidTodo] = useState<boolean>(true)

    const addTodoHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (text.trim() === "") {
            setIsValidTodo(false)
            return
        }

        dispatch(addTodo(text.trim()))
        setText("")
        setIsValidTodo(true)
    }

    return (
        <form onSubmit={addTodoHandler}>
            <div className="flex gap-x-3">
                <input id={useId()}
                    type="text"
                    value={text}
                    onChange={e => {
                        setText(e.target.value)
                        setIsValidTodo(e.target.value.trim() !== "")
                    }}
                    placeholder="Enter a Todo..."
                    className="flex-grow bg-gray-800 rounded border border-gray-700 focus:border-indigo-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                <button type="submit"
                    className="flex-grow-0 text-white bg-indigo-500 border-0 px-3 focus:outline-none hover:bg-indigo-600 rounded ">
                    Add Todo
                </button>
            </div>
            {!isValidTodo && <span className="text-red-500 text-sm">Please enter a todo.</span>}
        </form>
    )
}

export default AddTodo