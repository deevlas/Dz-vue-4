import {TODOS} from "./types";


export const getters = {
    [TODOS]: state => {
        return state.todoList
    }
}