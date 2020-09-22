import {REMOVED_TODO, SET_TODO, SET_TODOS} from "./types";

export const mutations = {
    [SET_TODO]: (state, todo) => {
        state.todoList.push(todo)
    },
    [SET_TODOS]: (state, todos) => {
        state.todoList = todos
    },
    [REMOVED_TODO]: (state, id) => {
        state.todoList = state.todoList.filter(e=>e.id !== id)
    }
}