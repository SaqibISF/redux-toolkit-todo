import { DeleteIcon, PenIcon } from '@/icons'
import React, { FormEvent, useEffect, useId, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTodo, removeTodo, setEditIndex, todoType } from '@/store/todoSlice'

const TodoItem: React.FC<{ todo: todoType; index: number; editIndex: number }> = ({ todo, index, editIndex }) => {

    const [text, setText] = useState<string>(todo.text)

    const textRef = useRef<HTMLInputElement>(null)

    const isEditable = index === editIndex

    const dispatch = useDispatch()

    useEffect(() => {
        if (textRef.current && isEditable) {
            textRef.current.focus();
            textRef.current.setSelectionRange(text.length, text.length)
        }
    }, [isEditable, text]);

    useEffect(() => {
        if (!isEditable)
            setText(todo.text);
    }, [isEditable, todo.text]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(setEditIndex(-1))
        dispatch(updateTodo({ id: todo.id, text: text.trim() }))
    }

    return (
        <form onSubmit={handleSubmit}
            className="mt-4 flex gap-x-3 justify-between items-center bg-zinc-800 px-4 py-2 rounded">
            <input id={useId()}
                ref={textRef}
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Enter a Todo..."
                disabled={!isEditable}
                className={`flex-grow text-base leading-8 outline-none text-gray-100 duration-200 ease-in-out
                    ${isEditable ? "bg-gray-800 rounded border border-gray-700 focus:border-indigo-900 focus:ring-2 focus:ring-indigo-900 py-1 px-3 transition-colors"
                        : "bg-transparent border-none cursor-default"}`} />

            <button type="button"
                onClick={() => dispatch(setEditIndex(index))}
                className={`${isEditable ? "hidden" : ""} text-gray-100 bg-blue-600 border-0 py-2 px-4 focus:outline-none hover:bg-blue-500 rounded
                 disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50`}>
                <PenIcon className="w-4" />
            </button>

            <button type="button"
                onClick={() => dispatch(removeTodo(todo.id))}
                className={`${isEditable ? "hidden" : ""} text-gray-100 bg-red-600 border-0 py-2 px-4 focus:outline-none hover:bg-red-500 rounded`}>
                <DeleteIcon className="w-4" />
            </button>

            <button type="submit"
                disabled={todo.text === text.trim() || text.trim() === ""}
                className={`${!isEditable ? "hidden" : ""} text-gray-100 bg-blue-600 border-0 py-1 px-2 focus:outline-none hover:bg-blue-500 rounded
                 disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50`}>
                Update
            </button>

            <button type="button"
                onClick={() => dispatch(setEditIndex(-1))}
                className={`${!isEditable ? "hidden" : ""} text-gray-100 bg-red-600 border-0 py-1 px-2 focus:outline-none hover:bg-red-500 rounded`}>
                Cancel
            </button>

        </form>
    )
}

export default TodoItem