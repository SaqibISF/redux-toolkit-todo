import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export type todoType = {
    id: string, text: string
}

export type todoStateType = {
    todosState: {
        todos: todoType[];
        editIndex: number;
    }
}

const initialState: todoStateType = {
    todosState: {
        todos: [],
        editIndex: -1
    }
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todosState.todos.push(todo)
        },
        updateTodo: (state, action: PayloadAction<todoType>) => {
            // 1: Item Update By remove && replace in array by splice method using index
            const index = state.todosState.todos.findIndex(todo => todo.id === action.payload.id)
            // state.todosState.todos.splice(index, 1, action.payload)
            state.todosState.todos[index] = action.payload;

            // // 2: Item Update By find in array and update all key values
            // const todo = state.todosState.todos.find(todo => todo.id === action.payload.id)
            // if (todo) {
            //     for (const key in todo) {
            //         todo[key as keyof todoType] = action.payload[key as keyof todoType]
            //     }
            // }
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            // // 1: Item Removed By re-generate array by filter method
            // state.todosState.todos = state.todosState.todos.filter(todo => todo.id !== action.payload)

            // 2: Item Removed By remove from array by splice method using index
            const index = state.todosState.todos.findIndex(todo => todo.id === action.payload)
            state.todosState.todos.splice(index, 1)
        },
        setEditIndex(state, action: PayloadAction<number>) {
            state.todosState.editIndex = action.payload
        }
    }
})

export const { addTodo, updateTodo, removeTodo, setEditIndex } = todoSlice.actions

export default todoSlice.reducer