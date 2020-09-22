import {ADD_TODO, GET_TODOS, REMOVE_TODO, REMOVED_TODO, SET_TODO, SET_TODOS} from "./types";
import Vue from "vue"
import {url} from "../../main";




export const actions = {
    [ADD_TODO]: async ({commit}, todo) => {
        try {

            const {body: {name}} = await Vue.http.post(url+".json", todo)
            console.log(name);
            const todoItem = {...todo, id: name};
            commit(SET_TODO, todoItem);
        } catch (e) {
            console.log(e);
        }
    },
    [GET_TODOS]: async ({commit}) => {
        try {
            const todos = []
            const {body} = await Vue.http.get(url+".json");
            for(let item in body) {
                todos.push({...body[item], id: item})
            }
            commit(SET_TODOS, todos)
        } catch (e) {
            console.log(e)
        }
    },
    [REMOVE_TODO]: async ({commit}, id) => {
        try {
            await Vue.http.delete(url + `/${id}.json`);
            commit(REMOVED_TODO, id)
        } catch (e) {
            console.log(e)
        }
    }
}